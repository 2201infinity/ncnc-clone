import { NextPage } from "next";
import Link from "next/link";
import { BrandDetailConItem } from "types/response";
import { getBrandDetail, getBrandName } from "utils/api";
import Header from "components/common/Header";
import ProductCardList from "components/common/ProductCardList";
import styled from "styled-components";

// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { brandDetailSelecter } from "stores/brandDetail";
// import { BrandAndProductList } from "types/response";
// import axios from "axios";
// import { API_ENDPOINT } from "utils/constants";
interface BrandDetailProps {
  brandName: string;
  data: BrandDetailConItem[];
}

const BrandDetailPage: NextPage<BrandDetailProps> = ({ brandName, data }) => {
  // 리덕스 사용 코드
  // const brands = useSelector(brandDetailSelecter);
  // const datas = brands.conItems;
  // console.log(brands);
  console.log(brandName, data);
  return (
    <>
      <Header title={brandName} leftIcon="back" />
      <Count>
        {Object.keys(data).length}
        <span>개의 상품</span>
      </Count>
      <ProductCardList data={data} isClickable={true} />
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const router = context.query.id;
  const brandName = await getBrandName(router);
  const data = await getBrandDetail(router);
  return {
    props: {
      brandName: brandName.conCategory2.name,
      data: data.conItems,
    },
  };
};

const Count = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.text};
  padding: 12px 17px;
  margin-bottom: 9px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  span {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
// interface BrandDetailProps {
//   brandName: string;
//   brandDetailList: BrandDetailConItem;
// }

// const BrandDetailPage: NextPage<BrandDetailProps> = ({
//   brandName,
//   brandDetailList,
// }) => {
//   // 리덕스 사용 코드
//   // const brands = useSelector(brandDetailSelecter);
//   // const datas = brands.conItems;
//   // console.log(brands);

//   console.log(brandName, brandDetailList);
//   return <div></div>;
// };

// export const getServerSideProps = async (context: any) => {
//   const router = context.query.id;
//   const brandName = await getBrandName(router);
//   const data = await getBrandDetail(router);
//   return {
//     props: {
//       brandName: brandName.conCategory2.name,
//       brandDetailList: data.conItems,
//     },
//   };
// };
export default BrandDetailPage;
