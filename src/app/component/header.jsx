"use client";

import { Button, Navbar } from "flowbite-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

  return (
    <Navbar fluid rounded className="border-b border-b-gray-200">
      <Navbar.Brand href="/">
        <img
          src="https://placehold.co/400x400"
          className="mr-3 h-6 sm:h-9"
          alt="hotel logo"
        />
        <span className="font-bold">Hotel name</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <img
          src="https://placehold.co/400x400"
          className="rounded-full h-14"
          alt=""
        />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active={(pathName.includes('dashboard') || pathName == '/') ? true : false}>Dashboard</Navbar.Link>
        <Navbar.Link href="/employee" active={(pathName.includes('employee')) ? true : false}>Funcionários</Navbar.Link>
        <Navbar.Link href="/guests" active={(pathName.includes('guests')) ? true : false}>Hóspedes</Navbar.Link>
        <Navbar.Link href="/bedrooms" active={(pathName.includes('bedrooms')) ? true : false}>Quartos</Navbar.Link>
        <Navbar.Link href="/products" active={(pathName.includes('products')) ? true : false}>Produtos / Serviços</Navbar.Link>
        <Navbar.Link href="/reports" active={(pathName.includes('reports')) ? true : false}>Relatórios</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
