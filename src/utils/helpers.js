import moment from 'moment';
import { isEqual, uniq } from 'lodash';
import { COUNTRY_CODES_LIST } from '../constants/countryCodes';
import { regex } from '../constants/regex';
import { MILESTONE_STATUS } from '../constants/tnaConstants';
import VerifiedCheck from '../assets/verified success.png';
import VerificationPendingCheck from '../assets/verification pending.png';
import VerificationOnHold from '../assets/verification on hold.png';
import VerificationRejected from '../assets/verification rejected.png';
import VerifiedCheckFilled from '../assets/verified success filled.png';
import VerificationPendingCheckFilled from '../assets/verification pending fillled gray.png';
import VerificationOnHoldFilled from '../assets/verification onhold filled.png';
import VerificationRejectedFilled from '../assets/verification rejected filled.png';
import VerificationExpiredFilled from '../assets/verification expired filled.png';

export const removeValuesFromArray = (valuesArray, value) => {
  const valueIndex = valuesArray.findIndex((entry) => entry === value);
  if (valueIndex === -1) {
    return;
  }
  valuesArray.splice(valueIndex, 1);
};

export const getCountryDialCode = (countryCode = 'IN') => {
  const countryDialCode = COUNTRY_CODES_LIST.find(
    (country) => country.code === countryCode
  )?.dial_code;
  return countryDialCode;
};

export const getCountryCode = (countryName = 'INDIA') => {
  const countryCode = COUNTRY_CODES_LIST.find(
    (country) => country.name.toLowerCase() === countryName.toLowerCase()
  )?.code;
  return countryCode;
};

export const getUpdatedData = (oldData, newData) => {
  const data = uniq([...Object.keys(oldData), ...Object.keys(newData)]);
  const keys = [];

  data.forEach((key) => {
    if (!isEqual(oldData[key], newData[key])) {
      keys.push({ [key]: newData[key] });
    }
  });

  return keys;
};

export const findUniqueElements = (array1, array2) => {
  const newArray = [...array1, ...array2];

  const result = [];

  newArray?.forEach((item) => {
    if (
      (array1?.includes(item) && !array2?.includes(item)) ||
      (array2?.includes(item) && !array1?.includes(item))
    ) {
      result.push(item);
    }
  });

  return result;
};

export const removeSpecialCharacters = (str) => {
  // Regular expression to match special characters
  const regexExpression = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/g;

  // Replace special characters with an empty string
  const result = str.replace(regexExpression, '');

  return result;
};

export const removeEmptyStrings = (arr) => {
  const filteredArr = arr.filter(
    (item) => item !== '' && item !== null && item !== 'null'
  );
  return filteredArr;
};

const findNumberRegex = /\{(\d{1,2})\}/g;

// Add variable in string defined in translation
export const formatTranslations = (templateString, ...replacements) =>
  templateString.replace(findNumberRegex, (match, value) =>
    String(replacements[value] ?? '')
  );

export const isEmpty = (obj) => {
  if (typeof obj === 'boolean') {
    return false;
  }
  if (obj === undefined || obj == null) {
    return true;
  }
  if (typeof obj === 'number') {
    return false;
  }
  if (obj === '') {
    return true;
  }
  if (obj.constructor === Set) {
    return obj.size === 0;
  }
  return Object.entries(obj).length === 0;
};

export const toSentenceCase = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// eslint-disable-next-line no-undef
export const getSellerId = () => sessionStorage.getItem('sellerId');

export const setLoaderForApiPendingState = (apiState) => apiState === 'pending';

export const getFileName = (fileName) => {
  if (!fileName) {
    return '';
  }
  const partialName = fileName.substring(fileName.lastIndexOf('/') + 1);
  const isNewFormat = partialName.match(regex.s3FileName);
  if (isNewFormat) {
    return isNewFormat[1];
  }
  return partialName;
};

export const calculateDuration = (startDate, endDate) => {
  const startDateTime = new Date(startDate);
  const endDateTime = new Date(endDate);
  const duration = endDateTime - startDateTime;

  return Math.ceil(duration / (1000 * 60 * 60 * 24));
};

export function camelCaseToWords(str) {
  const words = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return words.toLowerCase().trim();
}

export const getMileStonesCompletionPercentage = (milestonesList) => {
  const totalMileStonesCount = milestonesList?.length;
  const completedMileStonesCount = milestonesList?.filter(
    (item) => item?.status === MILESTONE_STATUS.APPROVED
  )?.length;

  if (
    typeof completedMileStonesCount !== 'number' ||
    typeof totalMileStonesCount !== 'number' ||
    totalMileStonesCount === 0
  ) {
    return '';
  }

  const completionPercentage =
    (completedMileStonesCount / totalMileStonesCount) * 100;

  return completionPercentage.toFixed(0);
};

export const getDurationFromToday = (date) => {
  const today = moment();

  if (today.isAfter(date)) {
    return 0;
  }

  const duration = moment.duration(moment(date).diff(today));

  const durationInDays = duration.asDays();

  return Math.ceil(durationInDays);
};

export const getDiffInDays = (date) => {
  const today = moment().startOf('day');

  const duration = moment.duration(today.diff(moment(date)));

  const durationInDays = duration.asDays();

  return Math.abs(Math.ceil(durationInDays));
};

export const removeAlphabets = (numberString) => {
  // Use a regular expression to match any alphabet character (A-Za-z)
  const regexExpression = /[A-Za-z]/g;

  return numberString?.toString()?.replace(regexExpression, '');
};
export const convertToTitleCase = (inputString) =>
  inputString
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

export const totalWithCommssion = (total, commission) =>
  total + total * (commission / 100);

export const objectsHaveDifference = (obj1, obj2) => {
  // Get the keys from both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if the number of keys is the same
  if (keys1.length !== keys2.length) {
    return true; // Objects have a different number of keys
  }

  // Check if the values for each key are the same
  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return true; // Values for at least one key are different
    }
  }

  // If no differences are found, return false
  return false;
};

export const getImageByStatus = (status, filled = true) => {
  let statusImgSrc = filled
    ? VerificationPendingCheckFilled
    : VerificationPendingCheck;

  switch (status) {
    case 'APPROVED': {
      statusImgSrc = filled ? VerifiedCheckFilled : VerifiedCheck;
      break;
    }
    case 'EXPIRED': {
      statusImgSrc = filled
        ? VerificationExpiredFilled
        : VerificationExpiredFilled;

      break;
    }
    case 'REJECTED': {
      statusImgSrc = filled ? VerificationRejectedFilled : VerificationRejected;
      break;
    }
    case 'ON_HOLD': {
      statusImgSrc = filled ? VerificationOnHoldFilled : VerificationOnHold;
      break;
    }
    default:
      break;
  }
  return statusImgSrc;
};

export const isKeyUniqueForKey = (key, arr) => {
  const encounteredValues = new Set();

  // eslint-disable-next-line no-restricted-syntax
  for (const obj of arr) {
    const value = obj[key];

    if (encounteredValues.has(value)) {
      return false; // Key does not have unique values
    }

    encounteredValues.add(value);
  }

  return true; // Key has unique values for all objects
};

export const checkSellerLoggedIn = (user) =>
  user?.user_role?.toLocaleUpperCase() === 'SELLER_USER' ||
  user?.user_role?.toLocaleUpperCase() === 'SELLER_ADMIN';

export const checkBuyerLoggedIn = (user) =>
  user?.user_role?.toLocaleUpperCase() === 'BUYER_USER' ||
  user?.user_role?.toLocaleUpperCase() === 'BUYER_ADMIN';
