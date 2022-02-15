import { ConCategory2 } from "./category";

export interface ProductDetail {
  conItem: ProductDetailConItem;
}

export interface ProductDetailConItem {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  ncSellingPrice: number;
  information: string;
  tip: any;
  warning: string;
  discountRate: number;
  info: any;
  isOnlyAccount: number;
  conCategory2Id: number;
  imageUrl: string;
  conCategory2: ConCategory2;
  options: Option[];
}

export interface Option {
  expireAt: string;
  count: number;
  sellingPrice: number;
}

export interface ProductDetailConCategory1 {
  id: number;
  name: string;
  createdAt: string;
  priority: number;
  discountRate: number;
  info: string;
  imageUrl: string;
}
