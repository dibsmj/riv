import reducer, {
  setCategoriesList,
  setCurrentStep,
  setSubCategoriesList,
  setGstNo,
  setSellerId,
  setMobileNo,
  setEmailId,
} from '../slices/registrationSlice';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    currentStep: '',
    gstNo: '',
    mobileNo: '',
    emailId: '',
    categoriesList: [],
    sellerRegistrationFormData: {},
    sellerId: '',
    sellerContactDetailsFormData: {},
    buyerRegistrationFormData: {},
    phoneCode: '',
  });
});

test('should handle setCurrentStep action', () => {
  const previousState = { currentStep: '', categoriesList: [] };

  expect(reducer(previousState, setCurrentStep('welcome-seller'))).toEqual({
    currentStep: 'welcome-seller',
    categoriesList: [],
  });
});

test('should handle setCategoriesList action', () => {
  const previousState = { currentStep: '', categoriesList: [] };

  const payload = [
    [
      { categoryId: 1, categoryName: 'Garments' },
      { categoryId: 2, categoryName: 'Industrial Goods' },
      { categoryId: 3, categoryName: 'Apparels' },
    ],
  ];

  expect(reducer(previousState, setCategoriesList(payload))).toEqual({
    currentStep: '',
    categoriesList: payload,
  });
});

test('should handle setSubCategoriesList action', () => {
  const previousState = {
    currentStep: '',
    categoriesList: [
      { categoryId: 1, categoryName: 'Garments' },
      { categoryId: 2, categoryName: 'Industrial Goods' },
      { categoryId: 3, categoryName: 'Apparels' },
    ],
  };

  const payload = {
    id: 1,
    data: [
      { subCategoryId: 123, subCategoryName: 'Copper' },
      { subCategoryId: 234, subCategoryName: 'Alluminium' },
    ],
  };

  expect(reducer(previousState, setSubCategoriesList(payload))).toEqual({
    currentStep: '',
    categoriesList: [
      { categoryId: 1, categoryName: 'Garments', subCategories: payload.data },
      { categoryId: 2, categoryName: 'Industrial Goods' },
      { categoryId: 3, categoryName: 'Apparels' },
    ],
  });
});
test('should handle setGstNo action', () => {
  const previousState = { gstNo: '' };
  const payload = '12345678901234';

  expect(reducer(previousState, setGstNo(payload))).toEqual({
    gstNo: payload,
  });
});

test('should handle setSellerId action', () => {
  const previousState = { sellerId: '' };
  const payload = '30';

  expect(reducer(previousState, setSellerId(payload))).toEqual({
    sellerId: payload,
  });
});

test('should handle setEmailId action', () => {
  const previousState = { emailId: '' };
  const payload = 'dr@h.co';

  expect(reducer(previousState, setEmailId(payload))).toEqual({
    emailId: payload,
  });
});

test('should handle setMobileNo action', () => {
  const previousState = { mobileNo: '' };
  const payload = '9365354454';

  expect(reducer(previousState, setMobileNo(payload))).toEqual({
    mobileNo: payload,
  });
});
