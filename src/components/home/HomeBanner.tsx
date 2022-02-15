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
    imageUrl: "/images/bannerImage2.jpg",
  },
  {
    id: 3,
    imageUrl: "/images/bannerImage3.jpg",
  },
];

function HomeBanner() {
  const [imageList, setImageList] = useState(data);
  const [isAnimation, setIsAnimation] = useState(false);
  const [isFlowing, setIsFlowing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [touchStartClientX, setTouchStartClientX] = useState(0);
  const [touchEndClientX, setTouchEndClientX] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [imageWidth, setImageWidth] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const ORIGINAL_IMAGE_LENGTH = data.length;

  useEffect(() => {
    setImageList([...data, ...data, ...data]);
  }, []);

  const initialFocusSlideIndex = useMemo(() => {
    return Math.floor(imageList.length / 3);
  }, [imageList]);

  const onNextSlide = useCallback(() => {
    setCurrentSlide(currentSlide + 1);
  }, [currentSlide]);

  const onPrevSlide = useCallback(() => {
    setCurrentSlide(currentSlide - 1);
  }, [currentSlide]);

  useEffect(() => {
    if (!slideRef.current) return;

    if (
      currentSlide === ORIGINAL_IMAGE_LENGTH + 1 ||
      currentSlide * -1 === ORIGINAL_IMAGE_LENGTH - 1
    ) {
      setTimeout(() => {
        setIsAnimation(false);
        slideRef.current!.style.left = `${initialFocusSlideIndex * 672 * -1}px`;
        setCurrentSlide(1);
      }, 500);

      setTimeout(() => {
        setIsAnimation(true);
      }, 600);
    }

    slideRef.current.style.transform = `translateX(${
      -672 * (currentSlide - 1)
    }px)`;
  }, [currentSlide, ORIGINAL_IMAGE_LENGTH, initialFocusSlideIndex]);

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

  useEffect(() => {
    const onResize = () => {
      setImageWidth(imageRef.current!.clientWidth);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <BannerContainer>
      <ImageBox
        ref={slideRef}
        isAnimation={isAnimation}
        style={{ left: 672 * -1 * initialFocusSlideIndex + touchMoveDistance }}
      >
        <ImageList>
          {imageList.map((item, index) => (
            <BannerImage
              ref={imageRef}
              key={`ImageItem_${index}`}
              src={item.imageUrl}
              onDragStart={(e) => e.preventDefault()}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseOut={onMouseOut}
              onMouseUp={onMouseUp}
              onLoad={() => console.log("Ddd")}
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
