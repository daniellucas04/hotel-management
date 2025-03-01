"use client";

import { Button, Navbar } from "flowbite-react";

export default function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
      {/* LOGO DO CLIENTE */}
        <img
          src="https://placehold.co/400x400"
          className="mr-3 h-6 sm:h-9"
          alt="hotel logo"
        />
        {/* NOME DO CLIENTE */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Hotel name
        </span>
      </Navbar.Brand>
      {/* NOME DO FUNCIONÁRIO */}
      <div className="flex md:order-2">
        <img src="https://placehold.co/400x400" className="rounded-full h-14" alt="" />
        <Navbar.Toggle />
      </div>
      {/* ITENS DO MENU */}
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Dashboard
        </Navbar.Link>
        <Navbar.Link href="#">Hospedes</Navbar.Link>
        <Navbar.Link href="#">Quartos</Navbar.Link>
        <Navbar.Link href="#">Produtos / Serviços</Navbar.Link>
        <Navbar.Link href="#">Relatórios</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
