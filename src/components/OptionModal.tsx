import { ReactElement } from "react";
import styled from "styled-components";
import Modal from "./common/Modal";

interface MessageDeleteModalProps {
  isModal: boolean;
}

function OptionModal({ isModal }: MessageDeleteModalProps): ReactElement {
  return (
    <>
      <Modal height="200px" isModal={isModal}>
        <ModalInner>
          <BeforeOption>옵션 선택하기</BeforeOption>
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
