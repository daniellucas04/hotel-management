"use client";

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
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { getPlan, updatePlan } from "../../actions";
import Swal from "sweetalert2";

export default function EditPlan({ params }) {
  const { id } = use(params);
  const [plan, setPlan] = useState({
    title: '',
    description: '',
    price: '',
  });

  async function fetchPlan(id) {
    try {
      const result = await getPlan(id);
      setPlan(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPlan(id);
  }, []);

  function handleData(event) {
    setPlan((p) => ({ ...p, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const planData = await updatePlan(id, plan);
      console.log(planData);
      if (planData.message) {
        Swal.fire({
          text: planData.message,
          icon: "error",
          timer: 3000,
          toast: true,
          position: "top-right",
          showConfirmButton: false,
        });
        return;
      }

      Swal.fire({
        text: "Plano editado com sucesso.",
        icon: "success",
        timer: 3000,
        toast: true,
        position: "top-right",
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        text: "Erro ao editar o plano. Tente novamente!",
        icon: "error",
        timer: 3000,
        toast: true,
        position: "top-right",
        showConfirmButton: false,
      });
    }
  }

  return (
    <>
      
      <section className="overflow-x-auto p-10">
        <h1 className="text-2xl mb-4">Editar plano</h1>
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
                value={plan.title}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineBadgeCheck}
                placeholder="Descrição *"
                onChange={handleData}
                name="description"
                required
                value={plan.description}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineIdentification}
                placeholder="Preço *"
                onChange={handleData}
                name="price"
                required
                value={plan.price}
              />
            </div>

            <HR />
            <div className="flex items-center gap-4 justify-end">
              <Button color="light">
                <Link href="/plans">Cancelar</Link>
              </Button>
              <Button type="submit">Salvar</Button>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
}
