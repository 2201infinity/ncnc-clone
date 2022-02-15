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
      <OptionInfo>
        <ExpirationPeriod>유효기간: {expireAt} </ExpirationPeriod>
        <DiscountPrice>할인가: {sellingPrice}원</DiscountPrice>
        <DiscountRate>할인율: {discountRate}%</DiscountRate>
      </OptionInfo>
    </OptionContainer>
  );
}

export default OptionItem;

const OptionContainer = styled.div`
  border: 1px solid gray;
`;
const OptionInfo = styled.div`
  margin-left: 17px;
  height: 61px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ExpirationPeriod = styled.div`
  font-size: ${({ theme }) => theme.fontSize.smallText};
`;
const DiscountPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSize.smallText};
`;
const DiscountRate = styled.div`
  font-size: ${({ theme }) => theme.fontSize.smallText};
`;
