import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import SearchBar from './SearchBar';
import SearchItem from './SearchItem';

export default function () {
  const data = useContext(DataContext)!;
  const searchItemsLength = data.searchItems.length;
  const mainClassName =
    searchItemsLength % 2 === 0
      ? 'overflow-y-auto search'
      : 'border-b border-lightpatty overflow-y-auto search';
  return (
    <main className={mainClassName}>
      <SearchBar />
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
