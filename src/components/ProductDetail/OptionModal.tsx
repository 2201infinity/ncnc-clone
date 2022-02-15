import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { Option } from "types/response";
import Modal from "./Modal";
import OptionItem from "./OptionItem";

interface IOptionModalProps {
  isModal: boolean;
  options?: Option[];
  discountRate?: number;
}

function OptionModal({
  isModal,
  options,
  discountRate,
}: IOptionModalProps): ReactElement {
  const [selectedOption, setSelectedOption] = useState<Option>();
  const onClick = (item: Option) => {
    console.log("찍");
    console.log(item);
  };
  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);
  return (
    <Modal isModal={isModal}>
      <BeforeOption>
        <Span>옵션 선택하기</Span>
      </BeforeOption>
      <OptionList>
        {options?.map((item) => (
          <OptionItem
            key={item.expireAt}
            expireAt={item.expireAt}
            count={item.count}
            sellingPrice={item.sellingPrice}
            discountRate={discountRate}
            onClick={(item: Option) => onClick(item)} // 컴포넌트에서 이벤트 실행 x
          ></OptionItem>
        ))}
      </OptionList>
    </Modal>
  );
}

export default OptionModal;

const BeforeOption = styled.div`
  height: 49px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;
const Span = styled.div`
  font-size: ${({ theme }) => theme.fontSize.text};
  font-weight: 600;
  margin-left: 17px;
`;
const OptionList = styled.div`
  height: 183px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: scroll;
`;
