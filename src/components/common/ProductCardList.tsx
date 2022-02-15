import React from "react";
import {
  BrandDetailConItem,
  ClearanceListConItems,
  ProductDetailConItem,
} from "types/response";
import { ProductCardItem } from "./ProductCardItem";

interface ProductCardListProps {
  data: ProductDetailConItem[] | ClearanceListConItems[] | BrandDetailConItem[];
  isClickable?: boolean;
}
function ProductCardList({ data, isClickable }: ProductCardListProps) {
  return ( 
    <>
      {data.map((item: any) => (
        <ProductCardItem item={item} key={item.id} isClickable={isClickable} />
      ))}
    </>
  );
}

export default ProductCardList;
