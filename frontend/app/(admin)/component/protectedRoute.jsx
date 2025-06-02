'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Check if user cookie exists
    const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null;

    if (!user) {
      router.replace('/');
      return;
    }

    // Verify session with backend
    async function verifyToken() {
      try {
        const response = await fetch('http://localhost:8000/auth/verify', {
          method: 'GET',
          credentials: 'include',
        });
        if (!response.ok) {
          Cookies.remove('user');
          router.replace('/');
        }
      } catch (error) {
        Cookies.remove('user');
        router.replace('/');
      }
    }

    verifyToken();
  }, [router]);

  return children;
}