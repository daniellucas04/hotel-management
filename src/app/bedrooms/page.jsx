"use client";

import { Badge, Table } from "flowbite-react";
import Header from "../component/header";
import Link from "next/link";

export default function Bedrooms() {
  return (
    <>
      <Header />
      <section className="overflow-x-auto m-10">
        <h1 className="text-2xl mb-4">Todos os quartos</h1>
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Número</Table.HeadCell>
            <Table.HeadCell>Descrição</Table.HeadCell>
            <Table.HeadCell>Situação</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Editar</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="relative overflow-hidden gap-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <span className="relative z-10 text-xl font-extrabold pl-16">180</span>
                <div className="absolute inset-0 flex items-center z-0">
                  <img src="https://placehold.co/200x200" className="object-cover rounded mask-image" alt="Imagem ilustrativa do quarto" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                </div>
              </Table.Cell>
              <Table.Cell>
                  <span>2 camas, 1 banheiro, 1 televisão, 1 frigobar</span>
              </Table.Cell>
              <Table.Cell>
                  <Badge color="red" className="w-fit">Ocupado</Badge>
              </Table.Cell>
              <Table.Cell className="flex items-center gap-4">
                <Link href="/bedrooms/1" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Details
                </Link>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Editar
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="relative overflow-hidden gap-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <span className="relative z-10 text-xl font-extrabold pl-16">298</span>
                <div className="absolute inset-0 flex items-center z-0">
                  <img src="https://placehold.co/200x200" className="object-cover rounded mask-image" alt="Imagem ilustrativa do quarto" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                </div>
              </Table.Cell>
              <Table.Cell>
                  <span>1 camas, 2 banheiro, 1 televisão, 1 frigobar</span>
              </Table.Cell>
              <Table.Cell>
                  <Badge color="success" className="w-fit">Livre</Badge>
              </Table.Cell>
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
              <Table.Cell className="relative overflow-hidden gap-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <span className="relative z-10 text-xl font-extrabold pl-16">444</span>
                <div className="absolute inset-0 flex items-center z-0">
                  <img src="https://placehold.co/200x200" className="object-cover rounded mask-image" alt="Imagem ilustrativa do quarto" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                </div>
              </Table.Cell>
              <Table.Cell>
                  <span>2 camas, 1 banheiro, 1 televisão</span>
              </Table.Cell>
              <Table.Cell>
                  <Badge color="warning" className="w-fit">Manutenção</Badge>
              </Table.Cell>
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
    </>
  );
}
