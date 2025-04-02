"use client";

import Header from "@/app/component/header";
import { Button, HR } from "flowbite-react";
import { useState } from "react";
import {
  HiOutlineArrowLeft,
} from "react-icons/hi";

export default function PlanDetails() {
  const [planData, setPlanData] = useState({
    title: 'Básico',
    description: "Algo a mais",
    price: 20.00,
  });

  return (
    <>
      <Header />
      <section className="h-full mx-52 my-14">
        <a
          className="flex items-center gap-2 text-gray-600 hover:text-gray-400 transition-all"
          href="/plans"
        >
          <HiOutlineArrowLeft size={"16px"} />
          Planos
        </a>
        <div className="flex items-center justify-between gap-4 mt-4">
          <div className="flex items-center gap-4">
            <img
              src={planData.title}
              className="max-w-20 max-h-2max-w-20 rounded-full"
            />
            <span className="text-3xl font-medium">{planData.description}</span>
          </div>
          <div>
            <Button color="light" size="sm">
              <a href="/plans/edit/1">Editar plano</a>
            </Button>
          </div>
        </div>
        <HR />
        <div className="flex justify-evenly">
          <section className="flex flex-col items-start gap-4 text-gray-500">
            <div className="flex items-center gap-4">
              <span className="text-zinc-900 font-medium">Título: </span>
              <span>{planData.title}</span>
            </div>
          </section>
          <section className="flex flex-col items-start gap-4 text-gray-500">
          <div className="flex items-center gap-4">
              <span className="text-zinc-900 font-medium">Descrição: </span>
              <span>{planData.description}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-zinc-900 font-medium">Preço</span>
              <span>{planData.price}</span>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
