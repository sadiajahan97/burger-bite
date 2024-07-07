import { useContext, useState } from 'react';
import { DataContext } from '../context/DataProvider';
import { FaSearch } from 'react-icons/fa';

export default function () {
  const data = useContext(DataContext)!;
  const [search, setSearch] = useState('');

  // Go through handleSearch code

  function handleSearch(event: React.FormEvent) {
    event.preventDefault();
    data.setSearchItems(
      data.menu.filter(item =>
        search
          ? [item.category, item.name, item.description].some(field => field.includes(search))
          : data.menu
      )
    );
  }
  return (
    <form
      role='search'
      onSubmit={(event: React.FormEvent) => handleSearch(event)}
      className='bg-white border border-lightpatty flex focus-within:shadow focus-within:shadow-patty items-center p-2 text-xl'>
      <FaSearch />
      <input
        type='search'
        value={search}
        onInput={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
        className='border-none outline-none ml-2'
      />
      <button className='bg-bun'>Search</button>
    </form>
  );
}
