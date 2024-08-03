import { useState, useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { CustomerInformationContext } from '../context/CustomerInformationProvider';
import { useNavigate } from 'react-router-dom';
import placeOrder from '../utils/placeOrder';
import CustomerInformationInput from './CustomerInformationInput';
import OrderInformation from './OrderInformation';

export default function () {
  const [errMsg, setErrMsg] = useState('');
  const data = useContext(DataContext)!;
  const customerData = useContext(CustomerInformationContext)!;
  const navigate = useNavigate();
  async function handleOrderPlacement() {
    if (
      customerData?.name &&
      customerData?.flat &&
      customerData?.house &&
      customerData?.road &&
      customerData?.area &&
      customerData?.phone
    ) {
      const phonePattern = /^01\d{9}$/;
      if (!phonePattern.test(customerData?.phone.trim())) {
        setErrMsg("Please enter an 11-digit number starting with '01'.");
        return;
      }
      setErrMsg('');
      const address = {
        flat: customerData?.flat.trim(),
        house: customerData?.house.trim(),
        road: customerData?.road.trim(),
        area: customerData?.area.trim(),
      };
      const customer = {
        name: customerData?.name.trim(),
        address,
        phone: customerData?.phone.trim(),
      };
      if (await placeOrder(customer, data.order, data.total)) {
        navigate('/order-confirmation');
        data.setOrder([]);
        data.setTotal(0);
      } else {
        navigate('/order-failure');
      }
    } else {
      setErrMsg('All input fields are required.');
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
            className='bg-patty border-none font-bold hover:scale-105 hover:shadow hover:shadow-patty ml-48 mt-4 px-4 py-2 rounded text-bun w-fit'>
            Place Order
          </button>
          {errMsg && <p className='mt-4 text-ketchup'>{errMsg}</p>}
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </main>
  );
}
