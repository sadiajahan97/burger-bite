import { useContext } from 'react';
import { CustomerInformationContext } from '../context/CustomerInformationProvider';

export default function () {
  const data = useContext(CustomerInformationContext)!;
  const areaOptionsArray = [
    'Adabor',
    'Badda',
    'Bandar',
    'Bangshal',
    'Biman Bandar',
    'Cantonment',
    'Chawkbazar',
    'Dakshinkhan',
    'Darus Salam',
    'Demra',
    'Dhanmondi',
    'Gazipur Sadar',
    'Gendaria',
    'Gulshan',
    'Hazaribagh',
    'Jatrabari',
    'Kadamtali',
    'Kafrul',
    'Kalabagan',
    'Kamrangirchar',
    'Keraniganj',
    'Khilgaon',
    'Khilkhet',
    'Kotwali',
    'Lalbagh',
    'Mirpur',
    'Mohammadpur',
    'Motijheel',
    'Narayanganj Sadar',
    'New Market',
    'Pallabi',
    'Paltan',
    'Ramna',
    'Rampura',
    'Sabujbagh',
    'Savar',
    'Shah Ali',
    'Shahbagh',
    'Sher-e-Bangla Nagar',
    'Shyampur',
    'Sutrapur',
    'Tejgaon',
    'Tejgaon Industrial Area',
    'Turag',
    'Uttara',
    'Uttar Khan',
  ];
  return (
    <section>
      <h2 className='mb-4 font-bold text-2xl'>Customer Information</h2>
      <form className='mb-12'>
        <div role='form' className='mb-2'>
          <label htmlFor='name' className='mr-4'>
            Name:
          </label>
          <input
            type='text'
            id='name'
            required
            autoComplete='off'
            value={data.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              data.setName(event.target.value)
            }
            className='border border-lightpatty focus:shadow focus:shadow-patty leading-none outline-none p-2 w-60'
          />
        </div>
        <fieldset className='border border-lightpatty flex flex-wrap gap-y-2 justify-between p-2'>
          <legend className='font-bold'>Address</legend>
          <div role='form'>
            <label htmlFor='flat' className='content-center mr-4'>
              Flat:
            </label>
            <input
              type='text'
              id='flat'
              required
              autoComplete='off'
              value={data.flat}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                data.setFlat(event.target.value)
              }
              className='border border-lightpatty content-center focus:shadow focus:shadow-patty leading-none outline-none p-2 w-60'
            />
          </div>
          <div role='form'>
            <label htmlFor='house' className='content-center mr-4'>
              House:
            </label>
            <input
              type='text'
              id='house'
              required
              autoComplete='off'
              value={data.house}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                data.setHouse(event.target.value)
              }
              className='border border-lightpatty content-center focus:shadow focus:shadow-patty leading-none outline-none p-2 w-60'
            />
          </div>
          <div role='form'>
            <label htmlFor='road' className='content-center mr-4'>
              Road:
            </label>
            <input
              type='text'
              id='road'
              required
              autoComplete='off'
              value={data.road}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                data.setRoad(event.target.value)
              }
              className='border border-lightpatty content-center focus:shadow focus:shadow-patty leading-none outline-none p-2 w-60'
            />
          </div>
          <div role='form'>
            <label htmlFor='area' className='content-center mr-4'>
              Area:
            </label>
            <select
              id='area'
              required
              value={data.area}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                data.setArea(event.target.value)
              }
              className='border border-lightpatty content-center focus:shadow focus:shadow-patty leading-none outline-none p-2 w-60'>
              {areaOptionsArray.map((areaOption, index) => (
                <option key={index}>{areaOption}</option>
              ))}
            </select>
          </div>
        </fieldset>
        <div role='form' className='mt-4'>
          <label htmlFor='phone' className='mr-4'>
            Phone:
          </label>
          <input
            type='tel'
            id='phone'
            required
            autoComplete='off'
            value={data.phone}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              data.setPhone(event.target.value)
            }
            className='border border-lightpatty focus:shadow focus:shadow-patty leading-none outline-none p-2 w-60'
          />
        </div>
      </form>
    </section>
  );
}
