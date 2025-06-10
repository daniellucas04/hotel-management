'use server';

import { cookies } from 'next/headers'; 

export async function loginEmployee(data) {
  const response = await fetch('http://localhost:8000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
 
  });

  const responseData = await response.json(); 

  if (!response.ok) {
    throw new Error(responseData.error || 'Erro ao fazer login');
  }

  cookies().set('token', responseData.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8, 
  });

  return responseData.user;
}