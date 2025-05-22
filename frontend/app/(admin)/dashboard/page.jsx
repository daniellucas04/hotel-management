"use client";

import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiOutlineBan, HiOutlineCurrencyDollar, HiOutlineIdentification, HiOutlineLightBulb } from "react-icons/hi";
import { getGuestsRegistred } from "./actions";

export default function Dashboard() {
  const [guestsRegistred, setGuestsRegistred] = useState(0);

  async function fetchGuestsRegistred() {
    const result = await getGuestsRegistred();
    setGuestsRegistred(result.count);
  }

  useEffect(() => {
    fetchGuestsRegistred();
  }, [])

  return (
    <>
      <div className="m-10">
        <h1 className="text-4xl font-medium mb-10">Seja bem-vindo!</h1>
        <span className="text-2xl text-gray-600">
          Atividades do hotel hoje
        </span>
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          <Card className="bg-green-400 shadow-lg text-white font-bold">
            <div className="flex justify-between items-center text-2xl">
              Hóspedes cadastrados
              <HiOutlineIdentification className="text-white" size={40} />
            </div>
            <span className="text-6xl">{guestsRegistred}</span>
          </Card>
          <Card className="bg-yellow-400 shadow-lg text-white font-bold">
            <div className="flex justify-between items-center text-2xl">
              Reservas ativas
              <HiOutlineLightBulb className="text-white" size={40} />
            </div>
            <span className="text-6xl">10</span>
          </Card>
          <Card className="bg-orange-400 shadow-lg text-white font-bold">
            <div className="flex justify-between items-center text-2xl">
              Quartos ocupados
              <HiOutlineBan className="text-white" size={40} />
            </div>
            <span className="text-6xl">10</span>
          </Card>
          <Card className="bg-rose-400 shadow-lg text-white font-bold">
            <div className="flex justify-between items-center text-2xl">
              Total em check-outs hoje
              <HiOutlineCurrencyDollar className="text-white" size={40} />
            </div>
            <span className="text-6xl">10</span>
          </Card>
        </section>
      </div>
    </>
  );
}
