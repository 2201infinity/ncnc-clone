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
  const [isFlowing, setIsFlowing] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [touchStartClientX, setTouchStartClientX] = useState(0);
  const [touchEndClientX, setTouchEndClientX] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const ORIGINAL_IMAGE_LENGTH = data.length;
  const [imageSize, setImageSize] = useState({
    imageWidth: 0,
    imageHeight: 0,
  });

  const [imageStepList, setImageStepList] = useState(
    Array.from({ length: data.length }, (_, i) => {
      return i === 0 ? 1 : 0;
    })
  );

  const { imageHeight, imageWidth } = imageSize;

  useEffect(() => {
    setImageList([...data, ...data, ...data]);
  }, []);

  useEffect(() => {
    const onResize = () => {
      setIsAnimation(false);
      setIsFlowing(false);
      setTimeout(() => {
        setIsFlowing(true);
        setIsAnimation(true);
      }, 500);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
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
        slideRef.current!.style.left = `${
          initialFocusSlideIndex * imageWidth * -1
        }px`;
        setCurrentSlide(1);
      }, 500);

      setTimeout(() => {
        setIsAnimation(true);
      }, 600);
    }

    slideRef.current.style.transform = `translateX(${
      -imageWidth * (currentSlide - 1)
    }px)`;
  }, [currentSlide, ORIGINAL_IMAGE_LENGTH, initialFocusSlideIndex, imageWidth]);

  const touchMoveDistance = useMemo(() => {
    return touchEndClientX - touchStartClientX;
  }, [touchEndClientX, touchStartClientX]);

  const moveRange = useMemo(() => {
    return Math.floor(imageWidth / 5);
  }, [imageWidth]);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsFlowing(false);
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

  const onMouseEnter = () => setIsFlowing(false);
  const onMouseLeave = () => setIsFlowing(true);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsFlowing(false);
    setIsAnimation(false);
    setTouchStartClientX(e.touches[0].clientX);
    setTouchEndClientX(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndClientX(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    setIsFlowing(true);
    setIsAnimation(true);
    if (touchMoveDistance > moveRange) onPrevSlide();
    if (touchMoveDistance < moveRange * -1) onNextSlide();
    setTouchStartClientX(0);
    setTouchEndClientX(0);
  };

  useEffect(() => {
    const onResize = () => {
      setImageSize({
        imageWidth: imageRef.current!.clientWidth,
        imageHeight: imageRef.current!.clientHeight,
      });
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimation(true);
    }, 500);
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timer;
    if (isFlowing) {
      intervalId = setInterval(() => {
        setCurrentSlide(currentSlide + 1);
      }, 3500);
    }

    return () => clearTimeout(intervalId);
  }, [isFlowing, currentSlide]);

  const onLoadImage = () => {
    setImageSize({
      imageWidth: imageRef.current!.clientWidth,
      imageHeight: imageRef.current!.clientHeight,
    });
  };

  useEffect(() => {
    setImageStepList(
      Array.from({ length: data.length }, (_, i) => {
        const temp =
          currentSlide > data.length
            ? currentSlide - data.length
            : currentSlide;
        return i + 1 === temp ? 1 : 0;
      })
    );
  }, [currentSlide]);

  return (
    <BannerContainer imageHeight={imageHeight}>
      <ImageBox
        ref={slideRef}
        isAnimation={isAnimation}
        style={{
          left: imageWidth * -1 * initialFocusSlideIndex + touchMoveDistance,
        }}
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
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              onTouchMove={onTouchMove}
              onLoad={onLoadImage}
            />
          ))}
        </ImageList>
      </ImageBox>
      <CircleBox>
        {imageStepList.map((item, index) => (
          <Circle key={`Circle_${index}`} isSelected={item === 1} />
        ))}
      </CircleBox>
    </BannerContainer>
  );
}

const BannerContainer = styled.div<{ imageHeight: number }>`
  width: 100%;
  height: ${({ imageHeight }) => imageHeight}px;
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

const CircleBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 999;
  bottom: 8%;
  width: 60px;
  right: 5%;
  justify-content: space-between;
`;

const Circle = styled.div<{ isSelected: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ isSelected }) => (isSelected ? "black" : "white")};
`;

export default HomeBanner;
