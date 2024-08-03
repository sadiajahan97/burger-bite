import { OrderItemType } from '@/utils/placeOrder';
import { useContext } from 'react';
import { DataContext } from '@/context/DataProvider';

interface OrderItemProps {
  orderItem: OrderItemType;
}

export default function ({ orderItem }: OrderItemProps) {
  const data = useContext(DataContext)!;
  function increaseQuantity() {
    data.setOrder(
      data.order.map(item =>
        item.name === orderItem.name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    data.setTotal(data.total + orderItem.price);
  }
  function decreaseQuantity() {
    const currentItem = data.order.find(item => item.name === orderItem.name)!;
    const otherItems = data.order.filter(item => item.name !== orderItem.name);
    if (currentItem.quantity === 1) {
      data.setOrder(otherItems);
    } else {
      data.setOrder(
        data.order.map(item =>
          item.name === orderItem.name ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
    data.setTotal(data.total - orderItem.price);
  }
  return (
    <tr>
      <td>{orderItem.name}</td>
      <td>{orderItem.price}</td>
      <td>{orderItem.quantity}</td>
      <td>{orderItem.price * orderItem.quantity}</td>
      <td className='pl-4 py-2'>
        <button
          aria-label='Increase Quantity'
          onClick={increaseQuantity}
          className='bg-patty border-none font-bold hover:scale-105 hover:shadow hover:shadow-patty px-4 py-2 rounded text-2xl leading-none text-bun w-fit'>
          +
        </button>
      </td>
      <td className='pl-4 py-2'>
        <button
          aria-label='Decrease Quantity'
          onClick={decreaseQuantity}
          className='bg-patty border-none font-bold hover:scale-105 hover:shadow hover:shadow-patty px-4 py-2 rounded text-2xl leading-none text-bun w-fit'>
          -
        </button>
      </td>
    </tr>
  );
}
