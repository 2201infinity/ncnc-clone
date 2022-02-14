import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

interface HeaderProps {
  title?: string;
  leftIcon?: "hamburger" | "back";
  closeIcon?: boolean;
}

function Header({ title, closeIcon, leftIcon }: HeaderProps) {
  return <HeaderContainer>Header</HeaderContainer>;
}

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 0px;
  z-index: ${({ theme }) => theme.zIndexes.header};
`;

export default Header;
