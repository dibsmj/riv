"use client";
/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useSearchParams } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MuiTelInput } from "mui-tel-input";
import FileUpload from "@/component/FileUpload/FileUpload";
import EnquiryFormStyles from "./EnquiryFormStyles";
import {
  useCommonOverlayEnquiryMutation,
  useSendAutoEmailMutation,
} from "@/redux/slices/apiSlice";
import { COUNTRY_CODES_LIST } from "@/constants/countryCodes";
import { deleteFileFromS3, uploadFileToS3 } from "../../utils/S3Service";
import { getFileName } from "../../utils/helpers";

function gtagReportConversion(url) {
  const callback = function () {
    if (typeof url !== "undefined") {
      window.location = url;
    }
  };
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "conversion", {
      send_to: "AW-11420962231/Kaq5CPfWgvsYELeb-MUq",
      event_callback: callback,
    });
  } else {
    console.error("Google Analytics gtag function not available");
  }
  return false;
}
const trackConversion = () => {
  window.lintrk("track", { conversion_id: 17245129 });
};
function EnquriyForm({ categories, fromPage, setShowErrorMessage = () => {} }) {
  const categorieIGSub = [
    {
      id: 1,
      text: `Casting`,
    },
    {
      id: 2,
      text: `Forging`,
    },
    {
      id: 3,
      text: `Machining`,
    },
    {
      id: 4,
      text: `Fabrication`,
    },
    {
      id: 5,
      text: `Extrusion`,
    },
    {
      id: 6,
      text: `Injection Molding`,
    },
  ];

  const router = useRouter();

  const categoriesTextileSub = [
    {
      id: 1,
      text: `Men's Apparel`,
    },
    {
      id: 2,
      text: `Women's Apparel`,
    },
    {
      id: 4,
      text: `Uniforms`,
    },
    {
      id: 5,
      text: `Bags & Accessories`,
    },
    {
      id: 6,
      text: `Leather Apparels`,
    },
    {
      id: 7,
      text: `Footwear`,
    },
    {
      id: 8,
      text: `Bed Linens & Cushions`,
    },
    {
      id: 9,
      text: `Table & Kitchen Linens`,
    },
    {
      id: 10,
      text: `Curtains & Blinds`,
    },
    {
      id: 11,
      text: `Towels and Bathrobes`,
    },
    {
      id: 12,
      text: `Rugs, Mats and Carpets`,
    },
  ];
  const [commonOverlayEnquiry] = useCommonOverlayEnquiryMutation();
  const [getCountry, setCountry] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [getPhoneCode, setPhoneCode] = React.useState("+91");
  const handleChange = (newValue) => {
    setPhoneCode(newValue);
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
  };
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategories, setSubCategories] = useState([""]);
  const handleCategoryChange = (selectedCategoryId) => {
    setSelectedCategory(selectedCategoryId);
    const selectedSubcategories =
      selectedCategoryId === "Fashion & Home Textiles"
        ? categoriesTextileSub
        : categorieIGSub;
    setSubCategories(selectedSubcategories);
  };
  useEffect(() => {
    if (fromPage === "Textiles") {
      handleCategoryChange("Fashion & Home Textiles");
    }
    if (fromPage === "IG") {
      handleCategoryChange("Industrial Goods");
    }
  }, []);

  const EnquirySchema = yup.object().shape({
    businessName: yup.string().required("Business name is required"),
    email: yup
      .string()
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Email is not valid"
      )
      .required("Email is required"),
    country: yup.string().required("Country is required"),
    attachment: yup.string().nullable(),
    phoneNumber: yup
      .string()
      .min(7, "Please enter correct phone number!")
      .max(16, "Maximum 15 characters long")
      .required("Phone number is required"),
    category: yup.string().required("Category is required"),
    subCategory:
      fromPage !== "All"
        ? yup.string().required("Subcategory is required")
        : yup.string().nullable(),
    message: yup.string().required("Message is required"),
  });

  const {
    control,
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EnquirySchema),
    mode: "all",
    reValidateMode: "all",
  });
  const [getError, setError] = useState("");
  const { attachment = "" } = getValues();

  useEffect(() => {
    setValue("country", getCountry, { shouldValidate: true });
  }, [getCountry]);

  useEffect(() => {
    if (fromPage !== "All") {
      const selectedValue = categories[0].name;
      setSelectedCategory(selectedValue);
      setValue("category", selectedValue, { shouldValidate: true });
    }
  }, []);

  const handleFileUpload = async (file) => {
    try {
      const key = await uploadFileToS3(file, "Enquiry");
      setValue("attachment", key, { shouldValidate: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDocumentDelete = () => {
    const path = attachment[0];
    deleteFileFromS3(path);
    setValue("attachment", "", { shouldValidate: true });
  };
  const pathname = usePathname();
  const currentURL = `${process.env.NEXT_PUBLIC_APP_ROOT_URL}${pathname}`;

  const [sendAutoEmail] = useSendAutoEmailMutation();
  const queryParams = useSearchParams();
  const onSubmit = async (data) => {
    // const queryParams = useSearchParams();
    setIsSubmitDisabled(true);
    // const queryParams = new URLSearchParams(location.search);
    let searchType = "organic";
    if (queryParams.size > 0) {
      searchType = "inorganic";
    }
    // Get the value of each parameter using the get method
    const utmSource = queryParams.has("utm_source")
      ? queryParams.get("utm_source")
      : "";
    const utmMedium = queryParams.has("utm_medium")
      ? queryParams.get("utm_medium")
      : "";
    const utmCampaign = queryParams.has("utm_campaign")
      ? queryParams.get("utm_campaign")
      : "";
    const utmId = queryParams.has("utm_id") ? queryParams.get("utm_id") : "";
    const utmTerm = queryParams.has("utm_term")
      ? queryParams.get("utm_term")
      : "";
    const utmContent = queryParams.has("utm_content")
      ? queryParams.get("utm_content")
      : "";
    const payload = {
      businessName: data.businessName,
      name: data.yourName,
      contactNumber: data.phoneNumber,
      country: data.country,
      emailAddress: data.email,
      category: data.category,
      subCategory: data.subCategory,
      description: data.message,
      consent: data.consent,
      attachment: data.attachment,
      search_type: searchType,
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      utm_Id: utmId,
      utm_term: utmTerm,
      utm_content: utmContent,
      mode: window.location.href.includes("uat") ? "uat" : "prod",
    };
    const { error } = await commonOverlayEnquiry(payload);
    if (!error) {
      // gtagReportConversion("/thank-you");
      // trackConversion();
      await sendAutoEmail(payload);
      router.push("/thank-you");
    } else {
      setError("Looks like something is wrong!");
    }
  };

  return (
    <div css={EnquiryFormStyles} className="marginButtom header-text">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mainRowDiv">
          <div className="w-full">
            <TextField
              {...register("businessName")}
              id="outlined-basic"
              label="Business Name *"
              variant="outlined"
              style={{
                marginBottom: "10px",
                marginTop: "10px",
                width: "100%",
              }}
            />
            {errors && errors?.businessName?.message && (
              <div className="errorMessage">
                {errors?.businessName?.message}
              </div>
            )}
          </div>
          <div className="w-full">
            <TextField
              {...register("yourName")}
              id="outlined-basic"
              label="Your name (optional)"
              variant="outlined"
              style={{
                marginBottom: "10px",
                marginTop: "10px",
                width: "100%",
              }}
            />
            {errors && errors?.yourName?.message && (
              <div className="w-full errorMessage">
                {errors?.yourName?.message}
              </div>
            )}
          </div>
        </div>
        <div className=" grid grin-cols-1">
          <div className="w-full">
            <TextField
              {...register("email")}
              id="outlined-basic"
              label="Email *"
              variant="outlined"
              style={{
                marginBottom: "10px",
                marginTop: "10px",
                width: "100%",
              }}
            />
            {errors && errors?.email?.message && (
              <div className="w-full errorMessage">
                {errors?.email?.message}
              </div>
            )}
          </div>
        </div>
        <div className="mainRowDiv" style={{ textAlign: "left" }}>
          <div className="w-full">
            <FormControl
              variant="outlined"
              style={{
                marginBottom: "10px",
                marginTop: "10px",
                width: "100%",
              }}
            >
              <InputLabel id="category-label">Country*</InputLabel>
              <Select
                label="Country"
                labelId="country-label"
                {...register("country")}
                required
                onChange={(e) => getChangeCountry(e)}
                value={getCountry}
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left", // Adjust this to 'left' if needed
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left", // Adjust this to 'left' if needed
                  },
                  getContentAnchorEl: null,
                }}
              >
                {COUNTRY_CODES_LIST.map((country, index) => (
                  <MenuItem key={country.name} value={country.name}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {errors && errors?.country?.message && (
              <div className="w-full errorMessage">
                {errors?.country?.message}
              </div>
            )}
          </div>
          <div className="w-full">
            <MuiTelInput
              {...register("phoneNumber")}
              value={getPhoneCode}
              onChange={handleChange}
              style={{
                marginBottom: "10px",
                marginTop: "10px",
                width: "100%",
              }}
            />
            {errors && errors?.phoneNumber?.message && (
              <div className="errorMessage">{errors?.phoneNumber?.message}</div>
            )}
          </div>
        </div>
        <div className="mainRowDiv" style={{ textAlign: "left" }}>
          <div className="w-full">
            <FormControl
              variant="outlined"
              style={{
                marginBottom: "10px",
                marginTop: "10px",
                width: "100%",
              }}
            >
              {!selectedCategory ? (
                <InputLabel id="category-label">Category*</InputLabel>
              ) : null}
              <Select
                label="Category"
                labelId="category-label"
                {...register("category")}
                required
                disabled={fromPage !== "All"}
                onChange={(e) => {
                  handleCategoryChange(e.target.value);
                }}
                value={selectedCategory}
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left", // Adjust this to 'left' if needed
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left", // Adjust this to 'left' if needed
                  },
                  getContentAnchorEl: null,
                }}
              >
                {categories.map((cat, index) => (
                  <MenuItem key={cat.name} value={cat.name}>
                    {cat.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {errors && errors?.category?.message && (
              <div className="errorMessage">{errors?.category?.message}</div>
            )}
          </div>
          <div className="w-full">
            <FormControl
              variant="outlined"
              style={{
                marginBottom: "10px",
                marginTop: "10px",
                width: "100%",
              }}
            >
              <InputLabel id="category-label">Sub Category*</InputLabel>
              <Select
                label="Sub Category"
                labelId="category-label"
                {...register("subCategory")}
                required
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left", // Adjust this to 'left' if needed
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left", // Adjust this to 'left' if needed
                  },
                  getContentAnchorEl: null,
                }}
              >
                {subCategories.map((catSub, index) => (
                  <MenuItem key={`${catSub.text}-${index}`} value={catSub.text}>
                    {catSub.text}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {errors && errors?.subCategory?.message && (
              <div className="errorMessage">{errors?.subCategory?.message}</div>
            )}
          </div>
        </div>
        <div className="rowDiv">
          <Textarea
            {...register("message")}
            placeholder="Type your message here..*"
            variant="outlined"
            style={{
              marginBottom: "10px",
              marginTop: "10px",
              width: "100%",
              background: "transparent",
              border: "1px solid",
            }}
            minRows={4}
          />
        </div>
        {errors && errors?.message?.message && (
          <div className="rowDiv errorMessage">{errors?.message?.message}</div>
        )}
        {getError && <div className="rowDiv errorMessage">{getError}</div>}
        <FileUpload
          name={"Attachment"}
          handleUploadedFile={(file) =>
            handleFileUpload(file, "attachment", "enquiryDocument")
          }
          isCheckbox={false}
          uploadedFile={
            attachment &&
            attachment?.length && {
              name: getFileName(attachment[0]),
            }
          }
          maxSize={10485760}
          // videoMaxSize={524288000}
          enableAllUpload
          handleFileDelete={handleDocumentDelete}
          // enableVideoUpload
        />
        <div className="rowDiv">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox {...register("consent")} />}
              className=" text-left"
              label="I consent to rivexa team using my contact details for internal marketing communication"
            />
          </FormGroup>
        </div>
        <div className="rowDiv">
          <Button
            disabled={isSubmitDisabled}
            variant="primary"
            type="submit"
            className=" text-neutral100 fw-bold explorebtn urbanist-font btn btn-explore text-3xl px-8 py-2"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

EnquriyForm.propTypes = {
  categories: PropTypes.array.isRequired,
  fromPage: PropTypes.string.isRequired,
  setShowErrorMessage: PropTypes.func,
};
export default EnquriyForm;
