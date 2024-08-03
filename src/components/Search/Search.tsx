import { useContext } from 'react';
import { DataContext } from '@/context/DataProvider';
import SearchItem from './components/SearchItem';

export default function () {
  const data = useContext(DataContext)!;
  const searchItemsLength = data.searchItems.length;
  const mainClassName =
    searchItemsLength % 2 === 0
      ? 'overflow-y-auto search'
      : 'border-b border-lightpatty overflow-y-auto search';
  return (
    <main className={mainClassName}>
      <section>
        <h2></h2>
        <ul className='grid grid-cols-2'>
          {data.searchItems.map((searchItem, index) => (
            <SearchItem key={index} searchItem={searchItem} searchItemsLength={searchItemsLength} />
          ))}
        </ul>
      </section>
    </main>
  );
}
