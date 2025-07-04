"use client";

import { Button, Pagination, Table, TextInput } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteEmployee, getAll, getEmployee, searchEmployee } from "./actions";
import { HiOutlineSearch, HiUserCircle } from "react-icons/hi";
import Swal from "sweetalert2";
import { useAuth } from "@/app/lib/useAuth";
import withPermission from "../config/withPermissions";

export function Employee() {
  const [search,setSearch] = useState({name: ''})
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

  async function searchEmployees(search,page) {
    try {
      const result = await searchEmployee(search, page, itemsPerPage);
      setEmployees(result.data);
      setTotalItems(result.total);
    }
    catch (error) {

    }
  }

  function handleData(event) {
    setSearch(p => ({...p, [event.target.name]: event.target.value}));
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
    searchEmployees(search.name, currentPage);
    setDeleted(false);
  }, [currentPage, deleted]);

  const isAuthenticated = useAuth();

  if (isAuthenticated === null) {
    return <div className="flex items-center justify-center">Carregando...</div>;
  }

  if (!isAuthenticated) {
    return null; // O hook já redireciona
  }

  return (
    <>
      <section className="overflow-x-auto p-10">
        <div className="flex justify-between items-center my-8 gap-2">
          <h1 className="text-2xl mb-4">Todos os funcionários</h1>
          <Button color="light">
            <Link href="/employees/create">Novo funcionário</Link>
          </Button>
        </div>
        <div className="flex justify-between items-center my-8 gap-2">
          <TextInput
            className="flex-auto"
            icon={HiOutlineSearch}
            placeholder="Pesquisa"
            onChange={handleData}
            name="name"
            required
            value={search.name}
          />
          <Button color="light" onClick={() => {setCurrentPage(1), searchEmployees(search.name,currentPage)}}> Pesquisar </Button>
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
                          href={`/employees/details/${employee.id}`}
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Detalhes
                        </Link>
                        <Link
                          href={`/employees/edit/${employee.id}`}
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

export default withPermission(Employee, ["Admin", "Gerente de Hotel"]);