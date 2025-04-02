"use client";

import Header from "@/app/component/header";
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
import { useState } from "react";

export default function CreateUser() {
  const [guestData, setGuestData] = useState({
    id_plan: 1,
    name: "Hóspede",
    last_name: "Teste",
    document: "123.123.123-23",
    birthday: "2003-09-20",
    phone1: "(12) 11231-2131",
    phone2: "",
    address: "Rua hóspede, 20",
    photo: "https://placehold.co/50x50",
  });

  return (
    <>
      <Header />
      <section className="overflow-x-auto m-10">
        <h1 className="text-2xl mb-4">Criar novo hóspede</h1>
        <Card>
          <form className="flex flex-col gap-4">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <HiOutlineViewGrid /> Informações gerais
            </h1>
            <div className="flex gap-4">
              <TextInput
                className="flex-auto"
                icon={HiOutlineBadgeCheck}
                placeholder="Nome *"
                required
                value={guestData.name}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineBadgeCheck}
                placeholder="Sobrenome *"
                required
                value={guestData.last_name}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineIdentification}
                placeholder="Documento *"
                required
                value={guestData.document}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineCalendar}
                placeholder="Data de nascimento *"
                required
                value={guestData.birthday}
              />
            </div>
            <div className="flex gap-4">
              <TextInput
                className="flex-1"
                icon={HiOutlinePhone}
                placeholder="Telefone 1 *"
                required
                value={guestData.phone1}
              />
              <TextInput
                className="flex-1"
                icon={HiOutlinePhone}
                placeholder="Telefone 2"
                value={guestData.phone2}
              />
            </div>
            <div className="flex gap-4">
              <TextInput
                className="flex-1"
                icon={HiLocationMarker}
                placeholder="Endereço *"
                required
                value={guestData.address}
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
                <FileInput id="dropzone-file" className="hidden" />
              </Label>
            </div>

            <HR />
            <h1 className="text-xl font-bold flex items-center gap-2">
              <HiOutlineCash /> Plano de hospedagem
            </h1>
            <div className="flex gap-8 justify-center">
              <div className="flex items-center gap-8 border py-2 px-8 rounded-md shadow-sm cursor-default transition-all">
                <span className="font-medium">Básico</span>{" "}
                <Radio
                  name="plan"
                  value={1}
                  checked={guestData.id_plan == 1 ? true : false}
                />
              </div>
              <div className="flex items-center gap-8 border py-2 px-8 rounded-md shadow-sm cursor-default transition-all">
                <span className="font-medium">Premium</span>{" "}
                <Radio
                  name="plan"
                  value={2}
                  checked={guestData.id_plan == 2 ? true : false}
                />
              </div>
              <div className="flex items-center gap-8 border py-2 px-8 rounded-md shadow-sm cursor-default transition-all">
                <span className="font-medium">Deluxe</span>{" "}
                <Radio
                  name="plan"
                  value={3}
                  checked={guestData.id_plan == 3 ? true : false}
                />
              </div>
            </div>

            <HR />
            <div className="flex items-center gap-4 justify-end">
              <Button color="light">
                <a href="/guests">Cancelar</a>
              </Button>
              <Button>Salvar</Button>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
}
