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
<<<<<<< HEAD
  return ( 
=======
  return (
>>>>>>> dc1156f9a0759efe384d5368e8b13d19cd2d1982
    <>
      {data?.map((item) => (
        <ProductCardItem item={item} key={item.id} isClickable={isClickable} />
      ))}
    </>
  );
}

export default ProductCardList;
