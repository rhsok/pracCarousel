import { Route, Routes } from 'react-router-dom';
import Prac_Carousel1 from '../pages/Prac_Carousel1/Prac_Carousel1';
import Prac_Carousel2 from '../pages/Prac_carousel2/Prac_Carousel2';
import Prac_Carousel3 from '../pages/Prac_Carousel3/Prac_Carousel3';
import MainPage from '../pages/MainPage/MainPage';
import CommonStyle from '../Commonstyle.css';
import Prac_DropDown from '../pages/Prac_DropDown1/Prac_DropDown';

function Router() {
  return (
    <CommonStyle>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/carousel1' element={<Prac_Carousel1 />} />
        <Route path='/carousel2' element={<Prac_Carousel2 />} />
        <Route path='/carousel3' element={<Prac_Carousel3 />} />
        <Route path='/dropdown1' element={<Prac_DropDown />} />
      </Routes>
    </CommonStyle>
  );
}

export default Router;
