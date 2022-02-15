import { GetServerSideProps, NextPage } from "next";
import { FAQCont } from "types/response";
import { getFAQList } from "utils/api";
import styled from "styled-components";
import Header from "components/common/Header";
import InfoBox from "components/InfoBox";
import FAQ from "components/FAQ";

const Contacts: NextPage<FAQCont> = ({ qas }) => {
  return (
    <>
      <Header title="고객센터" />
      <ContactsContainer>
        <InfoBox />
        <FAQ data={qas} />
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

const ContactsContainer = styled.div``;
