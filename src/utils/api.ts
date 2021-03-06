import axios from "axios";
import { BrandAndProductList, BrandDetail, BrandName } from "types/brand";
import { MainCategoryList } from "types/category";
import { ClearanceList } from "types/clearance";
import { FAQCont, FAQType } from "types/faq";
import { ProductDetail } from "types/product";
import { API_ENDPOINT } from "./constants";

export const api = axios.create({
  baseURL: API_ENDPOINT,
});

// 대분류 리스트
export const getMainCategoryList = async () => {
  const response = await api.get<MainCategoryList>("con-category1s");
  return response.data;
};

// 땡처리 리스트
export const getClearanceList = async () => {
  const response = await api.get<ClearanceList>("con-items/soon");
  return response.data;
};

// 브랜드 + 상품 리스트
export const getBrandAndProductList = async (conCategoryId: number) => {
  const response = await api.get<BrandAndProductList>(
    `con-category1s/${conCategoryId}/nested`
  );
  return response.data;
};

// 상품 상세
export const getProductDetail = async (conItemId: string) => {
  const response = await api.get<ProductDetail>(`con-items/${conItemId}`);
  return response.data;
};

// FAQ 타입
export const getFAQType = async () => {
  const response = await api.get<FAQType>("qa-types");
  return response.data;
};

// FAQ 내용
export const getFAQList = async (qaTypeId: number) => {
  const response = await api.get<FAQCont>(`qas?qaTypeId=${qaTypeId}`);
  return response.data;
};

// 브랜드 명
export const getBrandName = async (conCategory2Id: number) => {
  const response = await api.get<BrandName>(`con-category2s/${conCategory2Id}`);
  return response.data;
};

// 브랜드 상세
export const getBrandDetail = async (conCategory2Id: number) => {
  const response = await api.get<BrandDetail>(
    `con-items/?conCategory2Id=${conCategory2Id}`
  );
  return response.data;
};
