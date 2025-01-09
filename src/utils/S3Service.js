// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
// import { store } from "../App";
import { API_BASE_URL, API_ENDPOINTS } from "../config/APIEndpoints";

const store = "";
const REGION = process.env.NEXT_PUBLIC_APP_REGION;

export const getPreSignedUrl = (
  userId,
  fileName,
  isDownload = false,
  isDeleted = false
) => {
  const uploadedUserId = fileName?.split("_")?.[0];
  let url = `${API_BASE_URL}${API_ENDPOINTS.READ_WRITE_DOCUMENT_FROM_S3}/${REGION}/${uploadedUserId}/${fileName}/`;
  if (uploadedUserId.length === 0) {
    url = `${API_BASE_URL}${API_ENDPOINTS.READ_WRITE_DOCUMENT_FROM_S3}/${REGION}/undefined/${fileName}/`;
  }
  return axios({
    method: "GET",
    url,
    params: {
      isDownload,
      isDeleted,
    },
  })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      return "";
    });
};

export const uploadFileToS3 = async (file, source) => {
  // const state = store.getState();
  // const userDetails = state.global.user;
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
  // document root folder to s3 bucket: year/country_code/user_id/
  // File name: user_id_timestamp_filename
  if (source === "Enquiry" || source === "Vas") {
    const fileName = `${source}_${Date.now()}_${file.name}`;
    const presignedUrl = await getPreSignedUrl(source, fileName, false);
    if (presignedUrl) {
      await axios
        .put(presignedUrl, file)
        .then((res) => res)
        .catch((err) => console.log(err));
    }
    return fileName;
  }
  const fileName = `1_${Date.now()}_${file.name}`;
  const presignedUrl = await getPreSignedUrl(
    userDetails.user_id,
    fileName,
    false
  );
  if (presignedUrl) {
    await axios
      .put(presignedUrl, file)
      .then((res) => res)
      .catch((err) => console.log(err));
  }
  return fileName;
};

export const getSignedUrl = async (key) => {
  const state = store.getState();
  const userDetails = state.global.user;
  let fileName = key;
  if (key.includes(`${userDetails.user_id}/`)) {
    fileName = key.split(`${userDetails.user_id}/`)[1];
  } else if (key.includes(`//`)) {
    fileName = key.split(`//`)[1];
  }
  const url = await getPreSignedUrl(userDetails.user_id, fileName, true);
  const newURL = await axios({
    method: "GET",
    url,
  })
    .then((res) => url)
    .catch((err) => {
      console.log(err);
      const newString = url.replace(`${userDetails.user_id}_`, "_");
      return newString.replace(`${userDetails.user_id}`, "undefined");
    });
  return newURL;
};

export const deleteFileFromS3 = async (key) => {
  const state = store.getState();
  const userDetails = state.global.user;
  const presignedUrl = await getPreSignedUrl(
    userDetails.user_id,
    key,
    false,
    true
  );
  if (presignedUrl) {
    return axios
      .delete(presignedUrl)
      .then((res) => res)
      .catch((err) => console.log(err));
  }
  return "";
};

export default uploadFileToS3;
