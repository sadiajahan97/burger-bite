import { useContext } from 'react';
import { OrderInformationContext } from '../context/OrderInformationProvider';
import ConfirmedOrderInformation from './ConfirmedOrderInformation';
import { Link } from 'react-router-dom';

export default function () {
  const data = useContext(OrderInformationContext)!;
  return (
    <main className='overflow-y-auto p-4 text-xl'>
      {data.isOrderLoaded && (
        <section>
          <h2 className='mb-4 font-bold text-2xl'>Order Confirmation</h2>
          <p>Thank you for your order!</p>
          {data.order.length ? (
            <>
              <p>Your order has been placed successfully.</p>
              <p>Order Number: {data.order[0]?.id}</p>
              <ConfirmedOrderInformation />
            </>
          ) : (
            <>
              <p>
                Your order has been placed successfully, but we are currently unable to retrieve
                your order information.
              </p>
              <p>Please contact our customer support for order information.</p>
              <p>We apologize for any inconvenience this may cause.</p>
            </>
          )}
          <p>We appreciate your business and hope to serve you again soon!</p>
          <button className='bg-patty border-none font-bold mt-4 px-4 py-2 rounded text-bun w-fit'>
            <Link to='/'>Go to Home</Link>
          </button>
        </section>
      )}
    </main>
  );
}
