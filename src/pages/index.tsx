import Header from "components/common/Header";
import type { NextPage } from "next";
import { getMainCategoryList } from "utils/api";
import { MainCategory } from "types/response";
import styled from "styled-components";
import GridCardList from "components/common/GridCardList";
import HomeBanner from "components/home/HomeBanner";
import Path from "utils/path";

interface HomeProps {
  categoryList: MainCategory[];
}

const Home: NextPage<HomeProps> = ({ categoryList }) => {
  return (
    <>
      <Header title="니콘내콘" leftIcon="hamburger" />
      <HomeBanner />
      <CategoryListBox>
        <GridCardList data={categoryList} path={Path.Brands} />
      </CategoryListBox>
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

const CategoryListBox = styled.div`
  padding: 17px;
  display: block;
  overflow: hidden;
`;

export default Home;
