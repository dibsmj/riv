// TODO: base url update once APIs deployed
// export const API_BASE_URL = 'http://localhost:8080/';

export const API_BASE_URL = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;

export const DUNS_ABSOLUTE_ENDPOINTS = {
  FETCH_DUNS_SCORE:
    'https://m1kz2kuiha.execute-api.ap-south-1.amazonaws.com/getDNBInfo?',
  FETCH_DUNS_NUMBER:
    'https://k2s3prvzr5.execute-api.ap-south-1.amazonaws.com/getDNBNumber?',
};

export const MAILER_ABSOLUTE_ENDPOINTS = {
  SELLER_MAILER:
    'https://igfie556f5.execute-api.ap-south-1.amazonaws.com/sellerEmailStage?',
  BUYER_MAILER:
    'https://hykxjwary7.execute-api.ap-south-1.amazonaws.com/buyerEmail?',
  RFQ_NOTIFICATION_MAIL:
    'https://g4sy3zgg6i6r53xo25x2cxtoe40xowpt.lambda-url.ap-south-1.on.aws/?',
  RFQ_RESPONSE_MAIL:
    'https://zpzb3bf5vo4gyacxyksvz63u2i0bawza.lambda-url.ap-south-1.on.aws/?',
};

const USER_ROLE = {
  BUYER: 'buyer',
  SELLER: 'seller',
};

const version = 'v1';
export const API_ENDPOINTS = {
  ENQUIRY: 'emp-configuration-service/v1/enquiry',
  ENQUIRY_SOURCE_LIST: 'emp-configuration-service/v1/enquiry/sourceList',
  GST: 'emp-configuration-service/gst/detail?gstn',
  LOGIN: 'emp-user-service/api/v1/login',
  SIGNUP_BUYER: `${USER_ROLE.BUYER}/${version}/signup`,
  BUYER_DETAILS: `${USER_ROLE.BUYER}/${version}`,
  SELLER_DETAILS: 'emp-seller-service/sellers/sellerDetails',
  FETCH_CATEGORIES: 'emp-catalogue-service/catalogue/categories?isActive=true',
  FETCH_SUBCATEGORIES:
    'emp-catalogue-service/catalogue/categories/sub-categories?parentId',
  FETCH_AREA_CODE_DATA: 'emp-configuration-service/pin?pin',
  FETCH_COUNTRY_DATA: 'emp-configuration-service/countries/phone-country-codes',
  FETCH_BUYERS_REGISTRATION_DOCS: `${USER_ROLE.BUYER}/${version}/buyer-identifiers?countryCode`,
  BUYER_REGISTRATION: `${USER_ROLE.BUYER}/${version}/registration`,
  SEND_OTP: 'emp-configuration-service/otp',
  VERIFY_OTP: 'emp-configuration-service/otp/auth',
  SIGN_UP_SELLER: 'emp-seller-service/sellers/signup',
  SELLER_REGISTRATION: 'emp-seller-service/sellers/registration',
  GST_PARSER: 'emp-seller-service/sellers/gstParser',
  FETCH_IN_HOUSE_FACILITIES:
    'emp-seller-service/profile/facilities-master?isActive=true&categoryId',
  FETCH_CERTIFICATES:
    'emp-seller-service/profile/certificate-master?isActive=true&categoryId',
  FETCH_DOCUMENTS_LIST: 'emp-seller-service/profile/seller-profile-documents',
  FETCH_SELECTED_PRODUCT_CAPABILITIES:
    'emp-seller-service/sellers/seller-category-product-mapping?sellerId',
  UPDATE_SELECTED_PRODUCT_CAPABILITIES:
    'emp-seller-service/sellers/seller-category-product-mapping',
  COMPANY_DETAILS: 'emp-seller-service/profile/company-details',
  FACTORY_DETAILS: 'emp-seller-service/profile/factory-details',
  KYC_DETAILS: 'emp-seller-service/sellers/kyc?sellerId',
  FETCH_KYC_BANKS_LIST: 'emp-seller-service/sellers/kyc/bank-list?sellerId',
  FETCH_SELLER_PORTFOLIO: 'emp-seller-service/sellers',
  FETCH_SELLER_DOCUMENT_SERVICE: 'emp-seller-service/sellers',
  EXPORT_EXPERIENCE: 'emp-seller-service/profile/export-experience',
  FETCH_PRODUCTS: 'emp-catalogue-service/catalogue/products?categoryId',
  FETCH_MASTER_DATA: 'emp-rfq-service/rfq/master-data?categoryId',
  SELLER_PLAN: 'emp-seller-service/profile/seller-plan',
  FETCH_INCO_TERMS: 'emp-rfq-service/payments/inco-terms',
  FETCH_PAYMENT_MODE_AND_TERMS: 'emp-rfq-service/payments/modes-terms',
  // FETCH_PAYMENT_CURRENCIES: 'currencies',
  EDIT_EXPORT_DETAILS: 'emp-seller-service/profile/export-details',
  FETCH_PAYMENT_MILESTONE_AND_TERMS:
    'emp-rfq-service/payments/milestones-terms',
  FETCH_PAYMENT_CURRENCIES: 'emp-configuration-service/currencies',
  SAVE_DRAFT_API: 'emp-rfq-service/rfq',

  BRANDS_EXPORT_DATA: 'emp-seller-service/profile/export-experience',
  EXPORT_COUNTRIES: 'emp-seller-service/profile/export-countries',
  FETCH_SEARCH_PRODUCT:
    'emp-catalogue-service/catalogue/products/search?searchText',
  MJ_TRUST_ATTRIBUTES: 'emp-seller-service/profile/mj-trust-score-attributes',
  MJ_TRUST_SCORES: 'emp-seller-service/profile/mj-trust-score',
  FETCH_SELLER_PROFILE: 'emp-seller-service/profile',
  BUYER_BANK_DETAILS: `buyer/profile/${version}/bank-details`,
  BUYER_IMPORT_EXPERIENCE: `buyer/profile/${version}/import-details`,
  FETCH_BUYER_DETAILS: `buyer/${version}/buyerDetails`,
  SAVE_RFQ_DOCUMENT: 'emp-rfq-service/rfq/document',
  DELETE_RFQ_DOCUMENT: 'emp-rfq-service/rfq/document',
  FETCH_PORT_NAME: 'emp-configuration-service/port-names?countryCode',
  FETCH_BUYER_ADDRESSES: 'buyer/v1/buyers',
  BUYER_GENERAL_INFO: `${USER_ROLE.BUYER}/profile/${version}/generalInfo`,
  BUYER_CONTACT_DETAILS: `${USER_ROLE.BUYER}/${version}/contact`,
  FETCH_PAYMENT_INCO_TERMS: `emp-configuration-service/${version}/payment/inco-terms`,
  FETCH_PAYMENT_TERMS: `emp-configuration-service/${version}/payment/payment-terms`,
  FETCH_BUYER_ORDER_PREFERENCE: `${USER_ROLE.BUYER}/profile/${version}/orderPreferenceInfo`,
  FETCH_SELLER_FILTER: 'emp-rfq-service/rfq/seller-filters?categoryId',
  FETCH_SELLER_PREFERENCES_ATTRIBUTES:
    'emp-rfq-service/rfq/seller-preferences-attributes',
  FETCH_SELLERS: 'emp-seller-service/sellers',
  RFQ_RESPONSE_COUNT: 'emp-rfq-service/rfq/responses/statuscount',
  RFQ_DETAILS_LIST: 'emp-rfq-service/rfq/responses/search',
  FETCH_PREVIOUS_SELLERS_IDS: 'emp-rfq-service/rfq/previous-sellers',
  BUYER_CATEGORY_OF_INTEREST: `${USER_ROLE.BUYER}/profile/${version}/category-of-interest`,
  BUYER_PROFILE_DATA: `${USER_ROLE.BUYER}/profile/${version}/profile-data`,
  FETCH_RFQ_QUOTATIONS: 'emp-rfq-service/rfq/quotations',
  FACTORY_VISIT: `/emp-seller-service/profile/factory-visit`,
  RFQ_BIDS_RECEIVED: 'emp-rfq-service/rfq/responses/bids-by-rfqid',
  BUYER_COUNTRIES_PRODUCRED:
    '/emp-configuration-service/countries/country-procured-from',
  SAVE_RFQ_RESPONSE_DOCUMENT: 'emp-rfq-service/rfq/responses/document',
  DELETE_RFQ_RESPONSE_DOCUMENT: 'emp-rfq-service/rfq/responses/document',
  FETCH_RFQ_DETAILS: 'emp-rfq-service/rfq/v2',
  FETCH_RFQ_DOCUMENTS: 'emp-rfq-service/rfq/document',
  RFQ_RESPONSE_WITHDRAW: 'emp-rfq-service/rfq/responses',
  MARK_AS_INTERESTED: 'emp-rfq-service/rfq/responses',
  RFQ_RESPONSE_API: 'emp-rfq-service/rfq/responses',
  BID_ACKNOWLEDGE: 'emp-rfq-service/rfq/bid-acknowledgments',
  RFQ_SELLER_RESPONSE_INITIATE_BID:
    'emp-rfq-service/rfq/responses/initiate-bid',
  RFQ_SELLERS: 'sellers',
  BIDS_COUNT: 'emp-rfq-service/rfq/responses/bid-status-count',
  USER_NOTIFICATION: 'emp-notification-service/inapp-notifications/count',
  USER_NOTIFICATION_LIST: 'emp-notification-service/inapp-notifications',
  REJECT_BID: 'emp-rfq-service/rfq/responses',
  ACCEPT_BID: 'emp-rfq-service/rfq/responses',
  MARKED_AS_VIEWED: 'emp-rfq-service/rfq/responses',
  RFQ_SAMPLE_REQUEST: 'emp-rfq-service/rfq/responses/event',
  RFQ_SELLER_RESPONSE_UPDATE_BID: 'emp-rfq-service/rfq/responses/update-bid',
  RFQ_RESPONSE_EVENT: 'emp-rfq-service/rfq/responses/event',
  SAMPLE_POST_CALL: 'emp-rfq-service/rfq/responses',
  UPDATE_BID: 'emp-rfq-service/rfq/responses',
  FETCH_ISSUE_PO_CONTRACT_DETAILS: `tna/query/${version}/issuedPoContract?sellerId`,
  MILESTONES_DATA: `tna/milestones`,
  SUBMIT_TNA: `tna/v1/status`,
  FETCH_ALL_TIME_SUBMITTED_TNA_DETAILS: `tna/query/v1/tnaActionCalendar`,
  FETCH_REMARK_BY_STAGE_MILESTONE_ID: `tna/remarks`,
  ALL_MILESTONES_DATA: `tna/v1/tnaAllMilestones`,
  BUYER_PO_CONTRACT:
    'emp-contract-purchase-order-service/contract/contracts-by-criteria',
  BUYER_PO_CONTRACT_CAROUSEL: 'emp-rfq-service/rfq/responses/bids-by-criteria',
  CONTRACT_DOCUMENT: 'emp-contract-purchase-order-service/contract/document',
  PO_DOCUMENT: 'emp-contract-purchase-order-service/po/document',
  SAVE_CONTRACT_PO: 'emp-contract-purchase-order-service/contract',
  SAVE_SECOND_PO: 'emp-contract-purchase-order-service/purchase-order',
  FETCH_SELECTED_PRODUCT_CATEGORIES:
    'emp-catalogue-service/catalogue/category-product-names',
  FETCH_TNA_TIMELINE_MILESTONE_STATUS: 'tna/milestones/v1/status',
  MODIFY_TNA_TIMELINE: 'tna/milestones/modify-stage-milestone',
  STAGE_REMARKS: `tna/remarks/v2`,
  FETCH_CONTRACT_DATA: 'emp-contract-purchase-order-service/contract',
  FETCH_PURCHASE_ORDER_DATA:
    'emp-contract-purchase-order-service/purchase-order',
  FETCH_TNA_DOCUMENTS_MILESTONE_WISE: 'tna/document/v1/milestone',
  DELETE_TNA_DOCUMENTS_MILESTONE_WISE: 'tna/document',
  FETCH_TNA_TIMELINE_VIEW_MILESTONE_HISTORY: 'tna/milestones/v1/history',
  FETCH_TNA_DOCUMENTS_LIST: 'tna/document/v1',
  APPROVE_MODIFY_MILEsTONE: 'tna/milestones/v1/approve-modify-stage-milestone',
  FETCH_MODIFIED_TIMELINE_FROM_BUYER_END:
    'tna/milestones/v1/modify-stage-milestone',
  FETCH_PO_DETAILS_BY_TNAID: 'tna/query/v1',
  FETCH_TNA_MILESTONEDATA_FOR_PROGRSS_BAR: 'tna/query/v1/dashboard',
  SELLER_DASHBOARD: 'emp-seller-service/profile/dashboard?sellerId',
  SELLER_DASHBOARD_BIDS: 'emp-rfq-service/dashboard/v1',
  FETCH_BUYER_PROFILE_DETAILS: 'buyer/v1',
  FETCH_UPCOMING_ORDERS:
    'emp-contract-purchase-order-service/purchase-order/dashboard-po-orders',
  FETCH_SELLER_ORDERS_ON_TRACK_INFO: 'tna/query/v1/dashboard/orders-on-track',
  FETCH_SELLER_RATING_MASTER: 'tna/seller/rating/master',
  FETCH_BUYER_RATING_MASTER: 'tna/buyer/rating/master',
  FETCH_SELLER_RATING: 'tna/seller/rating',
  FETCH_BUYER_RATING: 'tna/buyer/rating',
  SAVE_SELLER_RATING: 'tna/seller/rating',
  SAVE_BUYER_RATING: 'tna/buyer/rating',
  BUYER_DASHBOARD_TNA_ORDER: 'tna/query/v1/dashboard/tnaOrders',
  BUYER_EMPTY_DASHBOARD_INFO:
    'emp-seller-service/sellers/mjverified-seller-average',
  FETCH_ISSUED_PO_COUNT:
    'emp-contract-purchase-order-service/po/search/issued-po-count',
  ADD_SELLERS: 'emp-seller-service/seller/addSellers',
  MJ_FEEDBACK: 'tna/buyer/rating/saveOrUpdateFeedback',
  FETCH_SELLER_USERS: 'emp-seller-service/seller/seller-users',
  FETCH_BUYER_USERS: 'buyer/buyer-users',
  ADD_BUYERS: 'buyer/addBuyers',
  FETCH_SELLER_CUSTOMER_RATING: 'tna/seller/rating',
  SAVE_PAYMENT_DETAILS:
    'emp-payment-service/v1/payments/initiate-direct-payment',
  FETCH_PAYMENT_DETAILS: 'emp-payment-service/v1/payments/payment-list',
  INVOICE_DOCUMENT: 'emp-payment-service/payment/document',
  FETCH_SAP_INVOICE: 'emp-payment-service/api/payment/viewInvoice',
  BUYER_DNB_FLAG: 'buyer/mjops/v1/dnb',
  FETCH_SELLER_CERTIFICATE_DOCUMENTS:
    'emp-seller-service/profile/factory-details?sellerId',
  MANAGE_DOCUMENTS: '/emp-seller-service/profile/factory-documents',
  MJ_COMMISSION_API: 'emp-configuration-service/v1/pricing/commission',
  CHANGE_DEFAULT_CURRENCY: '/buyer/profile/v1/buyer-preference',
  CHANGE_DEFAULT_TIMEZONE: '/emp-configuration-service/timezone',
  DELETE_BUYER_USER: '/buyer/profile/deactivate',
  DELETE_SELLER_USER: '/emp-seller-service/profile/deactivate',
  FETCH_MILESTONE_MAPPING: '/tna/po-payment-milestones',
  FETCH_SELLER_STATUS_DETAILS: 'emp-seller-service/seller/v2/user-details',
  FETCH_BUYER_STATUS_DETAILS: 'buyer/mjops/v1',
  FETCH_ORDER_HISTORY: 'emp-rfq-service/rfq-order/order-history',
  FETCH_BUYER_DASHBOARD_STATUS: '/emp-rfq-service/dashboard/count',
  FETCH_PAYONEER_STATUS:
    'emp-payment-service/payment/payoneer/checkRegistrationStatus',
  FETCH_PAYONEER_REGISTRATION_STATUS: 'emp-payment-service/payment/payoneer',
  READ_WRITE_DOCUMENT_FROM_S3:
    'emp-configuration-service/document/presignedUrl',
  FETCH_AGGREGATED_DETAILS_API:
    'emp-seller-service/sellers/aggregated-details?categoryMapping',
  TICKET_NOTIFICATION_CREATED:
    'emp-notification-service/v1/ticket/send-notification',
  BUYER_COMPANY_DETAILS: '/buyer/profile/company-details',
  EDIT_RFQ_API: 'emp-rfq-service/rfq/edit',
  LANDING_OVERLAY_ENQUIRY: 'emp-configuration-service/enquiry-form/save',
  COMMON_OVERLAY_ENQUIRY: 'emp-configuration-service/v1/enquiry',
  SELLER_QUOTATION_SAVE_DRAFT: 'emp-rfq-service/rfq/responses/draft-bid',
  CROSS_BORDER_FORM: 'vas/logistics-inquiry',
  EXPORT_SERVICE_DROPDOWN: 'vas/export-advisory/type-list',
  SUPPLIER_FINANCING_FORM: 'vas/avail-financing',
  QUALITY_ASSURANCE_FORM: 'vas/quality-inspection',
  EXPORT_ADVISORY_FORM: 'vas/export-advisory',
  DESIGN_ADVISORY_FORM: 'vas/design-advisory',
  INCOTERM_DROPDOWN: 'emp-rfq-service/payments/inco-terms?isActive=true',
};

export const TICKET_API_BASE_URL = `${process.env.NEXT_PUBLIC_APP_TICKET_API_ENDPOINT}tickets/`;
export const TICKET_API_ENDPOINTS = {
  GET_TICKET_LIST: 'ticket-list/',
  GET_TICKET_DETAILS: 'ticket-details',
  CREATE_TICKET: 'create-ticket',
};

export const BLOG_API_ENDPOINTS = {
  GET_ALL_BLOGS: `${process.env.NEXT_PUBLIC_APP_BLOGS_API_URL}wp-blogs`,
  GET_BLOG_CATEGORY: `${process.env.NEXT_PUBLIC_APP_BLOGS_API_URL}blog-category`,
  GET_ALL_BLOGS_BY_CATEGORY: `${process.env.NEXT_PUBLIC_APP_BLOGS_API_URL}wp-blogs/category`,
  UPDATE_BLOG_PAGE_HIT: `${process.env.NEXT_PUBLIC_APP_BLOGS_API_URL}wp-blogs/update`,
  HOMEPAGE_AI_SEARCH: `${process.env.NEXT_PUBLIC_APP_BLOGS_API_URL}infer`,
  EMAILSEND_API_AUTO: `${process.env.NEXT_PUBLIC_APP_BLOGS_API_URL}emailsend`,
};
