import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { Link } from 'react-router-dom';
import { FaBurger } from 'react-icons/fa6';
import { FaCartShopping } from 'react-icons/fa6';
import { FaInfoCircle } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

export default function () {
  const data = useContext(DataContext)!;
  const total = data.order.reduce((accumulator, orderItem) => {
    return accumulator + orderItem.quantity;
  }, 0);
  return (
    <nav className='gap-x-12 grid grid-cols-4'>
      <Link
        to='/'
        className='hover:scale-110 hover:shadow hover:shadow-bun p-2 rounded text-5xl text-bun'>
        <FaBurger title='Home' />
      </Link>
      <Link
        to='/cart'
        className='hover:scale-110 hover:shadow hover:shadow-bun p-2 rounded relative text-5xl text-bun'>
        <FaCartShopping title='Cart' />
        {total > 0 && (
          <span className='absolute bg-patty bottom-10 font-bold h-6 inline-block left-10 py-1 rounded-xl text-base leading-none text-bun text-center w-6 z-10'>
            {total}
          </span>
        )}
      </Link>
      <Link
        to='/about'
        className='hover:scale-110 hover:shadow hover:shadow-bun p-2 rounded text-5xl text-bun'>
        <FaInfoCircle title='About' />
      </Link>
      <Link
        to='/contact'
        className='hover:scale-110 hover:shadow hover:shadow-bun p-2 rounded text-5xl text-bun'>
        <FaPhone title='Contact' />
      </Link>
    </nav>
  );
}
