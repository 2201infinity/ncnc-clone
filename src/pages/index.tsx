import Header from "components/common/Header";
import type { NextPage } from "next";
import { getMainCategoryList } from "utils/api";
import { CategoryItemType, MainCategory } from "types/response";
import styled from "styled-components";
import GridCardList from "components/common/GridCardList";
import { useRouter } from "next/router";

interface HomeProps {
  categoryList: MainCategory[];
}

const Home: NextPage<HomeProps> = ({ categoryList }) => {
  const router = useRouter();

  const onClick = (item: CategoryItemType) => {
    router.push(`categories/${item.id}`);
  };

  return (
    <>
      <Header title="니콘내콘" leftIcon="hamburger" />
      <CategoryListBox>
        <GridCardList data={categoryList} onClick={onClick} />
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
