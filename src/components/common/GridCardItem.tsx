import React from "react";
import styled from "styled-components";

function GridCardItem() {
  return (
    <CardItemContainer>
      <CardItem>
        <ItemLinked>
          <ItemContent>
            <ItemImage src="https://d1dsr05o5i286u.cloudfront.net/fefcb4d5-948a-48e7-a73c-8d7b33cdd218.jpg?w=86&h=86&f=" />
            <ItemText>땡철이</ItemText>
          </ItemContent>
        </ItemLinked>
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
