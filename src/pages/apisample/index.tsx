import { GetServerSideProps } from "next";
import { FAQCont, Qa } from "types/response";
import { getFAQList } from "utils/api";

interface ApiSampleProps {
  data: FAQCont;
}

const ApiSample = ({ data }: ApiSampleProps): JSX.Element => {
  console.log(data);
  return (
    <>
      {data.qas.map((d: Qa) => {
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
