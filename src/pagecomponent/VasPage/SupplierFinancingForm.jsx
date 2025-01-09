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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { MuiTelInput } from "mui-tel-input";
import { COUNTRY_CODES_LIST } from "@/constants/countryCodes";
import { useSupplierFinancingFormMutation } from "@/redux/slices/apiSlice";

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
  productCategory: Yup.string(),
  financingRequiredFor: Yup.string().required(
    "Financing required for is required"
  ),
  typeOfFinancingRequired: Yup.string(),
  financingAmount: Yup.number()
    .typeError("Financing amount must be a number")
    .positive("Financing amount must be a positive number")
    .max(9999999999, "Financing amount must be at most 10 digits long")
    .integer("Financing amount must be an integer")
    .notRequired(),
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

const SupplierFinancingForm = ({ closeModal }) => {
  const [SupplierFormApi] = useSupplierFinancingFormMutation();
  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [getPhoneCode, setPhoneCode] = useState("+91");
  const [countryName, setCountryName] = useState("");
  const router = useRouter();

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
    // Construct the payload
    const payload = {
      companyName: data.businessName,
      name: data.contactPersonName,
      email: data.email,
      cc: data.cc,
      phoneNumber: data.contactNumber,
      productCategory: data.productCategory,
      financingFor: data.financingRequiredFor,
      typeOfFinancing: data.typeOfFinancingRequired,
      amountOfFinancing: data.financingAmount,
      requirements: data.requirements,
      mjAdminId: null,
      countryName,
      statusId: 1,
    };

    console.log(payload);
    try {
      SupplierFormApi(payload);
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
          Avail Financing
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
                        Which category of products do you manufacture?
                      </InputLabel>
                      <Select
                        {...field}
                        label=" Which category of products do you manufacture?"
                      >
                        <MenuItem value="Apparel">Apparel</MenuItem>
                        <MenuItem value="Industrial Goods">
                          Industrial Goods
                        </MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
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
              <Grid item xs={12} sm={6}>
                <Controller
                  name="financingRequiredFor"
                  control={control}
                  render={({ field }) => (
                    <FormControl
                      fullWidth
                      error={!!errors.financingRequiredFor}
                      sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                    >
                      <InputLabel>
                        Financing required for
                        <span style={{ color: "red" }}>*</span>
                      </InputLabel>

                      <Select {...field} label="Financing required for">
                        <MenuItem value="Domestic Shipment">
                          Domestic Shipment
                        </MenuItem>
                        <MenuItem value="Export Shipment">
                          Export Shipment
                        </MenuItem>
                      </Select>
                      {errors.financingRequiredFor && (
                        <Typography variant="body2" color="error">
                          {errors.financingRequiredFor.message}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="typeOfFinancingRequired"
                  control={control}
                  render={({ field }) => (
                    <FormControl
                      fullWidth
                      error={!!errors.typeOfFinancingRequired}
                      sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                    >
                      <InputLabel>Type of Financing required</InputLabel>
                      <Select {...field} label="Type of Financing required">
                        <MenuItem value="Pre Shipment">Pre Shipment</MenuItem>
                        <MenuItem value="Post Shipment">Post Shipment</MenuItem>
                      </Select>
                      {errors.typeOfFinancingRequired && (
                        <Typography variant="body2" color="error">
                          {errors.typeOfFinancingRequired.message}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="financingAmount"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Financing Amount Requested (INR)"
                      fullWidth
                      error={!!errors.financingAmount}
                      helperText={errors.financingAmount?.message}
                      sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="requirements"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Do you want to mention any specific requirements or provide your IEC number?"
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

SupplierFinancingForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default SupplierFinancingForm;
