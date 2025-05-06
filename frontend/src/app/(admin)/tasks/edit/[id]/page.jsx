"use client";

import {
  Button,
  Card,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle, HiOutlineUser } from "react-icons/hi";

export default function TaskEdit() {
  const [taskData, setTaskData] = useState({
    id_employee: 0,
    id_reservation: 0,
    priority: "Baixa",
    description: "",
    price: 0.0,
  });

  function handleData(event) {
    setTaskData((p) => ({ ...p, [event.target.name]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(taskData);
  }

  return (
    <>
      <section className="h-full m-10">
        <Card className="p-4">
          <div className="flex justify-center text-lg font-medium">
            <h1>Quarto (Número/Identificação)</h1>
          </div>
          <div>
            <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="flex-auto">
                  <Label htmlFor="emplyoee">Responsável</Label>
                  <Select
                    id="emplyoee"
                    icon={HiOutlineUser}
                    onChange={handleData}
                    name="id_employee"
                    value={taskData.id_employee}
                  >
                    <option value="">Funcionário 1</option>
                    <option value="">Funcionário 2</option>
                    <option value="">Funcionário 3</option>
                  </Select>
                </div>

                <div className="flex-auto">
                  <Label htmlFor="reservation">Reserva</Label>
                  <Select
                    id="reservation"
                    icon={HiOutlineUser}
                    onChange={handleData}
                    name="id_reservation"
                    value={taskData.id_reservation}
                  >
                    <option value="">Reserva 1</option>
                    <option value="">Reserva 2</option>
                    <option value="">Reserva 3</option>
                  </Select>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-auto">
                  <Label htmlFor="priority">Prioridade</Label>
                  <Select
                    id="priority"
                    icon={HiOutlineExclamationCircle}
                    onChange={handleData}
                    name="priority"
                    value={taskData.priority}
                  >
                    <option>Baixa</option>
                    <option>Normal</option>
                    <option>Alta</option>
                    <option>Urgente</option>
                  </Select>
                </div>

                <div className="flex-auto">
                  <Label htmlFor="priority">Preço</Label>
                  <TextInput type="number" name="price" onChange={handleData} />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  placeholder="Mais informações do produto / serviço"
                  onChange={handleData}
                  name="description"
                  value={taskData.description}
                  rows={4}
                />
              </div>
              <div className="flex justify-end gap-4">
                <Button color="light">
                  <Link href="/tasks">Cancelar</Link>
                </Button>
                <Button type="submit">Cadastrar</Button>
              </div>
            </form>
          </div>
        </Card>
      </section>
    </>
  );
}
