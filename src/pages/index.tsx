import Header from "components/common/Header";
import type { NextPage } from "next";
import { getMainCategoryList } from "utils/api";
import { MainCategoryList } from "types/response";
import ProductPage from "components/ProductPage";

interface HomeProps {
  categoryList: MainCategoryList;
}

const Home: NextPage<HomeProps> = ({ categoryList }) => {
  // console.log(categoryList);

  return (
    <>
      <Header title="니콘내콘" leftIcon="hamburger" />
      <ProductPage />
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getMainCategoryList();

  return {
    props: {
      categoryList: data.conCategory1s,
    },
  };
};

export default Home;
