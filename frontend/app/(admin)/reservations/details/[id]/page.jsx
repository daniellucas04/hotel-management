"use client";

import { Card, HR } from "flowbite-react";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowLeft,
} from "react-icons/hi";
import { getReservation } from "../../actions";

export default function ReservationDetails({ params }) {
  const [reservation, setReservation] = useState();
  const { id } = use(params);
  
  async function fetchReservation(id) {
    try {
      const result = await getReservation(id);
      console.log(result);
      setReservation(result);
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchReservation(id);
  }, []);

  return (
    <>
      <section className="overflow-x-auto p-10">
        <Link href={'/plans'} className="text-2xl flex items-center gap-4 font-medium text-zinc-600"><HiOutlineArrowCircleLeft /> Voltar</Link>

        <div className="flex gap-12 justify-center mt-12">
          <Card className="w-[44rem]">
            <div className="">
              <h2 className="font-bold text-zinc-800">Informações do plano</h2>

              <span className="flex justify-between mt-8">
                <span className="font-medium text-gray-700">Título</span> <span className="text-gray-600">{}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Descrição</span> <span className="text-gray-600">{}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Preço</span> <span className="text-gray-600">{}</span>
              </span>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
