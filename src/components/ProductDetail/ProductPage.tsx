import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
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
    <Wrapper>
      <NoticeWrapper modalOpen={modalOpen}>
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
        <Footer>
          <Button onClick={() => setModalOpen((prev) => !prev)}>
            {modalOpen ? "구매하기" : "옵션 선택하기"}
          </Button>
        </Footer>
      </ModalWrapper>
    </Wrapper>
  );
}

export default ProductPage;
const Wrapper = styled.div`
  width: 375px;
`;
const ModalWrapper = styled.div``;
const NoticeWrapper = styled.div<{ modalOpen: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
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
  font-size: ${({ theme }) => theme.fontSize.smallText};
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
`;
