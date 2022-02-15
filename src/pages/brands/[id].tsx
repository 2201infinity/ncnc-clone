import { NextPage } from "next";
import { BrandDetailConItem } from "types/response";
import { getBrandDetail, getBrandName } from "utils/api";
import Header from "components/common/Header";
import ProductCardList from "components/common/ProductCardList";
import styled from "styled-components";

interface BrandDetailProps {
  brandName: string;
  data: BrandDetailConItem[];
}

const BrandDetailPage: NextPage<BrandDetailProps> = ({ brandName, data }) => {
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

export default BrandDetailPage;
