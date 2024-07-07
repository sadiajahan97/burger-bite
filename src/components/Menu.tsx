import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import Category from './Category';

export default function () {
  const data = useContext(DataContext)!;
  return (
    <main className='overflow-y-auto'>
      {data.categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </main>
  );
}
