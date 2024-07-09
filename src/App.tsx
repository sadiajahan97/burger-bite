import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Search from './components/Search';

export default function () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </>
  );
}
