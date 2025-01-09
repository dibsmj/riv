export const regex = {
  pinCode: /^[a-zA-Z0-9-\s]{0,15}$/,
  email:
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  contactNumber: /^[0-9]{5,12}$/,
  dunsNumber: /^\d{9}$/,
  name: /^[a-z A-Z]+$/,
  s3FileName: /[0-9]*_[0-9]*_(.*)/,
};
