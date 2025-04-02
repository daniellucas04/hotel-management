'use client'

import Header from "@/app/component/header";
import { Button, HR } from "flowbite-react";
import { useState } from "react";
import {
  HiOutlineArrowLeft,
  HiOutlineClock,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineUsers,
} from "react-icons/hi";

export default function EmployeeDetails() {
  const [employeeData, setEmployeeData] = useState({
    id_workgroup: 1,
    name: 'Teste',
    last_name: 'Teste',
    document: '123.123.123-23',
    birthday: '2004-03-20',
    phone1: '(18) 9000-0000',
    phone2: '(18) 9000-0000',
    address: 'Rua teste, 200',
    photo: 'https://placehold.co/50x50',
    login: 'teste',
    email: 'teste@email.com',
    created_at: '2024-02-10'
  });

  return (
    <>
      <Header />
      <section className="h-full mx-52 my-14">
        <a
          className="flex items-center gap-2 text-gray-600 hover:text-gray-400 transition-all"
          href="/employees"
        >
          <HiOutlineArrowLeft size={"16px"} />
          Funcionários
        </a>
        <div className="flex items-center justify-between gap-4 mt-4">
          <div className="flex items-center gap-4">
            <img
              src={employeeData.photo}
              className="max-w-20 max-h-2max-w-20 rounded-full"
            />
            <span className="text-3xl font-medium">{employeeData.name}</span>
          </div>
          <div>
            <Button color="light" size="sm">
              <a href="/employee/edit/1">Editar funcionário</a>
            </Button>
          </div>
        </div>
        <HR />
        <div className="flex justify-evenly">
          <section className="flex flex-col items-start gap-4 text-gray-500">
            <div className="flex items-center gap-4">
              <span>
                <HiOutlineClock />
              </span>
              <span className="text-zinc-900 font-medium">Nome completo</span>
              <span>{employeeData.name} {employeeData.last_name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <HiOutlinePhone />
              </span>
              <span className="text-zinc-900 font-medium">Telefone</span>
              <span>{employeeData.phone1}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <HiOutlineMail />
              </span>
              <span className="text-zinc-900 font-medium">E-mail</span>
              <span>{employeeData.email}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <HiOutlineUser />
              </span>
              <span className="text-zinc-900 font-medium">Nome completo</span>
              <span>{employeeData.name} {employeeData.lastName}</span>
            </div>
          </section>
          <section className="flex flex-col items-start gap-4 text-gray-500">
            <div className="flex items-center gap-4">
              <span>
                <HiOutlineClock />
              </span>
              <span className="text-zinc-900 font-medium">Cliente desde</span>
              <span>{employeeData.created_at}</span>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
