"use client";

import { Badge, Card, HR } from "flowbite-react";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { getTask } from "../../actions";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";

export default function TaskDetails({ params }) {
  const { id } = use(params);

  const [task, setTask] = useState({});
  const [priorityColor, setPriorityColor] = useState({});

  async function fetchTask(id) {
    try {
      const result = await getTask(id);

      setTask(result);
      setPriorityColor(getPriorityColor(result.priority));
    } catch (error) {

    }
  }

  function getPriorityColor(priority) {
    if (priority == 'Baixa')
      return 'gray'

    if (priority == 'Normal')
      return 'blue'

    if (priority == 'Alta')
      return 'yellow'

    if (priority == 'Urgente')
      return 'red'
  }

  useEffect(() => {
    fetchTask(id);
  }, []);

  return (
    <>
      <section className="overflow-x-auto p-10">
        <Link href={'/tasks'} className="text-2xl flex items-center gap-4 font-medium text-zinc-600"><HiOutlineArrowCircleLeft /> Voltar</Link>

        <div className="flex gap-12 justify-center mt-12">
          <Card className="w-[44rem]">
            <div className="">
              <h2 className="font-bold text-zinc-800 flex items-center justify-between">Informações da Tarefa <Badge color={priorityColor}>{task.priority}</Badge></h2>

              <span className="flex justify-between mt-8">
                <span className="font-medium text-gray-700">Responsável</span> <span className="text-gray-600">{task?.employee?.name} {task?.employee?.last_name}</span>
              </span>
              
              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Reserva</span> <span className="text-gray-600">{task?.reservation?.bedroom?.number}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Descrição</span> <span className="text-gray-600">{task?.description}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Preço</span> <span className="text-gray-600">R$ {String(Number(task?.price).toFixed(2)).replace('.', ',')}</span>
              </span>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
