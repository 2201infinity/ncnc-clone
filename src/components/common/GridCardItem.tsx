import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { CategoryItemType } from "types/response";
import { PathValueTypes } from "utils/path";

interface CardItemProps {
  item: CategoryItemType;
  path: PathValueTypes;
}

function GridCardItem({ item, path }: CardItemProps) {
  const { imageUrl, name, id } = item;
  return (
    <CardItemContainer>
      <CardItem>
        <Link href={`${path}/${id}`} passHref>
          <ItemLinked>
            <ItemContent>
              <ItemImage src={imageUrl} />
              <ItemText>{name}</ItemText>
            </ItemContent>
          </ItemLinked>
        </Link>
      </CardItem>
    </CardItemContainer>
  );
}

const CardItemContainer = styled.div`
  padding: 1px;
  width: 33.333%;
  float: left;
`;

const CardItem = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
`;

const ItemLinked = styled.a`
  margin-bottom: 0.25rem;
  border-radius: 0.5rem;
`;

const ItemContent = styled.div`
  transform: translateZ(0);
  transition: transform 0.25s ease-out, -webkit-transform 0.25s ease-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const ItemImage = styled.img`
  width: 43px;
  height: 43px;
  align-self: center;
  max-width: 100%;
`;

const ItemText = styled.div`
  margin-top: 5px;
  font-size: 0.875rem;
  padding: 0 0.5rem;
`;

export default GridCardItem;
