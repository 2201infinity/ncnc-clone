import React from "react";
import { BrandAndProductListConCategory2 } from "types/brand";
import { MainCategory } from "types/category";
import { PathValueTypes } from "utils/path";
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
