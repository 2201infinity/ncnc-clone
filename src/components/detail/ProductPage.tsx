import { ProductCardItem } from "components/common/ProductCardItem";
import PencilIcon from "icons/PencilIcon";
import React, { ReactElement, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Option, ProductDetailConItem } from "types/product";
import { getProductDetail } from "utils/api";
import { comma } from "utils/comma";
import Button from "../common/Button";
import OptionModal from "./OptionModal";

function ProductPage({ itemId }: { itemId: string }): ReactElement {
  const [modalOpen, setModalOpen] = useState(false);
  const [productDetail, setProductDetail] =
    useState<ProductDetailConItem | null>(null);
  const [notice, setNotice] = useState<string[]>();
  const [options, setOptions] = useState<Option[]>();
  const [selectedOption, setSelectedOption] = useState<string>("");

  const onToggleModal = () => {
    setModalOpen(false);
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
    setNotice(productDetail?.warning?.split("\n"));
    setOptions(productDetail?.options);
  }, [productDetail]);

  const onSelectOption = (
    e: React.MouseEvent<HTMLDivElement>,
    item: Option
  ) => {
    const option =
      new Date(item.expireAt).getFullYear() +
      "." +
      new Date(item.expireAt).getMonth() +
      "." +
      new Date(item.expireAt).getDate() +
      " 까지 / " +
      comma(item.sellingPrice) +
      "원";

    setSelectedOption(option);
    onToggleModal();
  };

  const onBuyProduct = () => {
    selectedOption
      ? alert(`${selectedOption} 구매하기를 누르셨습니다`)
      : setModalOpen(true);
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
            <NoticeTitle key={`item_${index}`}>
              {item.slice(1, item.length - 1)}
            </NoticeTitle>
          ) : null
        )}
      </NoticeWrapper>

      {selectedOption && (
        <SelectedOptionBox onClick={() => setModalOpen(true)}>
          <OptionInfo>
            <OptionTitle>{selectedOption}</OptionTitle>
            <IconWrapper>
              <PencilIcon />
            </IconWrapper>
          </OptionInfo>
        </SelectedOptionBox>
      )}

      <ModalWrapper>
        <OptionModal
          isModal={modalOpen}
          onToggleModal={onToggleModal}
          options={options}
          discountRate={productDetail?.discountRate}
          onClick={onSelectOption}
        ></OptionModal>
        <StyledButton width="100%" onClick={onBuyProduct} disabled={modalOpen}>
          {selectedOption ? "구매하기" : "옵션 선택하기"}
        </StyledButton>
      </ModalWrapper>
    </Wrapper>
  );
}

export default ProductPage;

const Wrapper = styled.div`
  width: 100%;
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
  font-size: ${({ theme }) => theme.fontSize.text};
  color: ${({ theme }) => theme.colors.gray};
  list-style: disc;
`;

const StyledButton = styled(Button)`
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
  bottom: 80px;
  cursor: pointer;
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
  justify-content: space-between;
`;

const OptionTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.h4Text};
  font-weight: 600;
`;

const NoticeTitle = styled.li`
  font-size: ${({ theme }) => theme.fontSize.title};
  margin-top: 9.7px;
  margin-bottom: 9.7px;
`;

const IconWrapper = styled.div`
  margin-right: 14px;
`;
