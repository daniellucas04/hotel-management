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
import { getAllWorkgroups, getEmployee, savePhoto, updateEmployee } from "../../actions";
import Swal from "sweetalert2";

export default function EditEmployee({ params }) {
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
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [workgroups, setWorkgroups] = useState([]);

  async function fetchEmployee(id) {
    try {
      const result = await getEmployee(id);
      // Reformat birthday from YYYY-MM-DD to DD/MM/YYYY
      let date = String(result.birthday).split('T')[0];
      let [year, month, day] = date.split('-');
      result.birthday = `${day}/${month}/${year}`;
      setEmployee(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchEmployee(id);
    fetchAllWorkgroups();
  }, []);

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

    try {
      // Convert birthday back to YYYY-MM-DD for backend
      const employeeDataToSend = { ...employee };
      if (employeeDataToSend.birthday) {
        const [day, month, year] = employeeDataToSend.birthday.split('/');
        employeeDataToSend.birthday = `${year}-${month}-${day}`;
      }

      const employeeData = await updateEmployee(id, employeeDataToSend);
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

      if (image) {
        await savePhoto(id, image);
      }

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

  async function fetchAllWorkgroups() {
    const results = await getAllWorkgroups();
    setWorkgroups(results ?? []);
  }

  return (
    <>
      <section className="overflow-x-auto p-10">
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
                value={employee.id_workgroup}
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
                    {employee.photo ? (
                      <img
                        src={previewUrl ? previewUrl : `http://localhost:8000/uploads/${employee.photo}`}
                        className="w-32 h-32 object-cover rounded shadow mx-auto"
                      />
                    ) : (
                      <span className="flex flex-col items-center justify-center">
                        {previewUrl ? (
                          <img
                            src={previewUrl ? previewUrl : `http://localhost:8000/uploads/${employee.photo}`}
                            className="w-32 h-32 object-cover rounded shadow mx-auto"
                          />
                        ) : (
                          <HiCloudUpload size={35} />
                        )}
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
            </div>

            <HR />
            <div className="flex items-center gap-4 justify-end">
              <Button color="light">
                <Link href="/employees">Cancelar</Link>
              </Button>
              <Button type="submit">Salvar</Button>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
}