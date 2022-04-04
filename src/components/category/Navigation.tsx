import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { MainCategory } from "types/category";
import useNavigation from "./hooks/useNavigation";

interface NavigationProps {
  item: MainCategory[];
}

export const Navigation = ({ item }: NavigationProps): JSX.Element => {
  const router = useRouter();
  const { scrollRef, onDragStart, onDragEnd, onDragMove } = useNavigation();

  return (
    <NavContainer
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      ref={scrollRef}
    >
      {item.map((menu) => {
        const { id, name } = menu;
        return (
          <Link href={`/categories/${id}`} passHref key={id}>
            <Menu router={String(id) === router.query.id}>{name}</Menu>
          </Link>
        );
      })}
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  overflow: auto;
  padding-left: 17px;
  background-color: ${({ theme }) => theme.colors.white};
  &::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 10px;
`;

const Menu = styled.a<{ router: boolean }>`
  text-align: center;
  padding: 8px 4px;
  /* min-width: 50px; */
  max-width: 110px;
  color: ${(props) => (props.router ? "red" : "black")};
  border-bottom: ${(props) => (props.router ? "2px solid red" : "none")};
  margin: 0 5px;
  white-space: nowrap;
`;
