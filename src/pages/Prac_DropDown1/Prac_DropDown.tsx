import React, { LegacyRef } from 'react';
import * as S from './Prac_DropDown.css';
import { useState, useRef, useEffect } from 'react';

function Prac_DropDown() {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const listToChooseFrom = [
    'react',
    'typescript',
    'next.js',
    'flutter',
    'cleanCode',
    'node.js',
  ];
  const [openState, setOpenState] = useState<boolean>(false);
  const [selectedElement, setSelectedElement] = useState<string | undefined>();
  console.log('openState:', openState);
  console.log('selectedElement:', selectedElement);

  useEffect(() => {
    // 드롭다운의 외부를 클릭했을 때 발생할 함수 작성
    const outsideClick = (e: MouseEvent) => {
      console.log(e.target); // 마우스를 어느곳에든 클릭하면 어디의 DOM 요소를 클릭한지 확인할 수 있다.

      //!dropdownRef.current.contains(e.target as Node)
      //DropdownContainer 태그 영역에 이벤트가 발생하지 않았을때를 의미
      if (
        openState === true &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenState(false); //외부 클릭시 실행할 로직 (드롭다운의 상태 변경)
      }
    };
    //컴포넌트 렌더링 후 이벤트 등록해야한다.
    //mousedown 이벤트가 발생하면 outsideClick함수가 실행된다.
    document.addEventListener('mousedown', outsideClick);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', outsideClick); //컴포넌트가 제거될때 실행
    };
  }, [openState]);

  return (
    <div>
      Prac_DropDonw
      <S.InputBox
        onClick={() => {
          setOpenState(!openState);
        }}
      >
        <S.Input value={selectedElement || '선택'} />
      </S.InputBox>
      <S.DropDwonBox ref={dropdownRef} openState={openState}>
        {listToChooseFrom.map((item: any) => {
          return (
            <S.DropDownElement
              onClick={(e) => {
                setOpenState(false);
                setSelectedElement(item);
              }}
              key={item}
            >
              {item}
            </S.DropDownElement>
          );
        })}
      </S.DropDwonBox>
      <div>test</div>
    </div>
  );
}

export default Prac_DropDown;
