import React, { useEffect, useState, useRef } from 'react';
import CommonStyle from '../../Commonstyle.css';
import * as S from './Prac_Carousel3.css';
import { MouseEvent } from 'react';

import one from '../../assets/one.jpg';
import two from '../../assets/two.jpg';
import three from '../../assets/three.jpeg';
import four from '../../assets/four.jpg';
import five from '../../assets/five.jpg';
import leftButton from '../../assets/leftButton.png';
import rightButton from '../../assets/rightButton.png';

function Prac_Carousel3() {
  const [carousel3Number, setCarousel3Number] = useState<number>(1);

  const [transX, setTransX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  const carousel3RightButton = function () {
    if (carousel3Number > 4) {
      setCarousel3Number(1);
      return;
    }

    setCarousel3Number(carousel3Number + 1);
  };

  const carousel1LeftButton = function () {
    if (carousel3Number < 2) {
      setCarousel3Number(5);
      return;
    }
    setCarousel3Number(carousel3Number - 1);
  };

  //점 버튼 함수
  const Carousel1DotButton1st = () => {
    setCarousel3Number(1);
  };

  const Carousel1DotButton2st = () => {
    setCarousel3Number(2);
  };
  const Carousel1DotButton3st = () => {
    setCarousel3Number(3);
  };
  const Carousel1DotButton4st = () => {
    setCarousel3Number(4);
  };
  const Carousel1DotButton5st = () => {
    setCarousel3Number(5);
  };

  console.log(isDragging);

  const onMouseDown = (event: any) => {
    event.preventDefault();
    setDragStartX(event.clientX);
    setIsDragging(true);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (event: any) => {
    if (!isDragging) return;
    const distanceX = event.clientX - dragStartX;
    setTransX(transX + distanceX);
    setDragStartX(event.clientX);
  };

  return (
    <CommonStyle>
      <p style={{ fontSize: 30, color: 'white' }}>
        prac_Carousel3
        <br />
        <br />
        버튼형 슬라이더
      </p>

      <p>
        이미지를 일열로 늘여놓고 버튼을 누를 때마다 중심이 이동하는 슬라이드 +
        드래그 기능 (3)
      </p>
      <br />
      <S.Carousel3Wrapper>
        <S.Carousel3LeftButtonBox>
          <S.Carousel3LeftButton onClick={carousel1LeftButton}>
            <S.Carousel3LeftButtonImage src={leftButton} />
          </S.Carousel3LeftButton>
        </S.Carousel3LeftButtonBox>
        <S.Carousel3ImageBox>
          <S.Carousel3ImageWrapper
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            style={{
              transform: `translateX(${transX}px)`,
            }}
          >
            <S.Carousel3Image src={one} alt='one' />
            <S.Carousel3Image src={two} alt='one' />
            <S.Carousel3Image src={three} alt='one' />
            <S.Carousel3Image src={four} alt='one' />
            <S.Carousel3Image src={five} alt='one' />
          </S.Carousel3ImageWrapper>

          <S.Carousel3DotButtonBox>
            <S.Carousel3DotButtonWrapper>
              <S.Carousel3DotButton onClick={Carousel1DotButton1st} />
            </S.Carousel3DotButtonWrapper>
            <S.Carousel3DotButtonWrapper>
              <S.Carousel3DotButton onClick={Carousel1DotButton2st} />
            </S.Carousel3DotButtonWrapper>
            <S.Carousel3DotButtonWrapper>
              <S.Carousel3DotButton onClick={Carousel1DotButton3st} />
            </S.Carousel3DotButtonWrapper>
            <S.Carousel3DotButtonWrapper>
              <S.Carousel3DotButton onClick={Carousel1DotButton4st} />
            </S.Carousel3DotButtonWrapper>
            <S.Carousel3DotButtonWrapper>
              <S.Carousel3DotButton onClick={Carousel1DotButton5st} />
            </S.Carousel3DotButtonWrapper>
          </S.Carousel3DotButtonBox>
        </S.Carousel3ImageBox>
        <S.Carousel3RightButtonBox>
          <S.Carousel3RigthButton onClick={carousel3RightButton}>
            <S.Carousel3RightButtonImage src={rightButton} />
          </S.Carousel3RigthButton>
        </S.Carousel3RightButtonBox>
      </S.Carousel3Wrapper>
    </CommonStyle>
  );
}

export default Prac_Carousel3;
