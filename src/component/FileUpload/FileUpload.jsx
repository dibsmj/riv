/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { IconButton, CircularProgress } from '@mui/material';
import UploadIcon from '../../assets/upload-icon.svg';
import CheckIcon from '../../assets/check-icon.svg';
import CloseIcon from '../../assets/close-icon.svg';
import danger from '../../assets/danger.png';
import Icon from '../Icon/Icon';
import {
  FileTypeMessageStyle,
  FileUploadButtonStyle,
  FileUploadContainerStyle,
  FileUploadLabelStyle,
  FileNameFormatStyle,
} from './FileUploadStyles';
import { typography, colors } from '../../constants/stylesConstants';
import ControlledCheckBox from '../CheckBox/ControlledCheckBox';

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
  uploadedFile,
  isUploading,
  maxSize,
  enableVideoUpload,
  enableAllUpload,
  videoMaxSize,
  fileTypeAndSizeMessage,
}) => {
  const [fileUploadSelected, setFileUploadSelected] = useState(
    !_.isEmpty(uploadedFile)
  );
  const [file, setFile] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const inputRef = useRef(null);

  const handleUploadClick = () => {
    setErrorMessage('');
    inputRef.current?.click();
  };

  const handleFileChange = (e) => {
    setErrorMessage('');
    if (!e.target.files) {
      return;
    }

    const selectedFile = e.target.files[0];
    if (
      selectedFile?.type === 'application/pdf' ||
      (enableVideoUpload && selectedFile?.type?.includes('video')) ||
      enableAllUpload
    ) {
      if (
        enableVideoUpload &&
        selectedFile?.type?.includes('video') &&
        videoMaxSize &&
        selectedFile?.size > videoMaxSize
      ) {
        setErrorMessage('File size exceeds the limit 500MB');
        return;
      }
      if (maxSize && !selectedFile?.type?.includes('video')) {
        if (e.target.files[0]?.size > maxSize) {
          setErrorMessage('File size exceeds the limit 10MB');
          return;
        }
      }
      setFile(e.target.files[0]);
      if (setFileUploaded) {
        setFileUploaded(true);
      }

      // handleUploadedFile(e.target.files[0]);
    } else {
      setErrorMessage(
        `Only PDF ${enableVideoUpload ? `and video` : ''} allowed`
      );
      return;
    }
  };

  const deleteFile = () => {
    setErrorMessage('');
    setFile('');
    inputRef.current.value = '';

    if (setFileUploaded) {
      setFileUploaded(false);
    }

    if (handleFileDelete) {
      handleFileDelete();
    }
  };

  const handleFileUploadSelect = () => {
    setErrorMessage('');
    setFileUploadSelected(!fileUploadSelected);
    if (handleFileInputCheck) {
      handleFileInputCheck(!fileUploadSelected);
    }
  };

  useEffect(() => {
    if (file) {
      handleUploadedFile(file);
    }
  }, [file]);

  return (
    <div data-testid="file-upload">
      {isCheckbox ? (
        <ControlledCheckBox
          checked={fileUploadSelected}
          onChange={handleFileUploadSelect}
        >
          <span>
            {name}
            {isMandatory && <sup style={{ color: 'red' }}>*</sup>}
          </span>
        </ControlledCheckBox>
      ) : (
        <div>
          <span css={() => typography.body14600(colors.neutral300)}>
            {name}
            {isMandatory && <sup style={{ color: 'red' }}>*</sup>}
          </span>
        </div>
      )}

      {(fileUploadSelected || !isCheckbox) && (
        <>
          <div>
            {file ? (
              <div
                data-testid="selected-file"
                className="flex items-center justify-between file-upload-container"
                css={() => FileUploadContainerStyle(fullWidth)}
              >
                <div>
                  {isFailed !== 2 && !isUploading && (
                    <img
                      src={isFailed === 0 ? danger.src : CheckIcon.src}
                      alt="file-status"
                      loading="lazy"
                    />
                  )}
                  {isUploading && <CircularProgress />}
                </div>
                <div css={FileNameFormatStyle}>{file.name}</div>
                {isUploadEnabled && (
                  <IconButton data-testid="delete-file" onClick={deleteFile}>
                    <Icon icon={CloseIcon.src} />
                  </IconButton>
                )}
              </div>
            ) : (
              <>
                <button
                  type="button"
                  data-testid="file-upload-button"
                  className="flex gap-3 justify-center items-center file-upload-button enquiryclass"
                  css={() => FileUploadButtonStyle(fullWidth)}
                  onClick={handleUploadClick}
                >
                  <Icon icon={UploadIcon.src} />
                  <div css={() => FileUploadLabelStyle()}>Upload File</div>
                </button>
                {maxSize && errorMessage && (
                  <div css={FileTypeMessageStyle} style={{ color: '#c02926' }}>
                    {errorMessage}
                  </div>
                )}
                {fileTypeMessage ? (
                  <div css={FileTypeMessageStyle}>
                    {fileTypeMessage} {maxSize ? `upto 10MB` : ''}
                  </div>
                ) : null}
                {fileTypeAndSizeMessage ? (
                  <div css={FileTypeMessageStyle}>{fileTypeAndSizeMessage}</div>
                ) : null}
              </>
            )}
          </div>
          <input
            type="file"
            ref={inputRef}
            onChange={handleFileChange}
            className="hidden"
            style={{ display: 'none' }}
            data-testid="file-upload-input"
          />
        </>
      )}
    </div>
  );
};

FileUpload.defaultProps = {
  isMandatory: false,
  isCheckbox: true,
  fullWidth: false,
  fileTypeMessage: '',
  setFileUploaded: null,
  handleFileInputCheck: null,
  handleFileDelete: () => {},
  isFailed: 1,
  isUploadEnabled: true,
  uploadedFile: null,
  isUploading: false,
  maxSize: '',
  enableVideoUpload: false,
  enableAllUpload: false,
  videoMaxSize: '',
  fileTypeAndSizeMessage: '',
};

FileUpload.propTypes = {
  name: PropTypes.string.isRequired,
  setFileUploaded: PropTypes.func,
  isMandatory: PropTypes.bool,
  handleUploadedFile: PropTypes.func.isRequired,
  isCheckbox: PropTypes.bool,
  fullWidth: PropTypes.bool,
  fileTypeMessage: PropTypes.string,
  handleFileInputCheck: PropTypes.func,
  handleFileDelete: PropTypes.func,
  isFailed: PropTypes.number,
  isUploadEnabled: PropTypes.bool,
  uploadedFile: PropTypes.any,
  isUploading: PropTypes.bool,
  maxSize: PropTypes.string,
  enableVideoUpload: PropTypes.bool,
  enableAllUpload: PropTypes.bool,
  videoMaxSize: PropTypes.string,
  fileTypeAndSizeMessage: PropTypes.string,
};

export default FileUpload;
