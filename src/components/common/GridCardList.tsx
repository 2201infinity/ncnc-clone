import React from "react";
import {
  BrandAndProductListConCategory2,
  CategoryItemType,
  MainCategory,
} from "types/response";
import Path, { PathValueTypes } from "utils/path";
import GridCardItem from "./GridCardItem";

export interface CardListProps {
  data: MainCategory[] | BrandAndProductListConCategory2[];
  path: PathValueTypes;
}

function GridCardList({ data, path }: CardListProps) {
  return (
    <>
      {data.map((item) => (
        <GridCardItem key={`GridCardItem_${item.id}`} item={item} path={path} />
      ))}
    </>
  );
}

export default GridCardList;
