import Header from "components/common/Header";
import ProductPage from "components/productDetail/ProductPage";
import { useRouter } from "next/router";
import React from "react";

const Items = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header title="" leftIcon="back" />
      <ProductPage itemId={id as string} />
    </>
  );
};

export default Items;
