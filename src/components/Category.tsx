import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import Item from './Item';

interface CategoryProps {
  category: string;
}

export default function ({ category }: CategoryProps) {
  const data = useContext(DataContext)!;
  const categoryItems = data.searchItems.filter(item => item.category === category);
  const categoryItemsLength = categoryItems.length;
  const sectionClassName = categoryItemsLength % 2 === 0 ? '' : 'border-b border-lightpatty';
  return (
    <>
      {categoryItemsLength > 0 && (
        <>
          <section id={category.replace(' ', '-').toLowerCase()} className={sectionClassName}>
            <h2 className='font-bold p-4 text-2xl'>{category}</h2>
            <ul className='grid grid-cols-2'>
              {categoryItems.map((item, index) => (
                <Item key={index} item={item} categoryItemsLength={categoryItemsLength} />
              ))}
            </ul>
          </section>
        </>
      )}
    </>
  );
}
