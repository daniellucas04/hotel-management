"use client";

import Header from "@/app/component/header";
import { useState } from "react";

export default function Permissions() {
  const [employeeData, setEmployeeData] = useState({
    id_workgroup: 1,
    name: "Teste",
    last_name: "Teste",
    document: "123.123.123-23",
    birthday: "2004-03-20",
    phone1: "(18) 9000-0000",
    phone2: "(18) 9000-0000",
    address: "Rua teste, 200",
    photo: "https://placehold.co/50x50",
    login: "teste",
    password: "",
    email: "teste@email.com",
    created_at: "2024-02-10",
  });

  return (
    <>
      <Header />
    </>
  );
}
