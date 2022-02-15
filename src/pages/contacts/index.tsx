import { GetServerSideProps, NextPage } from "next";
import { FAQCont } from "types/response";
import { getFAQList } from "utils/api";
import styled from "styled-components";
import Header from "components/common/Header";
import InfoBox from "components/InfoBox";
import FAQ from "components/FAQ";
import React, { useState, useEffect } from "react";

const Contacts: NextPage<FAQCont> = ({ qas }) => {
  const [qaList, setQaList] = useState(qas);
  const [qaId, setQaId] = useState<number>(1);

  const onToggleSelect = (id: number) => setQaId(id);

  useEffect(() => {
    const getData = async () => {
      const response = await getFAQList(qaId);
      setQaList(response.qas);
    };
    getData();
  }, [qaId]);

  return (
    <>
      <Header title="고객센터" />
      <ContactsContainer>
        <InfoBox />
        <FAQ data={qaList} onToggleSelect={onToggleSelect} qaId={qaId} />
      </ContactsContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getFAQList(1);
  return {
    props: { qas: data.qas },
  };
};

export default Contacts;

const ContactsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`;