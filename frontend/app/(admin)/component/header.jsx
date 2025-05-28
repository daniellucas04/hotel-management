"use client";

import { Button, Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiOutlineBookmark,
  HiOutlineCash,
  HiOutlineClipboardCheck,
  HiOutlineClipboardList,
  HiOutlineCollection,
  HiOutlineTemplate,
  HiOutlineUserGroup,
  HiOutlineUsers,
} from "react-icons/hi";

export default function Header() {
  const pathName = usePathname();

  return (
    <Navbar fluid rounded className="border-b border-b-gray-200">
      <Navbar.Brand as={Link} href="/dashboard">
        <img
          src="https://placehold.co/400x400"
          className="mr-3 h-6 sm:h-9"
          alt="hotel logo"
        />
        <span className="font-bold">Hotel name</span>
      </Navbar.Brand>
      <div className="flex items-center gap-4 md:order-2">
        <Button as={Link} href="/" color="red" size="sm">
          Log out
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          as={Link}
          className="flex items-center gap-2"
          href="/dashboard"
          active={pathName.includes("dashboard") ? true : false}
        >
          <HiOutlineTemplate size={20} /> Dashboard
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          className="flex items-center gap-2"
          href="/employees"
          active={pathName.includes("employees") ? true : false}
        >
          <HiOutlineUserGroup size={20} /> Funcionários
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          className="flex items-center gap-2"
          href="/plans"
          active={pathName.includes("plans") ? true : false}
        >
          <HiOutlineCash size={20} /> Planos
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          className="flex items-center gap-2"
          href="/guests"
          active={pathName.includes("guests") ? true : false}
        >
          <HiOutlineUsers size={20} /> Hóspedes
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          className="flex items-center gap-2"
          href="/bedrooms"
          active={pathName.includes("bedrooms") ? true : false}
        >
          <HiOutlineCollection size={20} /> Quartos
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          className="flex items-center gap-2"
          href="/reservations"
          active={pathName.includes("reservations") ? true : false}
        >
          <HiOutlineClipboardCheck size={20} /> Reservas
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          className="flex items-center gap-2"
          href="/tasks"
          active={pathName.includes("tasks") ? true : false}
        >
          <HiOutlineBookmark size={20} /> Tarefas
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
