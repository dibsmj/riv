import { css } from '@emotion/react';

const FileUploadCheckboxStyle = () => css`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #343839;
  /* align-self: flex-start; */
`;

const FileUploadContainerStyle = (fullWidth) => css`
  ${fullWidth ? 'width: 100%;' : 'width: 296px;'}
  // height: 50px;
  padding: 10px;
  border: 1px dashed #d3d3d3;
  /* border: 1px dashed gray; */
  border-radius: 4px;
  background-color: #ffffff;
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .file-upload-container {
    max-width: 100%;
    width: unset;
    height: unset;
  }
`;

const FileUploadIconContainerStyle = (fullWidth) => css`
  ${fullWidth ? 'width: 100%;' : 'width: 296px;'}
  border: none;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .file-upload-container {
    max-width: 100%;
    width: unset;
    height: unset;
  }
`;

const FileUploadButtonStyle = (fullWidth) => css`
  ${fullWidth ? 'width: 100%;' : 'width: 296px;'}
  height: 50px;
  padding: 10px;
  border: 1px dashed #d3d3d3;
  /* border: 1px dashed gray; */
  border-radius: 4px;
  background-color: #ffffff;
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-right: 10px;
  }
`;

const FileUploadIconButtonStyle = (fullWidth) => css`
  ${fullWidth ? 'width: 100%;' : 'width: 296px;'}
  border: none;
  background-color: #ffffff;
  display: flex;
  align-items: center;
`;
const FileUploadLabelStyle = () => css`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: #031016;
`;
const FileUploadIconLabelStyle = () => css`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 17px;
  color: #255ba1;
`;

const FileTypeMessageStyle = () => css`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  color: #575959;
  margin-top: 12px;
`;

const FileNameFormatStyle = () => css`
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  width: 80%;
`;

const InlineFileUploadStyle = css`
  background: none;
  border: none;
  outline: none;
`;

export {
  FileUploadCheckboxStyle,
  FileUploadContainerStyle,
  FileUploadButtonStyle,
  FileUploadLabelStyle,
  FileTypeMessageStyle,
  FileNameFormatStyle,
  FileUploadIconButtonStyle,
  FileUploadIconLabelStyle,
  FileUploadIconContainerStyle,
  InlineFileUploadStyle,
};
