import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

export default function () {
  const data = useContext(DataContext)!;
  return (
    <aside className='bg-patty font-bold p-4 text-2xl text-bun text-center'>
      <nav className='flex flex-col items-center justify-between h-full'>
        {data.categories.map((category, index) => (
          <a
            key={index}
            href={`#${category.replace(' ', '-').toLowerCase()}`}
            className='hover:scale-105 hover:shadow hover:shadow-bun py-2 rounded w-full'>
            {category}
          </a>
        ))}
      </nav>
    </aside>
  );
}
