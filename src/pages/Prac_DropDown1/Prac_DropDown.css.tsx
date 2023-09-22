import styled from '@emotion/styled';

export const InputBox = styled.div`
  width: 420px;
  height: 60px;
  border: 1px solid black;
  background-color: white;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 420px;
  height: 55px;
  border: none;
  font-size: 20px;
`;

export const DropDwonBox = styled.div<{ openState: boolean }>`
  width: 420px;
  height: ${(props) => (props.openState ? 'auto' : '0px')};
  background-color: white;
  border-right: 1px solid black;
  border-left: 1px solid black;
  /* display: ${(props) => (props.openState ? 'block' : 'none')}; */
  height: ${(props) => (props.openState ? '366px' : '0')};
  /* 1. 높이를 auto로 설정하면 슬라이드 효과를 볼 수 없다.
         2. max-height 높으면 false일때 box가 순식간에 사라지고 height로 놓으면 transition효과가 적용된다.  */
  transition: height 1s ease;
  overflow: hidden;
`;

export const DropDownElement = styled.div`
  width: 420px;
  height: 60px;
  border-bottom: 1px solid black;
  font-size: 20px;
  display: flex;
  align-items: center;
  :hover {
    background-color: gray;
  }
`;
