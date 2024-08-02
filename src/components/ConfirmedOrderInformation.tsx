import { useContext } from 'react';
import { OrderInformationContext } from '../context/OrderInformationProvider';
import { DocumentData } from 'firebase/firestore';
import ConfirmedOrderItem from './ConfirmedOrderItem';

export default function () {
  const data = useContext(OrderInformationContext)!;
  const orderData: DocumentData[] = data.order[0]?.data?.order;
  return (
    <>
      <h3 className='font-bold mb-2 mt-8'>Order Information</h3>
      <table className='text-center'>
        <thead className='border-b border-lightpatty'>
          <tr>
            <th>Item</th>
            <th className='pl-4'>Price</th>
            <th className='pl-4'>Quantity</th>
            <th className='pl-4'>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {orderData.map((orderItem, index) => (
            <ConfirmedOrderItem key={index} orderItem={orderItem} />
          ))}
        </tbody>
        <tfoot className='border-t border-lightpatty'>
          <tr>
            <th>Total</th>
            <td></td>
            <td></td>
            <td>{data.order[0]?.data?.total}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
