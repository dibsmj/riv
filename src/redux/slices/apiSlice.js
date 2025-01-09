import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  API_BASE_URL,
  API_ENDPOINTS,
  BLOG_API_ENDPOINTS,
} from '../../config/APIEndpoints';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  reducerPath: 'api',
  endpoints: (build) => ({
    enquirySourceList: build.query({
      query: () => ({
        url: `${API_ENDPOINTS.ENQUIRY_SOURCE_LIST}`,
        method: 'GET',
      }),
    }),
    enquiry: build.mutation({
      query: (payload) => ({
        url: `${API_ENDPOINTS.ENQUIRY}`,
        method: 'POST',
        body: payload,
      }),
    }),
    landingOverlayEnquiry: build.mutation({
      query: (payload) => ({
        url: `${API_ENDPOINTS.LANDING_OVERLAY_ENQUIRY}`,
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    commonOverlayEnquiry: build.mutation({
      query: (payload) => ({
        url: `${API_ENDPOINTS.COMMON_OVERLAY_ENQUIRY}`,
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    getAllBlogs: build.query({
      query: (type) => ({
        url: `${BLOG_API_ENDPOINTS.GET_ALL_BLOGS}/${type}`,
        method: 'GET',
      }),
    }),
    getSingleBlog: build.query({
      query: (pagelink) => ({
        url: `${BLOG_API_ENDPOINTS.GET_ALL_BLOGS}/page/${pagelink}`,
        method: 'GET',
      }),
    }),
    getAllCategoryBlogs: build.query({
      query: (tyepID) => ({
        url: `${BLOG_API_ENDPOINTS.GET_ALL_BLOGS_BY_CATEGORY}/${tyepID}`,
        method: 'GET',
      }),
    }),
    updateBlogHit: build.mutation({
      query: (pageID) => ({
        url: `${BLOG_API_ENDPOINTS.UPDATE_BLOG_PAGE_HIT}/${pageID}`,
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    getBlogCategory: build.query({
      query: () => ({
        url: `${BLOG_API_ENDPOINTS.GET_BLOG_CATEGORY}`,
        method: 'GET',
      }),
    }),
    getHeaderSearch: build.mutation({
      query: (payload) => ({
        url: `${BLOG_API_ENDPOINTS.HOMEPAGE_AI_SEARCH}`,
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    sendAutoEmail: build.mutation({
      query: (payload) => ({
        url: `${BLOG_API_ENDPOINTS.EMAILSEND_API_AUTO}`,
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    crossBorderForm: build.mutation({
      query: (payload) => ({
        url: `${API_ENDPOINTS.CROSS_BORDER_FORM}`,
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    supplierFinancingForm: build.mutation({
      query: (payload) => ({
        url: `${API_ENDPOINTS.SUPPLIER_FINANCING_FORM}`,
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    qualityAssranceForm: build.mutation({
      query: (payload) => ({
        url: `${API_ENDPOINTS.QUALITY_ASSURANCE_FORM}`,
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    exportAdvisoryForm: build.mutation({
      query: (payload) => ({
        url: `${API_ENDPOINTS.EXPORT_ADVISORY_FORM}`,
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    designadvisoryForm: build.mutation({
      query: (payload) => ({
        url: `${API_ENDPOINTS.DESIGN_ADVISORY_FORM}`,
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),

    getAllServices: build.query({
      query: () => ({
        url: `${API_ENDPOINTS.EXPORT_SERVICE_DROPDOWN}`,
        method: 'GET',
      }),
    }),
    getAllIncoterms: build.query({
      query: () => ({
        url: `${API_ENDPOINTS.INCOTERM_DROPDOWN}`,
        method: 'GET',
        headers: {
          'x-country-code': 'IN',
          Authorization: 'dummy',
        },
      }),
    }),
  }),
});

export const {
  useEnquiryMutation,
  useEnquirySourceListQuery,
  useLandingOverlayEnquiryMutation,
  useCommonOverlayEnquiryMutation,
  useLazyGetAllBlogsQuery,
  useLazyGetSingleBlogQuery,
  useLazyGetAllCategoryBlogsQuery,
  useUpdateBlogHitMutation,
  useCrossBorderFormMutation,
  useSupplierFinancingFormMutation,
  useQualityAssranceFormMutation,
  useExportAdvisoryFormMutation,
  useDesignadvisoryFormMutation,
  useLazyGetAllServicesQuery,
  useLazyGetBlogCategoryQuery,
  useGetHeaderSearchMutation,
  useSendAutoEmailMutation,
  useLazyGetAllIncotermsQuery,
} = api;
