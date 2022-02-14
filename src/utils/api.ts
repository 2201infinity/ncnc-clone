import axios from "axios";
import { API_ENDPOINT } from "./constants";

export const api = axios.create({
  baseURL: API_ENDPOINT,
});

api.interceptors.response.use((res) => {
  return res.data;
});

// 대분류 리스트
export const getMainCategoryList = async () => {
  const data = await api.get("con-category1s");

  return data;
};

// 땡처리 리스트
export const getClearanceList = async () => {
  const data = await api.get("soon");

  return data;
};

// 브랜드 + 상품 리스트
export const getBrandAndProductList = async (id: number) => {
  const data = await api.get("con-category1s/" + id + "/nested");

  return data;
};

// 상품 상세
export const getProductDetail = async (id: number) => {
  const data = await api.get("con-items/" + id);

  return data;
};

// FAQ 타입
export const getFAQType = async () => {
  const data = await api.get("qa-types");

  return data;
};

// FAQ 내용
export const getFAQList = async () => {
  const data = await api.get("qas?qaTypeId=1");

  return data;
};
