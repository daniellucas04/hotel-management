"use client";

import {
  HiCloudUpload,
  HiLocationMarker,
  HiOutlineBadgeCheck,
  HiOutlineCalendar,
  HiOutlineCash,
  HiOutlineIdentification,
  HiOutlinePhone,
  HiOutlineViewGrid,
} from "react-icons/hi";
import {
  Button,
  Card,
  FileInput,
  HR,
  Label,
  Radio,
  TextInput,
} from "flowbite-react";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { getAllPlans, updateGuest } from "../../actions";

export default function CreateUser({ params }) {
  const { id } = use(params);
  const [guest, setGuest] = useState({
    id_plan: 1,
    name: "",
    last_name: "",
    document: "",
    birthday: "",
    phone1: "",
    phone2: "",
    address: "",
    photo: "",
  });

  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [workgroups, setWorkgroups] = useState([]);

  async function fetchGuest(id) {
    try {
      const result = await getEmployee(id);
      setGuest(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchGuest(id);
    fetchAllPlans();
  }, []);
  
  function handleFileChange(event) {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  }

  function handleData(event) {
    setGuest((p) => ({ ...p, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const guestData = await updateGuest(id, guest);

      if (guestData.message) {
        Swal.fire({
          text: guestData.message,
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

  async function fetchAllPlans() {
    const results = await getAllPlans();
    setWorkgroups(results ?? []);
  }
  
  let data = new Date(guest.birthday);
  const dia = String(data.getUTCDate()).padStart(2, '0'); // Garante que o dia tenha 2 dígitos
  const mes = String(data.getUTCMonth() + 1).padStart(2, '0'); // Meses começam do zero (0 = Janeiro)
  const ano = data.getUTCFullYear();
  guest.birthday = `${dia}/${mes}/${ano}`;

  return (
    <>
      <section className="overflow-x-auto m-10">
        <h1 className="text-2xl mb-4">Editar hóspede</h1>
        <Card>
          <form onSubmit={handleSubmit} method="post" encType="multipart/form-data" className="flex flex-col gap-4">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <HiOutlineViewGrid /> Informações gerais
            </h1>
            <div className="flex gap-4">
              <TextInput
                className="flex-auto"
                icon={HiOutlineBadgeCheck}
                placeholder="Nome *"
                onChange={handleData}
                name="name"
                value={guest.name}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineBadgeCheck}
                placeholder="Sobrenome *"
                onChange={handleData}
                name="last_name"
                value={guest.last_name}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineIdentification}
                placeholder="Documento *"
                onChange={handleData}
                name="document"
                value={guest.document}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineCalendar}
                placeholder="Data de nascimento *"
                onChange={handleData}
                name="birthday"
                value={guest.birthday}
              />
            </div>
            <div className="flex gap-4">
              <TextInput
                className="flex-1"
                icon={HiOutlinePhone}
                placeholder="Telefone 1 *"
                onChange={handleData}
                name="phone1"
                value={guest.phone1}
              />
              <TextInput
                className="flex-1"
                icon={HiOutlinePhone}
                placeholder="Telefone 2"
                onChange={handleData}
                name="phone2"
                value={guest.phone2}
              />
            </div>
            <div className="flex gap-4">
              <TextInput
                className="flex-1"
                icon={HiLocationMarker}
                placeholder="Endereço *"
                onChange={handleData}
                name="address"
                value={guest.address}
              />
            </div>
            <div>
              <Label className="text-lg" htmlFor="dropzone-file">
                Foto do hóspede
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
                    <span className="font-semibold">Selecione uma imagem</span>{" "}
                    ou arraste e solte
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG ou JPG (MAX. 800x400px)
                  </p>
                </div>
                <FileInput id="dropzone-file" name="photo" onChange={handleImageSubmit} className="hidden" />
              </Label>
            </div>

            <HR />
            <h1 className="text-xl font-bold flex items-center gap-2">
              <HiOutlineCash /> Plano de hospedagem
            </h1>
            <div className="flex gap-8 justify-center">
              {/* Alteração: buscar planos do banco de dados */}
              {/* <div className="flex items-center gap-8 border py-2 px-8 rounded-md shadow-sm cursor-default transition-all">
                <span className="font-medium">Básico</span>{" "}
                <Radio
                  name="plan"
                  value={1}
                  checked={guest.id_plan == 1 ? true : false}
                />
              </div>
              <div className="flex items-center gap-8 border py-2 px-8 rounded-md shadow-sm cursor-default transition-all">
                <span className="font-medium">Premium</span>{" "}
                <Radio
                  name="plan"
                  value={2}
                  checked={guest.id_plan == 2 ? true : false}
                />
              </div>
              <div className="flex items-center gap-8 border py-2 px-8 rounded-md shadow-sm cursor-default transition-all">
                <span className="font-medium">Deluxe</span>{" "}
                <Radio
                  name="plan"
                  value={3}
                  checked={guest.id_plan == 3 ? true : false}
                />
              </div> */}
            </div>

            <HR />
            <div className="flex items-center gap-4 justify-end">
              <Button color="light">
                <Link href="/guests">Cancelar</Link>
              </Button>
              <Button type="submit">Salvar</Button>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
}
