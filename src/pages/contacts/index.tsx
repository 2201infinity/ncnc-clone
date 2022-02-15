import { GetStaticProps, NextPage } from "next";
import { getFAQList, getFAQType } from "utils/api";
import styled from "styled-components";
import Header from "components/common/Header";
import InfoBox from "components/contacts/InfoBox";
import FAQ from "components/contacts/FAQ";
import React, { useState, useEffect } from "react";
import { Qa, QaType } from "types/faq";

interface ContactsProps {
  qas: Qa[];
  qaTypes: QaType[];
}

const Contacts: NextPage<ContactsProps> = ({ qas, qaTypes }) => {
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
      <Header title="고객센터" rightIcon="close" />
      <ContactsContainer>
        <InfoBox />
        <FAQ
          qaList={qaList}
          onToggleSelect={onToggleSelect}
          qaId={qaId}
          qaTypes={qaTypes}
        />
      </ContactsContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const faqList = await getFAQList(1);
  const faqType = await getFAQType();
  return {
    props: { qas: faqList.qas, qaTypes: faqType.qaTypes },
  };
};

export default Contacts;

const ContactsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`;
