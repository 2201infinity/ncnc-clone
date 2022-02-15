import { GetServerSideProps, NextPage } from "next";
import Router, { useRouter } from "next/router";
import {
  BrandAndProductListConCategory2,
} from "types/response";
import { getBrandAndProductList } from "utils/api";
// import { useDispatch, useSelector } from "react-redux";
// import { setBrandDetail } from "stores/brandDetail";

interface CategoryDetailProps {
  categoryDetailList: BrandAndProductListConCategory2[];
}

const CategoryDetailPage: NextPage<CategoryDetailProps> = ({
  categoryDetailList,
}) => {
  console.log(categoryDetailList);

  // 리덕스 사용 코드
  // const dispatch = useDispatch();
  // const onClick = (category: BrandAndProductListConCategory2) => {
  //   const body = {
  //     id: category.id,
  //     name: category.name,
  //     conCategory1Id: category.conCategory1Id,
  //     imageUrl: category.imageUrl,
  //     conItems: [category.conItems],
  //   };
  //   dispatch(setBrandDetail(body));
  //   router.push(`/brands/${category.id}`);
  // };

  return (
    <div>
      {categoryDetailList.map((category) => {
        const { id, imageUrl, name, conCategory1Id, conItems } = category;
        return <div key={id}>{name}</div>;
      })}
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const router = context.query.id;
  const data = await getBrandAndProductList(router);

  return {
    props: { categoryDetailList: data.conCategory1.conCategory2s },
  };
};

export default CategoryDetailPage;
