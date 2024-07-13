import { ReactNode, createContext, useState } from 'react';

interface CustomerInformationContextType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  flat: string;
  setFlat: React.Dispatch<React.SetStateAction<string>>;
  house: string;
  setHouse: React.Dispatch<React.SetStateAction<string>>;
  road: string;
  setRoad: React.Dispatch<React.SetStateAction<string>>;
  area: string;
  setArea: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
}

interface CustomerInformationProviderProps {
  children: ReactNode;
}

export const CustomerInformationContext = createContext<CustomerInformationContextType | null>(
  null
);

export default function ({ children }: CustomerInformationProviderProps) {
  const [name, setName] = useState('');
  const [flat, setFlat] = useState('');
  const [house, setHouse] = useState('');
  const [road, setRoad] = useState('');
  const [area, setArea] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <CustomerInformationContext.Provider
      value={{
        name,
        setName,
        flat,
        setFlat,
        house,
        setHouse,
        road,
        setRoad,
        area,
        setArea,
        phone,
        setPhone,
      }}>
      {children}
    </CustomerInformationContext.Provider>
  );
}
