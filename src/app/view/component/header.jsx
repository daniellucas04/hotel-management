"use client";

import { Button, Navbar } from "flowbite-react";

export default function Header({ activePage }) {
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
        <Navbar.Link href="#" active={(activePage == 'dashboard') ? true : false}>Dashboard</Navbar.Link>
        <Navbar.Link href="#" active={(activePage == 'guests') ? true : false}>Hospedes</Navbar.Link>
        <Navbar.Link href="#" active={(activePage == 'bedrooms') ? true : false}>Quartos</Navbar.Link>
        <Navbar.Link href="#" active={(activePage == 'products') ? true : false}>Produtos / Serviços</Navbar.Link>
        <Navbar.Link href="#" active={(activePage == 'reports') ? true : false}>Relatórios</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
