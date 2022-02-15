import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MainCategory } from "types/response";

interface NavigationProps {
  item: MainCategory[];
}

export const Navigation = ({ item }: NavigationProps): JSX.Element => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current!.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e: React.DragEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };
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
