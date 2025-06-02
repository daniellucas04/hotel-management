'use client';

import { Button, Navbar } from 'flowbite-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie'; // Import js-cookie
import {
  HiOutlineBookmark,
  HiOutlineCash,
  HiOutlineClipboardCheck,
  HiOutlineCollection,
  HiOutlineTemplate,
  HiOutlineUserGroup,
  HiOutlineUsers,
} from 'react-icons/hi';

export default function Header() {
  const pathName = usePathname();
  const router = useRouter();

  // Get user data from cookie
  const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null;

  async function handleLogout() {
    try {
      const response = await fetch('http://localhost:8000/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        // Cookies are cleared by the backend; redirect to login
        router.push('/');
      } else {
        console.error('Erro ao fazer logout:', await response.json());
      }
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  }

  return (
    <Navbar fluid rounded className='border-b border-b-gray-200'>
      <Navbar.Brand as={Link} href='/dashboard'>
        <img
          src='https://placehold.co/400x400'
          className='mr-3 h-6 sm:h-9'
          alt='hotel logo'
        />
        <span className='font-bold'>Hotel name</span>
      </Navbar.Brand>

      <div className='flex items-center gap-4 md:order-2'>
        {/* Optional: Display user name if available */}
        {user && <span className='text-sm'>Olá, {user.name}</span>}
        <Button onClick={handleLogout} color='red' size='sm'>
          Log out
        </Button>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link
          as={Link}
          className='flex items-center gap-2'
          href='/dashboard'
          active={pathName.includes('dashboard')}
        >
          <HiOutlineTemplate size={20} /> Dashboard
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          className='flex items-center gap-2'
          href='/employee'
          active={pathName.includes('employee')}
        >
          <HiOutlineUserGroup size={20} /> Funcionários
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          className='flex items-center gap-2'
          href='/plans'
          active={pathName.includes('plans')}
        >
          <HiOutlineCash size={20} /> Planos
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          className='flex items-center gap-2'
          href='/guests'
          active={pathName.includes('guests')}
        >
          <HiOutlineUsers size={20} /> Hóspedes
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          className='flex items-center gap-2'
          href='/bedrooms'
          active={pathName.includes('bedrooms')}
        >
          <HiOutlineCollection size={20} /> Quartos
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          className='flex items-center gap-2'
          href='/reservations'
          active={pathName.includes('reservations')}
        >
          <HiOutlineClipboardCheck size={20} /> Reservas
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          className='flex items-center gap-2'
          href='/tasks'
          active={pathName.includes('tasks')}
        >
          <HiOutlineBookmark size={20} /> Tarefas
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}