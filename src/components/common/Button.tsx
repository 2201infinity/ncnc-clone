import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import BackIcon from "icons/BackIcon";
import CloseIcon from "icons/CloseIcon";

interface IStyledButtonProps {
  variant: "primary" | "secondary";
  width?: string;
  height?: string;
  borderRadius?: string;
  buttonType?: "close" | "back"; // @Note: 닫기 버튼은 close, 뒤로가기는 back으로, 둘다 쓰지 않고 children만 주기
}

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    IStyledButtonProps {
  children?: React.ReactNode;
}

function Button({
  variant,
  width = "375px",
  height = "80px",
  borderRadius = "6px",
  children,
  buttonType,
  ...rest
}: IButtonProps): ReactElement {
  return (
    <>
      <StyledButton
        variant={variant}
        width={width}
        height={height}
        borderRadius={borderRadius}
        {...rest}
      >
        {buttonType === "close" ? (
          <CloseIcon />
        ) : buttonType === "back" ? (
          <BackIcon />
        ) : (
          children
        )}
      </StyledButton>
    </>
  );
}

export default Button;

const StyledButton = styled.button<IStyledButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  cursor: pointer;
  font-size: 15px;

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          /* theme 설정된 후 수정하기 */
          background-color: #ff5757;
          color: #ffffff;
          border: none;
          &:hover {
            background-color: #ff8b84;
          }
        `;
      case "secondary":
        return css`
          background-color: #ff8b84;
          color: black;
          &:hover {
            background-color: #ff5757;
            color: #ffffff;
          }
        `;
    }
  }};
`;
