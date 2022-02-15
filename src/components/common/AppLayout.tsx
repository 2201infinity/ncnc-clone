import React, { ReactNode } from "react";
import styled from "styled-components";

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <Container>
      <MainLayout>{children}</MainLayout>
    </Container>
  );
}

export default AppLayout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  height: auto;
  padding: 0;
  margin: auto;
  padding-top: 59px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  overflow: scroll;
  background-color: #fff;
  max-width: 672px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MainLayout = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakPoint.mobile}px;
  background-color: ${({ theme }) => theme.colors.layoutBackground};
`;
