import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import SideBar from './components/SideBar';

export default function () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Menu />} />
      </Routes>
      <SideBar />
    </>
  );
}
