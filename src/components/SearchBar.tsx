import { useContext, useState } from 'react';
import { DataContext } from '../context/DataProvider';
import { FaSearch } from 'react-icons/fa';

export default function () {
  const data = useContext(DataContext)!;
  const [search, setSearch] = useState('');
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
    const searchLowerCase = search.toLowerCase();
    data.setSearchItems(
      search
        ? data.menu.filter(item =>
            [item.category, item.name, item.description].some(field =>
              field.toLowerCase().includes(searchLowerCase)
            )
          )
        : data.menu
    );
  }
  return (
    <form
      role='search'
      className='bg-white border border-lightpatty flex focus-within:shadow focus-within:shadow-patty items-center p-2 text-xl'>
      <FaSearch />
      <input
        type='text'
        role='searchbox'
        value={search}
        onInput={(event: React.ChangeEvent<HTMLInputElement>) => handleSearch(event)}
        className='border-none outline-none ml-2'
      />
    </form>
  );
}
