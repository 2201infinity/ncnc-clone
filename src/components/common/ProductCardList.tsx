import React from "react";
import { BrandDetailConItem } from "types/brand";
import { ClearanceListConItems } from "types/clearance";
import { ProductDetailConItem } from "types/product";

import { ProductCardItem } from "./ProductCardItem";

interface ProductCardListProps {
  data: ProductDetailConItem[] | ClearanceListConItems[] | BrandDetailConItem[];
  isClickable?: boolean;
}
function ProductCardList({ data, isClickable }: ProductCardListProps) {
  return (
    <>
      {data?.map((item) => (
        <ProductCardItem item={item} key={item.id} isClickable={isClickable} />
      ))}
    </>
  );
}

export default ProductCardList;
