import { ProductCardItem } from "components/common/ProductCardItem";
import React, { ReactElement, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Option, ProductDetailConItem } from "types/response";
import { getProductDetail } from "utils/api";
import Button from "../common/Button";
import OptionModal from "./OptionModal";

function ProductPage({ itemId }: { itemId: string }): ReactElement {
  const [modalOpen, setModalOpen] = useState(false);
  const [productDetail, setProductDetail] =
    useState<ProductDetailConItem | null>(null);
  const [notice, setNotice] = useState<string[]>();
  const [options, setOptions] = useState<Option[]>();

  const onToggleModal = () => {
    setModalOpen(!modalOpen);
  };
  useEffect(() => {
    if (itemId) {
      getData();
    }
  }, [itemId]);

  useEffect(() => {
    setNotice(productDetail?.warning.split("\n"));
    setOptions(productDetail?.options);
  }, [productDetail]);

  const getData = async () => {
    try {
      const data = await getProductDetail(itemId);
      setProductDetail(data.conItem);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      {productDetail !== null ? <ProductCardItem item={productDetail} /> : null}
      <NoticeWrapper modalOpen={modalOpen}>
        {notice?.map((item: string, index: number) => (
          <Notice key={`item_${index}`}>{item}</Notice>
        ))}
      </NoticeWrapper>

      <ModalWrapper>
        <OptionModal
          isModal={modalOpen}
          onToggleModal={onToggleModal}
          options={options}
          discountRate={productDetail?.discountRate}
        ></OptionModal>
        <Footer>
          <Button onClick={onToggleModal} disabled={modalOpen}>
            {modalOpen ? "구매하기" : "옵션 선택하기"}
          </Button>
        </Footer>
      </ModalWrapper>
    </Wrapper>
  );
}

export default ProductPage;
const Wrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;
const ModalWrapper = styled.div``;
const NoticeWrapper = styled.div<{ modalOpen: boolean }>`
  padding-top: 18px;
  padding-left: 17px;
  padding-right: 17px;

  height: 100%;
  ${({ modalOpen }) => {
    switch (modalOpen) {
      case true:
        return css`
          background-color: rgba(0, 0, 0, 0.4);
        `;
    }
  }};
`;
const Notice = styled.div`
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.fontSize.smallText};
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
`;
