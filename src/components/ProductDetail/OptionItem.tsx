import { ReactElement } from "react";
import styled from "styled-components";
import { Option } from "types/response";
import { comma } from "utils/comma";
import { dateFormat } from "utils/date";

interface IOptionProps extends Option {
  discountRate?: number;
  onClick: (item: Option) => void;
}

function OptionItem({
  expireAt,
  count,
  sellingPrice,
  discountRate,
  onClick,
}: IOptionProps): ReactElement {
  return (
    <OptionContainer>
      <OptionInfo>
        <LeftInfoWrapper>
          <ExpirationPeriod>
            <Label>유효기간 </Label>
            {dateFormat(expireAt)} 까지
          </ExpirationPeriod>
          <DiscountPrice>
            <Label>할인가 </Label>
            {comma(sellingPrice)}원
          </DiscountPrice>
        </LeftInfoWrapper>
        <DiscountRate>{discountRate}%</DiscountRate>
      </OptionInfo>
    </OptionContainer>
  );
}

export default OptionItem;

const OptionContainer = styled.div`
  border: 1px solid #e5e5e5;
`;
const OptionInfo = styled.div`
  margin-left: 17px;
  height: 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const ExpirationPeriod = styled.div`
  font-size: ${({ theme }) => theme.fontSize.smallText};
  display: flex;
  margin-bottom: 9.5px;
`;
const DiscountPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSize.smallText};
  display: flex;
`;
const DiscountRate = styled.div`
  font-size: ${({ theme }) => theme.fontSize.smallText};
  margin-right: 17px;
  color: ${({ theme }) => theme.colors.lightRed};
`;

const LeftInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Label = styled.div`
  font-size: ${({ theme }) => theme.fontSize.smallText};
  color: ${({ theme }) => theme.colors.gray};
  width: 50px;
  margin-right: 9px;
`;
