import React from "react";
import {
  BrandAndProductListConCategory2,
  CategoryItemType,
  MainCategory,
} from "types/response";
import GridCardItem from "./GridCardItem";

export interface CardListProps {
  data: MainCategory[] | BrandAndProductListConCategory2[];
  onClick: (item: CategoryItemType) => void;
}

function GridCardList({ data, onClick }: CardListProps) {
  return (
    <>
      {data.map((item) => (
        <GridCardItem
          key={`GridCardItem_${item.id}`}
          item={item}
          onClick={onClick}
        />
      ))}
    </>
  );
}

export default GridCardList;
