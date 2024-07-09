import Logo from './Logo';
import NavBar from './NavBar';

export default function () {
  return (
    <header className='bg-ketchup flex h-[142px] items-center justify-between p-4'>
      <h1 className='absolute left-[-99999px]'>Burger Bite</h1>
      <Logo />
      <NavBar />
    </header>
  );
}
