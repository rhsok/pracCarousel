import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();

  const goPrac1 = () => {
    navigate('/prac1');
  };

  const goPrac2 = () => {
    navigate('/prac2');
  };

  const goPrac3 = () => {
    navigate('/prac3');
  };

  return (
    <div>
      <div>MainPage</div>
      <button className='carousel1' onClick={goPrac1}>
        1번 carousel
      </button>
      <br />
      <button className='carousel2' onClick={goPrac2}>
        2번 carousel
      </button>
      <br />
      <button className='carousel3' onClick={goPrac3}>
        3번 carousel
      </button>
    </div>
  );
}

export default MainPage;
