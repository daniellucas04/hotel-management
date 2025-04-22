"use client";

import {
  HiOutlineCollection,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { Button, Card, Datepicker, HR, Label, Select } from "flowbite-react";
import { useState } from "react";

export default function EditReservation() {
  const [reservationData, setReservationData] = useState({
    id_guest: 0,
    id_plan: 0,
    id_bedroom: 0,
    check_in: new Date(),
    check_out: new Date(),
  });

  function handleData(event) {
    setReservationData((p) => ({ ...p, [event.target.name]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(planData);
  }

  return (
    <>
      <section className="overflow-x-auto m-10 h-screen">
        <h1 className="text-2xl mb-4">Editar reserva</h1>
        <Card>
          <form
            onSubmit={handleSubmit}
            method="post"
            className="flex flex-col gap-4"
          >
            <h1 className="text-xl font-bold flex items-center gap-2">
              <HiOutlineViewGrid /> Informações gerais
            </h1>
            <div className="flex gap-4">
              <Select
                className="flex-auto"
                defaultValue={reservationData.id_guest}
                name="id_guest"
                icon={HiOutlineUser}
                onChange={handleData}
              >
                <option disabled value="">
                  Escolha um hóspede
                </option>
                {/* Hóspedes vindo do banco */}
              </Select>
              <Select
                className="flex-auto"
                defaultValue={reservationData.id_plan}
                name="id_plan"
                icon={HiOutlineShoppingCart}
                onChange={handleData}
              >
                <option disabled value="">
                  Escolha um plano
                </option>
                {/* Planos vindo do banco */}
              </Select>
              <Select
                className="flex-auto"
                defaultValue={reservationData.id_bedroom}
                name="id_bedroom"
                icon={HiOutlineCollection}
                onChange={handleData}
              >
                <option disabled value="">
                  Escolha um quarto
                </option>
                {/* Quartos vindo do banco */}
              </Select>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-auto flex-col gap-2">
                <Label>Check In</Label>
                <Datepicker
                  language="pt-BR"
                  // Validar data na inserção do object (reservationData)
                  onChange={(date) => {setMinDateForCheckOut(date); setIsDateCheckInFill(true); handleData(date)}}
                  labelTodayButton="Hoje"
                  showClearButton={false}
                  minDate={reservationData.check_in}
                  showTodayButton={false}
                  name="check_in"
                  required
                />
              </div>
              <div className="flex flex-auto flex-col gap-2">
                <Label>Check Out</Label>
                <Datepicker
                  language="pt-BR"
                  labelTodayButton="Hoje"
                  showClearButton={false}
                  minDate={reservationData.check_out}
                  showTodayButton={false}
                  name="check_out"
                  required
                  onChange={handleData}
                />
              </div>
            </div>

            <HR />
            <div className="flex items-center gap-4 justify-end">
              <Button color="light">
                <Link href="/reservation">Cancelar</Link>
              </Button>
              <Button type="submit">Editar</Button>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
}
