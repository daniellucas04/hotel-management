"use client";

import {
  Button,
  Card,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineExclamationCircle, HiOutlineUser } from "react-icons/hi";
import { createTask, getAllEmployees, getAllReservations, validateCreate } from "../actions";
import Swal from "sweetalert2";
import { redirect } from "next/navigation";

export default function TaskCreate() {
  const [task, setTask] = useState({
    id_employee: '',
    id_reservation: '',
    priority: 'Baixa',
    description: '',
    price: 0,
  });
  const [employees, setEmployees] = useState([]);
  const [reservations, setReservations] = useState([]);

  function handleData(event) {
    setTask((p) => ({ ...p, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const taskData = await createTask(task);
      if (taskData.message) {
        Swal.fire({
          title: taskData.message,
          html: taskData.errors.join('<br>'),
          width: 500,
          icon: "error",
          timer: 3000,
          toast: true,
          position: "top-right",
          showConfirmButton: false,
        });
        return;
      }

      Swal.fire({
        text: "Tarefa cadastrada com sucesso",
        icon: "success",
        timer: 3000,
        toast: true,
        position: "top-right",
        showConfirmButton: false,
      });

      setTimeout(() => {
        redirect("/tasks");
      }, 3000);
    } catch (error) {
      Swal.fire({
        text: "Erro ao cadastrar a tarefa. Tente novamente!",
        icon: "error",
        timer: 3000,
        toast: true,
        position: "top-right",
        showConfirmButton: false,
      });
    }
  }

  async function fetchAllEmployees() {
    const results = await getAllEmployees();
    setEmployees(results ?? []);
  }

  async function fetchAllReservations() {
    const results = await getAllReservations();
    setReservations(results ?? []);
  }

  useEffect(() => {
    fetchAllEmployees();
    fetchAllReservations();
  }, []);

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
                  >
                    <option value="">Selecione um funcionário</option>
                    {employees.map((employee) => (
                      <option key={employee.id} value={employee.id}>
                        {employee.name}
                      </option>
                    ))}
                  </Select>
                </div>

                <div className="flex-auto">
                  <Label htmlFor="reservation">Reserva</Label>
                  <Select
                    id="reservation"
                    icon={HiOutlineUser}
                    onChange={handleData}
                    name="id_reservation"
                  >
                    <option value="">Selecione uma reserva</option>
                    {reservations.map((reservation) => (
                      <option key={reservation.id} value={reservation.id}>
                        {reservation.bedroom.number} ({reservation.guest.name})
                      </option>
                    ))}
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
                  >
                    <option>Baixa</option>
                    <option>Normal</option>
                    <option>Alta</option>
                    <option>Urgente</option>
                  </Select>
                </div>

                <div className="flex-auto">
                  <Label htmlFor="priority">Preço</Label>
                  <TextInput type="number" name="price" defaultValue={task.price} onChange={handleData} />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  placeholder="Mais informações do produto / serviço"
                  onChange={handleData}
                  name="description"
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
