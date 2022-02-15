export interface BrandAndProductList {
  conCategory1: BrandAndProductListConCategory1;
}

export interface BrandAndProductListConCategory1 {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
  conCategory2s: BrandAndProductListConCategory2[];
}

export interface BrandAndProductListConCategory2 {
  id: number;
  name: string;
  conCategory1Id: number;
  imageUrl: string;
  conItems: BrandAndProductListConItem[];
}

export interface BrandAndProductListConItem {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  count: number;
  imageUrl: string;
}

export interface BrandDetail {
  conItems: BrandDetailConItem[];
}

export interface BrandDetailConItem {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  ncSellingPrice: number;
  information?: string;
  tip: string;
  warning: string;
  discountRate: number;
  info?: string;
  isOnlyAccount: number;
  conCategory2Id: number;
  imageUrl: string;
}

export interface BrandName {
  conCategory2: BrandNameConCategory2;
}

export interface BrandNameConCategory2 {
  id: number;
  name: string;
  imageUrl: string;
  conCategory1Id: number;
}
