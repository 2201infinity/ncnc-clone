import { useRouter } from "next/router";
import React from "react";
import styled, { css } from "styled-components";

interface HeaderProps {
  title?: string;
  leftIcon?: "hamburger" | "back";
  closeIcon?: boolean;
}

function Header({ title, closeIcon, leftIcon }: HeaderProps) {
  return (
    <HeaderContainer>
      <LeftBox>
        <HeaderIconButtonStyled>버튼</HeaderIconButtonStyled>
      </LeftBox>
      <Title>{title}</Title>
      <RightBox>
        <HeaderIconButtonStyled>X</HeaderIconButtonStyled>
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
  max-width: 42rem;
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
