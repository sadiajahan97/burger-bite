import { ref } from 'firebase/storage';
import { storage } from '../config/firebaseConfig';
import { getDownloadURL } from 'firebase/storage';

export default async (category: string, image: string) => {
  try {
    const reference = ref(storage, `${category}/${image}`);
    const downloadURL = await getDownloadURL(reference);
    return downloadURL;
  } catch (error) {
    console.error(error);
  }
};
