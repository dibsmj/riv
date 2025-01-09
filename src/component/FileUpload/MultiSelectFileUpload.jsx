/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { IconButton, CircularProgress } from "@mui/material";
import CheckIcon from "../../assets/check-icon.svg";
import CloseIcon from "../../assets/close-icon.svg";
import danger from "../../assets/danger.png";
import Icon from "../Icon/Icon";
import {
  FileTypeMessageStyle,
  FileUploadButtonStyle,
  FileUploadContainerStyle,
  FileUploadLabelStyle,
  FileNameFormatStyle,
} from "./FileUploadStyles";
import { typography, colors } from "../../constants/stylesConstants";
import ControlledCheckBox from "../CheckBox/ControlledCheckBox";

const FileUpload = ({
  name,
  setFileUploaded,
  isMandatory,
  handleUploadedFile,
  isCheckbox,
  fullWidth,
  fileTypeMessage,
  handleFileInputCheck,
  handleFileDelete,
  isFailed,
  isUploadEnabled,
  uploadedFiles,
  maxSize,
  enableVideoUpload,
  enableAllUpload,
  videoMaxSize,
  fileTypeAndSizeMessage,
  isUploading,
}) => {
  const [fileUploadSelected, setFileUploadSelected] = useState(
    !_.isEmpty(uploadedFiles)
  );
  const [files, setFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [uploadingFileIndex, setUploadingFileIndex] = useState(null);
  const inputRef = useRef(null);

  const handleUploadClick = () => {
    setErrorMessage("");
    inputRef.current?.click();
  };

  const handleFileChange = (e) => {
    setErrorMessage("");
    if (!e.target.files) {
      return;
    }

    const selectedFiles = Array.from(e.target.files);
    const newFiles = [];
    let error = false;

    selectedFiles.forEach((selectedFile) => {
      if (
        selectedFile?.type === "application/pdf" ||
        (enableVideoUpload && selectedFile?.type?.includes("video")) ||
        enableAllUpload
      ) {
        if (
          enableVideoUpload &&
          selectedFile?.type?.includes("video") &&
          videoMaxSize &&
          selectedFile?.size > videoMaxSize
        ) {
          setErrorMessage("File size exceeds the limit 500MB");
          error = true;
          return;
        }
        if (maxSize && !selectedFile?.type?.includes("video")) {
          if (selectedFile?.size > maxSize) {
            setErrorMessage("File size exceeds the limit 10MB");
            error = true;
            return;
          }
        }
        newFiles.push(selectedFile);
      } else {
        setErrorMessage(
          `Only PDF ${enableVideoUpload ? `and video` : ""} allowed`
        );
        error = true;
        return;
      }
    });

    if (!error) {
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      if (setFileUploaded) {
        setFileUploaded(true);
      }
    }
  };

  const deleteFile = (fileToDelete) => {
    setErrorMessage("");
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToDelete));

    if (setFileUploaded) {
      setFileUploaded(files.length > 1);
    }

    if (handleFileDelete) {
      handleFileDelete(fileToDelete);
    }
  };

  const handleFileUploadSelect = () => {
    setErrorMessage("");
    setFileUploadSelected(!fileUploadSelected);
    if (handleFileInputCheck) {
      handleFileInputCheck(!fileUploadSelected);
    }
  };

  useEffect(() => {
    if (files.length > 0) {
      const latestFile = files[files.length - 1];
      setUploadingFileIndex(files.length - 1);
      // Simulate upload delay
      setTimeout(() => {
        handleUploadedFile(latestFile);
        setUploadingFileIndex(null);
      }, 2000); // Simulated upload time
    }
  }, [files]);
  
  return (
    <div data-testid="file-upload">
      {isCheckbox ? (
        <ControlledCheckBox
          checked={fileUploadSelected}
          onChange={handleFileUploadSelect}
        >
          <span>
            {name}
            {isMandatory && <sup style={{ color: "red" }}>*</sup>}
          </span>
        </ControlledCheckBox>
      ) : (
        <div>
          <span css={() => typography.body14600(colors.neutral300)}>
            {name}
            {isMandatory && <sup style={{ color: "red" }}>*</sup>}
          </span>
        </div>
      )}

      {(fileUploadSelected || !isCheckbox) && (
        <>
          {files.length > 0 && (
            <button
              type="button"
              data-testid="add-more-files-button"
              className="flex justify-center items-center bg-[#fff] text-[#0E9888] px-6 py-2 mt-4"
              style={{
                border: "2px solid #0E9888",
                borderRadius: "50px",
              }}
              onClick={handleUploadClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#0E9888"
                className="mr-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15a.5.5 0 0 1-.5-.5V2.707L3.354 6.854a.5.5 0 1 1-.708-.708l5-5a.5.5 0 0 1 .708 0l5 5a.5.5 0 1 1-.708.708L8.5 2.707V14.5a.5.5 0 0 1-.5.5z"
                />
              </svg>
              Upload More Files
            </button>
          )}

          <div>
            {files.length > 0 ? (
              <div data-testid="selected-file" className="flex flex-col gap-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    data-testid="selected-file"
                    className="flex items-center justify-between file-upload-container"
                    css={() => FileUploadContainerStyle(fullWidth)}
                  >
                    <div>
                      {(isUploading === null || isUploading) &&
                      index === files.length - 1 ? (
                        <CircularProgress />
                      ) : (
                        <img
                          src={isFailed === 0 ? danger.src : CheckIcon.src}
                          alt="file-status"
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div css={FileNameFormatStyle}>{file.name}</div>
                    {isUploadEnabled && (
                      <IconButton
                        data-testid="delete-file"
                        onClick={() => deleteFile(file)}
                      >
                        <Icon icon={CloseIcon.src} />
                      </IconButton>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <>
                <button
                  type="button"
                  data-testid="file-upload-button"
                  className="flex justify-center items-center bg-[#fff] text-[#0E9888] px-6 py-2 mt-4"
                  style={{
                    border: "2px solid #0E9888",
                    borderRadius: "50px",
                  }}
                  onClick={handleUploadClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#0E9888"
                    className="mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15a.5.5 0 0 1-.5-.5V2.707L3.354 6.854a.5.5 0 1 1-.708-.708l5-5a.5.5 0 0 1 .708 0l5 5a.5.5 0 1 1-.708.708L8.5 2.707V14.5a.5.5 0 0 1-.5.5z"
                    />
                  </svg>
                  Upload
                </button>

                {maxSize && errorMessage && (
                  <div css={FileTypeMessageStyle} style={{ color: "#c02926" }}>
                    {errorMessage}
                  </div>
                )}
                {fileTypeMessage ? (
                  <div css={FileTypeMessageStyle}>
                    {fileTypeMessage} {maxSize ? `upto 10MB` : ""}
                  </div>
                ) : null}
                {fileTypeAndSizeMessage ? (
                  <div css={FileTypeMessageStyle}>{fileTypeAndSizeMessage}</div>
                ) : null}
              </>
            )}
          </div>

          <input
            hidden
            ref={inputRef}
            data-testid="upload-input"
            accept=".pdf,video/*"
            type="file"
            onChange={handleFileChange}
          />
        </>
      )}
    </div>
  );
};

FileUpload.propTypes = {
  name: PropTypes.string,
  setFileUploaded: PropTypes.func,
  isMandatory: PropTypes.bool,
  handleUploadedFile: PropTypes.func,
  isCheckbox: PropTypes.bool,
  fullWidth: PropTypes.bool,
  fileTypeMessage: PropTypes.string,
  handleFileInputCheck: PropTypes.func,
  handleFileDelete: PropTypes.func,
  isFailed: PropTypes.number,
  isUploadEnabled: PropTypes.bool,
  uploadedFiles: PropTypes.array,
  maxSize: PropTypes.number,
  enableVideoUpload: PropTypes.bool,
  enableAllUpload: PropTypes.bool,
  videoMaxSize: PropTypes.number,
  fileTypeAndSizeMessage: PropTypes.string,
  isUploading: PropTypes.bool,
};

FileUpload.defaultProps = {
  name: "",
  setFileUploaded: () => {},
  isMandatory: false,
  handleUploadedFile: () => {},
  isCheckbox: false,
  fullWidth: false,
  fileTypeMessage: "",
  handleFileInputCheck: () => {},
  handleFileDelete: () => {},
  isFailed: null,
  isUploadEnabled: true,
  uploadedFiles: [],
  maxSize: null,
  enableVideoUpload: false,
  enableAllUpload: false,
  videoMaxSize: null,
  fileTypeAndSizeMessage: "",
  isUploading: false,
};

export default FileUpload;
