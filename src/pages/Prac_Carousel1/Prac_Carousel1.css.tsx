import styled from '@emotion/styled';

export const Carousel1Wrapper = styled.div`
  width: 900px;
  height: 350px;
  background-color: beige;
  display: flex;
  flex-direction: row;
`;

export const Carousel1LeftButtonBox = styled.div`
  width: 20%;
  height: 100%;
  background-color: aliceblue;
`;

export const Carousel1LeftButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: aliceblue;
  position: relative;
  left: 100px;
  top: 150px;
`;

export const Carousel1ImageBox = styled.div`
  width: 60%;
  height: 100%;
  position: relative;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  background-color: brown;
`;

export const Carousel1RightButtonBox = styled.div`
  width: 20%;
  height: 100%;
  background-color: aquamarine;
`;

export const Carousel1RigthButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: aliceblue;
  position: relative;
  left: 30px;
  top: 150px;
`;

export const Carousel1DotButtonBox = styled.div`
  width: 100%;
  height: 75px;
  position: absolute;
  background-color: gray;
  top: 275px;
  background-color: rgb(0, 0, 0, 0.5);
`;
