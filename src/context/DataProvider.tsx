import { DocumentData } from 'firebase/firestore';
import { OrderItemType } from '../utils/placeOrder';
import { ReactNode, createContext, useState } from 'react';

interface DataContextType {
  menu: DocumentData[];
  setMenu: React.Dispatch<React.SetStateAction<DocumentData[]>>;
  order: OrderItemType[];
  setOrder: React.Dispatch<React.SetStateAction<OrderItemType[]>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  categories: string[];
}

interface DataProviderProps {
  children: ReactNode;
}

export const DataContext = createContext<DataContextType | null>(null);

export default function ({ children }: DataProviderProps) {
  const [menu, setMenu] = useState<DocumentData[]>([]);
  const [order, setOrder] = useState<OrderItemType[]>([]);
  const [total, setTotal] = useState(0);
  const categories = [
    'Chicken Burgers',
    'Beef Burgers',
    'Naga Drums',
    'Shakes',
    'Pankha Wings',
    'Sides',
    'Desserts',
    'Fish',
  ];
  return (
    <DataContext.Provider value={{ menu, setMenu, order, setOrder, total, setTotal, categories }}>
      {children}
    </DataContext.Provider>
  );
}
