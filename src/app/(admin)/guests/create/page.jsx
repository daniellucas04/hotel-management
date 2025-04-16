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
    name: "",
    last_name: "",
    document: "",
    birthday: "",
    phone1: "",
    phone2: "",
    address: "",
    photo: "",
  });

  function handleImageSubmit(event) {
    console.log(event.target.files[0].name);
  }

   function handleData(event) {
    setGuestData(p => ({...p, [event.target.name]: event.target.value}))
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(guestData)
  }

  return (
    <>
      <section className="overflow-x-auto m-10">
        <h1 className="text-2xl mb-4">Criar novo hóspede</h1>
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
                required
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineBadgeCheck}
                placeholder="Sobrenome *"
                onChange={handleData}
                name="last_name"
                required
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineIdentification}
                placeholder="Documento *"
                onChange={handleData}
                name="document"
                required
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineCalendar}
                placeholder="Data de nascimento *"
                onChange={handleData}
                name="birthday"
                required
              />
            </div>
            <div className="flex gap-4">
              <TextInput
                className="flex-1"
                icon={HiOutlinePhone}
                placeholder="Telefone 1 *"
                onChange={handleData}
                name="phone1"
                required
              />
              <TextInput
                className="flex-1"
                icon={HiOutlinePhone}
                placeholder="Telefone 2"
                onChange={handleData}
                name="phone2"
              />

            </div>
            <div className="flex gap-4">
              <TextInput
                className="flex-1"
                icon={HiLocationMarker}
                placeholder="Endereço *"
                onChange={handleData}
                name="address"
                required
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
              {/* Alteração: Receber os planos do banco de dados */}
              {/* <div className="flex items-center gap-8 border py-2 px-8 rounded-md shadow-sm cursor-default transition-all">
                <span className="font-medium">Básico</span>{" "}
                <Radio name="plan" onChange={handleData} />
              </div>
              <div className="flex items-center gap-8 border py-2 px-8 rounded-md shadow-sm cursor-default transition-all">
                <span className="font-medium">Premium</span>{" "}
                <Radio name="plan" onChange={handleData} />
              </div>
              <div className="flex items-center gap-8 border py-2 px-8 rounded-md shadow-sm cursor-default transition-all">
                <span className="font-medium">Deluxe</span>{" "}
                <Radio name="plan" onChange={handleData} />
              </div> */}
            </div>

            <HR />
            <div className="flex items-center gap-4 justify-end">
              <Button color="light">
                <a href="/guests">Cancelar</a>
              </Button>
              <Button type="submit">Salvar</Button>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
}
