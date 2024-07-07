import { useContext, useState } from 'react';
import { DataContext } from '../context/DataProvider';
import { FaSearch } from 'react-icons/fa';

export default function () {
  const data = useContext(DataContext)!;
  const [search, setSearch] = useState('');
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
    if (search) {
      const searchLowerCase = search.toLowerCase();
      const nameItems = data.menu.filter(item =>
        item.name.toLowerCase().startsWith(searchLowerCase)
      );
      const categoryItems = data.menu.filter(item =>
        item.category.toLowerCase().startsWith(searchLowerCase)
      );
      const descriptionItems = data.menu.filter(item =>
        item.description.toLowerCase().startsWith(searchLowerCase)
      );
      const otherNameItems = data.menu.filter(item =>
        item.name.toLowerCase().includes(searchLowerCase)
      );
      const otherCategoryItems = data.menu.filter(item =>
        item.category.toLowerCase().includes(searchLowerCase)
      );
      const otherDescriptionItems = data.menu.filter(item =>
        item.description.toLowerCase().includes(searchLowerCase)
      );
      const uniqueSearchItems = new Set([
        ...nameItems,
        ...categoryItems,
        ...descriptionItems,
        ...otherNameItems,
        ...otherCategoryItems,
        ...otherDescriptionItems,
      ]);
      const searchItems = [...uniqueSearchItems];
      data.setSearchItems(searchItems);
    } else {
      const searchItems = data.menu;
      data.setSearchItems(searchItems);
    }
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
