"use client";
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  TextField,
  Select,
  MenuItem,
  IconButton,
  Grid,
  Button,
  InputLabel,
  FormControl,
  Checkbox,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { MuiTelInput } from "mui-tel-input";
import {
  useCrossBorderFormMutation,
  useLazyGetAllIncotermsQuery,
} from "@/redux/slices/apiSlice";

import { COUNTRY_CODES_LIST } from "@/constants/countryCodes";

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

  productType: Yup.string()
    .required("Product name is required")
    .max(30, "Product name must be at most 30 characters long")
    .matches(
      /^(?!.*\s\s)[a-zA-Z0-9\s!@#$%^&*(),.?":{}|<>-]{1,30}$/,
      "Please enter valid products"
    ),

  hsn: Yup.string()
    .required("HSN is required")
    .matches(/^\d+$/, "Please enter the valid HSN code for the product")
    .min(4, "Please enter the valid HSN code for the product")
    .max(8, "Please enter the valid HSN code for the product"),

  // incoterm: Yup.string().required('Incoterm is required'),
  // invoiceValue: Yup.string()
  //   .test(
  //     'is-decimal',
  //     'Invoice Value must be a number',
  //     (value) => !value || /^\d+(\.\d{1,2})?$/.test(value)
  //   )
  //   .required('Invoice Value is required'),
  // currency: Yup.string().required('Currency is required'),
  incoterm: Yup.string().required("Incoterm is required"),
  invoiceValue: Yup.string().when("incoterm", {
    is: (val) => val === "DDP",
    then: () =>
      Yup.string()
        .required("Invoice Value is required")
        .matches(
          /^\d+(\.\d{1,2})?$/,
          "Invoice Value must be a number with up to two decimal places"
        ),
    otherwise: () => Yup.string(),
  }),
  currency: Yup.string().when("incoterm", {
    is: (val) => val === "DDP",
    then: () => Yup.string().required("Currency is required"),
    otherwise: () => Yup.string(),
  }),

  dimensionOfShipment: Yup.string()
    .notRequired()
    .max(50, "Dimension must be at most 50 characters long")
    .matches(
      /^([a-zA-Z0-9]+(\.[0-9]{1,2})?(\s*[a-zA-Z]+)?(\*[a-zA-Z0-9]+(\.[0-9]{1,2})?(\s*[a-zA-Z]+)?)*)?$/,
      "Enter proper Dimension"
    ),
  transport: Yup.array().of(Yup.string()),
  originCountry: Yup.string().required("Origin Country is required"),
  originAddress: Yup.string().required("Origin Address is required"),
  destinationCountry: Yup.string().required("Destination Country is required"),
  destinationAddress: Yup.string().required("Destination Addresss is required"),
  requirements: Yup.string()
    .max(300, "Requirements must be at most 300 characters long")
    .notRequired(),

  shipmentType: Yup.string(),
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
const CrossBorderForm = ({ closeModal }) => {
  const [crossBorderFormApi] = useCrossBorderFormMutation();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    trigger,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [getPhoneCode, setPhoneCode] = useState("+91");
  const [getOriginCountry, setOriginCountry] = useState("");
  const [getDestinationCountry, setDestinationCountry] = useState("");
  const [countryName, setCountryName] = useState("");
  const [selectedIncoterm, setSelectedIncoterm] = useState("");
  const [incotermOptions, setIncotermOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [
    getAllIncoterms,
    { data: incotermsData, error: incotermsError, isLoading: incotermsLoading },
  ] = useLazyGetAllIncotermsQuery();

  useEffect(() => {
    const fetchIncoterms = async () => {
      try {
        await getAllIncoterms().unwrap();
      } catch (err) {
        console.error("Error fetching incoterms:", err);
        setError(err.message || "An error occurred while fetching incoterms");
      }
    };

    fetchIncoterms();
  }, [getAllIncoterms]);

  useEffect(() => {
    if (incotermsData) {
      setIncotermOptions(incotermsData);
      setLoading(false);
    }
    if (incotermsError) {
      setError(
        incotermsError.message || "An error occurred while fetching incoterms"
      );
      setLoading(false);
    }
  }, [incotermsData, incotermsError]);
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

  const getChangeOriginCountry = (e) => {
    setOriginCountry(e.target.value);
  };
  const getChangeDestinationCountry = (e) => {
    setDestinationCountry(e.target.value);
  };
  const onSubmit = async (data) => {
    const modeOfTransport = Array.isArray(data.transport)
      ? data.transport.join(", ")
      : "";

    const {
      businessName,
      contactPersonName,
      email,
      contactNumber,
      productType,
      shipmentType,
      hsn,
      originCountry,
      destinationCountry,
      requirements,
      incoterm,
      invoiceValue,
      currency,
      originAddress,
      destinationAddress,
      dimensionOfShipment,
      mjAdminId,
      statusId,
    } = data;

    const payload = {
      companyName: businessName,
      userName: contactPersonName,
      email,
      mobile: contactNumber,
      productType,
      shipmentType,
      hsnCodeOfProduct: hsn,
      modeOfTransport,
      originAddress: originCountry,
      destinationAddress: destinationCountry,
      requirements,
      countryName,
      incoterm,
      ddpValue: invoiceValue,
      ddpCurrency: currency,
      originAddressDetails: originAddress,
      destinationAddressDetails: destinationAddress,
      shipmentDimension: dimensionOfShipment,
      mjAdminId: null,
      statusId: 1,
    };

    try {
      await crossBorderFormApi(payload);
      closeModal();
      router.push("/thank-you");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <DialogTitle sx={{ m: 0, p: 2, bgcolor: "#F8F8F8", marginLeft: "35px" }}>
        <Typography
          variant="h5"
          color="#4A3587"
          fontFamily={"Chillax Semibold"}
          gutterBottom
        >
          Cross-border Logistics Services
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
                <Typography variant="subtitle1" gutterBottom>
                  Please provide details of your shipment
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="productType"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={
                        <>
                          Product Name
                          <Typography component="span" color="red">
                            *
                          </Typography>
                        </>
                      }
                      fullWidth
                      error={!!errors.productType}
                      helperText={errors.productType?.message}
                      sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="hsn"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="HSN Code of the product (upto 8 digits)"
                      fullWidth
                      error={!!errors.hsn}
                      helperText={errors.hsn?.message}
                      sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="shipmentType"
                  control={control}
                  render={({ field }) => (
                    <FormControl
                      fullWidth
                      error={!!errors.shipmentType}
                      sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                    >
                      {" "}
                      <InputLabel>Type of Shipment</InputLabel>
                      <Select {...field} label="Type of Shipment">
                        <MenuItem value="LCL" key={"LCL"}>
                          Less Than Container Load (LCL)
                        </MenuItem>
                        <MenuItem value="FCL" key={"FCL"}>
                          Full Container Load (FCL)
                        </MenuItem>
                      </Select>
                      {errors.shipmentType && (
                        <Typography variant="body2" color="error">
                          {errors.shipmentType.message}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="transport"
                  control={control}
                  render={({ field }) => {
                    const selectedValues = field.value || [];

                    return (
                      <FormControl
                        variant="outlined"
                        fullWidth
                        error={!!errors.transport}
                        sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                      >
                        <InputLabel>Mode of transport</InputLabel>
                        <Select
                          {...field}
                          label="Mode of transport"
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
                          <MenuItem value="Air" key={"Air"}>
                            <Checkbox
                              checked={selectedValues.includes("Air")}
                            />
                            Air
                          </MenuItem>
                          <MenuItem value="Sea" key={"Sea"}>
                            <Checkbox
                              checked={selectedValues.includes("Sea")}
                            />
                            Sea
                          </MenuItem>
                          <MenuItem value="Road" key={"Road"}>
                            <Checkbox
                              checked={selectedValues.includes("Road")}
                            />
                            Road
                          </MenuItem>
                        </Select>
                        {errors.transport && (
                          <Typography variant="body2" color="error">
                            {errors.transport.message}
                          </Typography>
                        )}
                      </FormControl>
                    );
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="incoterm"
                  control={control}
                  render={({ field }) => (
                    <FormControl fullWidth error={!!errors.incoterm}>
                      <InputLabel>
                        Incoterm
                        <Typography component="span" color="red">
                          *
                        </Typography>
                      </InputLabel>
                      <Select
                        {...field}
                        label="Incoterm"
                        onChange={(e) => {
                          const selectedOption = incotermOptions.find(
                            (option) => option.name === e.target.value
                          );
                          field.onChange(selectedOption.name);
                          setSelectedIncoterm(selectedOption.name);
                        }}
                        disabled={incotermsLoading || !!error}
                        MenuProps={{
                          PaperProps: {
                            sx: {
                              maxHeight: 200,
                              overflowY: "auto",
                            },
                          },
                        }}
                      >
                        {incotermsLoading && (
                          <MenuItem disabled>Loading...</MenuItem>
                        )}
                        {error && <MenuItem disabled>{error}</MenuItem>}
                        {!incotermsLoading &&
                          !error &&
                          incotermOptions.map((option) => (
                            <MenuItem key={option.id} value={option.name}>
                              {option.name}
                            </MenuItem>
                          ))}
                      </Select>
                      {errors.incoterm && (
                        <Typography variant="body2" color="error">
                          {errors.incoterm.message}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
              </Grid>
              {selectedIncoterm === "DDP" && (
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", gap: 0 }}>
                    <Controller
                      name="invoiceValue"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Invoice Value"
                          fullWidth
                          error={!!errors.invoiceValue}
                          helperText={errors.invoiceValue?.message}
                        />
                      )}
                    />

                    <Controller
                      name="currency"
                      control={control}
                      render={({ field }) => (
                        <FormControl
                          sx={{ minWidth: "200px" }}
                          error={!!errors.currency}
                        >
                          <InputLabel>Currency</InputLabel>
                          <Select
                            {...field}
                            label="Currency"
                            displayEmpty
                            defaultValue=""
                          >
                            <MenuItem value="INR">INR</MenuItem>
                            <MenuItem value="USD">USD</MenuItem>
                          </Select>
                          {errors.currency && (
                            <Typography variant="body2" color="error">
                              {errors.currency.message}
                            </Typography>
                          )}
                        </FormControl>
                      )}
                    />
                  </Box>
                </Grid>
              )}

              <Grid item xs={12}>
                <Controller
                  name="dimensionOfShipment"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="   Dimension of shipment(Please mention unit of measurement)"
                      fullWidth
                      error={!!errors.dimensionOfShipment}
                      helperText={errors.dimensionOfShipment?.message}
                      sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="outlined"
                  error={!!errors.originCountry}
                  sx={{
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                    width: "100%",
                  }}
                >
                  <InputLabel id="origin-country-label">
                    Origin Country{" "}
                    <Typography component="span" color="red">
                      *
                    </Typography>
                  </InputLabel>
                  <Controller
                    name="originCountry"
                    control={control}
                    defaultValue={getOriginCountry}
                    render={({ field }) => (
                      <Select
                        {...field}
                        label="Origin Country"
                        labelId="origin-country-label"
                        onChange={(e) => {
                          field.onChange(e);
                          getChangeOriginCountry(e);
                        }}
                        MenuProps={{
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                          },
                          transformOrigin: {
                            vertical: "top",
                            horizontal: "left",
                          },
                          getContentAnchorEl: null,
                        }}
                      >
                        {COUNTRY_CODES_LIST.map((country) => (
                          <MenuItem key={country.id} value={country.name}>
                            {country.name}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                  {errors.originCountry && (
                    <Typography variant="body2" color="error">
                      {errors.originCountry.message}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="originAddress"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={
                        <>
                          Origin Address
                          <Typography component="span" color="red">
                            *
                          </Typography>
                        </>
                      }
                      fullWidth
                      error={!!errors.originAddress}
                      helperText={errors.originAddress?.message}
                      sx={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="outlined"
                  style={{
                    width: "100%",
                  }}
                >
                  <InputLabel id="category-label">
                    Destination Country{" "}
                    <Typography component="span" color="red">
                      *
                    </Typography>
                  </InputLabel>
                  <Select
                    label="Destination Country"
                    labelId="destination-country-label"
                    {...register("destinationCountry")}
                    onChange={(e) => {
                      getChangeDestinationCountry(e);
                      setValue("destinationCountry", e.target.value);
                      trigger("destinationCountry");
                    }}
                    value={getDestinationCountry}
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                      },
                      transformOrigin: {
                        vertical: "top",
                        horizontal: "left",
                      },
                      getContentAnchorEl: null,
                    }}
                  >
                    {COUNTRY_CODES_LIST.map((country) => (
                      <MenuItem key={country.id} value={country.name}>
                        {country.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {errors.destinationCountry && (
                  <Typography variant="body2" color="error">
                    {errors.destinationCountry.message}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="destinationAddress"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={
                        <>
                          Destination Address
                          <Typography component="span" color="red">
                            *
                          </Typography>
                        </>
                      }
                      fullWidth
                      error={!!errors.destinationAddress}
                      helperText={errors.destinationAddress?.message}
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
                      label="Do you want to mention any specific requirements, or mention any specific addresses?"
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

CrossBorderForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default CrossBorderForm;
