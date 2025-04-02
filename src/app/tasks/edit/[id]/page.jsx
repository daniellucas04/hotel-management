"use client";

import Header from "@/app/component/header";
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

export default function ProductsDetails() {
  const [taskData, setTaskData] = useState({
    id_employee: 0,
    id_reservation: 0,
    priority: "Baixa",
    description: "",
    price: 0.0,
  });

  return (
    <>
      <Header />
      <section className="h-full m-10">
        <Card className="p-4">
          <div className="flex justify-center text-lg font-medium">
            <h1>Quarto (Número/Identificação)</h1>
          </div>
          <div>
            <form className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="flex-auto">
                  <Label htmlFor="emplyoee">Responsável</Label>
                  <Select
                    id="emplyoee"
                    icon={HiOutlineUser}
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
                  <TextInput type="number" />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  placeholder="Mais informações do produto / serviço"
                  value={taskData.description}
                  rows={4}
                />
              </div>
              <div className="flex justify-end gap-4">
                <Button color="light">
                  <a href="/tasks">Cancelar</a>
                </Button>
                <Button>Cadastrar</Button>
              </div>
            </form>
          </div>
        </Card>
      </section>
    </>
  );
}
