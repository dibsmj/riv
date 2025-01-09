"use client";
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
  DialogActions,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { styled } from "@mui/material/styles";
import { MuiTelInput } from "mui-tel-input";
import { useRouter } from "next/navigation";
import { COUNTRY_CODES_LIST } from "@/constants/countryCodes";
import { useDesignadvisoryFormMutation } from "@/redux/slices/apiSlice";
import FileUpload from "@/component/FileUpload/FileUpload";
import { deleteFileFromS3, uploadFileToS3 } from "../../utils/S3Service";
import { getFileName } from "../../utils/helpers";

const validationSchema = Yup.object().shape({
  businessName: Yup.string()
    .required("Please Enter The Name")
    .max(30, "Please enter a valid name with a maximum of 30 characters")
    .matches(/^(?!\s)(?!.*\s{2,}).*$/, "Please enter a valid business name"),
  contactPersonName: Yup.string()
    .notRequired()
    .max(30, "Please enter a name with a maximum of 30 characters")
    .matches(/^(?!\s)(?!.*\s{2,})[A-Za-z\s]*$/, "Please enter a valid name "),
  email: Yup.string()
    .required("Email is required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid  Email Id"),
  contactNumber: Yup.string().test(
    "phone",
    "Please enter a valid contact number",
    (value) => {
      if (!value) return false;
      const phoneWithoutCode = value.replace(/^\+\d+\s?/, "");
      return phoneWithoutCode.length >= 8 && phoneWithoutCode.length <= 15;
    }
  ),

  serviceRequirements: Yup.object()
    .test(
      "at-least-one-checked",
      "At least one service must be selected",
      (obj) => obj && (obj.all || Object.values(obj).some((value) => value))
    )
    .required("At least one service must be selected"),
  projectDescription: Yup.string()
    .max(300, "Descrption must be at most 300 characters long")
    .notRequired(),
});

const CustomButton = styled(Button)({
  backgroundColor: "#4A3587",
  color: "#FFFFFF",
  padding: "0.4rem 1.5rem",
  marginRight: "0.625rem",
  borderRadius: "0.5rem",
  fontFamily: "Chillax Semibold",
  border: "none",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#4A3587",
  },
});

const initialServiceRequirements = {
  all: false,
  trendForecasting: false,
  designDevelopment: false,
  conceptDevelopment: false,
  lookBook: false,
  productCustomization: false,
  bespokeDesignServices: false,
  brandBuilding: false,
  sustainabilityConsulting: false,
  sustainable: false,
  ecofriendly: false,
  certification: false,
};

const DesignAdvisoryForm = ({ closeModal }) => {
  const [DesignAdvisoryApi] = useDesignadvisoryFormMutation();
  const [serviceRequirements, setServiceRequirements] = useState(
    initialServiceRequirements
  );
  const router = useRouter();

  const {
    control,
    handleSubmit,
    register,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      serviceRequirements: initialServiceRequirements,
    },
  });

  // useEffect(() => {
  //   setValue("serviceRequirements", serviceRequirements);
  // }, [setValue, serviceRequirements]);
  const [countryName, setCountryName] = useState("");

  const watchedServiceRequirements = watch("serviceRequirements");

  useEffect(() => {
    setServiceRequirements(watchedServiceRequirements);
  }, [watchedServiceRequirements]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const updatedRequirements = { ...serviceRequirements };

    if (name === "all") {
      Object.keys(updatedRequirements).forEach((key) => {
        updatedRequirements[key] = checked;
      });
    } else if (name === "designDevelopment") {
      updatedRequirements.designDevelopment = checked;
      updatedRequirements.conceptDevelopment = checked;
      updatedRequirements.lookBook = checked;
    } else if (name === "productCustomization") {
      updatedRequirements.productCustomization = checked;
      updatedRequirements.bespokeDesignServices = checked;
      updatedRequirements.brandBuilding = checked;
    } else if (name === "sustainabilityConsulting") {
      updatedRequirements.sustainabilityConsulting = checked;
      updatedRequirements.sustainable = checked;
      updatedRequirements.ecofriendly = checked;
      updatedRequirements.certification = checked;
    } else {
      updatedRequirements[name] = checked;
    }

    updatedRequirements.designDevelopment =
      updatedRequirements.conceptDevelopment || updatedRequirements.lookBook;

    updatedRequirements.productCustomization =
      updatedRequirements.bespokeDesignServices ||
      updatedRequirements.brandBuilding;

    updatedRequirements.sustainabilityConsulting =
      updatedRequirements.sustainable ||
      updatedRequirements.ecofriendly ||
      updatedRequirements.certification;

    updatedRequirements.all = Object.values(updatedRequirements).every(
      (value) => value
    );

    setServiceRequirements(updatedRequirements);
    setValue("serviceRequirements", updatedRequirements, {
      shouldValidate: true,
    });
  };
  const handleFileUpload = async (file) => {
    try {
      const key = await uploadFileToS3(file, "Vas");
      setValue("attachment", key, { shouldValidate: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDocumentDelete = (fieldName) => {
    const path = getValues(fieldName)[0];
    deleteFileFromS3(path);
    setValue(fieldName, "", { shouldValidate: true });
  };

  const { attachment = "" } = getValues();

  const [getPhoneCode, setPhoneCode] = useState("+91");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ipResponse = await fetch("https://api64.ipify.org?format=json");
        const ipData = await ipResponse.json();
        const userIP = ipData.ip;
        const geoResponse = await fetch(
          `https://ipinfo.io/${userIP}/json?token=e9f7792a5b3386`
        );
        const geoData = await geoResponse.json();
        const country = COUNTRY_CODES_LIST.find(
          (c) => c.code === geoData.country
        );
        const initialDialCode = country?.dial_code || "+91";
        setValue("contactNumber", initialDialCode);
        setCountryName(country?.name || "");
        console.log(
          `Initial Country: ${country?.name}, Dial Code: ${initialDialCode}`
        );
      } catch (error) {
        console.error("Error fetching IP or geolocation info:", error);
      }
    };
    fetchData();
  }, [setValue]);

  const handleChange = (newValue) => {
    const dialCodeMatch = newValue.match(/^\+\d+/);
    if (dialCodeMatch) {
      const dialCode = dialCodeMatch[0];
      setValue("contactNumber", newValue, { shouldValidate: true });
      const country = COUNTRY_CODES_LIST.find((c) => c.dial_code === dialCode);
      setCountryName(country?.name || "");
      console.log(`Selected Country: ${country?.name}, Dial Code: ${dialCode}`);
    }
  };

  const onSubmit = (data) => {
    const { serviceRequirements } = data;

    const structuredServices = {
      all: [],
      trendForecasting: [],
      designDevelopment: [],
      productCustomization: [],
      sustainabilityConsulting: [],
    };

    if (serviceRequirements.designDevelopment) {
      structuredServices.designDevelopment.push("designDevelopment");
      if (serviceRequirements.conceptDevelopment) {
        structuredServices.designDevelopment.push("conceptDevelopment");
      }
      if (serviceRequirements.lookBook) {
        structuredServices.designDevelopment.push("lookBook");
      }
    }

    Object.keys(serviceRequirements).forEach((key) => {
      if (
        serviceRequirements[key] &&
        !structuredServices.designDevelopment.includes(key)
      ) {
        structuredServices[key] = [key];
      }
    });

    const payload = {
      companyName: data.businessName,
      contactPersonName: data.contactPersonName,
      email: data.email,
      cc: data.cc,
      phoneNumber: data.contactNumber,
      designAdvisoryServiceRequired: JSON.stringify(structuredServices),
      projectDetails: data.projectDescription,
      attachment: data.attachment || "",
      mjAdminId: null,
      statusId: 1,
      countryName,
    };

    // console.log(payload);
    try {
      DesignAdvisoryApi(payload);
      closeModal();
      router.push("/thank-you");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <DialogTitle sx={{ bgcolor: "#F8F8F8", marginLeft: "35px" }}>
        <Typography
          variant="h5"
          color="#4A3587"
          fontFamily="Chillax Semibold"
          gutterBottom
        >
          Design Advisory
        </Typography>
        <Typography
          variant="body1"
          color="#4A3587"
          fontFamily="Chillax Semibold"
          width="100%"
        >
          Please fill out the form to submit an enquiry
        </Typography>
        <IconButton
          aria-label="close"
          onClick={closeModal}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ bgcolor: "#F8F8F8", textAlign: "left" }}>
        <Box sx={{ padding: "0 2rem" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="businessName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={
                        <>
                          Business Name
                          <Typography component="span" color="red">
                            *
                          </Typography>
                        </>
                      }
                      fullWidth
                      error={!!errors.businessName}
                      helperText={errors.businessName?.message}
                      sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="contactPersonName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Contact Person Name"
                      fullWidth
                      error={!!errors.contactPersonName}
                      helperText={errors.contactPersonName?.message}
                      sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={
                        <>
                          Official Email ID
                          <Typography component="span" color="red">
                            *
                          </Typography>
                        </>
                      }
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="contactNumber"
                  control={control}
                  render={({ field }) => (
                    <MuiTelInput
                      {...field}
                      value={field.value}
                      onChange={(newValue) => {
                        handleChange(newValue);
                      }}
                      fullWidth
                      label={
                        <>
                          Contact Number
                          <Typography component="span" color="red">
                            *
                          </Typography>
                        </>
                      }
                      error={!!errors.contactNumber}
                      helperText={errors.contactNumber?.message}
                      sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Service Requirements
                </Typography>
                <Typography>
                  Please Select the Services You Are Interested In
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="all"
                          checked={serviceRequirements.all}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="All"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="trendForecasting"
                          checked={serviceRequirements.trendForecasting}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="Trend Forecasting"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="designDevelopment"
                          checked={serviceRequirements.designDevelopment}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="Design Development"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Box ml={4}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="conceptDevelopment"
                            checked={serviceRequirements.conceptDevelopment}
                            onChange={handleCheckboxChange}
                          />
                        }
                        label="Concept Development"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box ml={4}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="lookBook"
                            checked={serviceRequirements.lookBook}
                            onChange={handleCheckboxChange}
                          />
                        }
                        label="Look Book"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="productCustomization"
                          checked={serviceRequirements.productCustomization}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="Product Customization"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box ml={4}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="bespokeDesignServices"
                            checked={serviceRequirements.bespokeDesignServices}
                            onChange={handleCheckboxChange}
                          />
                        }
                        label="Bespoke Design Services"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="brandBuilding"
                            checked={serviceRequirements.brandBuilding}
                            onChange={handleCheckboxChange}
                          />
                        }
                        label="Brand Building"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="sustainabilityConsulting"
                          checked={serviceRequirements.sustainabilityConsulting}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="Sustainability Consulting"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box ml={4}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="sustainable"
                            checked={serviceRequirements.sustainable}
                            onChange={handleCheckboxChange}
                          />
                        }
                        label="Sustainable Material Search"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="ecofriendly"
                            checked={serviceRequirements.ecofriendly}
                            onChange={handleCheckboxChange}
                          />
                        }
                        label="Eco-friendly Production"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="certification"
                            checked={serviceRequirements.certification}
                            onChange={handleCheckboxChange}
                          />
                        }
                        label="Certifications and Compliance"
                      />
                    </Box>
                  </Grid>
                  {errors.serviceRequirements && (
                    <Typography color="error" variant="body2">
                      {errors.serviceRequirements.message}
                    </Typography>
                  )}
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="projectDescription"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Project Description (Please provide a brief description of your project and objective)"
                      fullWidth
                      multiline
                      rows={4}
                      error={!!errors.projectDescription}
                      helperText={errors.projectDescription?.message}
                      sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <FileUpload
                  name={
                    <span style={{ color: "black", marginRight: "20px" }}>
                      Do You Have Any Existing Designs or References?
                    </span>
                  }
                  handleUploadedFile={(file) =>
                    handleFileUpload(file, "attachment", "vasDocument")
                  }
                  isCheckbox={false}
                  uploadedFile={
                    attachment &&
                    attachment?.length && {
                      name: getFileName(attachment[0]),
                    }
                  }
                  maxSize={2147483648}
                  enableAllUpload
                  handleFileDelete={() => handleDocumentDelete("attachment")}
                />
              </Grid>
            </Grid>
            <DialogActions
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <CustomButton type="submit">Submit</CustomButton>
            </DialogActions>
          </form>
        </Box>
      </DialogContent>
    </>
  );
};

DesignAdvisoryForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default DesignAdvisoryForm;
