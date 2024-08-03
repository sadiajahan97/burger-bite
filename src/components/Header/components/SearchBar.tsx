import { useContext, useState } from 'react';
import { DataContext } from '@/context/DataProvider';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default function () {
  const data = useContext(DataContext)!;
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate('/search');
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
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSearch(event)}
      className='border border-lightpatty flex focus-within:shadow focus-within:shadow-patty items-center text-xl'>
      <input
        type='text'
        role='searchbox'
        value={search}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
        className='outline-none px-2 py-1 w-60'
      />
      <button className='bg-patty hover:bg-bun hover:text-patty p-2 text-bun'>
        <FaSearch />
      </button>
    </form>
  );
}
