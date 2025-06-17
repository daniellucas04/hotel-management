'use client'

import { Button, Card, Label, TextInput } from "flowbite-react";
import { redirect, useRouter } from 'next/navigation';
import { useState } from "react";
import { loginEmployee } from "./actions";
import Swal from "sweetalert2";
import { useAuth } from "./lib/useAuth";

export default function Login() {
    if (useAuth()) {
        redirect('/dashboard');
    }

    const [data, setData] = useState({
        login: '',
        password: '',
    });

    function handleData(event) {
        setData(p => ({ ...p, [event.target.name]: event.target.value }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const login = await loginEmployee(data);
        console.log(login);
        if (login) {
            console.log('oi')
            Swal.fire({
                title: "Login realizado com sucesso!",
                text: "Aguarde o redirecionamento...",
                icon: "success",
                timer: 3000,
                toast: true,
                position: "top-right",
                showConfirmButton: false,
            });

            setTimeout(() => {
                redirect('/dashboard');
            }, 3000)
        }
    }

    return (
        <main className="flex items-center justify-center h-screen w-full bg-gray-50 px-4">
            <Card className="w-full max-w-md shadow-lg border border-gray-200">
                <div className="flex flex-col items-center mb-6">
                    <img src="/logo.svg" alt="Logo Monteluz Hotel" className="h-16 w-auto mb-2" />
                    <span className="text-2xl font-semibold text-gray-800">Monteluz Hotel</span>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <Label htmlFor="login" className="mb-2 block">Login</Label>
                        <TextInput id="login" type="text" onChange={handleData} name="login" required shadow />
                    </div>
                    <div>
                        <Label htmlFor="password" className="mb-2 block">Senha</Label>
                        <TextInput id="password" type="password" onChange={handleData} name="password" required shadow />
                    </div>
                    <Button type="submit" gradientDuoTone="purpleToBlue" className="mt-2">
                        Entrar
                    </Button>
                </form>
            </Card>
        </main>
    );
}
