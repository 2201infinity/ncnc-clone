import { NextPage } from "next";
import { useRouter } from "next/router";
import Header from "components/common/Header";

import {
  getBrandAndProductList,
  getClearanceList,
  getMainCategoryList,
} from "utils/api";
import GridCardList from "components/common/GridCardList";
import Path from "utils/path";
import styled from "styled-components";
import { Navigation } from "components/category/Navigation";
import ProductCardList from "components/common/ProductCardList";
import { useEffect, useState } from "react";
import { BrandAndProductListConCategory1 } from "types/brand";
import { ClearanceList, ClearanceListConItems } from "types/clearance";
import { MainCategory } from "types/category";

interface CategoryDetailProps {
  categoryDetailList: BrandAndProductListConCategory1 | ClearanceList | any;
  categoryList: MainCategory[];
}

const CategoryDetailPage: NextPage<CategoryDetailProps> = ({
  categoryDetailList,
  categoryList,
}) => {
  const router = useRouter();
  const [categoryDetailListData, setCategoryDetailListData] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (router.query.id === "1") {
      const result = categoryDetailList.conCategory1.conCategory2s.reduce(
        (a: ConcatArray<ClearanceListConItems>, e: ClearanceList) => {
          return e.conItems.concat(a);
        },
        []
      );
      setCategoryDetailListData(result);
      setTitle(categoryDetailList.conCategory1.name);
    } else {
      setTitle(categoryDetailList.conCategory1.name);
    }
  }, [categoryDetailList, router]);

  return (
    <div>
      <Header title={title} leftIcon="back" />
      <Navigation item={categoryList} />
      {router.query.id === "1" ? (
        <ProductCardList data={categoryDetailListData} isClickable={true} />
      ) : (
        <GridCardContainer>
          <GridCardList
            data={categoryDetailList.conCategory1.conCategory2s}
            path={Path.Brands}
          />
        </GridCardContainer>
      )}
    </div>
  );
};

const GridCardContainer = styled.div`
  padding: 7px 17px 17px;
`;
export const getServerSideProps = async (context: any) => {
  const router = context.query.id;
  const categoryList = await getMainCategoryList();
  const data =
    router === 1
      ? await getClearanceList()
      : await getBrandAndProductList(router);
  return {
    props: {
      categoryDetailList: data,
      categoryList: categoryList.conCategory1s,
    },
  };
};

export default CategoryDetailPage;
