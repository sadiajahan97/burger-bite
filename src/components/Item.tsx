import { DocumentData } from 'firebase/firestore';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { useState, useEffect } from 'react';
import fetchDownloadURL from '../utils/fetchDownloadURL';

interface ItemProps {
  item: DocumentData;
}

export default function ({ item }: ItemProps) {
  const data = useContext(DataContext)!;
  const [image, setImage] = useState('');
  useEffect(() => {
    async function getImage() {
      const itemImage = await fetchDownloadURL(item.category, item.image);
      if (itemImage) {
        setImage(itemImage);
      }
    }
    getImage();
  }, []);
  function addOrderItem() {
    if (data.order.map(orderItem => orderItem.name).includes(item.name)) {
      data.setOrder(
        data.order.map(orderItem =>
          orderItem.name === item.name
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        )
      );
    } else {
      data.setOrder([...data.order, { name: item.name, price: item.price, quantity: 1 }]);
    }
    data.setTotal(data.total + item.price);
  }
  return (
    <li>
      <figure>
        {image && <img src={image} alt={`${item.image}`} loading='lazy' />}
        <figcaption>{item.name}</figcaption>
      </figure>
      <dl>
        <dt className='font-bold text-xl'>{item.name}</dt>
        <dd className='py-2'>{item.description}</dd>
        <dd className='font-bold py-2'>BDT {item.price}</dd>
        <dd className='pt-4'>
          <button
            onClick={addOrderItem}
            className='bg-patty border-none font-bold hover:scale-110 hover:shadow hover:shadow-patty px-4 py-2 rounded text-bun w-fit'>
            +ADD
          </button>
        </dd>
      </dl>
    </li>
  );
}
