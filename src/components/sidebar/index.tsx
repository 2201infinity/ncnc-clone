import Header from "components/common/Header";
import EnterIcon from "icons/EnterIcon";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Path from "utils/path";

interface SidebarProps {
  visible: boolean;
  onToggle: () => void;
}

function Sidebar({ visible, onToggle }: SidebarProps) {
  return (
    <SidebarContainer visible={visible}>
      <Header leftIcon="back" title="마이페이지" onClickLeft={onToggle} />
      <InnerSidebar>
        <BackgroundDivider />
        <Link href={Path.Contacts} passHref>
          <LinkedStyled>
            <SidebarMenuBox>
              <MenuText>고객센터</MenuText>
              <EnterIcon />
            </SidebarMenuBox>
          </LinkedStyled>
        </Link>
        <BackgroundDivider />
      </InnerSidebar>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div<{ visible: boolean }>`
  position: absolute;
  z-index: 9999;
  width: 100%;
  max-width: ${({ theme }) => theme.breakPoint.mobile}px;
  top: 0;
  background-color: #fff;
  margin: auto;
  height: 100%;
  ${({ visible }) => (visible ? "visibility: visible" : "visibility: hidden")};
  transition: all 0.2s ease-in-out;
  transform: translateX(${({ visible }) => (visible ? 0 : -100)}vw);
`;

const InnerSidebar = styled.div`
  background-color: rgb(235, 236, 237);
  margin-top: 58px;
`;

const BackgroundDivider = styled.div`
  background-color: rgb(235, 236, 237);
  height: 10px;
`;

const LinkedStyled = styled.a`
  display: block;
`;

const SidebarMenuBox = styled.div`
  padding: 15px 17px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
`;

const MenuText = styled.span`
  color: black;
  font-size: 15px;
  font-weight: 500;
`;

export default Sidebar;
