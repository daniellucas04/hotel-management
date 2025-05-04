"use client";

import {
  HiCloudUpload,
  HiLocationMarker,
  HiOutlineAtSymbol,
  HiOutlineBadgeCheck,
  HiOutlineCalendar,
  HiOutlineCollection,
  HiOutlineIdentification,
  HiOutlineKey,
  HiOutlineLogin,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineViewGrid,
} from "react-icons/hi";
import {
  Button,
  Card,
  FileInput,
  HR,
  Label,
  Select,
  TextInput,
} from "flowbite-react";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { getEmployee, updateEmployee } from "../../actions";
import Swal from "sweetalert2";

export default function CreateEmployee({ params }) {
  const { id } = use(params);

  const [employee, setEmployee] = useState({
    id_workgroup: "",
    name: "",
    last_name: "",
    document: "",
    birthday: "",
    phone1: "",
    phone2: "",
    address: "",
    photo: "",
    login: "",
    password: "",
    password_confirm: "",
    email: "",
  });

  async function fetchEmployee(id) {
    try {
      const result = await getEmployee(id);
      setEmployee(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchEmployee(id);
  }, []);

  function handleImageSubmit(event) {
    console.log(event.target.files[0].name);
  }

  function handleData(event) {
    setEmployee((p) => ({ ...p, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await updateEmployee(id, employee);

      Swal.fire({
        text: "Funcionário editado com sucesso.",
        icon: "success",
        timer: 3000,
        toast: true,
        position: "top-right",
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        text: "Erro ao editar o funcionário. Tente novamente!",
        icon: "error",
        timer: 3000,
        toast: true,
        position: "top-right",
        showConfirmButton: false,
      });
    }
  }

  return (
    <>
      <section className="overflow-x-auto m-10">
        <h1 className="text-2xl mb-4">Editar funcionário</h1>
        <Card>
          <form
            onSubmit={handleSubmit}
            method="post"
            className="flex flex-col gap-4"
            encType="multipart/form-data"
          >
            <h1 className="text-xl font-bold flex items-center gap-2">
              <HiOutlineViewGrid /> Informações gerais
            </h1>
            <div className="flex gap-4">
              <TextInput
                className="flex-auto"
                icon={HiOutlineBadgeCheck}
                placeholder="Nome"
                name="name"
                onChange={handleData}
                value={employee.name}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineBadgeCheck}
                placeholder="Sobrenome"
                name="last_name"
                onChange={handleData}
                value={employee.last_name}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineIdentification}
                placeholder="Documento"
                name="document"
                onChange={handleData}
                value={employee.document}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineCalendar}
                placeholder="Data de nascimento"
                name="birthday"
                onChange={handleData}
                value={employee.birthday}
              />
            </div>
            <div className="flex gap-4">
              <TextInput
                className="flex-1"
                icon={HiOutlinePhone}
                placeholder="Telefone 1"
                name="phone1"
                onChange={handleData}
                value={employee.phone1}
              />
              <TextInput
                className="flex-1"
                icon={HiOutlinePhone}
                placeholder="Telefone 2"
                name="phone2"
                onChange={handleData}
                value={employee.phone2}
              />
            </div>
            <div className="flex gap-4">
              <TextInput
                className="flex-1"
                icon={HiLocationMarker}
                placeholder="Endereço"
                name="address"
                onChange={handleData}
                value={employee.address}
              />
              <Select
                className="flex-1"
                icon={HiOutlineCollection}
                placeholder="Cargo *"
                name="id_workgroup"
                onChange={handleData}
                required
              >
                <option value="1">teste1</option>
                <option value="2">teste2</option>
                <option value="3">teste3</option>
              </Select>
            </div>
            {/* Condição para mostrar a foto do funcionário caso exista */}
            <div>
              <Label className="text-lg" htmlFor="dropzone-file">
                Foto do funcionário
              </Label>
              <Label
                htmlFor="dropzone-file"
                className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center justify-center m-2">
                      <HiCloudUpload size={35} />
                    </span>
                    <span className="font-semibold">Selecione uma imagem</span>
                  </p>
                </div>
                <FileInput
                  id="dropzone-file"
                  name="photo"
                  onChange={handleImageSubmit}
                  className="hidden"
                />
              </Label>
            </div>

            <HR />
            <h1 className="text-xl font-bold flex items-center gap-2">
              <HiOutlineLogin /> Informações de login
            </h1>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <TextInput
                  className="flex-1"
                  icon={HiOutlineAtSymbol}
                  placeholder="Usuário para login"
                  name="login"
                  onChange={handleData}
                  value={employee.login}
                />
                <TextInput
                  className="flex-1"
                  icon={HiOutlineMail}
                  placeholder="E-mail"
                  name="email"
                  onChange={handleData}
                  value={employee.email}
                />
              </div>
              <div className="flex gap-4">
                <TextInput
                  className="flex-1"
                  icon={HiOutlineKey}
                  placeholder="Senha"
                  name="password"
                  onChange={handleData}
                />

                <TextInput
                  className="flex-1"
                  icon={HiOutlineKey}
                  placeholder="Confirme a senha"
                  name="password_confirm"
                  onChange={handleData}
                />
              </div>
            </div>

            <HR />
            <div className="flex items-center gap-4 justify-end">
              <Button color="light">
                <Link href="/employee">Cancelar</Link>
              </Button>
              <Button type="submit">Salvar</Button>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
}
