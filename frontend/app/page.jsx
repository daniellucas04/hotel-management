'use client';

<<<<<<< HEAD
import { Button, Card, Label, TextInput } from "flowbite-react";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { loginEmployee } from "./actions";

export default function Login() {
    const [data, setData] = useState({
        login: '',
        password: '',
    });

=======
import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { loginEmployee } from './actions';

export default function Login() {
    const [data, setData] = useState({ login: '', password: '' });
    const [error, setError] = useState('');
>>>>>>> a6a3efa04329c126ee861f54c001e44e973ce3b4
    const router = useRouter();

    function handleData(event) {
        setData((p) => ({ ...p, [event.target.name]: event.target.value }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setError('');

        try {
<<<<<<< HEAD
            const login = await loginEmployee(data);
            if (login) {
                alert('Login feito com sucesso');
                router.push('/dashboard');
            }
        } catch (error) {
            alert('Erro no login');
=======
            await loginEmployee(data);
            console.log('Redirecting to dashboard')
            router.replace('/dashboard');
        } catch (error) {
            setError('Login inválido. Verifique suas credenciais.');
>>>>>>> a6a3efa04329c126ee861f54c001e44e973ce3b4
        }
    }

    return (
        <main className='flex items-center justify-center h-screen w-full'>
            <Card className='w-[30rem]'>
                <div className='flex justify-center'>
                    <img className='rounded-md' src='https://placehold.co/100x100' />
                </div>
<<<<<<< HEAD
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <Label htmlFor="login" className="mb-2 block">Login</Label>
                        <TextInput id="login" type="text" onChange={handleData} name="login" required />
                    </div>
                    <div>
                        <Label htmlFor="password" className="mb-2 block">Senha</Label>
                        <TextInput id="password" type="password" onChange={handleData} name="password" required />
                    </div>
                    <Button type="submit">Entrar</Button>
=======
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
>>>>>>> a6a3efa04329c126ee861f54c001e44e973ce3b4
                </form>
            </Card>
        </main>
    );
}