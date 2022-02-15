import { ReactElement } from "react";
import styled from "styled-components";
import { Option } from "types/response";

interface IOptionProps extends Option {
  discountRate?: number;
}

function OptionItem({
  expireAt,
  count,
  sellingPrice,
  discountRate,
}: IOptionProps): ReactElement {
  return (
    <OptionContainer>
      <ExpirationPeriod>유효기간: {expireAt} </ExpirationPeriod>
      <DiscountPrice>할인가: {sellingPrice}원</DiscountPrice>
      <DiscountRate>할인율: {discountRate}%</DiscountRate>
    </OptionContainer>
  );
}

export default OptionItem;

const OptionContainer = styled.div`
  border: 1px solid gray;
`;
const ExpirationPeriod = styled.div``;
const DiscountPrice = styled.div``;
const DiscountRate = styled.div``;
