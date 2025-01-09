/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
import { CircularProgress } from '@mui/material';
import _ from 'lodash';
import PropTypes from 'prop-types';
import UploadIcon from '../../assets/upload-icon.svg';
import Icon from '../Icon/Icon';
import {
  FileTypeMessageStyle,
  InlineFileUploadStyle,
} from './FileUploadStyles';
import { typography, colors } from '../../constants/stylesConstants';

const InlineFileUpload = ({
  name,
  setFileUploaded,
  handleUploadedFile,
  fullWidth,
  handleFileInputCheck,
  uploadedFile,
  maxSize,
  enableVideoUpload,
  videoMaxSize,
  isUploading,
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

  useEffect(() => {
    if (file) {
      handleUploadedFile(file);
    }
  }, [file]);

  return (
    <div data-testid="inline-file-upload">
      {isUploading ? (
        <CircularProgress />
      ) : (
        <>
          <button
            type="button"
            data-testid="file-upload-button"
            className="flex gap-3 justify-center items-center file-upload-button"
            css={InlineFileUploadStyle}
            onClick={handleUploadClick}
          >
            <Icon icon={UploadIcon.src} className="w-6 h-6" />
            <div css={() => typography.body14700(colors.primaryBlueDark)}>
              Upload File
            </div>
          </button>
          {maxSize && errorMessage && (
            <div css={FileTypeMessageStyle}>{errorMessage}</div>
          )}

          <input
            type="file"
            ref={inputRef}
            onChange={handleFileChange}
            className="hidden"
            style={{ display: 'none' }}
            data-testid="inline-file-upload-input"
          />
        </>
      )}
    </div>
  );
};

InlineFileUpload.defaultProps = {
  fullWidth: false,
  setFileUploaded: null,
  handleFileInputCheck: null,
  uploadedFile: null,
  maxSize: '',
  enableVideoUpload: false,
  videoMaxSize: '',
  isUploading: false,
};

InlineFileUpload.propTypes = {
  name: PropTypes.string.isRequired,
  setFileUploaded: PropTypes.func,
  handleUploadedFile: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
  handleFileInputCheck: PropTypes.func,
  uploadedFile: PropTypes.object,
  maxSize: PropTypes.string,
  enableVideoUpload: PropTypes.bool,
  videoMaxSize: PropTypes.string,
  isUploading: PropTypes.bool,
};

export default InlineFileUpload;
