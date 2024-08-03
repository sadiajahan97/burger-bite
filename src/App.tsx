import { Routes, Route } from 'react-router-dom';
import CustomerInformationProvider from './context/CustomerInformationProvider';
import OrderInformationProvider from './context/OrderInformationProvider';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Search from './components/Search/Search';
import Cart from './components/Cart/Cart';
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation';
import OrderFailure from './components/OrderFailure';

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
        <Route
          path='/order-confirmation'
          element={
            <OrderInformationProvider>
              <OrderConfirmation />
            </OrderInformationProvider>
          }
        />
        <Route path='/order-failure' element={<OrderFailure />} />
      </Routes>
    </>
  );
}
