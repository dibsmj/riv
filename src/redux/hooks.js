/* eslint-disable no-undef */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;

export function useBaseFontSize() {
  useEffect(() => {
    const dpr = window.devicePixelRatio || 1.5;
    if (dpr > 1.2) {
      document.documentElement.style.fontSize = '12px';
    }
    return () => {
      document.documentElement.style.fontSize = '12px';
    };
  }, []);
}
