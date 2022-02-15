import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Button from "components/common/Button";
import { Qa, QaType } from "types/response";
import QuestionBox from "components/QuestionBox";
import { getFAQType } from "utils/api";

interface FAQProps {
  data: Qa[];
  onToggleSelect: (id: number) => void;
  onSelectAnswer: (id: number | null) => void;
  qaId: number;
}

const FAQ: React.FC<FAQProps> = ({ data, onToggleSelect, qaId }) => {
  const [qaTypes, setQaTypes] = useState<QaType[]>();
  const [isSelectedId, setIsSelectedId] = useState<number | null>();

  const handleSelectAnswer = (id: number) => {
    setIsSelectedId(id);
    if (id === isSelectedId) {
      setIsSelectedId(null);
    }
  };
  useEffect(() => {
    const getData = async () => {
      const response = await getFAQType();
      setQaTypes(response.qaTypes);
    };
    getData();
  }, []);

  return (
    <Container>
      <Box>
        <h3>자주 묻는 질문</h3>
        {qaTypes?.map((item) => (
          <StyledButton
            key={item.id}
            variant="secondary"
            width="50%"
            height="40px"
            onClick={() => onToggleSelect(item.id)}
            isSelected={item.id === qaId}
          >
            {item.name}
          </StyledButton>
        ))}
      </Box>
      <GrayBox></GrayBox>

      {data.map((item) => (
        <QuestionBox
          item={item}
          key={item.id}
          handleSelectAnswer={() => handleSelectAnswer(item.id)}
          onSelectAnswer={isSelectedId === item.id}
        />
      ))}
    </Container>
  );
};

export default FAQ;

const Container = styled.div`
  height: 89px;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.title};
    font-weight: 500;
    margin-bottom: 7px;
  }
`;

const Box = styled.div`
  padding: 0 17px;
  border-bottom: 1px solid #c4c4c4;
`;

const GrayBox = styled.div`
  height: 9px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const StyledButton = styled(Button)<{ isSelected: boolean }>`
  background: transparent;
  border-radius: 0;
  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.black};
  }
  ${({ isSelected }) =>
    isSelected &&
    css`
      border-bottom: 2px solid ${({ theme }) => theme.colors.lightRed};
    `}
`;
