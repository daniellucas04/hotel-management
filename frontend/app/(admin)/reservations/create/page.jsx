"use client";

import {
  HiOutlineCollection,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { Button, Card, Datepicker, HR, Label, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { createReservation, getAllBedrooms, getAllGuests, getAllPlans, validateCreate } from "../actions";
import Swal from "sweetalert2";
import { redirect } from "next/navigation";

export default function CreateReservation() {
  const [reservation, setReservation] = useState({
    id_guest: '',
    id_plan: '',
    id_bedroom: '',
    check_in: new Date(),
    check_out: new Date(),
  });
  const [guests, setGuests] = useState([]);
  const [plans, setPlans] = useState([]);
  const [bedrooms, setBedrooms] = useState([]);

  function handleData(event) {
    setReservation((p) => ({ ...p, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const reservationData = await createReservation(reservation);
      if (reservationData.message) {
        Swal.fire({
          text: reservationData.message,
          icon: "error",
          timer: 3000,
          toast: true,
          position: "top-right",
          showConfirmButton: false,
        });
        return;
      }

      Swal.fire({
        text: "Reserva cadastrada com sucesso",
        icon: "success",
        timer: 3000,
        toast: true,
        position: "top-right",
        showConfirmButton: false,
      });

      setTimeout(() => {
        redirect("/reservations");
      }, 3000);
    } catch (error) {
      
      Swal.fire({
        text: "Erro ao cadastrar a reserva. Tente novamente!",
        icon: "error",
        timer: 3000,
        toast: true,
        position: "top-right",
        showConfirmButton: false,
      });
    }
  }

  async function fetchAllGuests() {
    const results = await getAllGuests();
    setGuests(results ?? []);
  }

  async function fetchAllPlans() {
    const results = await getAllPlans();
    setPlans(results ?? []);
  }

  async function fetchAllBedrooms() {
    const results = await getAllBedrooms();
    setBedrooms(results ?? []);
  }

  useEffect(() => {
    fetchAllGuests();
    fetchAllPlans();
    fetchAllBedrooms();
  }, []);

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
                onChange={handleData}
                icon={HiOutlineUser}
                name="id_guest"
              >
                <option disabled value="">
                  Escolha um hóspede
                </option>
                {guests.map((guest) => (
                  <option key={guest.id} value={guest.id}>
                    {guest.name}
                  </option>
                ))}
              </Select>
              <Select
                className="flex-auto"
                defaultValue={""}
                onChange={handleData}
                icon={HiOutlineShoppingCart}
                name="id_plan"
              >
                <option disabled value="">
                  Escolha um plano
                </option>
                {plans.map((plan) => (
                  <option key={plan.id} value={plan.id}>
                    {plan.title}
                  </option>
                ))}
              </Select>
              <Select
                className="flex-auto"
                defaultValue={""}
                onChange={handleData}
                icon={HiOutlineCollection}
                name="id_bedroom"
              >
                <option disabled value="">
                  Escolha um quarto
                </option>
                {bedrooms.map((bedroom) => (
                  <option key={bedroom.id} value={bedroom.id}>
                    {bedroom.number}
                  </option>
                ))}
              </Select>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-auto flex-col gap-2">
                <Label>Check In</Label>
                <input className="rounded-md border-zinc-300 bg-gray-50 font-normal py-2 px-2" type="datetime-local" name="check_in" onChange={handleData} required />
                {/* <Datepicker
                  language="pt-BR"
                  onChange={(date) => { setMinDateForCheckOut(date); setIsDateCheckInFill(true) }}
                  labelTodayButton="Hoje"
                  showClearButton={false}
                  minDate={new Date()}
                  showTodayButton={false}
                  name="check_in"
                  required
                /> */}
              </div>
              <div className="flex flex-auto flex-col gap-2">
                <Label>Check Out</Label>
                <input className="rounded-md border-zinc-300 bg-gray-50 font-normal py-2 px-2" type="datetime-local" name="check_out" onChange={handleData} required />
                {/* <Datepicker
                  language="pt-BR"
                  labelTodayButton="Hoje"
                  showClearButton={false}
                  disabled={!isDateCheckInFill}
                  minDate={minDateForCheckOut}
                  showTodayButton={false}
                  name="check_out"
                  required
                /> */}
              </div>
            </div>

            <HR />
            <div className="flex items-center gap-4 justify-end">
              <Button color="light">
                <Link href="/reservations">Cancelar</Link>
              </Button>
              <Button type="submit">Salvar</Button>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
}
