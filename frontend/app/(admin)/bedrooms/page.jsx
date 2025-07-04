"use client";

import { Badge, Button, Pagination, Table, TextInput } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteBedroom, getAll, searchBedroom } from "./actions";
import { LuBedDouble } from "react-icons/lu";
import Swal from "sweetalert2";
import { useAuth } from "@/app/lib/useAuth";
import withPermission from "../config/withPermissions";
import { HiOutlineSearch } from "react-icons/hi";

export function Bedrooms() {
  const [search,setSearch] = useState({number: ''});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [bedrooms, setBedrooms] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  async function fetchAllBedrooms(page) {
    try {
      const result = await getAll(page, itemsPerPage);
      setBedrooms(result.data);
      setTotalItems(result.total);
    } catch (error) {}
  }

  async function searchBedrooms(search, page) {
    if(search != ""){
      try {
        const result = await searchBedroom(search, page, itemsPerPage);
        setBedrooms(result.data);
        setTotalItems(result.total);
      } catch (error) {

      }
    }else{
      fetchAllBedrooms(page);
    }
  }

  function handleData(event) {
    setSearch(p => ({...p,[event.target.name]: event.target.value}))
  }

  function handleDelete(id) {
    Swal.fire({
      title: "Atenção!",
      text: "Tem certeza que deseja deletar este quarto?",
      icon: "warning",
      confirmButtonText: "Deletar",
      confirmButtonColor: "#ff0000",
      cancelButtonText: "Cancelar",
      showConfirmButton: true,
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteBedroom(id);
          setDeleted(true);
        } catch (error) {
          setDeleted(false);
        }
      }
    });
  }

  function getSituationColor(situation) {
    if (situation == "Livre") return "green";

    if (situation == "Ocupado") return "red";

    if (situation == "Manutenção") return "yellow";
  }

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchAllBedrooms(currentPage);
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
    <section className="overflow-x-auto p-10">
      <div className="flex justify-between items-center my-8 gap-2">
        <h1 className="text-2xl mb-4">Todos os quartos</h1>
        <Button color="light">
          <Link href="/bedrooms/create">Novo Quarto</Link>
        </Button>
      </div>
        <div className="flex justify-between items-center my-8 gap-2">
          <TextInput
            className="flex-auto"
            icon={HiOutlineSearch}
            placeholder="Pesquisa"
            onChange={handleData}
            name="number"
            required
            type="number"
            value={search.number}
          />
          <Button color="light" onClick={() => {setCurrentPage(1), searchBedrooms(search.number, currentPage)}}> Pesquisar </Button>
        </div>      
      {bedrooms.length > 0 ? (
        <>
          <Table striped>
            <Table.Head>
              <Table.HeadCell></Table.HeadCell>
              <Table.HeadCell>Número</Table.HeadCell>
              <Table.HeadCell>Descrição</Table.HeadCell>
              <Table.HeadCell>Situação</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Editar</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {bedrooms.map((bedroom) => {
                let situationColor = getSituationColor(bedroom.status);
                return (
                  <Table.Row key={bedroom.id} className="bg-white">
                    <Table.Cell className="relative overflow-hidden gap-4 whitespace-nowrap font-medium text-gray-900">
                      <div className="absolute inset-0 flex items-center z-0">
                        {bedroom.photo ? (
                          <>
                            <img
                              src={`http://localhost:8000/uploads/${bedroom.photo}`}
                              className="object-cover max-w-52 rounded mask-image"
                              alt="Imagem do quarto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                          </>
                        ) : (
                          <LuBedDouble className="ml-10" size={35} />
                        )}
                      </div>
                    </Table.Cell>
                    <Table.Cell className="relative overflow-hidden gap-4 whitespace-nowrap font-medium text-gray-900">
                      {bedroom.number}
                    </Table.Cell>
                    <Table.Cell>
                      <span>
                        {bedroom.short_description || "Sem descrição"}
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge
                        color={situationColor}
                        className="w-fit"
                      >
                        {bedroom.status}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell className="flex items-center gap-4">
                      <Link
                        href={`/bedrooms/details/${bedroom.id}`}
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Detalhes
                      </Link>
                      <Link
                        href={`/bedrooms/edit/${bedroom.id}`}
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Editar
                      </Link>
                      <button
                        className="text-cyan-600 font-medium hover:underline"
                        onClick={() => handleDelete(bedroom.id)}
                      >
                        Deletar
                      </button>
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
          Não existem quartos cadastrados.
        </div>
      )}
    </section>
  );
}

export default withPermission(Bedrooms, [
  "Admin",
  "Gerente de Hotel",
  "Recepcionista",
]);
