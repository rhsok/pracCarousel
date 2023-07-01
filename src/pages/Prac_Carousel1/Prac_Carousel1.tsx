import React, { useEffect, useState } from 'react';
import CommonStyle from '../../Commonstyle.css';
import * as S from './Prac_Carousel1.css';

import one from '../../assets/one.jpg';
import two from '../../assets/two.jpg';
import three from '../../assets/three.jpg';
import four from '../../assets/four.jpg';
import five from '../../assets/five.jpg';
import leftButton from '../../assets/leftButton.png';
import rightButton from '../../assets/rightButton.png';

function Prac_Carousel1() {
  const [carousel1Number, setCarousel1Number] = useState<number>(1);
  const [carousel1Images, setCarousel1Images] = useState<string>(one);

  const carousel1ImageChange = function (num: number): void {
    switch (num) {
      case 1:
        return setCarousel1Images(one);
      case 2:
        return setCarousel1Images(two);
      case 3:
        return setCarousel1Images(three);
      case 4:
        return setCarousel1Images(four);
      case 5:
        return setCarousel1Images(five);
    }
  };

  const carousel1RightButton = function () {
    if (carousel1Number > 4) {
      setCarousel1Number(1);
      return;
    }

    setCarousel1Number(carousel1Number + 1);
  };

  const carousel1LeftButton = function () {
    if (carousel1Number < 2) {
      setCarousel1Number(5);
      return;
    }
    setCarousel1Number(carousel1Number - 1);
  };

  //점 버튼 함수
  const Carousel1DotButton1st = () => {
    setCarousel1Number(1);
  };

  const Carousel1DotButton2st = () => {
    setCarousel1Number(2);
  };
  const Carousel1DotButton3st = () => {
    setCarousel1Number(3);
  };
  const Carousel1DotButton4st = () => {
    setCarousel1Number(4);
  };
  const Carousel1DotButton5st = () => {
    setCarousel1Number(5);
  };

  useEffect(() => {
    carousel1ImageChange(carousel1Number);
  }, [carousel1Number]);

  console.log(carousel1Number);

  return (
    <CommonStyle>
      <p style={{ fontSize: 30, color: 'white' }}>
        prac_Carousel1
        <br />
        <br />
        버튼형 슬라이더
      </p>

      <p>버튼을 누를 때마다 새로운 이미지를 불러오는 형식의 슬라이더</p>
      <br />
      <S.Carousel1Wrapper>
        <S.Carousel1LeftButtonBox>
          <S.Carousel1LeftButton onClick={carousel1LeftButton}>
            <S.Carousel1LeftButtonImage src={leftButton} />
          </S.Carousel1LeftButton>
        </S.Carousel1LeftButtonBox>
        <S.Carousel1ImageBox>
          <S.CarouselImage src={carousel1Images} alt='one' />
          <S.Carousel1DotButtonBox>
            <S.Carousel1DotButtonWrapper>
              <S.Carousel1DotButton onClick={Carousel1DotButton1st} />
            </S.Carousel1DotButtonWrapper>
            <S.Carousel1DotButtonWrapper>
              <S.Carousel1DotButton onClick={Carousel1DotButton2st} />
            </S.Carousel1DotButtonWrapper>
            <S.Carousel1DotButtonWrapper>
              <S.Carousel1DotButton onClick={Carousel1DotButton3st} />
            </S.Carousel1DotButtonWrapper>
            <S.Carousel1DotButtonWrapper>
              <S.Carousel1DotButton onClick={Carousel1DotButton4st} />
            </S.Carousel1DotButtonWrapper>
            <S.Carousel1DotButtonWrapper>
              <S.Carousel1DotButton onClick={Carousel1DotButton5st} />
            </S.Carousel1DotButtonWrapper>
          </S.Carousel1DotButtonBox>
        </S.Carousel1ImageBox>
        <S.Carousel1RightButtonBox>
          <S.Carousel1RigthButton onClick={carousel1RightButton}>
            <S.Carousel1RightButtonImage src={rightButton} />
          </S.Carousel1RigthButton>
        </S.Carousel1RightButtonBox>
      </S.Carousel1Wrapper>
    </CommonStyle>
  );
}

export default Prac_Carousel1;
