'use client';

import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { loginEmployee } from './actions';

export default function Login() {
    const [data, setData] = useState({ login: '', password: '' });
    const [error, setError] = useState('');
    const router = useRouter();

    function handleData(event) {
        setData((p) => ({ ...p, [event.target.name]: event.target.value }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setError('');

        try {
            await loginEmployee(data);
            console.log('Redirecting to dashboard')
            router.replace('/dashboard');
        } catch (error) {
            setError('Login inválido. Verifique suas credenciais.');
        }
    }

    return (
        <main className='flex items-center justify-center h-screen w-full'>
            <Card className='w-[30rem]'>
                <div className='flex justify-center'>
                    <img className='rounded-md' src='https://placehold.co/100x100' />
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <div>
                        <Label htmlFor='login'>Login</Label>
                        <TextInput id='login' type='text' onChange={handleData} name='login' required />
                    </div>
                    <div>
                        <Label htmlFor='password'>Senha</Label>
                        <TextInput id='password' type='password' onChange={handleData} name='password' required />
                    </div>
                    {error && <p className='text-red-500'>{error}</p>}
                    <Button type='submit'>Entrar</Button>
                </form>
            </Card>
        </main>
    );
}