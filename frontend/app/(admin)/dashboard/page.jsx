'use client';

import { Card } from 'flowbite-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { faker } from '@faker-js/faker';
import { HiOutlineBan, HiOutlineCurrencyDollar, HiOutlineIdentification, HiOutlineLightBulb } from 'react-icons/hi';
import Cookies from 'js-cookie'; // Import js-cookie
import ProtectedRoute from '../component/protectedRoute';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Demo chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Dashboard() {
  const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null;

  return (
    <ProtectedRoute>
      <div className='m-10'>
        <h1 className='text-4xl font-medium mb-10'>
          Seja bem-vindo{user ? `, ${user.name}` : ''}!
        </h1>
        <span className='text-2xl text-gray-600'>Atividades do hotel hoje</span>
        <section className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4'>
          <Card className='bg-green-400 shadow-lg text-white font-bold'>
            <div className='flex justify-between items-center text-2xl'>
              Hóspedes cadastrados
              <HiOutlineIdentification className='text-white' size={40} />
            </div>
            <span className='text-6xl'>10</span>
          </Card>
          <Card className='bg-yellow-400 shadow-lg text-white font-bold'>
            <div className='flex justify-between items-center text-2xl'>
              Reservas ativas
              <HiOutlineLightBulb className='text-white' size={40} />
            </div>
            <span className='text-6xl'>10</span>
          </Card>
          <Card className='bg-orange-400 shadow-lg text-white font-bold'>
            <div className='flex justify-between items-center text-2xl'>
              Quartos ocupados
              <HiOutlineBan className='text-white' size={40} />
            </div>
            <span className='text-6xl'>10</span>
          </Card>
          <Card className='bg-rose-400 shadow-lg text-white font-bold'>
            <div className='flex justify-between items-center text-2xl'>
              Total em check-outs hoje
              <HiOutlineCurrencyDollar className='text-white' size={40} />
            </div>
            <span className='text-6xl'>10</span>
          </Card>
        </section>
      </div>
    </ProtectedRoute>
  );
}