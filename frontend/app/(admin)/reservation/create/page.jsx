"use client";

import {
  HiOutlineCollection,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { Button, Card, Datepicker, HR, Label, Select } from "flowbite-react";
import { useState } from "react";
import Link from "next/link";

export default function CreateReservation() {
  const [reservationData, setReservationData] = useState({
    id_guest: 0,
    id_plan: 0,
    id_bedroom: 0,
    check_in: new Date(),
    check_out: new Date(),
  });
  const [minDateForCheckOut, setMinDateForCheckOut] = useState(new Date());
  const [isDateCheckInFill, setIsDateCheckInFill] = useState(false);
  
  function handleData(event) {
    setPlanData((p) => ({ ...p, [event.target.name]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(planData);
  }

  return (
    <>
      <section className="overflow-x-auto p-10 h-screen">
        <h1 className="text-2xl mb-4">Criar nova reserva</h1>
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
                defaultValue={""}
                icon={HiOutlineUser}
                name="id_guest"
              >
                <option disabled value="">
                  Escolha um hóspede
                </option>
                {/* Hóspedes vindo do banco */}
              </Select>
              <Select
                className="flex-auto"
                defaultValue={""}
                icon={HiOutlineShoppingCart}
                name="id_plan"
              >
                <option disabled value="">
                  Escolha um plano
                </option>
                {/* Planos vindo do banco */}
              </Select>
              <Select
                className="flex-auto"
                defaultValue={""}
                icon={HiOutlineCollection}
                name="id_bedroom"
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
                  onChange={(date) => {setMinDateForCheckOut(date); setIsDateCheckInFill(true)}}
                  labelTodayButton="Hoje"
                  showClearButton={false}
                  minDate={new Date()}
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
                  disabled={!isDateCheckInFill}
                  minDate={minDateForCheckOut}
                  showTodayButton={false}
                  name="check_out"
                  required
                />
              </div>
            </div>

            <HR />
            <div className="flex items-center gap-4 justify-end">
              <Button color="light">
                <Link href="/reservation">Cancelar</Link>
              </Button>
              <Button type="submit">Salvar</Button>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
}
