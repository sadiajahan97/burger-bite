import { useContext } from 'react';
import { DataContext } from '@/context/DataProvider';
import Category from './components/Category/Category';
import SideBar from './components/SideBar';

export default function () {
  const data = useContext(DataContext)!;
  return (
    <main className='menu'>
      <div className='overflow-y-auto'>
        {data.categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </div>
      <SideBar />
    </main>
  );
}
