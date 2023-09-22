import React, { useEffect, useState } from 'react';
import CommonStyle from '../../Commonstyle.css';
import * as S from './Prac_Carousel2.css';
import { MouseEvent } from 'react';

import one from '../../assets/one.jpg';
import two from '../../assets/two.jpg';
import three from '../../assets/three.jpeg';
import four from '../../assets/four.jpg';
import five from '../../assets/five.jpg';
import leftButton from '../../assets/leftButton.png';
import rightButton from '../../assets/rightButton.png';

function Prac_Carousel2() {
  // const inrange = (v: number, min: number, max: number) => {
  //   if (v < min) return min;
  //   if (v > max) return max;
  //   return v;
  // };

  const [transX, setTransX] = useState(0);

  const [carousel2Number, setCarousel2Number] = useState<number>(1);

  const carousel2RightButton = function () {
    if (transX >= -250) {
      setTransX(-500);
    }
    if (transX === -500) {
      setTransX(-1000);
    }
    if (transX < -250 && transX > -750) {
      setTransX(-500);
    }
    if (transX === -1000) {
      setTransX(-1500);
    }
    if (transX <= -750 && transX > -1250) {
      setTransX(-1000);
    }
    if (transX === -1500) {
      setTransX(-2000);
    }
    if (transX <= -1250 && transX > -1750) {
      setTransX(-1500);
    }
    if (transX <= -1750 && transX > -2250) {
      setTransX(-2000);
    }
    if (transX <= -2250) {
      setTransX(-2000);
    }
  };

  const carousel1LeftButton = function () {
    if (transX >= -250) {
      setTransX(0);
    } else if (transX === -500) {
      setTransX(0);
    } else if (transX < -250 && transX > -750) {
      setTransX(-500);
    } else if (transX === -1000) {
      setTransX(-500);
    } else if (transX <= -750 && transX > -1250) {
      setTransX(-1000);
    } else if (transX === -1500) {
      setTransX(-1000);
    } else if (transX <= -1250 && transX > -1750) {
      setTransX(-1500);
    } else if (transX <= -1750 && transX > -2250) {
      setTransX(-1500);
    } else if (transX <= -2250) {
      setTransX(-2000);
    }
  };

  //점 버튼 함수
  const Carousel1DotButton1st = () => {
    setTransX(0);
  };

  const Carousel1DotButton2st = () => {
    setTransX(-500);
  };
  const Carousel1DotButton3st = () => {
    setTransX(-1000);
  };
  const Carousel1DotButton4st = () => {
    setTransX(-1500);
  };
  const Carousel1DotButton5st = () => {
    setTransX(-2000);
  };

  // useEffect(() => {
  console.log('transX : ', transX);
  // });

  return (
    <CommonStyle>
      <p style={{ fontSize: 30, color: 'white' }}>
        prac_Carousel2
        <br />
        <br />
        버튼형 슬라이더
      </p>

      <p>
        이미지를 일열로 늘여놓고 버튼을 누를 때마다 중심이 이동하는 슬라이드 +
        드래그 기능
      </p>
      <br />
      <S.Carousel2Wrapper>
        <S.Carousel2LeftButtonBox>
          <S.Carousel2LeftButton onClick={carousel1LeftButton}>
            <S.Carousel2LeftButtonImage src={leftButton} />
          </S.Carousel2LeftButton>
        </S.Carousel2LeftButtonBox>
        <S.Carousel2ImageBox
          onMouseDown={(clickEvent: React.MouseEvent) => {
            clickEvent.preventDefault();
            const mouseMoveHandler = (moveEvent: MouseEvent | any) => {
              const distanceX = moveEvent.clientX - clickEvent.clientX;
              setTransX(transX + distanceX);
            };
            const mouseUpHandler = () => {
              document.removeEventListener('mousemove', mouseMoveHandler);
            };

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler, {
              once: true,
            });
          }}
        >
          <S.Carousel2ImageWrapper
            style={{
              transform: `translateX(${transX}px)`,
              // 🏄🏻‍♂️  drag를 초기화할 때 부드럽게 이동시켜준다.
              transition: `transform 200ms ease-out 0s`,
            }}
          >
            <S.Carousel2Image src={one} alt='one' />
            <S.Carousel2Image src={two} alt='one' />
            <S.Carousel2Image src={three} alt='one' />
            <S.Carousel2Image src={four} alt='one' />
            <S.Carousel2Image src={five} alt='one' />
          </S.Carousel2ImageWrapper>
          <S.Carousel2DotButtonBox>
            <S.Carousel2DotButtonWrapper>
              <S.Carousel2DotButton onClick={Carousel1DotButton1st} />
            </S.Carousel2DotButtonWrapper>
            <S.Carousel2DotButtonWrapper>
              <S.Carousel2DotButton onClick={Carousel1DotButton2st} />
            </S.Carousel2DotButtonWrapper>
            <S.Carousel2DotButtonWrapper>
              <S.Carousel2DotButton onClick={Carousel1DotButton3st} />
            </S.Carousel2DotButtonWrapper>
            <S.Carousel2DotButtonWrapper>
              <S.Carousel2DotButton onClick={Carousel1DotButton4st} />
            </S.Carousel2DotButtonWrapper>
            <S.Carousel2DotButtonWrapper>
              <S.Carousel2DotButton onClick={Carousel1DotButton5st} />
            </S.Carousel2DotButtonWrapper>
          </S.Carousel2DotButtonBox>
        </S.Carousel2ImageBox>
        <S.Carousel2RightButtonBox>
          <S.Carousel2RigthButton onClick={carousel2RightButton}>
            <S.Carousel2RightButtonImage src={rightButton} />
          </S.Carousel2RigthButton>
        </S.Carousel2RightButtonBox>
      </S.Carousel2Wrapper>
    </CommonStyle>
  );
}

export default Prac_Carousel2;
