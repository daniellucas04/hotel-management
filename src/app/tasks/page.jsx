"use client";

import { Badge, Button, Pagination, Table } from "flowbite-react";
import Header from "../component/header";
import Link from "next/link";

export default function Tasks() {
  let qtd = [1, 2, 3, 4, 5];

  return (
    <>
      <Header />
      <section className="overflow-x-auto m-10">
        <div className="flex justify-between items-center my-8 gap-2">
          <h1 className="text-2xl mb-4">Todos as tarefas</h1>
          <Button color="light">
            <a href="/tasks/create">Nova tarefa</a>
          </Button>
        </div>
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Título</Table.HeadCell>
            <Table.HeadCell>Responsável</Table.HeadCell>
            <Table.HeadCell>Reserva</Table.HeadCell>
            <Table.HeadCell>Prioridade</Table.HeadCell>
            <Table.HeadCell>Preço</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
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
                    <span>Limpeza do quarto 202</span>
                  </Table.Cell>
                  <Table.Cell>
                    <span>Fernando</span>
                  </Table.Cell>
                  <Table.Cell>
                    <span>202</span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge color="yellow" className="w-fit">
                      Alta
                    </Badge>
                  </Table.Cell>
                  <Table.Cell>R$ 10,00</Table.Cell>
                  <Table.Cell>
                    <Badge color="gray" className="w-fit">
                      Pendente
                    </Badge>
                  </Table.Cell>
                  <Table.Cell className="flex items-center gap-4">
                    <Link
                      href="/tasks/details/1"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Detalhes
                    </Link>
                    <Link
                      href="/tasks/edit/1"
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
