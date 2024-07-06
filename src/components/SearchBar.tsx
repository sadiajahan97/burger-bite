import { FaSearch } from 'react-icons/fa';

export default function () {
  return (
    <div
      role='search'
      className='bg-white border border-lightpatty flex focus-within:shadow focus-within:shadow-patty items-center p-2 text-xl'>
      <FaSearch />
      <input type='search' className='border-none outline-none ml-2' />
    </div>
  );
}
