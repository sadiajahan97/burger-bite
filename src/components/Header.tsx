import Logo from './Logo';
import SearchBar from './SearchBar';
import Nav from './Nav';

export default function () {
  return (
    <header className='bg-ketchup col-span-2 flex items-center justify-between p-4'>
      <h1>Burger Bite</h1>
      <Logo />
      <SearchBar />
      <Nav />
    </header>
  );
}
