"use client";

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

export default function TaskDetails() {
  const [taskData, setTaskData] = useState({
    id_employee: 0,
    id_reservation: 0,
    priority: "Baixa",
    description: "",
    price: 0.0,
  });

  return (
    <>
      <Header />
      <section className="h-full mx-52 my-14">
        <a
          className="flex items-center gap-2 text-gray-600 hover:text-gray-400 transition-all"
          href="/tasks"
        >
          <HiOutlineArrowLeft size={"16px"} />
          Tarefas
        </a>
        <div className="flex items-center justify-between gap-4 mt-4">
          <div className="flex items-center gap-4">
            <img
              src={taskData.photo_url}
              className="max-w-20 max-h-2max-w-20 rounded-full"
            />
            <span className="text-3xl font-medium">{taskData.name}</span>
          </div>
          <div>
            <Button color="light" size="sm">
              <a href="/task/edit/1">Editar perfil</a>
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
              <span>{taskData.fullName}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <HiOutlinePhone />
              </span>
              <span className="text-zinc-900 font-medium">Telefone</span>
              <span>{taskData.phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <HiOutlineMail />
              </span>
              <span className="text-zinc-900 font-medium">E-mail</span>
              <span>{taskData.fullName}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <HiOutlineUser />
              </span>
              <span className="text-zinc-900 font-medium">Nome completo</span>
              <span>{taskData.fullName}</span>
            </div>
          </section>
          <section className="flex flex-col items-start gap-4 text-gray-500">
            <div className="flex items-center gap-4">
              <span>
                <HiOutlineUsers />
              </span>
              <span className="text-zinc-900 font-medium">Acompanhantes</span>
              <span>{taskData.escorts}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <HiOutlineClock />
              </span>
              <span className="text-zinc-900 font-medium">Cliente desde</span>
              <span>{taskData.hosting.since}</span>
            </div>
          </section>
        </div>

        <HR />

        <div className="flex flex-col items-center justify-center mt-14">
          <h1 className="text-lg font-bold">Plano do hóspede</h1>
          <div className="flex gap-8">
            <div className="text-xl mt-8 border px-12 py-8 rounded-md font-semibold scale-90 hover:scale-105 hover:cursor-default transition-all">
              <p className="text-center text-2xl">{taskData.hosting.plan}</p>
              <div className="mt-4">
                Neste plano está incluso:
                {taskData.hosting.details.map((value) => (
                  <span
                    key={value.service}
                    className="flex flex-col text-md text-gray-500"
                  >
                    - {value.service}
                  </span>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button color="blue">Alterar plano</Button>
              </div>
            </div>
            <div className="text-xl mt-8 border px-12 py-8 rounded-md font-semibold hover-90 hover:scale-110 hover:cursor-default transition-all">
              <p className="text-center text-2xl">Normal</p>
              <div className="mt-4">
                Neste plano está incluso:
                {taskData.hosting.details.map((value) => (
                  <span
                    key={value.service}
                    className="flex flex-col text-md text-gray-500"
                  >
                    - {value.service}
                  </span>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <span className="text-sm border py-2 px-4 rounded-md text-gray-500 shadow">
                  Plano atual
                </span>
              </div>
            </div>
            <div className="text-xl mt-8 border px-12 py-8 rounded-md font-semibold scale-90 hover:scale-105 hover:cursor-default transition-all">
              <p className="text-center text-2xl">Premium</p>
              <div className="mt-4">
                Neste plano está incluso:
                {taskData.hosting.details.map((value) => (
                  <span
                    key={value.service}
                    className="flex flex-col text-md text-gray-500"
                  >
                    - {value.service}
                  </span>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button color="blue">Alterar plano</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
