"use client";

import { Button, Pagination, Table } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteEmployee, getAll } from "./actions";
import { HiUserCircle } from "react-icons/hi";
import Swal from "sweetalert2";

export default function employee() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  async function fetchAllEmployees(page) {
    try {
      const result = await getAll(page, itemsPerPage);
      setEmployees(result.data);
      setTotalItems(result.total);
    } catch (error) {
      
    }
  }

  function handleDelete(id) {
    Swal.fire({
      title: 'Atenção!',
      text: 'Tem certeza que deseja deletar este funcionário?',
      icon: 'warning',
      confirmButtonText: 'Deletar',
      confirmButtonColor: '#ff0000',
      cancelButtonText: 'Cancelar',
      showConfirmButton: true,
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteEmployee(id);
          setDeleted(true);
        } catch (error) {
          setDeleted(false);
        }
      }
    });
  }

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchAllEmployees(currentPage);
    setDeleted(false);
  }, [currentPage, deleted]);

  return (
    <>
      <section className="overflow-x-auto p-10">
        <div className="flex justify-between items-center my-8 gap-2">
          <h1 className="text-2xl mb-4">Todos os funcionários</h1>
          <Button color="light">
            <Link href="/employee/create">Novo funcionário</Link>
          </Button>
        </div>
        {employees.length > 0 ? (
          <>
            <Table striped>
              <Table.Head>
                <Table.HeadCell>Nome</Table.HeadCell>
                <Table.HeadCell>Email</Table.HeadCell>
                <Table.HeadCell>Telefone</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Editar</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {employees.map((employee) => {
                  return (
                    <Table.Row
                      key={employee.id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="flex items-center gap-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {employee.photo ? (
                          <img
                            src={`http://localhost:8000/uploads/${employee.photo}`}
                            className="rounded-md w-10 h-10"
                          />
                        ) : (
                          <HiUserCircle size={35} />
                        )}
                        <span>{employee.name}</span>
                      </Table.Cell>
                      <Table.Cell>{employee.email}</Table.Cell>
                      <Table.Cell>{employee.phone1}</Table.Cell>
                      <Table.Cell className="flex items-center gap-4">
                        <Link
                          href={`/employee/details/${employee.id}`}
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Detalhes
                        </Link>
                        <Link
                          href={`/employee/edit/${employee.id}`}
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Editar
                        </Link>
                        <button className="text-cyan-600 font-medium hover:underline" onClick={() => handleDelete(employee.id)}>Deletar</button>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
            <div className="flex justify-end">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
                showIcons
              />
            </div>
          </>
        ) : (
          <div className="text-center bg-cyan-600 text-white font-bold rounded-lg p-4">
            Não existem funcionários cadastrados.
          </div>
        )}
      </section>
    </>
  );
}
