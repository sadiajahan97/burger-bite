import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { CustomerInformationContext } from '../context/CustomerInformationProvider';
import { useNavigate } from 'react-router-dom';
import placeOrder from '../utils/placeOrder';
import CustomerInformationInput from './CustomerInformationInput';
import OrderInformation from './OrderInformation';

export default function () {
  const data = useContext(DataContext)!;
  const customerData = useContext(CustomerInformationContext)!;
  const navigate = useNavigate();
  async function handleOrderPlacement() {
    const address = {
      flat: customerData?.flat,
      house: customerData?.house,
      road: customerData?.road,
      area: customerData?.area,
    };
    const customer = { name: customerData?.name, address, phone: customerData?.phone };
    if (await placeOrder(customer, data.order, data.total)) {
      navigate('/order-confirmation');
      data.setOrder([]);
      data.setTotal(0);
    } else {
      navigate('/order-failure');
    }
  }
  return (
    <main className='overflow-y-auto p-4 text-xl'>
      {data.order.length ? (
        <>
          <CustomerInformationInput />
          <OrderInformation />
          <button
            onClick={handleOrderPlacement}
            className='bg-patty border-none font-bold ml-48 mt-4 px-4 py-2 rounded text-bun w-fit'>
            Place Order
          </button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </main>
  );
}
