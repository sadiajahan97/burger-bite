import { DocumentData } from 'firebase/firestore';
import { useContext } from 'react';
import { DataContext } from '@/context/DataProvider';
import { useState, useEffect } from 'react';
import fetchDownloadURL from '@/utils/fetchDownloadURL';

interface ItemProps {
  item: DocumentData;
  categoryItemsLength: number;
}

export default function ({ item, categoryItemsLength }: ItemProps) {
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
  let liClassName =
    'border-b border-lightpatty gap-x-4 grid grid-cols-[200px_1fr] xl:grid-cols-[250px_1fr] items-center list-none p-4';
  if (categoryItemsLength % 2 !== 0) {
    liClassName += ' last:border-none';
  }
  const figureClassName = item.category === 'Shakes' ? 'shakes' : '';
  const imgClassName =
    item.category === 'Shakes'
      ? 'block h-[200px] xl:h-[250px] rounded'
      : 'block h-[120px] xl:block h-[150px]';
  return (
    <li className={liClassName}>
      <figure className={figureClassName}>
        {image && <img src={image} alt={`${item.image}`} loading='lazy' className={imgClassName} />}
        <figcaption className='absolute left-[-99999px]'>{item.name}</figcaption>
      </figure>
      <dl>
        <dt className='font-bold text-xl'>{item.name}</dt>
        <dd className='py-1 xl:py-2'>{item.description}</dd>
        <dd className='font-bold py-1 xl:py-2'>BDT {item.price}</dd>
        <dd className='pt-2 xl:pt-4'>
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
