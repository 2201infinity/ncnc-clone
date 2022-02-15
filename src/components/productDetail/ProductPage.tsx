import { ProductCardItem } from "components/common/ProductCardItem";
import React, { ReactElement, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Option, ProductDetailConItem } from "types/category";
import { getProductDetail } from "utils/api";
import { comma } from "utils/comma";
import { dateFormat } from "utils/date";
import Button from "../common/Button";
import OptionModal from "./OptionModal";

function ProductPage({ itemId }: { itemId: string }): ReactElement {
  const [modalOpen, setModalOpen] = useState(false);
  const [productDetail, setProductDetail] =
    useState<ProductDetailConItem | null>(null);
  const [notice, setNotice] = useState<string[]>();
  const [options, setOptions] = useState<Option[]>();
  const [selectedOption, setSelectedOption] = useState<string>();

  const onToggleModal = () => {
    setModalOpen(!modalOpen);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProductDetail(itemId);
        setProductDetail(data.conItem);
      } catch (error) {
        console.log(error);
      }
    };
    if (itemId) {
      getData();
    }
  }, [itemId]);

  useEffect(() => {
    setNotice(productDetail?.warning.split("\n"));
    setOptions(productDetail?.options);
  }, [productDetail]);

  const onClick = (e: React.MouseEvent<HTMLDivElement>, item: Option) => {
    const option =
      dateFormat(item.expireAt) + " 까지 / " + comma(item.sellingPrice) + "원";

    setSelectedOption(option);
    onToggleModal();
  };

  return (
    <Wrapper>
      {productDetail !== null ? <ProductCardItem item={productDetail} /> : null}
      <NoticeWrapper modalOpen={modalOpen}>
        {notice?.map((item: string, index: number) => (
          <Notice key={`item_${index}`}>{item}</Notice>
        ))}
      </NoticeWrapper>
      <SelectedOptionBox>
        <OptionInfo>{selectedOption}</OptionInfo>
      </SelectedOptionBox>
      <ModalWrapper>
        <OptionModal
          isModal={modalOpen}
          onToggleModal={onToggleModal}
          options={options}
          discountRate={productDetail?.discountRate}
          onClick={onClick}
        ></OptionModal>
        <ButtonWrapper>
          <Button onClick={onToggleModal} disabled={modalOpen}>
            {modalOpen ? "구매하기" : "옵션 선택하기"}
          </Button>
        </ButtonWrapper>
      </ModalWrapper>
    </Wrapper>
  );
}

export default ProductPage;
const Wrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
`;
const ModalWrapper = styled.div``;
const NoticeWrapper = styled.div<{ modalOpen: boolean }>`
  padding-top: 18px;
  padding-left: 17px;
  padding-right: 17px;

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

const ButtonWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
`;
const SelectedOptionBox = styled.div`
  height: 64px;
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OptionInfo = styled.div`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
