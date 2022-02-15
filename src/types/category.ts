import { BrandAndProductListConCategory2 } from "./brand";
import { ProductDetailConCategory1 } from "./product";

// 대분류 리스트 타입
export interface MainCategoryList {
  conCategory1s: MainCategory[]; // map 돌릴때 타입
}

export interface MainCategory {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
}

export interface ConCategory2 {
  id: number;
  name: string;
  adminUserId: number;
  priority: number;
  createdAt: string;
  conCategory1Id: number;
  info: string;
  imageUrl: string;
  conCategory1: ProductDetailConCategory1;
}

export type CategoryItemType = MainCategory | BrandAndProductListConCategory2;
