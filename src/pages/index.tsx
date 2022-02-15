import Header from "components/common/Header";
import type { NextPage } from "next";
import { getClearanceList, getMainCategoryList } from "utils/api";
import { MainCategory, ClearanceListConItems } from "types/response";
import styled from "styled-components";
import GridCardList from "components/common/GridCardList";
import HomeBanner from "components/home/HomeBanner";
import Path from "utils/path";
import { useState } from "react";
import Sidebar from "components/sidebar";
import ProductCardList from "components/common/ProductCardList";

interface HomeProps {
  categoryList: MainCategory[];
  conItems: ClearanceListConItems[];
}

const Home: NextPage<HomeProps> = ({ categoryList, conItems }) => {
  const [isSidebar, setIsSidebar] = useState(false);

  const onToggleSidebar = () => setIsSidebar(!isSidebar);

  return (
    <>
      <Header
        title="니콘내콘"
        leftIcon="hamburger"
        onClickLeft={onToggleSidebar}
      />
      <HomeBanner />
      <CategoryListBox>
        <GridCardList data={categoryList} path={Path.Categories} />
      </CategoryListBox>

      <ClearanceListBox>
        <ClearanceTitle>
          <ClearanceTitleTopText>놓치지 마세요</ClearanceTitleTopText>
          <ClearanceTitleBottomText>오늘의 땡처리콘!</ClearanceTitleBottomText>
        </ClearanceTitle>
        <ProductCardList data={conItems} isClickable={true} />
      </ClearanceListBox>

      <Sidebar visible={isSidebar} onToggle={onToggleSidebar} />
    </>
  );
};

export const getStaticProps = async () => {
  const categorys = await getMainCategoryList();
  const clearances = await getClearanceList();
  return {
    props: {
      categoryList: categorys.conCategory1s,
      conItems: clearances.conItems,
    },
  };
};

const CategoryListBox = styled.div`
  padding: 17px;
  display: block;
  overflow: hidden;
`;

const ClearanceListBox = styled.div``;

const ClearanceTitle = styled.div`
  padding-left: 20px;
  margin-bottom: 14px;
`;

const ClearanceTitleTopText = styled.div`
  font-size: 14px;
  color: red;
  margin-bottom: 5px;
`;

const ClearanceTitleBottomText = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export default Home;
