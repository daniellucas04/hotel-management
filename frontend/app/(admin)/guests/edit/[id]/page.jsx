"use client";

import {
  HiCloudUpload,
  HiLocationMarker,
  HiOutlineBadgeCheck,
  HiOutlineCalendar,
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
  TextInput,
} from "flowbite-react";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { getGuest, savePhoto, updateGuest } from "../../actions";
import Swal from "sweetalert2";

export default function CreateUser({ params }) {
  const { id } = use(params);
  const [guest, setGuest] = useState({
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

  async function fetchGuest(id) {
    try {
      const result = await getGuest(id);
      setGuest(result);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchGuest(id);
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

  let data = new Date(guest.birthday);
  const dia = String(data.getUTCDate()).padStart(2, '0'); // Garante que o dia tenha 2 dígitos
  const mes = String(data.getUTCMonth() + 1).padStart(2, '0'); // Meses começam do zero (0 = Janeiro)
  const ano = data.getUTCFullYear();
  guest.birthday = `${dia}/${mes}/${ano}`;
  console.log(previewUrl)
  return (
    <>
      <section className="overflow-x-auto p-10">
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
                    {guest.photo ? (
                      <img
                        src={previewUrl ? previewUrl : `http://localhost:8000/uploads/${guest.photo}`}
                        className="w-32 h-32 object-cover rounded shadow mx-auto"
                      />
                    ) : (
                      <span className="flex flex-col items-center justify-center">
                        {previewUrl ? (
                          <img
                            src={previewUrl ? previewUrl : `http://localhost:8000/uploads/${guest.photo}`}
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
                <FileInput id="dropzone-file" name="photo" onChange={handleFileChange} className="hidden" />
              </Label>
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
