import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import Item from './Item';

export default function () {
  const data = useContext(DataContext)!;
  return (
    <main className='overflow-y-auto'>
      {data.categories.map((category, index) => (
        <section key={index} id={category.replace(' ', '-').toLowerCase()}>
          <h2 className='font-bold p-4 text-2xl'>{category}</h2>
          <ul className='grid grid-cols-2'>
            {data.searchItems
              .filter(item => item.category === category)
              .map((item, index) => (
                <Item key={index} item={item} />
              ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
