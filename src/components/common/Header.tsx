import BackIcon from "icons/BackIcon";
import CloseIcon from "icons/CloseIcon";
import HambugerIcon from "icons/HambugerIcon";
import { useRouter } from "next/router";
import React from "react";
import styled, { css } from "styled-components";
import Button from "./Button";

interface HeaderProps {
  title?: string;
  leftIcon?: "hamburger" | "back" | "close";
  closeIcon?: boolean;
  onClickLeft?: () => void;
  onClickRight?: () => void;
}

function Header({
  title,
  closeIcon,
  leftIcon,
  onClickLeft,
  onClickRight,
}: HeaderProps) {
  const iconPrint = (icon: "hamburger" | "back" | "close") => {
    switch (icon) {
      case "hamburger":
        return <HambugerIcon />;
      case "close":
        return <CloseIcon />;
      case "back":
        return <BackIcon />;
    }
  };

  return (
    <HeaderContainer>
      <LeftBox>
        <HeaderIconButtonStyled onClick={onClickLeft}>
          {leftIcon && iconPrint(leftIcon)}
        </HeaderIconButtonStyled>
      </LeftBox>
      <Title>{title}</Title>
      <RightBox>
        <HeaderIconButtonStyled onClick={onClickRight}>
          <CloseIcon />
        </HeaderIconButtonStyled>
      </RightBox>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 0px;
  z-index: ${({ theme }) => theme.zIndexes.header};
  width: 100%;
  display: flex;
  height: 59px;
  max-width: 48rem;
`;

const BoxLayout = css`
  flex: 1;
  display: flex;
  min-width: 90px;
`;

const LeftBox = styled.div`
  ${BoxLayout}
`;

const HeaderIconButtonStyled = styled.button`
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: 600;
  flex: 3;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const RightBox = styled.div`
  ${BoxLayout}
  justify-content: flex-end;
`;

export default Header;
