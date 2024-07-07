import Logo from './Logo';
import SearchBar from './SearchBar';
import NavBar from './NavBar';

export default function () {
  return (
    <header className='bg-ketchup col-span-2 flex items-center justify-between p-4'>
      <h1 className='absolute left-[-99999px]'>Burger Bite</h1>
      <Logo />
      <SearchBar />
      <NavBar />
    </header>
  );
}
