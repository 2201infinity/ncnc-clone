// 대분류 리스트 타입
export interface MainCategoryList {
  conCategory1s: MainCategory[];
}

// 땡처리 리스트 타입
export interface ClearanceList {
  conItems: ClearanceListConItems[];
}

// 브랜드 + 상품 리스트 타입
export interface BrandAndProductList {
  conCategory1: BrandAndProductListConCategory1;
}

// 상품 상세 타입
export interface ProductDetail {
  conItem: ProductDetailConItem;
}

// FAQ 타입
export interface FAQType {
  qaTypes: QaType[];
}

// FAQ 내용 타입
export interface FAQCont {
  qas: Qa[];
}

export interface MainCategory {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
}

export interface ClearanceListConItems {
  id: number;
  name: string;
  originalPrice: number;
  createdAt: string;
  sfId: string;
  minSellingPrice: number;
  ncSellingPrice: number;
  count: number;
  information: any;
  tip: any;
  warning?: string;
  discountRate: number;
  askingPrice: number;
  isRefuse: number;
  isBlock: number;
  info: any;
  isOnlyAccount: number;
  conCategory2Id: number;
  imageUrl: string;
  conCategory2: ClearanceListConCategory2;
}

export interface ClearanceListConCategory2 {
  id: number;
  name: string;
  adminUserId: number;
  priority: number;
  createdAt: string;
  conCategory1Id: number;
  info: any;
  imageUrl: string;
  conCategory1: ClearanceListConCategory1;
}

export interface ClearanceListConCategory1 {
  id: number;
  name: string;
  createdAt: string;
  priority: number;
  discountRate: number;
  info: string;
  imageUrl: string;
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
  conCategory2: ProductDetailConCategory2;
  options: Option[];
}

export interface ProductDetailConCategory2 {
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

export interface ProductDetailConCategory1 {
  id: number;
  name: string;
  createdAt: string;
  priority: number;
  discountRate: number;
  info: string;
  imageUrl: string;
}

export interface Option {
  expireAt: string;
  count: number;
  sellingPrice: number;
}

export interface QaType {
  id: number;
  key: string;
  name: string;
}

export interface Qa {
  id: number;
  question: string;
  answer: string;
}
