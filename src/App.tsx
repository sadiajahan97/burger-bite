import { Routes, Route } from 'react-router-dom';
import CustomerInformationProvider from './context/CustomerInformationProvider';
import Header from './components/Header';
import Menu from './components/Menu';
import Search from './components/Search';
import Cart from './components/Cart';

export default function () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/search' element={<Search />} />
        <Route path='/' element={<Menu />} />
        <Route
          path='/cart'
          element={
            <CustomerInformationProvider>
              <Cart />
            </CustomerInformationProvider>
          }
        />
      </Routes>
    </>
  );
}
