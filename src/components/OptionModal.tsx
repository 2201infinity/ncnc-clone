import { ReactElement } from "react";
import styled from "styled-components";
import { Option } from "types/response";
import Modal from "./ProductDetail/Modal";
import OptionItem from "./ProductDetail/OptionItem";

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
  return (
    <>
      <Modal height="200px" isModal={isModal}>
        <ModalInner>
          <BeforeOption>옵션 선택하기</BeforeOption>
          {options?.map((item) => (
            <OptionItem
              key={item.expireAt}
              expireAt={item.expireAt}
              count={item.count}
              sellingPrice={item.sellingPrice}
              discountRate={discountRate}
            ></OptionItem>
          ))}
          {(console.log(options), console.log(discountRate))}
        </ModalInner>
      </Modal>
    </>
  );
}

export default OptionModal;

const ModalInner = styled.div``;
const BeforeOption = styled.span`
  font-size: ${({ theme }) => theme.fontSize.text};
`;
