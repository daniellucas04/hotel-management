"use client";

import { Badge, Button, Pagination, Table } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteTask, getAll } from "./actions";
import Swal from "sweetalert2";
import { useAuth } from "@/app/lib/useAuth";

export default function Tasks() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  async function fetchAllTasks(page) {
    try {
      const result = await getAll(page, itemsPerPage);

      setTasks(result.data);
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
          await deleteTask(id);
          setDeleted(true);
        } catch (error) {
          setDeleted(false);
          
        }
      }
    });
  }

  function getPriorityColor(priority) {
    if (priority == 'Baixa')
      return 'gray'

    if (priority == 'Normal')
      return 'blue'

    if (priority == 'Alta')
      return 'yellow'

    if (priority == 'Urgente')
      return 'red'
  }

  function getStatusColor(status) {
    if (status == 'Pendente')
      return 'yellow'

    if (status == 'Em_andamento')
      return 'blue'
    
    if (status == 'Finalizado')
      return 'green'
  }

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchAllTasks(currentPage);
    setDeleted(false);
  }, [currentPage, deleted]);

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
          <h1 className="text-2xl mb-4">Todos as tarefas</h1>
          <Button color="light">
            <Link href="/tasks/create">Nova tarefa</Link>
          </Button>
        </div>
        {tasks.length > 0 ? (
          <>
            <Table striped>
              <Table.Head>
                <Table.HeadCell>Responsável</Table.HeadCell>
                <Table.HeadCell>Reserva</Table.HeadCell>
                <Table.HeadCell>Prioridade</Table.HeadCell>
                <Table.HeadCell>Preço</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell>Ações</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {tasks.map((task) => {
                  let priorityColor = getPriorityColor(task.priority);
                  let statusColor = getStatusColor(task.status);
                  return (
                    <Table.Row
                      key={task.id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell>
                        <span>{task.employee.name}</span>
                      </Table.Cell>
                      <Table.Cell>
                        <span>{task.reservation.bedroom.number}</span>
                      </Table.Cell>
                      <Table.Cell>
                        <Badge color={priorityColor} className="w-fit">
                          {task.priority}
                        </Badge>
                      </Table.Cell>
                      <Table.Cell>
                        <Badge color="success" className="w-fit">
                          R$ {String(Number(task.price).toFixed(2)).replace('.', ',')}
                        </Badge>
                      </Table.Cell>
                      <Table.Cell>
                        <Badge color={statusColor} className="w-fit">
                          {String(task.status).split('_').join(' ')}
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
                        <button className="text-cyan-600 font-medium hover:underline" onClick={() => handleDelete(task.id)}>Deletar</button>
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
            Não existem tarefas cadastradas.
          </div>
        )}
      </section>
    </>
  );
}
