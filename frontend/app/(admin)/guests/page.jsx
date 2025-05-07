"use client";

import { Badge, Button, Pagination, Table } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteGuest, getAll } from "./actions";

export default function Guests() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [guests, setGuests] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  async function fetchAllGuests(page) {
    try {
      const result = await getAll(page, itemsPerPage);
      setGuests(result.data);
      setTotalItems(result.total);
    } catch (error) {
      console.log(error);
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
          await deleteGuest(id);
          setDeleted(true);
        } catch (error) {
          setDeleted(false);
          console.log(error);
        }
      }
    });
  }

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchAllGuests(currentPage);
    setDeleted(false);
  }, [currentPage, deleted]);

  return (
    <>
      
      <section className="overflow-x-auto m-10">
        <div className="flex justify-between items-center my-8 gap-2">
          <h1 className="text-2xl mb-4">Todos os hóspedes</h1>
          <Button color="light">
            <Link href="/guests/create">Novo hóspede</Link>
          </Button>
        </div>
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Nome</Table.HeadCell>
            <Table.HeadCell>Telefone</Table.HeadCell>
            <Table.HeadCell>Plano</Table.HeadCell>
            <Table.HeadCell>Ações</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {guests.map((guest) => {
              return (
                <Table.Row
                  key={guest.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="flex items-center gap-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {guest.photo ? (
                      <img
                        src={`http://localhost:3000/uploads/${guest.photo}`}
                        className="rounded-md w-10 h-10"
                      />
                    ) : (
                      <HiUserCircle size={35} />
                    )}
                    <span>{guest.name}</span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge className="w-fit">{guest.phone1}</Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge color="blue" className="w-fit">
                      {guest.plan.title}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell className="flex items-center gap-4">
                    <Link
                      href={`/guests/details/${guest.id}`}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Detalhes
                    </Link>
                    <Link
                      href={`/guests/edit/${guest.id}`}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Editar
                    </Link>
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
      </section>
    </>
  );
}
