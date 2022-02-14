import { DefaultTheme } from "styled-components";

export const colors = {
  lightRed: "#ff5757",
  white: "#ffffff",
  black: "#000000",
  gray: "#808080",
  background: "#f1f3f4",
  border: "#dddddd",
  buttonDisabled: "#ccc",
};

export const fontSize = {
  title: "16px",
  text: "14px",
  smallText: "12px",
};

export const zIndexes = {
  header: 50,
};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;
export type ZindexedTypes = typeof zIndexes;

const theme: DefaultTheme = {
  colors,
  fontSize,
  zIndexes,
};

export default theme;
