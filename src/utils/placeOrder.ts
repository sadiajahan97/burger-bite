import { addDoc } from 'firebase/firestore';
import { ordersCollection } from '../config/firebaseConfig';

interface CustomerType {
  name: string;
  address: {
    flat: string;
    house: string;
    road: string;
    area: string;
  };
  phone: string;
}

export interface OrderItemType {
  name: string;
  price: number;
  quantity: number;
}

export default async function (customer: CustomerType, order: OrderItemType[], total: number) {
  const orderedAt = new Date().toLocaleString();
  try {
    await addDoc(ordersCollection, { customer, order, orderedAt, total });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
