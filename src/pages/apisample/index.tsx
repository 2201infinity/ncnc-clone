import type { InferGetServerSidePropsType, NextPage } from "next";

import { GetServerSideProps } from "next";
import { FAQCont } from "src/types/response";
import { getFAQList } from "src/utils/api";

interface ApiSampleProps {
  data: FAQCont;
}

const ApiSample = ({ data }: ApiSampleProps): JSX.Element => {
  console.log(data);
  return (
    <>
      {data.qas.map((d: any) => {
        const { answer, id, question } = d;
        return (
          <div key={id}>
            <p>{question}</p>
            <p>{answer}</p>
          </div>
        );
      })}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getFAQList();

  return {
    props: { data },
  };
};

export default ApiSample;
