import { useContext, useEffect } from 'react';
import { DataContext } from './context/DataProvider';
import getItems from './utils/getItems';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import SideBar from './components/SideBar';

export default function () {
  const data = useContext(DataContext)!;
  useEffect(() => {
    async function setItems() {
      data.setMenu(await getItems());
    }
    setItems();
  }, []);
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
