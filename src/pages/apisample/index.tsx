import { GetServerSideProps, NextPage } from "next";
import { FAQCont, Qa } from "types/response";
import { getFAQList } from "utils/api";

interface ApiSampleProps {
  faqCont: Qa[];
}

const ApiSample: NextPage<ApiSampleProps> = ({ faqCont }) => {
  console.log(faqCont);
  return (
    <>
      {faqCont.map((d: Qa) => {
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
  const data = await getFAQList(1); // or 2

  return {
    props: { faqCont: data.qas },
  };
};

export default ApiSample;
