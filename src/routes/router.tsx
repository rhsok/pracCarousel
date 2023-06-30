import { Route, Routes } from 'react-router-dom';
import Prac_Carousel1 from '../pages/Prac_Carousel1/Prac_Carousel1';
import MainPage from '../pages/MainPage/MainPage';
import CommonStyle from '../Commonstyle.css';

function Router() {
  return (
    <CommonStyle>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/prac1' element={<Prac_Carousel1 />} />
      </Routes>
    </CommonStyle>
  );
}

export default Router;
