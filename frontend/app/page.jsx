'use client'

import { Button, Card, Label, TextInput } from "flowbite-react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { loginEmployee } from "./actions";

export default function Login() {
    const [data, setData] = useState({
        login: '',
        password: '',
    })

    function handleData(event) {
        setData(p => ({ ...p, [event.target.name]: event.target.value }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        // const login = await loginEmployee(data);
        // if (login) {
        //     alert('login feito com sucesso');
            redirect('/dashboard', 'replace');
            
        // }

    }

    return (
        <main className="flex items-center justify-center h-screen w-full">
            <Card className="w-[30rem]">
                <div className="flex justify-center">
                    <img className="rounded-md" src="https://placehold.co/100x100" />
                </div>
                <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="login">Login</Label>
                        </div>
                        <TextInput id="login" type="text" onChange={handleData} name="login" />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1">Senha</Label>
                        </div>
                        <TextInput id="password1" type="password" onChange={handleData} name="password" />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </Card>
        </main>
    );
}
