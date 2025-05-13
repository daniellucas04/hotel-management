"use client";

import { Button, HR } from "flowbite-react";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import {
  HiOutlineArrowLeft,
  HiOutlineCash,
} from "react-icons/hi";
import { getPlan } from "../../actions";

export default function PlanDetails({ params }) {
    const { id } = use(params);
  
    const [plan, setPlan] = useState({});
  
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
  

  return (
    <>      
      <section className="h-full mx-52 my-14">
        <Link
          className="flex items-center gap-2 text-gray-600 hover:text-gray-400 transition-all"
          href="/plans"
        >
          <HiOutlineArrowLeft size={"16px"} />
          Planos
        </Link>
        <div className="flex items-center justify-between gap-4 mt-4">
          <div className="flex items-center gap-4">
            <HiOutlineCash size={35} />
            <span className="text-3xl font-medium">{plan.title}</span>
          </div>
          <div>
            <Button color="light" size="sm">
              <Link href="/plans/edit/1">Editar plano</Link>
            </Button>
          </div>
        </div>
        <HR />
        <div className="flex justify-evenly">
          <section className="flex flex-col items-start gap-4 text-gray-500">
            <div className="flex items-center gap-4">
              <span className="text-zinc-900 font-medium">Título: </span>
              <span>{plan.title}</span>
            </div>
          </section>
          <section className="flex flex-col items-start gap-4 text-gray-500">
          <div className="flex items-center gap-4 max-w-16">
              <span className="text-zinc-900 font-medium">Descrição: </span>
              <span>{plan.description}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-zinc-900 font-medium">Preço</span>
              <span>R$ {String(Number(plan.price).toFixed(2)).replace('.', ',')}</span>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
