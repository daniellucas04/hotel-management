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
import Link from "next/link";
import { createPlan, validateCreate } from "../actions";
import Swal from "sweetalert2";
import { redirect } from "next/navigation";

export default function CreatePlan() {
  const [plan, setPlan] = useState({
    title: '',
    description: "",
    price: "",
  });

  function handleData(event) {
    setPlan(p => ({...p, [event.target.name]: event.target.value}))
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const error = validateCreate(plan);
    if (error.length == 0) {
          try {
            const planData = await createPlan(plan);
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
              text: "Plano cadastrado com sucesso",
              icon: "success",
              timer: 3000,
              toast: true,
              position: "top-right",
              showConfirmButton: false,
            });
    
            setTimeout(() => {
              redirect("/plans");
            }, 3000);
          } catch (error) {
            console.log(error);
            Swal.fire({
              text: "Erro ao cadastrar o plano. Tente novamente!",
              icon: "error",
              timer: 3000,
              toast: true,
              position: "top-right",
              showConfirmButton: false,
            });
          }
        } else {
          Swal.fire({
            html: error.join("<br>"),
            icon: "error",
            timer: 0,
            toast: true,
            position: "top-right",
            showConfirmButton: false,
          });
        }
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
                icon={HiOutlineCash}
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
