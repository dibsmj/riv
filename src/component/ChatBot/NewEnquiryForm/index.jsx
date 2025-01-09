import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { useRouter, usePathname } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import MultiSelectFileUpload from "@/component/FileUpload/MultiSelectFileUpload";
import { COUNTRY_CODES_LIST } from "@/constants/countryCodes";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import {
  TextField,
  Button,
  Box,
  Grid,
  InputAdornment,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
// import { MuiTelInput } from "mui-tel-input";
import { styled } from "@mui/system";
import { deleteFileFromS3, uploadFileToS3 } from "@/utils/S3Service";

import {
  useCommonOverlayEnquiryMutation,
  useSendAutoEmailMutation,
  useLazyGetAllIncotermsQuery,
} from "@/redux/slices/apiSlice";

// Validation Schema
const validationSchema = yup.object({
  companyName: yup
    .string()
    .required(" Business Name is required")
    .max(30, "Please enter a valid name with a maximum of 30 characters")
    .matches(/^(?!\s)(?!.*\s{2,}).*$/, "Please enter a valid business name"),
  userName: yup
    .string()
    .required(" Name is required")
    .max(30, "Please enter a name with a maximum of 30 characters")
    .matches(/^(?!\s)(?!.*\s{2,})[A-Za-z\s]*$/, "Please enter a valid name "),
  email: yup
    .string()
    .required("Email is required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid  Email Id"),
  phone: yup
    .string()
    .required("Phone Number is required")
    .test("phone", "Please enter a valid contact number", (value) => {
      if (!value) return false;
      const phoneWithoutCode = value.replace(/^\+\d+\s?/, "");
      return phoneWithoutCode.length >= 8 && phoneWithoutCode.length <= 15;
    }),
  country: yup.string(),
  selectedCategory: yup.string().required("Category is required"),
  subcategory: yup.string().required("Subcategory is required"),
  productDescription: yup
    .string()
    .max(100, "Product description cannot exceed 100 characters")
    .required("Product description is required"),
  quantity: yup
    .string()
    .matches(/^\d+$/, "Quantity must be a numeric value")
    .required("Quantity is required"),
  deliveryTime: yup
    .date()
    .min(new Date(), "Delivery date cannot be in the past")
    .test("valid-year", "Year must be valid", (value) => {
      if (!value) return true;
      const year = value.getFullYear();
      return year >= 2000 && year <= 2099;
    }),
  incoterm: yup.string().notRequired("Incoterm is required"),
  productType: yup.string(),
});

// Styled Components for Stepper
const StyledStepConnector = styled(StepConnector)(({ theme }) => ({
  "& .MuiStepConnector-line": {
    borderColor: "#eaeaf0",
    borderTopWidth: 2,
  },
}));

const StyledStep = styled(Step)(({ theme }) => ({
  "& .MuiStepLabel-root .Mui-completed": {
    color: "#4a3587",
    fontSize: "1.25rem", // Adjust size as needed
    fontWeight: "bold",
  },
  "& .MuiStepLabel-root .Mui-active": {
    color: "#4a3587",
    fontSize: "1.25rem", // Adjust size as needed
    fontWeight: "bold",
  },

  "& .MuiStepLabel-root .Mui-disabled .MuiStepIcon-root": {
    color: "#eaeaf0",
    fontSize: "1.25rem",
  },
}));

const MuiTelInput = dynamic(() =>
  import("mui-tel-input").then((mod) => mod.MuiTelInput)
);

const EnquiryForm = ({ open }) => {
  const [commonOverlayEnquiry] = useCommonOverlayEnquiryMutation();
  const [sendAutoEmail] = useSendAutoEmailMutation();
  const pathname = usePathname();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formId, setFormId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [getPadding, setPadding] = useState("12px");
  const router = useRouter();

  const {
    handleSubmit,
    watch,
    control,
    trigger,
    formState: { errors },
    getValues,
    setValue,
    reset,
    register,
    clearErrors,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const formData = watch();
  useEffect(() => {
    if (pathname.startsWith("/fashion-and-textiles")) {
      setSelectedCategory("Fashion & Home Textiles");
    } else if (pathname.startsWith("/industrial-goods")) {
      setSelectedCategory("Industrial Goods");
    } else {
      setSelectedCategory(""); // Or setSelectedCategory(null);
    }
  }, [pathname]);
  useEffect(() => {
    if (selectedCategory) {
      setValue("selectedCategory", selectedCategory, { shouldValidate: true });
    }
  }, [selectedCategory, setValue]);

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open]);

  const steps = ["Contact Details", "Requirement Details"];
  const queryParams = useSearchParams();

  const [incotermOptions, setIncotermOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFileUploading, setIsFileUploading] = useState(null);
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileUpload = async (file) => {
    setIsSubmitting(true);
    setIsFileUploading(true);
    try {
      const key = await uploadFileToS3(file, "Enquiry");
      if (key) {
        const newData = formData;
        if (newData.attachment) {
          newData.attachment.push(key);
        } else {
          newData.attachment = [key];
        }
        setValue("formData", newData);
        setIsSubmitting(false);
        setIsFileUploading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
      setIsFileUploading(false);
    }
  };

  const handleDocumentDelete = () => {
    const path = attachment[0];
    deleteFileFromS3(path);
    setValue("attachment", "", { shouldValidate: true });
  };

  const [
    getAllIncoterms,
    { data: incotermsData, error: incotermsError, isLoading: incotermsLoading },
  ] = useLazyGetAllIncotermsQuery();

  useEffect(() => {
    const fetchIncoterms = async () => {
      try {
        await getAllIncoterms().unwrap();
      } catch (err) {
        setError(err.message || "An error occurred while fetching incoterms");
        setLoading(false);
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
  const handleNext = async () => {
    if (isSubmitting) return; // Prevent duplicate clicks

    setIsSubmitting(true);

    const isStepValid = await trigger(
      activeStep === 0
        ? ["companyName", "userName", "email", "phone", "selectedCategory"]
        : [
            "productDescription",
            "quantity",
            "deliveryTime",
            "incoterm",
            "subcategory",
          ]
    );

    if (isStepValid) {
      if (!formId) {
        const payload = {
          businessName: formData?.companyName,
          name: formData?.userName,
          emailAddress: formData?.email,
          country: getCountry,
          contactNumber: formData?.phone,
          category: selectedCategory,
        };

        try {
          const response = await commonOverlayEnquiry(payload);
          if (response?.data?.id) {
            setFormId(response.data.id);
          }
        } catch (error) {
          console.error("Error during API call", error);
        }
      }

      setActiveStep((prevStep) => prevStep + 1);
    }

    setTimeout(() => {
      setIsSubmitting(false); // Re-enable buttons
    }, 1000);
  };

  const onSubmit = async (event) => {
    if (isSubmitting) return; // Prevent duplicate clicks

    setIsSubmitting(true);

    const searchType = queryParams.size > 0 ? "inorganic" : "organic";
    const payload = {
      id: formId,
      businessName: formData.companyName,
      name: formData.userName,
      emailAddress: formData.email,
      contactNumber: formData.phone,
      category: selectedCategory,
      subCategory: formData.subcategory,
      description: formData.productDescription,
      country: getCountry,
      quantity: formData.quantity,
      deliveryDays: formData.deliveryTime,
      incoTerms: formData.incoterm,
      attachment: formData.attachment,
      measurableUnit: selectedUnit,
      productType: formData.productType,
      search_type: searchType,
      utm_source: queryParams.get("utm_source") || "",
      utm_medium: queryParams.get("utm_medium") || "",
      utm_campaign: queryParams.get("utm_campaign") || "",
      utm_Id: queryParams.get("utm_id") || "",
      utm_term: queryParams.get("utm_term") || "",
      utm_content: queryParams.get("utm_content") || "",
      mode: window.location.href.includes("uat") ? "uat" : "prod",
    };

    const { error } = await commonOverlayEnquiry(payload);
    if (!error) {
      await sendAutoEmail(payload);
      router.push("/thank-you");
    } else {
      setError("Looks like something is wrong!");
    }

    setIsSubmitting(false); // Re-enable buttons
  };

  const renderError = (field) => {
    if (showErrors) {
      return errors[field]?.message || "";
    }
    return "";
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const { attachment = "" } = getValues();
  // Define labels based on the selected category
  const labels = {
    "Industrial Goods": {
      productDescription: "Product Description",
      productType: "Product Type",
      quantity: "Order Quantity",
      deliveryTime: "Expected Delivery Date",
      upload: "Upload Technical Drawings/ Documents",
      prodTypePlaceholder: "Enter the product type",
      desc_placeholder:
        "Please provide additional details such as materials , material grade, etc .",
      units: ["units", "kg", "pound", "tons"],
    },
    "Fashion & Home Textiles": {
      productDescription: "Product Description",
      productType: "Product Type",
      quantity: "Order Quantity",
      deliveryTime: "Expected Delivery Date",
      upload: "Upload Techpack",
      desc_placeholder:
        "Please provide additional details such as fabric , sizes, etc ",
      prodTypePlaceholder: "Enter the product type",
      units: ["units"],
    },
  };
  const [selectedUnit, setSelectedUnit] = useState(
    labels[selectedCategory]?.units[0] || ""
  );

  const [getCountry, setCountry] = useState("");

  const [getPhoneCode, setPhoneCode] = React.useState("");
  const handleChange = (newValue, info) => {
    setPhoneCode(newValue);
    setValue("phone", newValue, { shouldValidate: true });
  };
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
        setPhoneCode(country?.dial_code || "+91");
        const countryResponse = await fetch(
          `https://restcountries.com/v3.1/alpha/${geoData.country}`
        );
        const countryData = await countryResponse.json();
        setCountry(countryData[0]?.name?.common || "");
      } catch (error) {
        console.error("Error fetching IP or geolocation info:", error);
      }
    };
    fetchData();
  }, []);

  const getChangeCountry = (e) => {
    setCountry(e.target.value);
    const country = COUNTRY_CODES_LIST.find((c) => c.name === e.target.value);
    const test = {
      countryCallingCode: country?.dial_code,
      countryCode: country?.code,
      nationalNumber: "",
      numberType: null,
      numberValue: country?.dial_code,
      reason: "country",
    };
    handleChange(country?.dial_code, test);
  };

  const dropdownOptions = {
    "Industrial Goods": {
      subcategory: [
        "Casting",
        "Forging",
        "Machining",
        "Extrusion",
        "Fabrication",
        "Injection Molding",
      ],
    },
    "Fashion & Home Textiles": {
      subcategory: [
        "Men's Apparel",
        "Women's Apparel",
        "Sleep & Innerwear",
        "Leather",
        "Bags & Accessories",
        "Home Textiles",
        "Workwear & Uniforms",
        "Footwear",
        "Sustainabilty",
      ],
    },
  };
  const currentLabels = labels[selectedCategory] || {};

  useEffect(() => {
    if (
      !pathname.includes("/industrial-goods") &&
      !pathname.includes("/fashion-and-textiles")
    ) {
      setPadding("0px");
    } else {
      setPadding("12px");
    }
  }, [pathname]);
  const Today = new Date().toISOString().split("T")[0];

  return (
    <main>
      <Box
        sx={{
          paddingTop: "40px",
          paddingBottom: "40px",
          borderRadius: 4,
          bgcolor: "white",
          marginBottom: "10px",
          marginTop: "-48px",
        }}
      >
        {/* Custom Stepper with Styled Components */}
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          connector={<StyledStepConnector />}
        >
          {steps.map((label, index) => (
            <StyledStep key={label}>
              <StepLabel>{label}</StepLabel>
            </StyledStep>
          ))}
        </Stepper>

        {/* Form Fields */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {activeStep === 0 && (
            <Box>
              <p
                style={{ color: "#888", marginBottom: "20px" }}
                className="text-start text-[16px]"
              >
                Please fill your information so we can get in touch with you.
              </p>
              <Grid container spacing={2}>
                <Grid
                  item
                  sm={12}
                  md={12}
                  xs={12}
                  style={{ paddingTop: "0px" }}
                >
                  {/* Company Name Field */}
                  <InputLabel
                    htmlFor="userName"
                    className="text-[#170F49] text-left mt-3 font-bold"
                  >
                    Business Name
                    <span
                      style={{
                        color: "red",
                        marginLeft: "5px",
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginLeft: "2px",
                      }}
                    >
                      *
                    </span>
                  </InputLabel>
                  <Controller
                    name="companyName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="companyName"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={!!errors.companyName}
                        placeholder="Enter company name"
                        helperText={
                          errors.companyName ? errors.companyName.message : ""
                        }
                        onChange={(e) => {
                          field.onChange(e);
                          clearErrors("companyName");
                        }}
                        InputProps={{
                          style: {
                            borderRadius: 50,
                            borderColor: "#f0f0f0",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                          },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#dcdcdc",
                            },
                          },
                        }}
                      />
                    )}
                  />
                </Grid>
                {/* Your Name Field */}
                <Grid
                  item
                  sm={12}
                  xs={12}
                  md={6}
                  style={{ paddingTop: getPadding }}
                >
                  <InputLabel
                    htmlFor="userName"
                    className="text-[#170F49] text-left mt-3 font-bold"
                  >
                    Full Name
                    <span
                      style={{
                        color: "red",
                        marginLeft: "5px",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      *
                    </span>
                  </InputLabel>
                  <Controller
                    name="userName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="userName"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder="Enter Full name"
                        error={!!errors.userName}
                        helperText={
                          errors.userName ? errors.userName.message : ""
                        }
                        onChange={(e) => {
                          field.onChange(e);
                          clearErrors("userName");
                        }}
                        InputProps={{
                          style: {
                            borderRadius: 50,
                            borderColor: "#f0f0f0",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                          },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#dcdcdc",
                            },
                          },
                        }}
                      />
                    )}
                  />
                </Grid>

                {/* Email Field */}
                <Grid
                  item
                  sm={12}
                  xs={12}
                  md={6}
                  style={{ paddingTop: getPadding }}
                >
                  <InputLabel
                    htmlFor="email"
                    className="text-[#170F49] text-left mt-3 font-bold"
                  >
                    Official Email ID
                    <span
                      style={{
                        color: "red",
                        marginLeft: "5px",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      *
                    </span>
                  </InputLabel>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="email"
                        variant="outlined"
                        fullWidth
                        placeholder="Enter email"
                        margin="normal"
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ""}
                        onChange={(e) => {
                          field.onChange(e);
                          setValue("email", e.target.value, {
                            shouldValidate: true,
                          });
                        }}
                        InputProps={{
                          style: {
                            borderRadius: 50,
                            borderColor: "#f0f0f0",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                          },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#dcdcdc",
                            },
                          },
                        }}
                      />
                    )}
                  />
                </Grid>

                {/* Country Field */}
                <Grid
                  item
                  sm={12}
                  xs={12}
                  md={6}
                  style={{ paddingTop: getPadding }}
                >
                  <InputLabel
                    htmlFor="country"
                    className="text-[#170F49] text-left mt-3 font-bold"
                  >
                    Country
                    <span
                      style={{
                        color: "red",
                        marginLeft: "5px",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      *
                    </span>
                  </InputLabel>
                  <Controller
                    name="country"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <FormControl
                        variant="outlined"
                        style={{
                          marginBottom: "10px",
                          width: "100%",
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#dcdcdc",
                            },
                            "&:hover fieldset": {
                              borderColor: "#b0b0b0",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#a0a0a0",
                            },
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                          },
                        }}
                      >
                        <Select
                          {...field}
                          id="country"
                          required
                          value={getCountry}
                          onChange={(e) => getChangeCountry(e)}
                          error={!!errors.country}
                          className="text-[#170F49] rounded-full"
                          style={{
                            textAlign: "left",
                            paddingLeft: "15px",
                            borderRadius: 50,
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
                          <option value="" disabled>
                            Select the Country
                          </option>
                          {COUNTRY_CODES_LIST.map((country) => (
                            <MenuItem key={country.name} value={country.name}>
                              {country.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  />
                  {errors && errors?.country?.message && (
                    <div className="w-full text-red-600 mt-1 text-sm">
                      {errors.country.message}
                    </div>
                  )}
                </Grid>

                {/* Phone Number Field */}
                <Grid
                  item
                  sm={6}
                  xs={12}
                  md={6}
                  style={{ paddingTop: getPadding }}
                >
                  <InputLabel className="text-[#170F49] text-left mt-3 font-bold">
                    Phone Number{" "}
                    <span
                      style={{
                        color: "red",
                        marginLeft: "5px",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      *
                    </span>
                  </InputLabel>
                  <MuiTelInput
                    {...register("phone")}
                    value={getPhoneCode}
                    onChange={(value, info) => handleChange(value, info)}
                    required
                    error={!!errors.phone}
                    sx={{
                      width: "100%",
                      marginTop: "10px",
                      borderRadius: "50px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "50px",
                        "& fieldset": {
                          borderColor: !!errors.phone ? "red" : "#dcdcdc",
                        },
                      },
                    }}
                    InputProps={{
                      style: { borderRadius: 50 },
                    }}
                  />
                  {errors && errors.phone && (
                    <div
                      className="w-full mt-1 text-xs text-left"
                      style={{ color: "#d32f2f" }}
                    >
                      {errors.phone.message}
                    </div>
                  )}
                </Grid>

                {!pathname.includes("/industrial-goods") &&
                  !pathname.includes("/fashion-and-textiles") && (
                    <Grid
                      item
                      sm={6}
                      xs={12}
                      md={12}
                      style={{ paddingTop: getPadding }}
                    >
                      <InputLabel
                        htmlFor="selectedCategory"
                        className="text-[#170F49] text-left mt-3 font-bold"
                      >
                        Please select the category intrested in
                        <span
                          style={{
                            color: "red",
                            marginLeft: "5px",
                            fontSize: "18px",
                            fontWeight: "bold",
                          }}
                        >
                          *
                        </span>
                      </InputLabel>
                    </Grid>
                  )}

                {/* Grid for Industrial Goods */}
                {!pathname.includes("/industrial-goods") &&
                  !pathname.includes("/fashion-and-textiles") && (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      style={{ paddingTop: getPadding }}
                    >
                      <Controller
                        name="selectedCategory"
                        control={control}
                        render={({ field }) => (
                          <>
                            <Button
                              variant="outlined"
                              onClick={() => {
                                handleCategorySelect("Industrial Goods");

                                field.onChange("Industrial Goods"); // Update the form's selectedCategory field
                                setValue(
                                  "selectedCategory",
                                  "Industrial Goods",
                                  {
                                    shouldValidate: true,
                                  }
                                );
                              }}
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                padding: {
                                  xs: "8px 15px", // Smaller padding for mobile
                                  sm: "10px 20px",
                                  md: "18px 14px", // Larger padding for larger screens
                                },
                                gap: 2,
                                border:
                                  field.value === "Industrial Goods"
                                    ? "2px solid #170F49"
                                    : "1px solid #eaeaf0",
                                bgcolor: "#eaeaf0",
                                borderRadius: 3,
                                width: "100%", // Full width for mobile
                              }}
                            >
                              <Typography
                                sx={{
                                  fontWeight: 600,
                                  color: "#170F49",
                                  textTransform: "none",
                                  fontSize: {
                                    xs: "13px", // Smaller font size for mobile
                                    sm: "15px",
                                    md: "16px", // Standard size for larger screens
                                  },
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                Industrial Goods
                              </Typography>
                            </Button>
                          </>
                        )}
                      />
                    </Grid>
                  )}

                {/* Grid for Fashion & Home Textiles */}
                {!pathname.includes("/industrial-goods") &&
                  !pathname.includes("/fashion-and-textiles") && (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      style={{ paddingTop: getPadding }}
                    >
                      <Controller
                        name="selectedCategory"
                        control={control}
                        render={({ field }) => (
                          <>
                            <Button
                              variant="outlined"
                              onClick={() => {
                                handleCategorySelect("Fashion & Home Textiles");

                                field.onChange("Fashion & Home Textiles"); // Update the form's selectedCategory field
                                setValue(
                                  "selectedCategory",
                                  "Fashion & Home Textiles",
                                  {
                                    shouldValidate: true,
                                  }
                                ); // Ensure validation runs
                              }}
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                padding: {
                                  xs: "8px 15px",
                                  sm: "10px 20px",
                                  md: "18px 14px",
                                },
                                gap: 2,
                                border:
                                  field.value === "Fashion & Home Textiles"
                                    ? "2px solid #170F49"
                                    : "1px solid #eaeaf0",
                                bgcolor: "#eaeaf0",
                                borderRadius: 3,
                                width: "100%",
                              }}
                            >
                              <Typography
                                variant="body1"
                                sx={{
                                  fontWeight: 600,
                                  color: "#170F49",
                                  textTransform: "none",
                                  fontSize: {
                                    xs: "13px",
                                    sm: "15px",
                                    md: "16px",
                                  },
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                Fashion & Home Textiles
                              </Typography>
                            </Button>
                          </>
                        )}
                      />
                    </Grid>
                  )}

                {/* Error Message Grid */}

                <Grid item xs={12}>
                  {errors.selectedCategory && (
                    <Typography
                      color="error"
                      variant="body2"
                      sx={{
                        marginTop: "-16px",
                      }}
                      className="text-left"
                    >
                      {errors.selectedCategory.message}
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </Box>
          )}

          {activeStep === 1 && (
            <Box>
              <Grid container spacing={2} className="mt-8">
                <Grid item xs={12} sm={6} style={{ paddingTop: "0px" }}>
                  {/* External Label with Tailwind Styles */}
                  <InputLabel
                    htmlFor="subcategory"
                    className="text-[#170F49] text-left mt-3 font-bold"
                  >
                    Sub Category{" "}
                    <span
                      style={{
                        color: "red",
                        marginLeft: "5px",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      *
                    </span>
                  </InputLabel>

                  <Controller
                    name="subcategory"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="subcategory"
                        select
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        SelectProps={{
                          native: true,
                        }}
                        error={!!errors.subcategory}
                        helperText={
                          errors.subcategory ? errors.subcategory.message : ""
                        }
                        InputProps={{
                          style: {
                            borderRadius: 50,
                            borderColor: "#f0f0f0",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                          },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#dcdcdc",
                            },
                            "&:hover fieldset": {
                              borderColor: "#b0b0b0",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#a0a0a0",
                            },
                          },
                        }}
                      >
                        {/* Conditionally Render Placeholder Option */}
                        {!field.value && (
                          <option value="" disabled>
                            Select the Product Category
                          </option>
                        )}
                        {/* Rendered Product Options */}
                        {dropdownOptions[selectedCategory]?.subcategory.map(
                          (option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          )
                        )}
                      </TextField>
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={6} style={{ paddingTop: "0px" }}>
                  <InputLabel
                    htmlFor="productType"
                    className="text-[#170F49] text-left mt-3 font-bold"
                  >
                    {labels[selectedCategory]?.productType || "Product Type"}{" "}
                  </InputLabel>

                  <Controller
                    name="productType"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="productType"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder={
                          labels[selectedCategory]?.prodTypePlaceholder ||
                          "Enter product type here"
                        } // Dynamic placeholder
                        error={!!errors.productType}
                        helperText={
                          errors.productType ? errors.productType.message : ""
                        }
                        InputProps={{
                          style: {
                            borderRadius: 50,
                            borderColor: "#f0f0f0", // Lighter border color
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Box shadow
                          },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#dcdcdc",
                            },
                            "&:hover fieldset": {
                              borderColor: "#b0b0b0",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#a0a0a0",
                            },
                          },
                        }}
                      />
                    )}
                  />
                </Grid>

                {/* Product Description Field */}
                <Grid item xs={12} style={{ paddingTop: "0px" }}>
                  <InputLabel
                    htmlFor="productDescription"
                    className="text-[#170F49] text-left mt-3 font-bold"
                  >
                    {labels[selectedCategory]?.productDescription ||
                      "Product Description"}{" "}
                    <span
                      style={{
                        color: "red",
                        marginLeft: "5px",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      *
                    </span>
                  </InputLabel>

                  <Controller
                    name="productDescription"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="productDescription"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder={
                          labels[selectedCategory]?.desc_placeholder ||
                          "Enter product description here"
                        } // Dynamic placeholder
                        error={!!errors.productDescription}
                        helperText={
                          errors.productDescription
                            ? errors.productDescription.message
                            : ""
                        }
                        InputProps={{
                          style: {
                            borderRadius: 50,
                            borderColor: "#f0f0f0", // Lighter border color
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Box shadow
                          },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#dcdcdc",
                            },
                            "&:hover fieldset": {
                              borderColor: "#b0b0b0",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#a0a0a0",
                            },
                          },
                        }}
                      />
                    )}
                  />
                </Grid>

                {/* Quantity Field */}
                <Grid item xs={12} sm={6} style={{ paddingTop: "0px" }}>
                  <InputLabel
                    htmlFor="quantity"
                    className="text-[#170F49] text-left mt-3 font-bold"
                  >
                    {labels[selectedCategory]?.quantity || "Order Quantity"}{" "}
                    <span
                      style={{
                        color: "red",
                        marginLeft: "5px",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      *
                    </span>
                  </InputLabel>

                  <Controller
                    name="quantity"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="quantity"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        placeholder={"Enter quantity"}
                        error={!!errors.quantity}
                        helperText={
                          errors.quantity ? errors.quantity.message : ""
                        }
                        InputProps={{
                          style: {
                            borderRadius: 50,
                            borderColor: "#f0f0f0",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                          },
                          endAdornment: (
                            <InputAdornment position="end">
                              {labels[selectedCategory]?.units.length > 1 ? (
                                <select
                                  value={selectedUnit}
                                  onChange={(e) =>
                                    setSelectedUnit(e.target.value)
                                  }
                                  style={{
                                    border: "none",
                                    backgroundColor: "transparent",
                                    outline: "none",
                                    cursor: "pointer",
                                  }}
                                >
                                  {labels[selectedCategory]?.units.map(
                                    (unit) => (
                                      <option key={unit} value={unit}>
                                        {unit}
                                      </option>
                                    )
                                  )}
                                </select>
                              ) : (
                                <span>
                                  {labels[selectedCategory]?.units[0]}
                                </span>
                              )}
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#dcdcdc",
                            },
                            "&:hover fieldset": {
                              borderColor: "#b0b0b0",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#a0a0a0",
                            },
                          },
                        }}
                      />
                    )}
                  />
                </Grid>

                {/* Delivery Time Field */}
                <Grid item xs={12} sm={6} style={{ paddingTop: "0px" }}>
                  <InputLabel
                    htmlFor="deliveryTime"
                    className="text-[#170F49] text-left mt-3 font-bold"
                  >
                    {labels[selectedCategory]?.deliveryTime ||
                      "Expected Delivery Date"}
                  </InputLabel>

                  <Controller
                    name="deliveryTime"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="deliveryTime"
                        type="date"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={!!errors.deliveryTime}
                        onKeyDown={(e) => {
                          e.preventDefault();
                        }}
                        helperText={
                          errors.deliveryTime ? errors.deliveryTime.message : ""
                        }
                        InputProps={{
                          inputProps: {
                            min: Today, // Disable previous dates
                          },
                          style: {
                            borderRadius: 50,
                            borderColor: "#f0f0f0",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                          },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#dcdcdc",
                            },
                            "&:hover fieldset": {
                              borderColor: "#b0b0b0",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#a0a0a0",
                            },
                          },
                        }}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={6} style={{ paddingTop: "0px" }}>
                  {/* External Label with Tailwind Styles */}
                  <InputLabel
                    htmlFor="incoterm"
                    className="text-[#170F49] text-left mt-3 font-bold"
                  >
                    Incoterm
                  </InputLabel>

                  <Controller
                    name="incoterm"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Select
                          {...field}
                          id="incoterm"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          error={!!errors.incoterm} // Retained for styling purposes
                          displayEmpty
                          value={field.value || ""}
                          sx={{
                            borderRadius: 50,
                            textAlign: "left",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#dcdcdc",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#b0b0b0",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#a0a0a0",
                            },
                            "&.Mui-focused": {
                              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                            },
                          }}
                        >
                          {/* Placeholder Option */}
                          <MenuItem value="" disabled>
                            {loading
                              ? "Loading..."
                              : error
                              ? "Error loading Incoterms"
                              : "Select Incoterm"}
                          </MenuItem>

                          {/* Render Incoterm Options */}
                          {!loading &&
                            !error &&
                            incotermOptions?.map((option) => (
                              <MenuItem key={option.id} value={option.name}>
                                {option.name}
                              </MenuItem>
                            ))}
                        </Select>

                        {/* Explicit Error Message */}
                        {errors.incoterm && (
                          <Typography
                            color="error"
                            variant="body2"
                            sx={{}}
                            className="text-left"
                          >
                            {errors.incoterm.message}
                          </Typography>
                        )}
                      </>
                    )}
                  />
                </Grid>

                {/* Upload Documents Field */}
                <Grid item xs={12} style={{ paddingTop: "0px" }}>
                  <InputLabel
                    htmlFor="fileUpload"
                    className="text-[#170F49] text-left mt-3 font-bold"
                  >
                    {currentLabels.upload || "Upload Documents"}
                  </InputLabel>

                  <Controller
                    name="attachment"
                    control={control}
                    defaultValue={[]}
                    render={({ field: { value, onChange } }) => (
                      <>
                        <MultiSelectFileUpload
                          handleUploadedFile={(file) =>
                            handleFileUpload(
                              file,
                              "attachment",
                              "enquiryDocument"
                            )
                          }
                          isCheckbox={false}
                          uploadedFile={value || []}
                          maxSize={2147483648}
                          enableAllUpload
                          handleFileDelete={handleDocumentDelete}
                          isUploading={isFileUploading}
                          isUploadEnabled={false}
                        />
                      </>
                    )}
                  />
                </Grid>
              </Grid>
            </Box>
          )}
          <Box
            sx={{
              position: "fixed",
              bottom: { xs: 2, md: -72 }, // `14px` for mobile screens and `-44px` for larger screens
              left: 0,
              width: { xs: "89.5%", md: "93%" },
              bgcolor: "#fff",
              padding: "20px 20px",
              boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
              zIndex: 1000,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              {activeStep > 0 && (
                <Button
                  onClick={handleBack}
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: "25px",
                    color: "#4A3587",
                    textTransform: "none",
                    padding: "10px 20px",
                    fontSize: "16px",
                    border: "1px solid #4A3587",
                    "&:hover": {
                      bgcolor: "#fff",
                    },
                  }}
                >
                  Previous Step
                </Button>
              )}

              <Box sx={{ marginLeft: "auto" }}>
                {activeStep < steps.length - 1 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    variant="contained"
                    disabled={isSubmitting}
                    sx={{
                      bgcolor: "#4A3587",
                      borderRadius: "25px",
                      color: "white",
                      textTransform: "none",
                      padding: "10px 20px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      "&:hover": {
                        bgcolor: "#4A3587",
                      },
                    }}
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    sx={{
                      bgcolor: "#4A3587",
                      borderRadius: "25px",
                      color: "white",
                      textTransform: "none",
                      padding: "10px 20px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      "&:hover": {
                        bgcolor: "#4A3587",
                      },
                    }}
                  >
                    Submit
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </main>
  );
};

EnquiryForm.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default EnquiryForm;
