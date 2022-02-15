import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Option, ProductDetailConItem } from "types/response";
import { getProductDetail } from "utils/api";
import Button from "../common/Button";
import OptionModal from "../OptionModal";

function ProductPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [productDetail, setProductDetail] =
    useState<ProductDetailConItem | null>(null);
  const [notice, setNotice] = useState<string[]>();
  const [options, setOptions] = useState<Option[]>();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setNotice(productDetail?.warning.split("\n"));
    setOptions(productDetail?.options);
  }, [productDetail]);

  const getData = async () => {
    try {
      const data = await getProductDetail(501);
      setProductDetail(data.conItem);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NoticeWrapper>
        <BeforeNotice>유의사항</BeforeNotice>
        {notice?.map((item: string, index: number) => (
          <Notice key={`item_${index}`}>{item}</Notice>
        ))}
      </NoticeWrapper>
      <ModalWrapper>
        <OptionModal
          isModal={modalOpen}
          options={options}
          discountRate={productDetail?.discountRate}
        ></OptionModal>
        <Button onClick={() => setModalOpen((prev) => !prev)}>모달 버튼</Button>
      </ModalWrapper>
    </>
  );
}

export default ProductPage;

const ModalWrapper = styled.div``;
const NoticeWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`;
const BeforeNotice = styled.div`
  font-size: ${({ theme }) => theme.fontSize.text};
  font-weight: 600;
`;
const Notice = styled.div`
  font-size: ${({ theme }) => theme.fontSize.smallText};
`;
