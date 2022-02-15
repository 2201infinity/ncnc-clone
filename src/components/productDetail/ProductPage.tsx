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
  const [selectedOption, setSelectedOption] = useState<string>("");
  // console.log(notice);
  const onToggleModal = () => {
    setTimeout(() => {
      setModalOpen(false);
    }, 500);
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
    console.log(productDetail?.warning);
    setNotice(productDetail?.warning?.split("\n"));
    setOptions(productDetail?.options);
  }, [productDetail]);

  const onClick = (e: React.MouseEvent<HTMLDivElement>, item: Option) => {
    const option =
      dateFormat(item.expireAt) + " 까지 / " + comma(item.sellingPrice) + "원";

    setSelectedOption(option);
    onToggleModal();
  };

  const findTitle = (text: string) => {
    return text.charAt(0) === "[" || text.trim() === "";
  };

  const findXText = (text: string) => {
    return text.substring(1, 2) === "사";
  };

  return (
    <Wrapper>
      {productDetail !== null ? <ProductCardItem item={productDetail} /> : null}
      <NoticeWrapper modalOpen={modalOpen} onClick={onToggleModal}>
        {notice?.map((item: string, index: number) =>
          !findTitle(item) ? (
            <Notice key={`item_${index}`}>
              {item && item.slice(2, item.length)}
            </Notice>
          ) : !findXText(item) ? (
            <NoticeTitle>{item.slice(1, item.length - 1)}</NoticeTitle>
          ) : null
        )}
      </NoticeWrapper>
      {selectedOption && (
        <SelectedOptionBox>
          <OptionInfo>{selectedOption}</OptionInfo>
        </SelectedOptionBox>
      )}
      <ModalWrapper>
        <OptionModal
          isModal={modalOpen}
          onToggleModal={onToggleModal}
          options={options}
          discountRate={productDetail?.discountRate}
          onClick={onClick}
        ></OptionModal>
        <ButtonWrapper>
          <Button onClick={() => setModalOpen(true)} disabled={modalOpen}>
            {selectedOption ? "구매하기" : "옵션 선택하기"}
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
const NoticeWrapper = styled.ul<{ modalOpen: boolean }>`
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
const Notice = styled.li`
  margin-left: 17px;
  margin-bottom: 9px;
  font-size: ${({ theme }) => theme.fontSize.smallText};
  color: ${({ theme }) => theme.colors.gray};
  list-style: disc;
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
  width: 100%;
  position: fixed;
  bottom: 80px;
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
  margin: 17px;
`;

const NoticeTitle = styled.li`
  font-size: ${({ theme }) => theme.fontSize.title};
  margin-top: 9.7px;
  margin-bottom: 9.7px;
`;
