import { ReactElement } from "react";
import styled, { css } from "styled-components";

interface IModalStyled {
  width?: string;
  height?: string;
  isModal: boolean;
}

interface IModalProps extends IModalStyled {
  children: React.ReactNode;
}
function Modal({
  width = "375px",
  height = "241px",
  isModal,
  children,
  ...rest
}: IModalProps): ReactElement {
  return (
    <ModalContainer {...rest}>
      <ModalInner width={width} height={height} isModal={isModal}>
        {children}
      </ModalInner>
    </ModalContainer>
  );
}

export default Modal;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalInner = styled.div<IModalStyled>`
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  ${({ isModal }) => {
    switch (isModal) {
      case true:
        return css`
          position: absolute;
          z-index: 9999;
          bottom: 80px;
        `;
      case false:
        return css`
          display: none;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        `;
    }
  }};
`;
