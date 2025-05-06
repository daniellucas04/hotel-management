"use client";

import { Badge, Button, Pagination, Table } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { deletePlan, getAll } from "./actions";
import Swal from "sweetalert2";

export default function Plans() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [plans, setPlans] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  async function fetchAllPlans(page) {
    try {
      const result = await getAll(page, itemsPerPage);
      setPlans(result.data);
      setTotalItems(result.total);
    } catch (error) {
      console.log(error);
    }
  }

  function handleDelete(id) {
    Swal.fire({
      title: 'Atenção!',
      text: 'Tem certeza que deseja deletar este plano?',
      icon: 'warning',
      confirmButtonText: 'Deletar',
      confirmButtonColor: '#ff0000',
      cancelButtonText: 'Cancelar',
      showConfirmButton: true,
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deletePlan(id);
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
    fetchAllPlans(currentPage);
    setDeleted(false);
  }, [currentPage, deleted]);

  return (
    <>

      <section className="overflow-x-auto m-10">
        <div className="flex justify-between items-center my-8 gap-2">
          <h1 className="text-2xl mb-4">Todos os planos</h1>
          <Button color="light">
            <Link href="/plans/create">Novo plano</Link>
          </Button>
        </div>
        {plans.length > 0 ? (
          <>
            <Table striped>
              <Table.Head>
                <Table.HeadCell>Título</Table.HeadCell>
                <Table.HeadCell>Preço</Table.HeadCell>
                <Table.HeadCell>Descrição</Table.HeadCell>
                <Table.HeadCell>Ações</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {plans.map((plan) => {
                  return (
                    <Table.Row
                      key={plan.id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="flex items-center gap-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        <span>{plan.title}</span>
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap max-w-16">
                        <p className="truncate">{plan.description}</p>
                      </Table.Cell>
                      <Table.Cell>
                        <Badge color="success" className="w-fit">R$ {String(Number(plan.price).toFixed(2)).replace('.', ',')}</Badge>
                      </Table.Cell>
                      <Table.Cell className="flex items-center gap-4">
                        <Link
                          href="/plans/details/1"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Detalhes
                        </Link>
                        <Link
                          href="/plans/edit/1"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Editar
                        </Link>
                        <button className="text-cyan-600 font-semibold hover:underline" onClick={() => handleDelete(plan.id)}>Deletar</button>
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
            Não existem planos cadastrados.
          </div>
        )}
      </section>
    </>
  );
}
