'use client';

import { useAuth } from '@/app/lib/useAuth';
// import {
//   HiOutlineBan,
//   HiOutlineCurrencyDollar,
//   HiOutlineIdentification,
//   HiOutlineLightBulb,
// } from 'react-icons/hi';

import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiOutlineBan, HiOutlineCash, HiOutlineCheckCircle, HiOutlineCurrencyDollar, HiOutlineIdentification, HiOutlineLightBulb } from "react-icons/hi";
import { getBedroomsOcuppied, getGuestsRegistred, getReservationsActive, getTotalCheckins, getTotalMoneyReservations, getTotalMoneyTasks } from "./actions";
import withPermission from "../config/withPermissions";

export function Dashboard() {
  const [guestsRegistred, setGuestsRegistred] = useState(0);
  const [reservationsActive, setReservationsActive] = useState(0);
  const [bedroomsOccupied, setBedroomsOccupied] = useState(0);
  const [totalCheckins, setTotalCheckins] = useState(0);
  const [totalMoneyTasks, setTotalMoneyTasks] = useState(0);
  const [totalMoneyReservations, setTotalMoneyReservations] = useState(0);

  async function fetchGuestsRegistred() {
    const result = await getGuestsRegistred();
    setGuestsRegistred(result.count);
  }

  async function fetchReservationsActive() {
    const result = await getReservationsActive();
    setReservationsActive(result.count);
  }

  async function fetchBedroomsOcuppied() {
    const result = await getBedroomsOcuppied();
    setBedroomsOccupied(result.count);
  }

  async function fetchTotalCheckins() {
    const result = await getTotalCheckins();
    setTotalCheckins(result.count);
  }

  async function fetchTotalMoneyInTasks() {
    const result = await getTotalMoneyTasks();
    setTotalMoneyTasks(result.sum);
  }

  async function fetchTotalMoneyInReservations() {
    const result = await getTotalMoneyReservations();
    setTotalMoneyReservations(result.sum);
  }

  useEffect(() => {
    fetchGuestsRegistred();
    fetchReservationsActive();
    fetchBedroomsOcuppied();
    fetchTotalCheckins();
    fetchTotalMoneyInTasks();
    fetchTotalMoneyInReservations();
  }, []);

   const isAuthenticated = useAuth();

  if (isAuthenticated === null) {
    return <div>Carregando...</div>;
  }

  if (!isAuthenticated) {
    return null; // O hook já redireciona
  }


  return (
    <>
      <div className="m-10">
        <h1 className="text-4xl font-medium mb-10">Seja bem-vindo!</h1>
        <span className="text-2xl text-gray-600">
          Atividades do hotel hoje
        </span>
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          <Card className="bg-lime-600 shadow-lg text-white font-bold">
            <div className="flex justify-between items-center text-2xl">
              Hóspedes cadastrados
              <HiOutlineIdentification className="text-white" size={40} />
            </div>
            <span className="text-6xl">{guestsRegistred ?? 0}</span>
          </Card>
          <Card className="bg-yellow-400 shadow-lg text-white font-bold">
            <div className="flex justify-between items-center text-2xl">
              Reservas ativas
              <HiOutlineLightBulb className="text-white" size={40} />
            </div>
            <span className="text-6xl">{reservationsActive ?? 0}</span>
          </Card>
          <Card className="bg-orange-400 shadow-lg text-white font-bold">
            <div className="flex justify-between items-center text-2xl">
              Quartos ocupados
              <HiOutlineBan className="text-white" size={40} />
            </div>
            <span className="text-6xl">{bedroomsOccupied ?? 0}</span>
          </Card>
          <Card className="bg-rose-400 shadow-lg text-white font-bold">
            <div className="flex justify-between items-center text-2xl">
              Check-ins hoje
              <HiOutlineCheckCircle className="text-white" size={40} />
            </div>
            <span className="text-6xl">{totalCheckins ?? 0}</span>
          </Card>
        </section>

        <section className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-4">
          <Card className="bg-emerald-400 shadow-lg text-white font-bold">
            <div className="flex gap-4 items-center text-2xl">
              <HiOutlineCash className="text-white" size={40} />
              Receita arrecadada pelas tarefas
            </div>
            <span className="text-6xl">R$ {String(Number(totalMoneyTasks).toFixed(2)).replace('.', ',')}</span>
          </Card>

          <Card className="bg-emerald-400 shadow-lg text-white font-bold">
            <div className="flex gap-4 items-center text-2xl">
              <HiOutlineCash className="text-white" size={40} />
              Receita arrecadada pelas reservas no último mês
            </div>
            <span className="text-6xl">R$ {String(Number(totalMoneyReservations).toFixed(2)).replace('.', ',')}</span>
          </Card>
        </section>
      </div>
    </>
  );
}

export default withPermission(Dashboard, ["Admin", "Gerente de Hotel", "Recepcionista", "Zelador", "Camareiro", "Cozinheiro"]);
