"use client";

import Header from "@/app/component/header";
import {
  HiOutlineBadgeCheck,
  HiOutlineIdentification,
  HiOutlineViewGrid,
} from "react-icons/hi";
import {
  Button,
  Card,
  HR,
  TextInput,
} from "flowbite-react";
import { useState } from "react";

export default function CreateUser() {
  const [planData, setPlanData] = useState({
    title: 'Básico',
    description: "Algo a mais",
    price: 20.00,
  });

  return (
    <>
      <Header />
      <section className="overflow-x-auto m-10">
        <h1 className="text-2xl mb-4">Criar novo hóspede</h1>
        <Card>
          <form className="flex flex-col gap-4">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <HiOutlineViewGrid /> Informações gerais
            </h1>
            <div className="flex gap-4">
              <TextInput
                className="flex-auto"
                icon={HiOutlineBadgeCheck}
                placeholder="Título *"
                required
                value={planData.title}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineBadgeCheck}
                placeholder="Descrição *"
                required
                value={planData.description}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineIdentification}
                placeholder="Preço *"
                required
                value={planData.price}
              />
            </div>

            <HR />
            <div className="flex items-center gap-4 justify-end">
              <Button color="light">
                <a href="/plans">Cancelar</a>
              </Button>
              <Button>Salvar</Button>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
}
