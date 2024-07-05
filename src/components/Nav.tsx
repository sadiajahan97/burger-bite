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
      <Link to='/' className='hover:text-patty text-5xl text-bun'>
        <FaBurger title='Home' />
      </Link>
      <Link to='/cart' className='hover:text-patty relative text-5xl text-bun'>
        <FaCartShopping title='Cart' />
        {total > 0 && (
          <span className='absolute bg-patty bottom-8 font-bold h-6 inline-block left-8 py-1 rounded-xl text-base leading-none text-bun text-center w-6 z-10'>
            {total}
          </span>
        )}
      </Link>
      <Link to='/about' className='hover:text-patty text-5xl text-bun'>
        <FaInfoCircle title='About' />
      </Link>
      <Link to='/contact' className='hover:text-patty text-5xl text-bun'>
        <FaPhone title='Contact' />
      </Link>
    </nav>
  );
}
