'use client'

import {
  HiOutlineBadgeCheck,
  HiOutlineCash,
  HiOutlineViewGrid,
} from "react-icons/hi";
import {
  Button,
  Card,
  HR,
  TextInput,
} from "flowbite-react";
import { useState } from "react";

export default function CreatePlan() {
  const [planData, setPlanData] = useState({
    title: '',
    description: "",
    price: "",
  });

  function handleData(event) {
    setPlanData(p => ({...p, [event.target.name]: event.target.value}))
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(planData);
  }

  return (
    <>
      
      <section className="overflow-x-auto m-10">
        <h1 className="text-2xl mb-4">Criar novo plano</h1>
        <Card>
          <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-4">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <HiOutlineViewGrid /> Informações gerais
            </h1>
            <div className="flex gap-4">
              <TextInput
                className="flex-auto"
                icon={HiOutlineBadgeCheck}
                placeholder="Título *"
                onChange={handleData}
                name="title"
                required
                value={planData.title}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineBadgeCheck}
                placeholder="Descrição *"
                onChange={handleData}
                name="description"
                required
                value={planData.description}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineCash}
                placeholder="Preço *"
                onChange={handleData}
                name="price"
                required
                value={planData.price}
              />
            </div>

            <HR />
            <div className="flex items-center gap-4 justify-end">
              <Button color="light">
                <a href="/plans">Cancelar</a>
              </Button>
              <Button type="submit">Salvar</Button>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
}
