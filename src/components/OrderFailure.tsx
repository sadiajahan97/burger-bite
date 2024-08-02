import { Link } from 'react-router-dom';

export default function () {
  return (
    <main className='overflow-y-auto p-4 text-xl'>
      <section>
        <h2 className='mb-4 font-bold text-2xl'>Order Failure</h2>
        <p>We're sorry, but there was an issue processing your order.</p>
        <p>
          Please try again. If the problem persists, contact our customer support for assistance.
        </p>
        <p>We apologize for the inconvenience and appreciate your understanding.</p>
        <button className='bg-patty border-none font-bold mt-4 px-4 py-2 rounded text-bun w-fit'>
          <Link to='/cart'>Retry Checkout</Link>
        </button>
      </section>
    </main>
  );
}
