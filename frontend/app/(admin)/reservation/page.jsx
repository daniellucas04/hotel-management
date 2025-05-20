"use client";

import { Badge, Button, Pagination, Table } from "flowbite-react";
import Link from "next/link";

export default function Plans() {
  let qtd = [1, 2, 3, 4, 5];

  return (
    <>
      
      <section className="overflow-x-auto p-10">
        <div className="flex justify-between items-center my-8 gap-2">
          <h1 className="text-2xl mb-4">Todos as reservas</h1>
          <Button color="light">
            <Link href="/reservation/create">Nova reserva</Link>
          </Button>
        </div>
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Título</Table.HeadCell>
            <Table.HeadCell>Preço</Table.HeadCell>
            <Table.HeadCell>Ações</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {qtd.map((key) => {
              return (
                <Table.Row
                  key={key}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="flex items-center gap-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <img
                      src="https://placehold.co/40x40"
                      className="rounded-md"
                      alt=""
                    />
                    <span>Plano básico</span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge color="success" className="w-fit">R$ 10,00</Badge>
                  </Table.Cell>
                  <Table.Cell className="flex items-center gap-4">
                    <Link
                      href="/reservation/details/1"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Detalhes
                    </Link>
                    <Link
                      href="/reservation/edit/1"
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
          <Pagination currentPage={1} totalPages={10} />
        </div>
      </section>
    </>
  );
}
