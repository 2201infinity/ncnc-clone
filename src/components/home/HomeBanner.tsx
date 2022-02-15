import React from "react";
import styled from "styled-components";

const data = [
  {
    id: 1,
    imageUrl: "/images/bannerImage1.png",
  },
  {
    id: 2,
    imageUrl: "/images/bannerImage1.png",
  },
  {
    id: 3,
    imageUrl: "/images/bannerImage1.png",
  },
];

function HomeBanner() {
  return (
    <BannerContainer>
      <ImageBox>
        <ImageList>
          {data.map((item) => (
            <BannerImage key={item.id} src={item.imageUrl} />
          ))}
        </ImageList>
      </ImageBox>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  width: 100%;
  height: 282px;
  position: relative;
`;

const ImageBox = styled.div`
  width: 100%;
  position: absolute;
  overflow: hidden;
`;

const ImageList = styled.div`
  display: flex;
`;

const BannerImage = styled.img`
  width: 100%;
`;

export default HomeBanner;
