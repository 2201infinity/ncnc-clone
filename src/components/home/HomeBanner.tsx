import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
  const [isAnimation, setIsAnimation] = useState(false);
  const [isFlowing, setIsFlowing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [touchStartClientX, setTouchStartClientX] = useState(0);
  const [touchEndClientX, setTouchEndClientX] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef<HTMLDivElement>(null);

  const onNextSlide = useCallback(() => {
    setCurrentSlide(currentSlide + 1);
  }, [currentSlide]);

  const onPrevSlide = useCallback(() => {
    setCurrentSlide(currentSlide - 1);
  }, [currentSlide]);

  useEffect(() => {
    slideRef.current!.style.transform = `translateX(${
      -672 * (currentSlide - 1)
    }px)`;
  }, [currentSlide]);

  const touchMoveDistance = useMemo(() => {
    return touchEndClientX - touchStartClientX;
  }, [touchEndClientX, touchStartClientX]);

  const moveRange = useMemo(() => {
    return Math.floor(672 / 5);
  }, []);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setTouchStartClientX(e.clientX);
    setTouchEndClientX(e.clientX);
    setIsAnimation(false);
    setIsDragging(true);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setTouchEndClientX(e.clientX);
  };

  const onMouseOut = () => {
    setIsDragging(false);
    setIsAnimation(true);
    setTouchEndClientX(0);
    setTouchStartClientX(0);
  };

  const onMouseUp = () => {
    setIsAnimation(true);
    if (touchMoveDistance > moveRange) onPrevSlide();
    if (touchMoveDistance < moveRange * -1) onNextSlide();
    setTouchStartClientX(0);
    setTouchEndClientX(0);
    setIsDragging(false);
  };

  return (
    <BannerContainer>
      <ImageBox
        ref={slideRef}
        isAnimation={isAnimation}
        style={{ left: touchMoveDistance }}
      >
        <ImageList>
          {data.map((item) => (
            <BannerImage
              key={item.id}
              src={item.imageUrl}
              onDragStart={(e) => e.preventDefault()}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseOut={onMouseOut}
              onMouseUp={onMouseUp}
            />
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
  overflow: hidden;
`;

const ImageBox = styled.div<{ isAnimation: boolean }>`
  width: 100%;
  position: absolute;
  ${({ isAnimation }) => isAnimation && "transition: all 0.5s ease-in-out"};
`;

const ImageList = styled.div`
  display: flex;
`;

const BannerImage = styled.img`
  width: 100%;
`;

export default HomeBanner;
