"use client";

import { Badge, Table } from "flowbite-react";

export default function Guests() {
  return (
    <section className="overflow-x-auto m-10">
      <h1 className="text-2xl mb-4">Todos os hóspedes</h1>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Nome</Table.HeadCell>
          <Table.HeadCell>Situação</Table.HeadCell>
          <Table.HeadCell>Tipo de hospedagem</Table.HeadCell>
          <Table.HeadCell>Quarto</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Editar</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="flex items-center gap-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <img src="https://placehold.co/40x40" className="rounded-md" alt="" />
              <span>Henrique</span>
            </Table.Cell>
            <Table.Cell>
                <Badge color="success" className="w-fit">Hospedado</Badge>
            </Table.Cell>
            <Table.Cell>
                <Badge color="blue" className="w-fit">Premium</Badge>
            </Table.Cell>
            <Table.Cell className="font-bold">290</Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Editar
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="flex items-center gap-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <img src="https://placehold.co/40x40" className="rounded-md" alt="" />
              <span>Julia</span>
            </Table.Cell>
            <Table.Cell>
                <Badge color="warning" className="w-fit">Reserva</Badge>
            </Table.Cell>
            <Table.Cell>
                <Badge color="blue" className="w-fit">Basico</Badge>
            </Table.Cell>
            <Table.Cell className="font-bold">102</Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Editar
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="flex items-center gap-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <img src="https://placehold.co/40x40" className="rounded-md" alt="" />
              <span>Fernando</span>
            </Table.Cell>
            <Table.Cell>
                <Badge color="dark" className="w-fit">Nenhuma situação</Badge>
            </Table.Cell>
            <Table.Cell>
                <Badge color="dark" className="w-fit">Nenhum tipo</Badge>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Editar
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </section>
  );
}
