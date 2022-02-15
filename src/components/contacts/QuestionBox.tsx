import React from "react";
import styled from "styled-components";
import DownIcon from "icons/DownIcon";
import UpIcon from "icons/UpIcon";
import { Qa } from "types/faq";

interface QuestionProps {
  item: Qa;
  onSelectAnswer: boolean;
  handleSelectAnswer: () => void;
}

const QuestionBox = ({
  item,
  onSelectAnswer,
  handleSelectAnswer,
}: QuestionProps) => {
  const { answer, question } = item;

  return (
    <Container>
      <Box onClick={handleSelectAnswer}>
        <Question>
          <span>Q.</span>
          <p>{question}</p>
        </Question>
        {onSelectAnswer ? <UpIcon /> : <DownIcon />}
      </Box>
      {onSelectAnswer && <Answer>{answer}</Answer>}
    </Container>
  );
};

export default QuestionBox;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  span {
    font-size: ${({ theme }) => theme.fontSize.title};
    color: ${({ theme }) => theme.colors.lightRed};
    margin-right: 9px;
  }
`;

const Box = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  padding: 0 17px;
  border: 1px solid ${({ theme }) => theme.colors.background};
`;

const Question = styled.div`
  display: flex;
  cursor: pointer;
`;

const Answer = styled.div`
  padding: 17px;
  background-color: ${({ theme }) => theme.colors.background};
  line-height: 21px;
`;
