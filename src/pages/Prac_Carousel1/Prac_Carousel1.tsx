import React, { useState } from 'react';
import CommonStyle from '../../Commonstyle.css';
import * as S from './Prac_Carousel1.css';

import one from '../../assets/one.jpg';
import two from '../../assets/two.jpg';
import three from '../../assets/three.jpg';
import four from '../../assets/four.jpg';
import five from '../../assets/five.jpg';

function Prac_Carousel1() {
  const [carousel1Number, setCarousel1Number] = useState(1);
  const [carousel1Images, setCarousel1Images] = useState(one);

  const carousel1ImageChange = function (num: number) {
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
    setCarousel1Number(carousel1Number + 1);
    carousel1ImageChange(carousel1Number);
  };

  const carousel1LeftButton = function () {
    setCarousel1Number(carousel1Number - 1);
    carousel1ImageChange(carousel1Number);
  };

  return (
    <CommonStyle>
      <div>prac_Carousel1</div>
      <p style={{ fontSize: 50, color: 'white' }}>버튼형 슬라이더</p>
      <p>버튼을 누를 때마다 새로운 이미지를 불러오는 형식의 슬라이더</p>
      <br />
      <S.Carousel1Wrapper>
        <S.Carousel1LeftButtonBox>
          <S.Carousel1LeftButton onClick={carousel1LeftButton} />
        </S.Carousel1LeftButtonBox>
        <S.Carousel1ImageBox>
          <S.CarouselImage src={carousel1Images} alt='one' />
          <S.Carousel1DotButtonBox></S.Carousel1DotButtonBox>
        </S.Carousel1ImageBox>
        <S.Carousel1RightButtonBox>
          <S.Carousel1RigthButton onClick={carousel1RightButton} />
        </S.Carousel1RightButtonBox>
      </S.Carousel1Wrapper>
    </CommonStyle>
  );
}

export default Prac_Carousel1;
