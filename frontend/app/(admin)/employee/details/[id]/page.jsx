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
  HiUserCircle,
} from "react-icons/hi";
import { getEmployee } from "../../actions";

export default function EmployeeDetails({ params }) {
  const { id } = use(params);

  const [employee, setEmployee] = useState({});

  async function fetchEmployee(id) {
    try {
      const result = await getEmployee(id);
      setEmployee(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchEmployee(id);
  }, []);

  return (
    <>
      <section className="h-full mx-52 my-14">
        <Link
          className="flex items-center gap-2 text-gray-600 hover:text-gray-400 transition-all"
          href="/employee"
        >
          <HiOutlineArrowLeft size={"16px"} />
          Funcionários
        </Link>
        <div className="flex items-center justify-between gap-4 mt-4">
          <div className="flex items-center gap-4">
            {employee.photo ? (
              <img
                src={`http://localhost:8000/uploads/${employee.photo}`}
                className="w-20 h-20 rounded-full"
              />
            ) : (
              <HiUserCircle size={25} />
            )}
            <span className="text-3xl font-medium">
              {String(employee.name).toLocaleUpperCase()}
            </span>
          </div>
          <div>
            <Button color="light" size="sm">
              <Link href={`/employee/edit/${employee.id}`}>Editar funcionário</Link>
            </Button>
          </div>
        </div>
        <HR />
        <div className="flex justify-evenly">
          <section className="flex flex-col items-start gap-4 text-gray-500">
            <div className="flex items-center gap-4">
              <span>
                <HiOutlineUser />
              </span>
              <span className="text-zinc-900 font-medium">Nome completo</span>
              <span>
                {employee.name} {employee.last_name}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <HiOutlinePhone />
              </span>
              <span className="text-zinc-900 font-medium">Telefone</span>
              <span>{employee.phone1}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <HiOutlineMail />
              </span>
              <span className="text-zinc-900 font-medium">E-mail</span>
              <span>{employee.email}</span>
            </div>
          </section>
          <section className="flex flex-col items-start gap-4 text-gray-500">
            <div className="flex items-center gap-4">
              <span>
                <HiOutlineClock />
              </span>
              <span className="text-zinc-900 font-medium">
                Funcionário desde
              </span>
              <span>{new Date(employee.created_at).toLocaleDateString()}</span>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
