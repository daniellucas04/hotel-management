"use client";

import { Button, HR } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import {
  HiOutlineArrowLeft,
} from "react-icons/hi";

export default function ReservationDetails() {
  const [reservationData, setReservationData] = useState({
    id_guest: 0,
    id_plan: 0,
    id_bedroom: 0,
    check_in: new Date(),
    check_out: new Date(),
  });

  return (
    <>
      <section className="h-full mx-52 my-14">
        <Link
          className="flex items-center gap-2 text-gray-600 hover:text-gray-400 transition-all"
          href="/reservation"
        >
          <HiOutlineArrowLeft size={"16px"} />
          Reservas
        </Link>
        <div className="flex items-center justify-between gap-4 mt-4">
          <div className="flex items-center gap-4">
            <img
              src={reservationData.title}
              className="max-w-20 max-h-2max-w-20 rounded-full"
            />
            <span className="text-3xl font-medium">{reservationData.description}</span>
          </div>
          <div>
            <Button color="light" size="sm">
              <Link href="/reservation/edit/1">Editar reserva</Link>
            </Button>
          </div>
        </div>
        <HR />
        <div className="flex justify-evenly">
          <section className="flex flex-col items-start gap-4 text-gray-500">
            <div className="flex items-center gap-4">
              <span className="text-zinc-900 font-medium">Hóspede: </span>
              <span>{reservationData.title}</span>
            </div>
          </section>
          <section className="flex flex-col items-start gap-4 text-gray-500">
            <div className="flex items-center gap-4">
              <span className="text-zinc-900 font-medium">Plano: </span>
              <span>{reservationData.description}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-zinc-900 font-medium">Data de check-in</span>
              <span>{reservationData.check_in.toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-zinc-900 font-medium">Data de check-out</span>
              <span>{reservationData.check_out.toLocaleDateString()}</span>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
