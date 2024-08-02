import { ReactNode, createContext, useState, useEffect } from 'react';
import { OrderType } from '../utils/getOrder';
import getOrder from '../utils/getOrder';

interface OrderInformationContextType {
  order: OrderType[];
  setOrder: React.Dispatch<React.SetStateAction<OrderType[]>>;
  isOrderLoaded: boolean;
  setIsOrderLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

interface OrderInformationProviderProps {
  children: ReactNode;
}

export const OrderInformationContext = createContext<OrderInformationContextType | null>(null);

export default function ({ children }: OrderInformationProviderProps) {
  const [order, setOrder] = useState<OrderType[]>([]);
  const [isOrderLoaded, setIsOrderLoaded] = useState(false);
  useEffect(() => {
    async function setOrderInformation() {
      setOrder(await getOrder());
      setIsOrderLoaded(true);
    }
    setOrderInformation();
  }, []);
  return (
    <OrderInformationContext.Provider
      value={{
        order,
        setOrder,
        isOrderLoaded,
        setIsOrderLoaded,
      }}>
      {children}
    </OrderInformationContext.Provider>
  );
}
