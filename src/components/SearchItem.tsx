import { DocumentData } from 'firebase/firestore';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { useState, useEffect } from 'react';
import fetchDownloadURL from '../utils/fetchDownloadURL';

interface SearchItemProps {
  searchItem: DocumentData;
  searchItemsLength: number;
}

export default function ({ searchItem, searchItemsLength }: SearchItemProps) {
  const data = useContext(DataContext)!;
  const [image, setImage] = useState('');
  useEffect(() => {
    async function getImage() {
      const itemImage = await fetchDownloadURL(searchItem.category, searchItem.image);
      if (itemImage) {
        setImage(itemImage);
      }
    }
    getImage();
  }, []);
  function addOrderItem() {
    if (data.order.map(orderItem => orderItem.name).includes(searchItem.name)) {
      data.setOrder(
        data.order.map(orderItem =>
          orderItem.name === searchItem.name
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        )
      );
    } else {
      data.setOrder([
        ...data.order,
        { name: searchItem.name, price: searchItem.price, quantity: 1 },
      ]);
    }
    data.setTotal(data.total + searchItem.price);
  }
  let liClassName =
    'border-b border-lightpatty gap-x-4 grid grid-cols-[250px_1fr] items-center list-none p-4';
  if (searchItemsLength % 2 !== 0) {
    liClassName += ' last:border-none';
  }
  const figureClassName = searchItem.category === 'Shakes' ? 'shakes' : '';
  const imgClassName =
    searchItem.category === 'Shakes' ? 'block h-[250px] rounded' : 'block h-[150px]';
  return (
    <li className={liClassName}>
      <figure className={figureClassName}>
        {image && (
          <img src={image} alt={`${searchItem.image}`} loading='lazy' className={imgClassName} />
        )}
        <figcaption className='absolute left-[-99999px]'>{searchItem.name}</figcaption>
      </figure>
      <dl>
        <dt className='font-bold text-xl'>{searchItem.name}</dt>
        <dd className='py-2'>{searchItem.description}</dd>
        <dd className='font-bold py-2'>BDT {searchItem.price}</dd>
        <dd className='pt-4'>
          <button
            onClick={addOrderItem}
            className='bg-patty border-none font-bold hover:scale-105 hover:shadow hover:shadow-patty px-4 py-2 rounded text-bun w-fit'>
            +ADD
          </button>
        </dd>
      </dl>
    </li>
  );
}
