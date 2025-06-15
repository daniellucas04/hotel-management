"use client";

import { Badge, Button, Pagination, Table } from "flowbite-react";
import Link from "next/link";
import { confirmCheckIn, confirmCheckOut, deleteReservation, getAll } from "./actions";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "@/app/lib/useAuth";
import withPermission from "../config/withPermissions";
import { LuCheck } from "react-icons/lu";

export function Reservations() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [reservations, setReservations] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [check, setCheck] = useState(false);
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

  function handleCheckIn(id) {
    Swal.fire({
      title: 'Atenção!',
      text: 'Tem certeza que deseja realizar o check-in para esta reserva?',
      icon: 'warning',
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#00d062',
      cancelButtonText: 'Cancelar',
      showConfirmButton: true,
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await confirmCheckIn(id);
          setCheck(true);
        } catch (error) {
          setCheck(false);
        }
      }
    });
  }

  function handleCheckOut(id) {
    Swal.fire({
      title: 'Atenção!',
      text: 'Tem certeza que deseja realizar o check-in para esta reserva?',
      icon: 'warning',
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#00d062',
      cancelButtonText: 'Cancelar',
      showConfirmButton: true,
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await confirmCheckOut(id);
          setCheck(true);
        } catch (error) {
          setCheck(false);
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
  }, [currentPage, deleted, check]);

  const isAuthenticated = useAuth();
  
    if (isAuthenticated === null) {
      return <div>Carregando...</div>;
    }
  
    if (!isAuthenticated) {
      return null; // O hook já redireciona
    }

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
                <Table.HeadCell>Data de Check in</Table.HeadCell>
                <Table.HeadCell>Data de Check out</Table.HeadCell>
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
                      <Table.Cell>
                        <div className="flex items-center gap-2">
                          <Badge color={reservation.status_checkin == `Realizado` ? `success` : `yellow`} className="w-fit p-2">{new Date(reservation.check_in).toLocaleString('pt-BR')}</Badge>
                          {reservation.status_checkin != "Realizado" && (<button onClick={() => {handleCheckIn(reservation.id)}} className="border py-1 px-2 rounded bg-emerald-500 text-white hover:bg-emerald-600 hover:text-gray-100 transition-colors duration-300"><LuCheck size={20} /></button>)}
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        <div className="flex items-center gap-2">
                          <Badge color={reservation.status_checkout == `Realizado` ? `success` : `yellow`} className="w-fit p-2">{new Date(reservation.check_out).toLocaleString('pt-BR')}</Badge>
                          {reservation.status_checkout != "Realizado" && (<button onClick={() => {handleCheckOut(reservation.id)}} className="border py-1 px-2 rounded bg-emerald-500 text-white hover:bg-emerald-600 hover:text-gray-100 transition-colors duration-300"><LuCheck size={20} /></button>)}
                        </div>
                      </Table.Cell>
                      <Table.Cell className="flex items-center gap-4">
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

export default withPermission(Reservations, ["Admin", "Gerente de Hotel", "Recepcionista"]);