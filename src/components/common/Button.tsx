import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import BackIcon from "icons/BackIcon";
import CloseIcon from "icons/CloseIcon";

interface IStyledButtonProps {
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
  width,
  height = "80px",
  borderRadius = "0px",
  children,
  buttonType,
  ...rest
}: IButtonProps): ReactElement {
  return (
    <>
      <StyledButton
        width={width}
        height={height}
        borderRadius={borderRadius}
        buttonType={buttonType}
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
  width: 100%;
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.text};

  :disabled {
    background-color: ${({ theme }) => theme.colors.buttonDisabled};
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ buttonType }) => {
    switch (buttonType) {
      case "close" || "back":
        return css`
          background-color: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.black};
          &:hover {
            background-color: ${({ theme }) => theme.colors.buttonIconHover};
          }
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.colors.lightRed};
          color: ${({ theme }) => theme.colors.white};
          border: ${({ theme }) => theme.colors.border};
          &:hover {
            background-color: ${({ theme }) => theme.colors.buttonHover};
          }
        `;
    }
  }};
`;
