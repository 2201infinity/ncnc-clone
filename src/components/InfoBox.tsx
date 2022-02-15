import React from "react";
import styled from "styled-components";

function InfoBox() {
  return (
    <InfoContainer>
      <h3>상담시간 안내</h3>
      <p>평일 10: 00 ~ 18:00</p>
      <span>점심시간 12:30 - 13:30 / 토 ・ 일 ・ 공휴일 휴무</span>
    </InfoContainer>
  );
}

export default InfoBox;

const InfoContainer = styled.div`
  height: 200px;
  padding: 43px 17px;
  h3 {
    font-size: ${({ theme }) => theme.fontSize.title};
    margin-bottom: 7px;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.text};
    margin-bottom: 3px;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.text};
    color: ${({ theme }) => theme.colors.gray};
  }
`;
