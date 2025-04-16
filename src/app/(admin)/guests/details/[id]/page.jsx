"use client";

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

export default function GuestDetails() {
  const [guestData, setGuestData] = useState({
    id_plan: 1,
    name: "Hóspede",
    last_name: "Teste",
    document: "123.123.123-23",
    birthday: "2003-09-20",
    phone1: "(12) 11231-2131",
    phone2: "",
    address: "Rua hóspede, 20",
    photo: "https://placehold.co/50x50",
  });

  return (
    <>
      
      <section className="h-full mx-52 my-14">
        <a
          className="flex items-center gap-2 text-gray-600 hover:text-gray-400 transition-all"
          href="/guests"
        >
          <HiOutlineArrowLeft size={"16px"} />
          Users
        </a>
        <div className="flex items-center justify-between gap-4 mt-4">
          <div className="flex items-center gap-4">
            <img
              src={guestData.name}
              className="max-w-20 max-h-2max-w-20 rounded-full"
            />
            <span className="text-3xl font-medium">{guestData.name}</span>
          </div>
          <div>
            <Button color="light" size="sm">
              <a href="/employee/edit/1">Editar perfil</a>
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
              <span>{guestData.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <HiOutlinePhone />
              </span>
              <span className="text-zinc-900 font-medium">Telefone</span>
              <span>{guestData.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <HiOutlineMail />
              </span>
              <span className="text-zinc-900 font-medium">E-mail</span>
              <span>{guestData.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <HiOutlineUser />
              </span>
              <span className="text-zinc-900 font-medium">Nome completo</span>
              <span>{guestData.name}</span>
            </div>
          </section>
          <section className="flex flex-col items-start gap-4 text-gray-500">
            <div className="flex items-center gap-4">
              <span>
                <HiOutlineUsers />
              </span>
              <span className="text-zinc-900 font-medium">Acompanhantes</span>
              <span>{guestData.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <HiOutlineClock />
              </span>
              <span className="text-zinc-900 font-medium">Cliente desde</span>
              <span>{guestData.name.since}</span>
            </div>
          </section>
        </div>

        <HR />

        <div className="flex flex-col items-center justify-center mt-14">
          <h1 className="text-lg font-bold">Plano do hóspede</h1>
          <div className="flex gap-8">
            <div className="text-xl mt-8 border px-12 py-8 rounded-md font-semibold scale-90 hover:scale-105 hover:cursor-default transition-all">
              <p className="text-center text-2xl">{guestData.name.plan}</p>
              <div className="mt-4">
                Neste plano está incluso:
                {guestData.name.details.map((value) => (
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
                {guestData.name.details.map((value) => (
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
                {guestData.name.details.map((value) => (
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
