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
  width,
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
          animation: FadeIn 0.4s ease-in;
        `;
      case false:
        return css`
          display: none;
          animation: FadeOut 0.8s ease-out;
        `;
    }
  }};

  @keyframes FadeIn {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes FadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.1;
      transform: translateY(100%);
    }
  }
`;
