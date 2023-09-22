import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();

  function goPrac(val: string | boolean) {
    switch (val) {
      case 'carousel1':
        navigate('/carousel1');
        break;
      case 'carousel2':
        navigate('/carousel2');
        break;
      case 'carousel3':
        navigate('/carousel3');
        break;
      case 'dropdown1':
        navigate('/dropdown1');
        console.log('dorpdown1');
        break;
      default:
        // Handle the case when val is not one of 'prac1', 'prac2', or 'prac3'
        break;
    }
  }

  return (
    <div>
      <div>MainPage</div>
      <ul>
        <li>
          <button className='carousel1' onClick={() => goPrac('carousel1')}>
            1번 carousel
          </button>
        </li>
        <li>
          <button className='carousel2' onClick={() => goPrac('carousel2')}>
            2번 carousel
          </button>
        </li>
        <li>
          <button className='carousel3' onClick={() => goPrac('carousel3')}>
            3번 carousel
          </button>
        </li>
        <li>
          <button className='dropdown1' onClick={() => goPrac('dropdown1')}>
            4번 dropdown
          </button>
        </li>
      </ul>
    </div>
  );
}

export default MainPage;
