import reducer, { setIsLoggedIn } from '../slices/globalSlice';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    isLoggedIn: false,
    user: {},
  });
});

test('should handle setIsLoggedIn action', () => {
  const previousState = { isLoggedIn: false };

  expect(reducer(previousState, setIsLoggedIn(true))).toEqual({
    isLoggedIn: true,
  });
});
