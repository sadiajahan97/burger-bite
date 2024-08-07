import Logo from './components/Logo';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';

export default function () {
  return (
    <header className='bg-ketchup flex h-[142px] items-center justify-between p-4 sticky top-0'>
      <h1 className='absolute left-[-99999px]'>Burger Bite</h1>
      <Logo />
      <SearchBar />
      <NavBar />
    </header>
  );
}
