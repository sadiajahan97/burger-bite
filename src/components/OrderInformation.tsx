import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import OrderItem from './OrderItem';

export default function () {
  const data = useContext(DataContext)!;
  return (
    <section>
      <h2 className='mb-4 font-bold text-2xl'>Order Information</h2>
      <table className='text-center'>
        <caption className='absolute left-[-99999px]'>Order Information</caption>
        <thead className='border-b border-lightpatty'>
          <tr>
            <th>Item</th>
            <th className='pl-4'>Price</th>
            <th className='pl-4'>Quantity</th>
            <th className='pl-4'>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {data.order.map((orderItem, index) => (
            <OrderItem key={index} orderItem={orderItem} />
          ))}
        </tbody>
        <tfoot className='border-t border-lightpatty'>
          <tr>
            <th>Total</th>
            <td></td>
            <td></td>
            <td>{data.total}</td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
}
