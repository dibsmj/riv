"use client";
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import {
  TextField,
  Select,
  MenuItem,
  Grid,
  Button,
  Typography,
  FormControl,
  InputLabel,
  DialogTitle,
  DialogContent,
  Box,
  DialogActions,
  IconButton,
  Checkbox,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { MuiTelInput } from "mui-tel-input";
import { COUNTRY_CODES_LIST } from "../../constants/countryCodes";
import { useQualityAssranceFormMutation } from "@/redux/slices/apiSlice";

// Validation schema
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
  productCategory: Yup.string().required("Product category is required"),
  serviceInterested: Yup.array()
    .min(1, "At least one service must be selected")
    .of(Yup.string())
    .required("Service interested in is required"),
  requirements: Yup.string()
    .max(300, "Requirements must be at most 300 characters long")
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

const QualityAssuranceForm = ({ closeModal }) => {
  const [QualityAssuranceApi] = useQualityAssranceFormMutation();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const router = useRouter();
  const [countryName, setCountryName] = useState("");

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

  const onSubmit = async (data) => {
    const interestedServices = Array.isArray(data.serviceInterested)
      ? data.serviceInterested.join(", ")
      : "";

    const {
      businessName,
      contactPersonName,
      email,
      contactNumber,
      productCategory,
      requirements,
    } = data;

    const payload = {
      companyName: businessName,
      name: contactPersonName,
      email,
      mobileNumber: contactNumber,
      companyIndustry: productCategory,
      interestedServices,
      requirements,
      countryName,
      mjAdminId: null,
      statusId: 1,
    };

    // console.log('Payload:', payload); // Add a console log to check the payload

    try {
      await QualityAssuranceApi(payload);
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
          fontFamily={"Chillax Semibold"}
          gutterBottom
        >
          Quality and Inspection Services
        </Typography>
        <Typography
          variant="body1"
          color="#4A3587"
          fontFamily={"Chillax Semibold"}
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
                      label={
                        <>
                          Contact Number
                          <Typography component="span" color="red">
                            *
                          </Typography>
                        </>
                      }
                      value={field.value}
                      onChange={(newValue) => {
                        handleChange(newValue);
                      }}
                      fullWidth
                      error={!!errors.contactNumber}
                      helperText={errors.contactNumber?.message}
                      sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="productCategory"
                  control={control}
                  render={({ field }) => (
                    <FormControl
                      fullWidth
                      error={!!errors.productCategory}
                      sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                    >
                      <InputLabel>
                        Which category of products do you want the service for
                        <span style={{ color: "red" }}>*</span>
                      </InputLabel>
                      <Select
                        {...field}
                        label=" Which category of products do you want the service for"
                      >
                        <MenuItem value="Textiles">Textiles</MenuItem>
                        <MenuItem value="Industrial Goods">
                          Industrial Goods
                        </MenuItem>
                      </Select>
                      {errors.productCategory && (
                        <Typography variant="body2" color="error">
                          {errors.productCategory.message}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="serviceInterested"
                  control={control}
                  render={({ field }) => {
                    const selectedValues = field.value || [];
                    return (
                      <FormControl
                        variant="outlined"
                        fullWidth
                        error={!!errors.serviceInterested}
                        sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                      >
                        <InputLabel>
                          Which of the following services are you interested in
                          <span style={{ color: "red" }}>*</span>
                        </InputLabel>
                        <Select
                          {...field}
                          label="Which of the following services are you interested in"
                          multiple
                          value={selectedValues}
                          renderValue={(selected) => selected.join(", ")}
                          MenuProps={{
                            PaperProps: {
                              style: {
                                maxHeight: 300,
                              },
                            },
                          }}
                        >
                          <MenuItem value="Factory Audit">
                            <Checkbox
                              checked={selectedValues.includes("Factory Audit")}
                            />
                            Factory Audit
                          </MenuItem>
                          <MenuItem value="Material Inspection">
                            <Checkbox
                              checked={selectedValues.includes(
                                "Material Inspection"
                              )}
                            />
                            Material Inspection
                          </MenuItem>
                          <MenuItem value="Certification">
                            <Checkbox
                              checked={selectedValues.includes("Certification")}
                            />
                            Certification
                          </MenuItem>
                        </Select>
                        {errors.serviceInterested && (
                          <Typography variant="body2" color="error">
                            {errors.serviceInterested.message}
                          </Typography>
                        )}
                      </FormControl>
                    );
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="requirements"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Do you want to mention any specific requirements?"
                      fullWidth
                      multiline
                      rows={4}
                      error={!!errors.requirements}
                      helperText={errors.requirements?.message}
                      sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                    />
                  )}
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

QualityAssuranceForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default QualityAssuranceForm;
