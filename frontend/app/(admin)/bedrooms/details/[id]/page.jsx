'use client'

import { Card, HR } from "flowbite-react";
import { getBedroom } from "../../actions";
import { use, useEffect, useState } from "react";
import { LuBedDouble } from "react-icons/lu";
import Link from "next/link";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";

let listOfPrivileges = {
  free_wifi: 'Wifi gratuito',
  bedroom_bathroom: "Banheiro no quarto",
  breakfast: "Café da manhã",
  air_conditioner: "Ar condicionado",
  fan: "Ventilador",
  frigobar: "Frigobar",
  garage: "Estacionamento"
}

function translatePrivileges(privileges) {
  let privilegesList = String(privileges).split(','); 
  let privilegesTranslated = [];
  privilegesList.forEach((item) => {
      privilegesTranslated.push(listOfPrivileges[item]);
  });

  return privilegesTranslated.join(", ");
}

export default function BedroomsDetails({ params }) {
  const [bedroom, setBedroom] = useState({});
  const { id } = use(params);

  async function fetchBedroom(id) {
    try {
      const result = await getBedroom(id);
      setBedroom(result);
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchBedroom(id);
  }, []);

  return (
    <>
      <section className="overflow-x-auto p-10">
        <Link href={'/bedrooms'} className="text-2xl flex items-center gap-4 font-medium text-zinc-600"><HiOutlineArrowCircleLeft /> Voltar</Link>

        <div className="flex gap-12 mt-12">
          <div className="font-bold text-zinc-700">
            {bedroom.photo ? (
              <img className="w-full rounded-md shadow-lg" src={`http://localhost:8000/uploads/${bedroom.photo}`} alt="Imagem do hóspedde" />
            ) : (
              <div className="flex items-center justify-center">
                <LuBedDouble size={330} className="" />
              </div>
            )}
          </div>

          <Card className="w-full">
            <div className="">
              <h2 className="font-bold text-zinc-800">Informações do quarto</h2>

              <span className="flex justify-between mt-8">
                <span className="font-medium text-gray-700">Número</span> <span className="text-gray-600">{bedroom.number}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Banheiros</span> <span className="text-gray-600">{bedroom.bathroom_quantity}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Camas</span> <span className="text-gray-600">{bedroom.bed_quantity}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">TVs</span> <span className="text-gray-600">{bedroom.tv_quantity}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between mt-8">
                <span className="font-medium text-gray-700">Status</span> <span className="text-gray-600">{bedroom.status}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Categoria</span> <span className="text-gray-600">{bedroom.category}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Classificação</span> <span className="text-gray-600">{bedroom.classification}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Privilégios</span> <span className="text-gray-600">{translatePrivileges(bedroom.privileges)}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Descrição curta</span> <span className="text-gray-600">{bedroom.short_description}</span>
              </span>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
