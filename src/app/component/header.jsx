"use client";

import { Navbar } from "flowbite-react";
import { usePathname } from "next/navigation";
import { HiOutlineBookmark, HiOutlineClipboardList, HiOutlineCollection, HiOutlineTemplate, HiOutlineUserGroup, HiOutlineUsers } from "react-icons/hi";

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
        <Navbar.Link className="flex items-center gap-2" href="/" active={(pathName.includes('dashboard') || pathName == '/') ? true : false}><HiOutlineTemplate size={20} /> Dashboard</Navbar.Link>
        <Navbar.Link className="flex items-center gap-2" href="/employee" active={(pathName.includes('employee')) ? true : false}><HiOutlineUserGroup size={20} /> Funcionários</Navbar.Link>
        <Navbar.Link className="flex items-center gap-2" href="/guests" active={(pathName.includes('guests')) ? true : false}><HiOutlineUsers size={20} /> Hóspedes</Navbar.Link>
        <Navbar.Link className="flex items-center gap-2" href="/bedrooms" active={(pathName.includes('bedrooms')) ? true : false}><HiOutlineCollection size={20} /> Quartos</Navbar.Link>
        <Navbar.Link className="flex items-center gap-2" href="/tasks" active={(pathName.includes('tasks')) ? true : false}><HiOutlineBookmark size={20} /> Tarefas</Navbar.Link>
        <Navbar.Link className="flex items-center gap-2" href="/reports" active={(pathName.includes('reports')) ? true : false}><HiOutlineClipboardList size={20} /> Relatórios</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
