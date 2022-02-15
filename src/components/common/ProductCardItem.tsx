import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

import { BrandDetailConItem } from "types/brand";
import { ConCategory2 } from "types/category";
import { ClearanceListConItems } from "types/clearance";
import { ProductDetailConItem } from "types/product";

import { comma } from "utils/comma";

interface ItemProps {
  item: BrandDetailConItem | ProductDetailConItem | ClearanceListConItems | any;
  conCategory2?: ConCategory2;
}
interface ProductCardItemProps extends ItemProps {
  isClickable?: boolean;
}

export const ProductCardItem = ({
  item,
  isClickable,
}: ProductCardItemProps) => {
  const {
    id,
    imageUrl,
    name,
    originalPrice,
    minSellingPrice,
    discountRate,
    conCategory2,
  } = item;
  const router = useRouter();
  const onClick = () => {
    isClickable && router.push(`/items/${id}`);
  };

  return (
    <CardItemContainer onClick={onClick}>
      <Image src={imageUrl} alt={name} isClickable={isClickable} />
      <CardDesc>
        {conCategory2 && <ConCategoryName>{conCategory2.name}</ConCategoryName>}
        <ProductName>{name}</ProductName>
        <p>
          <DiscountRate>{discountRate}%</DiscountRate>
          <MinSellingPrice>{comma(minSellingPrice)}원</MinSellingPrice>
          <OriginalPrice>{comma(originalPrice)}원</OriginalPrice>
        </p>
      </CardDesc>
    </CardItemContainer>
  );
};

const CardItemContainer = styled.div`
  display: flex;
  padding: 15px 21px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
`;

const Image = styled.img<{ isClickable: boolean | undefined }>`
  width: ${(props) => (props.isClickable ? "15%" : "20%")};
  min-width: ${(props) => (props.isClickable ? "70px" : "90px")};
`;

const CardDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: ${({ theme }) => theme.fontSize.title};
  margin-left: 17px;
  line-height: 19.2px;
`;

const ConCategoryName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.text};
  color: ${({ theme }) => theme.colors.gray};
`;
const ProductName = styled.p`
  font-weight: bold;
`;
const DiscountRate = styled.span`
  color: ${({ theme }) => theme.colors.lightRed};
`;

const MinSellingPrice = styled.span`
  font-weight: bold;
  margin: 0 10px;
`;

const OriginalPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSize.smallText};
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: line-through;
`;
