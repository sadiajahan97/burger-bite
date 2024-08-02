import { DocumentData } from 'firebase/firestore';

interface OrderItemProps {
  orderItem: DocumentData;
}

export default function ({ orderItem }: OrderItemProps) {
  return (
    <tr>
      <td>{orderItem.name}</td>
      <td>{orderItem.price}</td>
      <td>{orderItem.quantity}</td>
      <td>{orderItem.price * orderItem.quantity}</td>
    </tr>
  );
}
