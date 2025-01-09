"use client";
/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
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
  DialogActions,
  IconButton,
  Box,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { MuiTelInput } from "mui-tel-input";

import { COUNTRY_CODES_LIST } from "@/constants/countryCodes";
import {
  useExportAdvisoryFormMutation,
  useLazyGetAllServicesQuery,
} from "@/redux/slices/apiSlice";

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
  serviceTypes: Yup.array().min(1, "Select at least one service type"),
  // otherServiceType: Yup.string().when('serviceType', {
  //   is: 'other',
  //   then: Yup.string().required('Please specify the other service type'),
  // }),
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

const ExportAdvisoryForm = ({ closeModal }) => {
  const [ExportAdvisoryApi] = useExportAdvisoryFormMutation();
  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
    setError,
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      serviceTypes: [],
    },
  });

  const [serviceTypes, setServiceTypes] = useState([]);
  const [dropdown, { data, isLoading, error }] = useLazyGetAllServicesQuery();
  const [countryName, setCountryName] = useState("");
  const router = useRouter();

  const serviceType = watch("serviceType");

  useEffect(() => {
    const fetchServiceOptions = async () => {
      try {
        await dropdown();
      } catch (error) {
        console.error("Error fetching service options:", error);
      }
    };

    fetchServiceOptions();
  }, [dropdown]);

  useEffect(() => {
    if (data) {
      const mappedServiceTypes = [
        ...data.map((service) => ({
          value: service.name,
          label: service.name,
        })),
        { value: "other", label: "Other" },
      ];
      setServiceTypes(mappedServiceTypes);
    }
    if (error) {
      console.error("Error fetching service options:", error);
    }
  }, [data, error]);

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
    if (data.serviceTypes.includes("other") && !data.otherServiceType) {
      setError("otherServiceType", {
        type: "manual",
        message: "Please mention the other service type",
      });
      return;
    }

    const serviceTypesString = data.serviceTypes
      .filter((id) => id !== "other")
      .join(",");

    const payload = {
      companyName: data.businessName,
      name: data.contactPersonName,
      email: data.email,
      cc: data.cc,
      mobileNumber: data.contactNumber,
      exportAdvisoryServiceType: serviceTypesString,
      requirements: data.requirements,
      countryName,
      other: data.serviceTypes.includes("other") ? data.otherServiceType : null,
      mjAdminId: null,
      statusId: 1,
    };

    // console.log(payload);
    try {
      ExportAdvisoryApi(payload);
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
          Export Advisory Services
        </Typography>
        <Typography
          variant="body1"
          color="#4A3587"
          fontFamily="Chillax Semibold"
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
                  name="serviceTypes"
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <FormControl
                      fullWidth
                      error={!!errors.serviceTypes}
                      sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                    >
                      <InputLabel>
                        Which type of service are you looking for
                        <span style={{ color: "red" }}>*</span>
                      </InputLabel>
                      <Select
                        {...field}
                        multiple
                        renderValue={(selected) =>
                          selected
                            .map((id) => {
                              const service = serviceTypes.find(
                                (s) => s.value === id
                              );
                              return service ? service.label : "";
                            })
                            .filter((label) => label !== "")
                            .join(", ")
                        }
                        label="Which type of service are you looking for"
                      >
                        {isLoading ? (
                          <MenuItem value="" disabled>
                            Loading...
                          </MenuItem>
                        ) : (
                          serviceTypes.map((service) => (
                            <MenuItem key={service.value} value={service.value}>
                              <Checkbox
                                checked={
                                  field.value.indexOf(service.value) > -1
                                }
                              />
                              <ListItemText primary={service.label} />
                            </MenuItem>
                          ))
                        )}
                      </Select>
                      {errors.serviceTypes && (
                        <Typography variant="body2" color="error">
                          {errors.serviceTypes.message}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
              </Grid>
              {watch("serviceTypes")?.includes("other") && (
                <Grid item xs={12}>
                  <Controller
                    name="otherServiceType"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label={
                          <>
                            Please specify the other service type
                            <Typography component="span" color="red">
                              *
                            </Typography>
                          </>
                        }
                        fullWidth
                        error={!!errors.otherServiceType}
                        sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                      />
                    )}
                  />
                </Grid>
              )}

              {errors.otherServiceType && (
                <Grid item xs={12}>
                  <Typography variant="body2" sx={{ color: "red" }}>
                    {errors.otherServiceType.message}
                  </Typography>
                </Grid>
              )}

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

ExportAdvisoryForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ExportAdvisoryForm;
