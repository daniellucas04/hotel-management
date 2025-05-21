"use client";

import { use, useEffect, useState } from "react";
import { getGuest } from "../../actions";
import { Card, HR } from "flowbite-react";
import { HiOutlineUserCircle, HiUserCircle } from "react-icons/hi";

export default function GuestDetails({ params }) {
  const { id } = use(params);
  const [guest, setGuest] = useState({});

  async function fetchGuest(id) {
    try {
      const result = await getGuest(id);
      setGuest(result);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchGuest(id);
  }, []);

  return (
    <>
      <section className="overflow-x-auto p-10">
        <h1 className="text-2xl font-medium text-zinc-600">Detalhes do hóspede</h1>

        <div className="flex gap-12 mt-12">
          <Card className="w-[32rem] h-fit">
            <span className="text-2xl text-center text-zinc-700">
              {guest.name} {guest.last_name}
            </span>

            <div className="font-bold text-zinc-700">
              {guest.photo ? (
                <img className="w-[22rem] h-[22rem] rounded-full object-cover" src={`http://localhost:8000/uploads/${guest.photo}`} alt="Imagem do hóspedde" />
              ) : (
                <div className="flex items-center justify-center">
                  <HiUserCircle size={330} className="" />
                </div>
              )}
            </div>
          </Card>

          <Card className="w-full">
            <div className="">
              <h2 className="font-bold text-zinc-800">Informações do hóspede</h2>

              <span className="flex justify-between mt-8">
                <span className="font-medium text-gray-700">Documento</span> <span className="text-gray-600">{guest.document}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Data de nascimento</span> <span className="text-gray-600">{new Date(guest.birthday).toLocaleDateString('pt-BR', { timeZone: 'Europe/Belgrade' })}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Telefone 1</span> <span className="text-gray-600">{guest.phone1}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Telefone 2</span> <span className="text-gray-600">{guest.phone2 != "" ? guest.phone2 : 'N/A'}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Endereço</span> <span className="text-gray-600">{guest.address}</span>
              </span>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
