"use client";

import { Button, HR } from "flowbite-react";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import {
  HiOutlineArrowLeft,
  HiOutlineClock,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineUsers,
  HiUserCircle,
} from "react-icons/hi";
import { getGuest } from "../../actions";

export default function GuestDetails({ params }) {
  const { id } = use(params);
    const [guest, setGuest] = useState({});
  
    async function fetchGuest(id) {
      try {
        const result = await getGuest(id);
        setGuest(result);
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      fetchGuest(id);
    }, []);
    console.log(guest)
  return (
    <>
      <section className="h-full mx-52 my-14">
        <Link
          className="flex items-center gap-2 text-gray-600 hover:text-gray-400 transition-all"
          href="/guests"
        >
          <HiOutlineArrowLeft size={"16px"} />
          Users
        </Link>
        <div className="flex items-center justify-between gap-4 mt-4">
          <div className="flex items-center gap-4">
            {guest.photo ? (
              <img
                src={`http://localhost:3000/uploads/${guest.photo}`}
                className="w-20 h-20 rounded-full"
              />
            ) : (
              <HiUserCircle size={25} />
            )}
            <span className="text-3xl font-medium">{guest.name}</span>
          </div>
          <div>
            <Button color="light" size="sm">
              <Link href={`/guests/edit/${guest.id}`}>Editar perfil</Link>
            </Button>
          </div>
        </div>
        <HR />
        <div className="flex justify-evenly">
          <section className="flex flex-col items-start gap-4 text-gray-500">
            <div className="flex items-center gap-4">
              <span>
                <HiOutlineClock />
              </span>
              <span className="text-zinc-900 font-medium">Nome completo</span>
              <span>{guest.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <HiOutlinePhone />
              </span>
              <span className="text-zinc-900 font-medium">Telefone</span>
              <span>{guest.phone1}</span>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
