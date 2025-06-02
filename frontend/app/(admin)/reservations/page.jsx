"use client";

import { Button, Pagination, Table } from "flowbite-react";
import Link from "next/link";
import { deleteReservation, getAll } from "./actions";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Reservations() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [reservations, setReservations] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  async function fetchAllReservations(page) {
    try {
      const result = await getAll(page, itemsPerPage);

      setReservations(result.data);
      setTotalItems(result.total);
    } catch (error) {
      
    }
  }

  function handleDelete(id) {
    Swal.fire({
      title: 'Atenção!',
      text: 'Tem certeza que deseja deletar esta reserva?',
      icon: 'warning',
      confirmButtonText: 'Deletar',
      confirmButtonColor: '#ff0000',
      cancelButtonText: 'Cancelar',
      showConfirmButton: true,
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteReservation(id);
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
    fetchAllReservations(currentPage);
    setDeleted(false);
  }, [currentPage, deleted]);

  return (
    <>
      <section className="overflow-x-auto p-10">
        <div className="flex justify-between items-center my-8 gap-2">
          <h1 className="text-2xl mb-4">Todos as reservas</h1>
          <Button color="light">
            <Link href="/reservations/create">Nova reserva</Link>
          </Button>
        </div>
        {reservations.length > 0 ? (
          <>
            <Table striped>
              <Table.Head>
                <Table.HeadCell>Hóspede</Table.HeadCell>
                <Table.HeadCell>Quarto</Table.HeadCell>
                <Table.HeadCell>Plano</Table.HeadCell>
                <Table.HeadCell>Ações</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {reservations.map((reservation) => {
                  return (
                    <Table.Row
                      key={reservation.id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="flex items-center gap-4 whitespace-nowrap font-medium text-gray-900">
                        <span>{reservation.guest.name}</span>
                      </Table.Cell>
                      <Table.Cell>
                        {reservation.bedroom.number}
                      </Table.Cell>
                      <Table.Cell>
                        {reservation.plan.title}
                      </Table.Cell>
                      <Table.Cell className="flex items-center gap-4">
                        <Link
                          href="/reservations/details/1"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Detalhes
                        </Link>
                        <button className="text-cyan-600 font-medium hover:underline" onClick={() => handleDelete(reservation.id)}>Deletar</button>
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
            Não existem reservas cadastradas.
          </div>
        )}
      </section>
    </>
  );
}
