import React, { useState } from "react";
import styled from "styled-components";
import { Qa } from "types/response";
import DownIcon from "icons/DownIcon";
import UpIcon from "icons/UpIcon";

interface QuestionProps {
  item: Qa;
}

const QuestionBox = ({ item }: QuestionProps) => {
  const { answer, question } = item;
  const [onAnswer, setOnAnswer] = useState(false);
  const handleAnswer = () => {
    setOnAnswer(!onAnswer);
  };
  return (
    <Container>
      <Box onClick={handleAnswer}>
        <Question>
          <span>Q.</span>
          <p>{question}</p>
        </Question>
        {onAnswer === true ? <UpIcon /> : <DownIcon />}
      </Box>
      {onAnswer === true && <Answer>{answer}</Answer>}
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
`;

const Question = styled.div`
  display: flex;
`;

const Answer = styled.div`
  padding: 17px;
  background-color: ${({ theme }) => theme.colors.background};
`;
