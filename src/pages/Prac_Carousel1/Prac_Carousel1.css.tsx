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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 50%;
  height: 75px;
  position: absolute;
  background-color: gray;
  top: 273px;
  background-color: rgb(0, 0, 0, 0);
  display: flex;
  flex-direction: row;
  border-collapse: collapse;
`;

export const Carousel1DotButtonWrapper = styled.div`
  height: 100%;
  width: 25%;
  /* border: 1px solid black; */
  display: table-cell;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Carousel1DotButton = styled.button`
  border-radius: 30px;
  width: 15px;
  height: 15px;
  /* border: none; */
  background-color: white;
`;
