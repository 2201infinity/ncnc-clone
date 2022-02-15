import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { Option } from "types/response";
import { comma } from "utils/comma";
import { dateFormat } from "utils/date";
import Modal from "./Modal";
import OptionItem from "./OptionItem";

interface IOptionModalProps {
  isModal: boolean;
  options?: Option[];
  discountRate?: number;
  onToggleModal: () => void;
  onClick: (e: React.MouseEvent<HTMLDivElement>, item: Option) => void;
}

function OptionModal({
  isModal,
  options,
  discountRate,
  onToggleModal,
  onClick,
}: IOptionModalProps): ReactElement {
  return (
    <Modal isModal={isModal}>
      <BeforeOption>
        <Span>옵션 선택하기</Span>
      </BeforeOption>
      <OptionList>
        {options?.map((item) => (
          <div key={item.expireAt} onClick={(e) => onClick(e, item)}>
            <OptionItem
              expireAt={item.expireAt}
              count={item.count}
              sellingPrice={item.sellingPrice}
              discountRate={discountRate}
            ></OptionItem>
          </div>
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
