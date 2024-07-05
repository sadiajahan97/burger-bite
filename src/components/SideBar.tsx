import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

export default function () {
  const data = useContext(DataContext)!;
  return (
    <aside className='bg-patty font-bold p-4 text-2xl text-bun'>
      <nav className='flex flex-col justify-between h-full'>
        {data.categories.map((category, index) => (
          <a
            key={index}
            href={`#${category.replace(' ', '-').toLowerCase()}`}
            className='hover:bg-bun hover:text-patty no-underline p-2 rounded'>
            {category}
          </a>
        ))}
      </nav>
    </aside>
  );
}
