import React from "react";
import styled from "styled-components";

function Layout() {
  return (
    <Container>
      <MainLayout>Main</MainLayout>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 0;
`;

const MainLayout = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakPoint.mobile}px;
  background-color: ${({ theme }) => theme.colors.lightRed};
`;
