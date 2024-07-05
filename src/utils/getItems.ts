import { getDocs, DocumentData } from 'firebase/firestore';
import { itemsCollection } from '../config/firebaseConfig';

export default async function () {
  try {
    const querySnapshot = await getDocs(itemsCollection);
    const itemsArray: DocumentData[] = [];
    querySnapshot.forEach(item => {
      itemsArray.push(item.data());
    });
    return itemsArray;
  } catch (error) {
    console.error(error);
    return [];
  }
}
