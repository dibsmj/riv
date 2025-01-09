import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { setLastRoute } from './slices/globalSlice';
import { useAppDispatch } from './hooks';

function useLastRoute() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const prevLocation = useRef(null);

  useEffect(() => {
    if (prevLocation.current) {
      dispatch(setLastRoute(prevLocation.current.pathname));
    }
    prevLocation.current = location;
  }, [dispatch, location]);
}

export default useLastRoute;
