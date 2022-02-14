import Header from "components/common/Header";
import type { NextPage } from "next";
import { getMainCategoryList } from "utils/api";
import { MainCategoryList } from "types/response";
import styled from "styled-components";
import GridCardList from "components/common/GridCardList";

interface HomeProps {
  categoryList: MainCategoryList;
}

const Home: NextPage<HomeProps> = ({ categoryList }) => {
  return (
    <>
      <Header title="니콘내콘" leftIcon="hamburger" />
      <CategoryListBox>
        {/* <GridCardList list={categoryList} /> */}
        {categoryList.conCategory1s.map((item) => (
          <div key={item.id}>{item.id}</div>
        ))}
      </CategoryListBox>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getMainCategoryList();
  return {
    props: {
      categoryList: data,
    },
  };
};

const CategoryListBox = styled.div`
  padding: 17px;
`;

export default Home;
