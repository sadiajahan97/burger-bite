import { DocumentData, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { ordersCollection } from '../config/firebaseConfig';

export interface OrderType {
  id: string;
  data: DocumentData;
}

export default async function () {
  try {
    const q = query(ordersCollection, orderBy('orderedAt', 'desc'), limit(1));
    const querySnapshot = await getDocs(q);
    const orderArray: OrderType[] = [];
    querySnapshot.forEach(orderItem => {
      orderArray.push({ id: orderItem.id, data: orderItem.data() });
    });
    return orderArray;
  } catch (error) {
    console.error(error);
    return [];
  }
}
