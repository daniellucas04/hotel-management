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
import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import {
  createEmployee,
  getAllWorkgroups,
  savePhoto,
  validateCreate,
} from "../actions";
import { redirect } from "next/navigation";

export default function CreateUser() {
  const [employee, setEmployee] = useState({
    id_workgroup: "",
    name: "",
    last_name: "",
    document: "",
    birthday: "",
    phone1: "",
    phone2: "",
    photo: "",
    login: "",
    email: "",
    password: "",
    password_confirm: "",
  });
  const [workgroups, setWorkgroups] = useState([]);
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  function handleFileChange(event) {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  }

  function handleData(event) {
    setEmployee((p) => ({ ...p, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let error = validateCreate(employee);

    if (error.length == 0) {
      try {
        const employeeData = await createEmployee(employee);
<<<<<<< HEAD:frontend/app/(admin)/employee/create/page.jsx
        if (employeeData.message) {
          Swal.fire({
            text: employeeData.message,
            icon: "error",
            timer: 3000,
            toast: true,
            position: "top-right",
            showConfirmButton: false,
          });
          return;
        }

=======
        console.log(employeeData)
>>>>>>> 736abc76f7c633f53769987de85ca7469f750e2f:frontend/src/app/(admin)/employee/create/page.jsx
        if (image) {
          await savePhoto(employeeData.id, image);
        }

        Swal.fire({
          text: "Funcionário cadastrado com sucesso",
          icon: "success",
          timer: 3000,
          toast: true,
          position: "top-right",
          showConfirmButton: false,
        });

        setTimeout(() => {
          redirect("/employee");
        }, 3000);
      } catch (error) {
        console.log(error);
        Swal.fire({
          text: "Erro ao cadastrar o funcionário. Tente novamente!",
          icon: "error",
          timer: 3000,
          toast: true,
          position: "top-right",
          showConfirmButton: false,
        });
      }
    } else {
      Swal.fire({
        html: error.join("<br>"),
        icon: "error",
        timer: 0,
        toast: true,
        position: "top-right",
        showConfirmButton: false,
      });
    }
  }

  async function fetchAllWorkgroups() {
    const results = await getAllWorkgroups();
    setWorkgroups(results ?? []);
  }

  useEffect(() => {
    fetchAllWorkgroups();
  }, []);

  return (
    <>
      <section className="overflow-x-auto m-10">
        <h1 className="text-2xl mb-4">Criar novo funcionário</h1>
        <Card>
          <form
            onSubmit={handleSubmit}
            method="post"
            encType="multipart/form-data"
            className="flex flex-col gap-4"
          >
            <h1 className="text-xl font-bold flex items-center gap-2">
              <HiOutlineViewGrid /> Informações gerais
            </h1>
            <div className="flex gap-4">
              <TextInput
                className="flex-auto"
                icon={HiOutlineBadgeCheck}
                placeholder="Nome *"
                name="name"
                onChange={handleData}
                required
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineBadgeCheck}
                placeholder="Sobrenome *"
                name="last_name"
                onChange={handleData}
                required
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineIdentification}
                placeholder="Documento *"
                name="document"
                onChange={handleData}
                required
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineCalendar}
                placeholder="Data de nascimento *"
                name="birthday"
                onChange={handleData}
                required
              />
            </div>
            <div className="flex gap-4">
              <TextInput
                className="flex-1"
                icon={HiOutlinePhone}
                placeholder="Telefone 1 *"
                name="phone1"
                onChange={handleData}
                required
              />
              <TextInput
                className="flex-1"
                icon={HiOutlinePhone}
                placeholder="Telefone 2"
                name="phone2"
              />
            </div>
            <div className="flex gap-4">
              <TextInput
                className="flex-1"
                icon={HiLocationMarker}
                placeholder="Endereço *"
                name="address"
                onChange={handleData}
                required
              />
              <Select
                className="flex-1"
                icon={HiOutlineCollection}
                placeholder="Cargo *"
                name="id_workgroup"
                onChange={handleData}
                required
                defaultValue={""}
              >
                <option key={0} value="" disabled>
                  Selecione o cargo do funcionário
                </option>
                {workgroups.map((workgroup) => (
                  <option key={workgroup.id} value={workgroup.id}>
                    {workgroup.name}
                  </option>
                ))}
              </Select>
            </div>
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
                    {previewUrl ? (
                      <img
                        src={previewUrl}
                        className="w-32 h-32 object-cover rounded shadow mx-auto"
                      />
                    ) : (
                      <span className="flex flex-col items-center justify-center">
                        <HiCloudUpload size={35} />
                        <span className="font-semibold">
                          Selecione uma imagem
                        </span>
                      </span>
                    )}
                  </p>
                </div>
                <FileInput
                  id="dropzone-file"
                  name="photo"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </Label>
            </div>

            <HR />
            <h1 className="text-xl font-bold flex items-center gap-2">
              <HiOutlineLogin /> Informações gerais
            </h1>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <TextInput
                  className="flex-1"
                  icon={HiOutlineAtSymbol}
                  placeholder="Usuário para login *"
                  name="login"
                  onChange={handleData}
                  required
                />
                <TextInput
                  className="flex-1"
                  icon={HiOutlineMail}
                  placeholder="E-mail *"
                  name="email"
                  onChange={handleData}
                  required
                />
              </div>
              <div className="flex gap-4">
                <TextInput
                  type="password"
                  className="flex-1"
                  icon={HiOutlineKey}
                  placeholder="Senha *"
                  name="password"
                  onChange={handleData}
                  required
                />
                <TextInput
                  type="password"
                  className="flex-1"
                  icon={HiOutlineKey}
                  placeholder="Confirme a senha *"
                  name="password_confirm"
                  onChange={handleData}
                  required
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
