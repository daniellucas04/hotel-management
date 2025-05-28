"use client";

import { use, useEffect, useState } from "react";
import { getEmployee } from "../../actions";
import { Card, HR } from "flowbite-react";
import { HiOutlineArrowCircleLeft, HiUserCircle } from "react-icons/hi";
import Link from "next/link";

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
      <section className="overflow-x-auto p-10">
        <Link href={'/employees'} className="text-2xl flex items-center gap-4 font-medium text-zinc-600"><HiOutlineArrowCircleLeft /> Voltar</Link>

        <div className="flex gap-12 mt-12">
          <Card className="w-[32rem] h-fit">
            <span className="text-2xl text-center text-zinc-700">
              {employee.name} {employee.last_name}
            </span>

            <div className="font-bold text-zinc-700">
              {employee.photo ? (
                <img className="w-[22rem] h-[22rem] rounded-full object-cover" src={`http://localhost:8000/uploads/${employee.photo}`} alt="Imagem do hóspedde" />
              ) : (
                <div className="flex items-center justify-center">
                  <HiUserCircle size={330} className="" />
                </div>
              )}
            </div>
          </Card>

          <Card className="w-full">
            <div className="">
              <h2 className="font-bold text-zinc-800">Informações do hóspede</h2>

              <span className="flex justify-between mt-8">
                <span className="font-medium text-gray-700">Documento</span> <span className="text-gray-600">{employee.document}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Data de nascimento</span> <span className="text-gray-600">{new Date(employee.birthday).toLocaleDateString('pt-BR', { timeZone: 'Europe/Belgrade' })}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Telefone 1</span> <span className="text-gray-600">{employee.phone1}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Telefone 2</span> <span className="text-gray-600">{employee.phone2 != "" ? employee.phone2 : 'N/A'}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Endereço</span> <span className="text-gray-600">{employee.address}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">E-mail</span> <span className="text-gray-600">{employee.email}</span>
              </span>

              <HR className="m-6" />

              <span className="flex justify-between">
                <span className="font-medium text-gray-700">Login</span> <span className="text-gray-600">{employee.login}</span>
              </span>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
