"use client";

import { Badge, Button, Pagination, Table } from "flowbite-react";
import Header from "../component/header";
import Link from "next/link";

export default function employee() {
  return (
    <>
      <Header />
      <section className="overflow-x-auto m-10">
        <div className="flex justify-between items-center my-8 gap-2">
          <h1 className="text-2xl mb-4">Todos os funcionários</h1>
            <Button color="light"><a href="/employee/create">Novo funcionário</a></Button>
        </div>
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Nome</Table.HeadCell>
            <Table.HeadCell>Usuário</Table.HeadCell>
            <Table.HeadCell>Setor</Table.HeadCell>
            <Table.HeadCell>Online</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Editar</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="flex items-center gap-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <img
                  src="https://placehold.co/40x40"
                  className="rounded-md"
                  alt=""
                />
                <span>Henrique</span>
              </Table.Cell>
              <Table.Cell>
                  henrique2000
              </Table.Cell>
              <Table.Cell>
                <Badge color="blue" className="w-fit">
                  Recepcionista
                </Badge>
              </Table.Cell>
              <Table.Cell className="font-bold">
                <Badge  className="w-fit">
                    Online
                </Badge>
              </Table.Cell>
              <Table.Cell className="flex items-center gap-4">
                <Link
                  href="/employee/permission/1"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Permissões
                </Link>
                <Link
                  href="/employee/details/1"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Detalhes
                </Link>
                <Link
                  href="/employee/edit/1"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Editar
                </Link>
              </Table.Cell>
            </Table.Row>
             <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="flex items-center gap-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <img
                  src="https://placehold.co/40x40"
                  className="rounded-md"
                  alt=""
                />
                <span>Henrique</span>
              </Table.Cell>
              <Table.Cell>
                  henrique2000
              </Table.Cell>
              <Table.Cell>
                <Badge color="blue" className="w-fit">
                  Recepcionista
                </Badge>
              </Table.Cell>
              <Table.Cell className="font-bold">
                <Badge  className="w-fit">
                    Online
                </Badge>
              </Table.Cell>
              <Table.Cell className="flex items-center gap-4">
                <Link
                  href="/employee/permission/1"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Permissões
                </Link>
                <Link
                  href="/employee/details/1"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Detalhes
                </Link>
                <Link
                  href="/employee/update/1"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Editar
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="flex items-center gap-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <img
                  src="https://placehold.co/40x40"
                  className="rounded-md"
                  alt=""
                />
                <span>Henrique</span>
              </Table.Cell>
              <Table.Cell>
                  henrique2000
              </Table.Cell>
              <Table.Cell>
                <Badge color="blue" className="w-fit">
                  Recepcionista
                </Badge>
              </Table.Cell>
              <Table.Cell className="font-bold">
                <Badge  className="w-fit">
                    Online
                </Badge>
              </Table.Cell>
              <Table.Cell className="flex items-center gap-4">
                <Link
                  href="/employee/permission/1"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Permissões
                </Link>
                <Link
                  href="/employee/1"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Detalhes
                </Link>
                <Link
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Editar
                </Link>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <div className="flex justify-end">
          <Pagination currentPage={1} totalPages={10} />
        </div>
      </section>
    </>
  );
}
