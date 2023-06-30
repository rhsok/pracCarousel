import React, { useEffect, useState } from 'react';
import CommonStyle from '../../Commonstyle.css';
import * as S from './Prac_Carousel2.css';

import one from '../../assets/one.jpg';
import two from '../../assets/two.jpg';
import three from '../../assets/three.jpg';
import four from '../../assets/four.jpg';
import five from '../../assets/five.jpg';

function Prac_Carousel1() {
  const [carousel2Number, setCarousel2Number] = useState(1);
  const [carousel2Images, setCarousel2Images] = useState(one);

  const carousel2ImageChange = function (num: number) {
    switch (num) {
      case 1:
        return setCarousel2Images(one);
      case 2:
        return setCarousel2Images(two);
      case 3:
        return setCarousel2Images(three);
      case 4:
        return setCarousel2Images(four);
      case 5:
        return setCarousel2Images(five);
    }
  };

  const carousel1RightButton = function () {
    setCarousel2Number(carousel2Number + 1);
    if (carousel2Number > 4) {
      setCarousel2Number(1);
    }
  };

  const carousel1LeftButton = function () {
    setCarousel2Number(carousel2Number - 1);
    if (carousel2Number < 2) {
      setCarousel2Number(5);
    }
  };

  useEffect(() => {
    carousel2ImageChange(carousel2Number);
  }, [carousel2Number]);

  console.log(carousel2Number);

  return (
    <CommonStyle>
      <div>prac_Carousel2</div>
      <p style={{ fontSize: 50, color: 'white' }}>버튼형 슬라이더</p>
      <p>
        이미지를 일열로 늘여놓고 버튼을 누르면 옆으로 이동하는 형식의 carousel
      </p>
      <br />
      <S.Carousel2Wrapper>
        <S.Carousel2LeftButtonBox>
          <S.Carousel2LeftButton onClick={carousel1LeftButton} />
        </S.Carousel2LeftButtonBox>
        <S.Carousel2ImageBox>
          <S.CarouselImage src={carousel2Images} alt='one' />
          <S.Carousel2DotButtonBox></S.Carousel2DotButtonBox>
        </S.Carousel2ImageBox>
        <S.Carousel2RightButtonBox>
          <S.Carousel2RigthButton onClick={carousel1RightButton} />
        </S.Carousel2RightButtonBox>
      </S.Carousel2Wrapper>
    </CommonStyle>
  );
}

export default Prac_Carousel1;
