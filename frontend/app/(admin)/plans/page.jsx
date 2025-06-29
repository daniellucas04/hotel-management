"use client";

import { Badge, Button, Pagination, Table, TextInput } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { deletePlan, getAll, searchPlan } from "./actions";
import Swal from "sweetalert2";
import { useAuth } from "@/app/lib/useAuth";
import withPermission from "../config/withPermissions";
import { HiOutlineSearch } from "react-icons/hi";

export function Plans() {
  const [search,setSearch] = useState({title: ''});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [plans, setPlans] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  /*async function fetchAllPlans(page) {
    try {
      const result = await getAll(page, itemsPerPage);
      setPlans(result.data);
      setTotalItems(result.total);
    } catch (error) {
      
    }
  }*/

  async function searchPlans(search,page) {
    try {
      const result = await searchPlan(search, page, itemsPerPage);
      setPlans(result.data);
      setTotalItems(result.total);
    }
    catch (error) {

    }
  }

  function handleData(event) {
    setSearch(p => ({...p, [event.target.name]: event.target.value}));
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
          
        }
      }
    });
  }

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    searchPlans(search.title, currentPage);
    setDeleted(false);
  }, [currentPage, deleted]);

  const isAuthenticated = useAuth();
  
    if (isAuthenticated === null) {
      return <div className="flex items-center justify-center">Carregando...</div>;
    }
  
    if (!isAuthenticated) {
      return null; // O hook já redireciona
    }

  return (
    <>

      <section className="overflow-x-auto p-10">
        <div className="flex justify-between items-center my-8 gap-2">
          <h1 className="text-2xl mb-4">Todos os planos</h1>
          <Button color="light">
            <Link href="/plans/create">Novo plano</Link>
          </Button>
        </div>
        <div className="flex justify-between items-center my-8 gap-2">
          <TextInput
            className="flex-auto"
            icon={HiOutlineSearch}
            placeholder="Pesquisa"
            onChange={handleData}
            name="title"
            required
            value={search.title}
          />
          <Button color="light" onClick={() => {setCurrentPage(1), searchPlans(search.title, currentPage)}}> Pesquisar </Button>
        </div>
        {plans.length > 0 ? (
          <>
            <Table striped>
              <Table.Head>
                <Table.HeadCell>Título</Table.HeadCell>
                <Table.HeadCell>Descrição</Table.HeadCell>
                <Table.HeadCell>Preço</Table.HeadCell>
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
                          href={`/plans/details/${plan.id}`}
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Detalhes
                        </Link>
                        <Link
                          href={`/plans/edit/${plan.id}`}
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Editar
                        </Link>
                        <button className="text-cyan-600 font-medium hover:underline" onClick={() => handleDelete(plan.id)}>Deletar</button>
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

export default withPermission(Plans, ["Admin", "Gerente de Hotel"]);