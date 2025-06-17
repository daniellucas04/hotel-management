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

        try {
            const login = await loginEmployee(data);
            if (login) {
                 Swal.fire({
                    title: "Login realizado com sucesso!",
                    text: "Aguarde o redirecionamento...",
                    icon: "success",
                    timer: 3000,
                    toast: true,
                    position: "top-right",
                    showConfirmButton: false,
                });
                redirect('/dashboard');
            }
        } catch (error) {
            console.log(error);
             Swal.fire({
                title: "Erro ao realizar login!",
                text: "Tente novamente.",
                icon: "error",
                timer: 3000,
                toast: true,
                position: "top-right",
                showConfirmButton: false,
            });
        }
    }

    return (
        <main className="flex items-center justify-center h-screen w-full">
            <Card className="w-[30rem]">
                <div className="flex justify-center">
                    <img className="rounded-md" src="https://placehold.co/100x100" />
                </div>
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
                </form>
            </Card>
        </main>
    );
}