"use client";
import { Provider } from "react-redux";
import setupStore from "../redux/store";

export const store = setupStore();
export const experimental_ppr = true;

export default function AppProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
