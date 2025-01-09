/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { IconButton, CircularProgress } from '@mui/material';
import UploadIcon from '../../assets/upload-.svg';
import CheckIcon from '../../assets/check-icon.svg';
import CloseIcon from '../../assets/close-icon.svg';
import danger from '../../assets/danger.png';
import Icon from '../Icon/Icon';
import {
  FileTypeMessageStyle,
  FileUploadIconButtonStyle,
  FileUploadIconLabelStyle,
  FileUploadIconContainerStyle,
  FileNameFormatStyle,
} from './FileUploadStyles';
import { typography, colors } from '../../constants/stylesConstants';

const FileUploadIcon = ({
  name,
  setFileUploaded,
  isMandatory,
  handleUploadedFile,
  fullWidth,
  fileTypeMessage,
  handleFileInputCheck,
  handleFileDelete,
  isFailed,
  uploadedFile,
  isUploading,
  maxSize,
  enableVideoUpload,
  videoMaxSize,
  fileTypeAndSizeMessage,
  fileUploadLabel,
  showCloseIcon,
}) => {
  const [fileUploadSelected, setFileUploadSelected] = useState(
    !_.isEmpty(uploadedFile)
  );
  const [file, setFile] = useState(uploadedFile);
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
      (enableVideoUpload && selectedFile?.type?.includes('video'))
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

  useEffect(() => {
    if (file) {
      handleUploadedFile(file);
    }
  }, [file]);

  return (
    <div data-testid="file-upload">
      <div>
        <span css={() => typography.body14600(colors.neutral300)}>
          {name}
          {isMandatory && <sup style={{ color: 'red' }}>*</sup>}
        </span>
      </div>

      <div>
        {file ? (
          <div
            data-testid="selected-file"
            className="flex items-center justify-start gap-2 file-upload-container"
            css={() => FileUploadIconContainerStyle(fullWidth)}
          >
            <div>
              {isFailed !== 2 && !isUploading && (
                <img
                  src={isFailed === 0 ? danger : CheckIcon}
                  alt="file-status"
                  loading="lazy"
                />
              )}
              {isUploading && <CircularProgress />}
            </div>
            <div css={FileNameFormatStyle}>{file.name}</div>
            {showCloseIcon && (
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
              className="flex gap-2 justify-flex-start items-center file-upload-button"
              css={() => FileUploadIconButtonStyle(fullWidth)}
              onClick={handleUploadClick}
            >
              <Icon icon={UploadIcon.src} />
              <div css={() => FileUploadIconLabelStyle()}>
                {fileUploadLabel}
              </div>
            </button>
            {maxSize && errorMessage && (
              <div css={FileTypeMessageStyle}>{errorMessage}</div>
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
    </div>
  );
};

FileUploadIcon.defaultProps = {
  isMandatory: false,
  fullWidth: false,
  fileTypeMessage: '',
  setFileUploaded: null,
  handleFileInputCheck: null,
  handleFileDelete: () => {},
  isFailed: 1,
  uploadedFile: null,
  isUploading: false,
  maxSize: '',
  enableVideoUpload: false,
  videoMaxSize: '',
  fileTypeAndSizeMessage: '',
  fileUploadLabel: 'Upload File',
  showCloseIcon: true,
};

FileUploadIcon.propTypes = {
  name: PropTypes.string.isRequired,
  setFileUploaded: PropTypes.func,
  isMandatory: PropTypes.bool,
  handleUploadedFile: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
  fileTypeMessage: PropTypes.string,
  handleFileInputCheck: PropTypes.func,
  handleFileDelete: PropTypes.func,
  isFailed: PropTypes.number,
  uploadedFile: PropTypes.object,
  isUploading: PropTypes.bool,
  maxSize: PropTypes.string,
  enableVideoUpload: PropTypes.bool,
  videoMaxSize: PropTypes.string,
  fileTypeAndSizeMessage: PropTypes.string,
  fileUploadLabel: PropTypes.string,
  showCloseIcon: PropTypes.bool,
};

export default FileUploadIcon;
