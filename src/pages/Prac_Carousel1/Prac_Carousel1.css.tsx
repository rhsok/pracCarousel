import styled from '@emotion/styled';

export const Carousel1Wrapper = styled.div`
  width: 900px;
  height: 350px;
  background-color: white;
  display: flex;
  flex-direction: row;
  border: 3px solid darkgrey;
`;

export const Carousel1LeftButtonBox = styled.div`
  width: 20%;
  height: 100%;
  background-color: white;
`;

export const Carousel1LeftButton = styled.button`
  width: 50px;
  height: 50px;
  position: relative;
  left: 100px;
  top: 150px;
  background-color: rgb(0, 0, 0, 0);
  border: none;
  cursor: pointer;
  :active {
    transform: scale(0.8);
  }
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
`;

export const Carousel1RigthButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: rgb(0, 0, 0, 0);
  border: none;
  position: relative;
  left: 30px;
  top: 150px;
  cursor: pointer;
  :active {
    transform: scale(0.8);
  }
`;

export const Carousel1DotButtonBox = styled.div`
  width: 40%;
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
  border-radius: 50%;
  width: 12px;
  height: 12px;
  border: none;
  background-color: white;
  cursor: pointer;
  :active {
    transform: scale(0.7);
  }
`;

export const Carousel1RightButtonImage = styled.img`
  width: 30px;
  height: 30px;
`;
export const Carousel1LeftButtonImage = styled.img`
  width: 30px;
  height: 30px;
`;
