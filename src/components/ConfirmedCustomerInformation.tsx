import { useContext } from 'react';
import { OrderInformationContext } from '../context/OrderInformationProvider';
import { DocumentData } from 'firebase/firestore';

export default function () {
  const data = useContext(OrderInformationContext)!;
  const customerData: DocumentData = data.order[0]?.data?.customer;
  return (
    <>
      <h3 className='font-bold mb-2 mt-8'>Customer Information</h3>
      <ul className='list-none'>
        <li>
          <span className='font-bold'>Name:</span> {customerData.name}
        </li>
        <li>
          <span className='font-bold'>Address:</span>{' '}
          {`Flat # ${customerData.address.flat}, House # ${customerData.address.house}, Road # ${customerData.address.road}, ${customerData.address.area}, Dhaka, Bangladesh`}
        </li>
        <li>
          <span className='font-bold'>Phone:</span> {customerData.phone}
        </li>
      </ul>
    </>
  );
}
