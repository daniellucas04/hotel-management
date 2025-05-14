"use client";

import {
  HiCloudUpload,
  HiOutlineHashtag,
  HiOutlineInformationCircle,
  HiOutlineOfficeBuilding,
  HiOutlineViewGrid,
} from "react-icons/hi";
import {
  Button,
  Card,
  Checkbox,
  FileInput,
  HR,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { createBedroom, savePhoto, validate } from "../actions";
import { redirect } from "next/navigation";

export default function CreateBedroom() {
  const [bedroom, setBedroom] = useState({
    number: "",
    bathroom_quantity: "",
    bed_quantity: "",
    tv_quantity: "",
    category: "",
    classification: "",
    privileges: [],
    short_description: "",
    status: "",
  });
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  // Manipula a seleção de imagem
  function handleFileChange(event) {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  }

  // Manipula mudanças nos inputs, incluindo checkboxes
  function handleData(event) {
    const { name, type, value, checked } = event.target;
    if (type === "checkbox") {
      setBedroom((prev) => {
        const privilegesSet = new Set(prev.privileges);

        if (checked) {
          privilegesSet.add(name);
        } else {
          privilegesSet.delete(name);
        }

        return {
          ...prev,
          privileges: Array.from(privilegesSet),
        };
      });
    } else {
      setBedroom((prev) => ({ ...prev, [name]: value }));
    }
  }

  // Manipula o envio do formulário
  async function handleSubmit(event) {
    event.preventDefault();
    const errors = validate(bedroom);

    if (errors.length === 0) {
      try {
        const bedroomData = await createBedroom(bedroom);

        if (image) {
          await savePhoto(bedroomData.id, image);
        }

        Swal.fire({
          text: "Quarto cadastrado com sucesso",
          icon: "success",
          timer: 3000,
          toast: true,
          position: "top-right",
          showConfirmButton: false,
        });

        setTimeout(() => {
          redirect("/bedrooms");
        }, 3000);
      } catch (error) {
        console.log(error);
        Swal.fire({
          text: "Erro ao cadastrar o quarto. Tente novamente!",
          icon: "error",
          timer: 3000,
          toast: true,
          position: "top-right",
          showConfirmButton: false,
        });
      }
    } else {
      Swal.fire({
        html: errors.join("<br>"),
        icon: "error",
        timer: 0,
        toast: true,
        position: "top-right",
        showConfirmButton: false,
      });
    }
  }

  return (
    <section className="overflow-x-auto m-10">
      <h1 className="text-2xl mb-4">Criar novo quarto</h1>
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
              icon={HiOutlineOfficeBuilding}
              onChange={handleData}
              name="number"
              placeholder="Número / Identificação *"
              required
            />
            <TextInput
              className="flex-auto"
              icon={HiOutlineHashtag}
              onChange={handleData}
              name="bathroom_quantity"
              placeholder="Quantidade de banheiros *"
              type="number"
              required
            />
            <TextInput
              className="flex-auto"
              icon={HiOutlineHashtag}
              onChange={handleData}
              name="bed_quantity"
              placeholder="Quantidade de camas *"
              type="number"
              required
            />
            <TextInput
              className="flex-auto"
              icon={HiOutlineHashtag}
              onChange={handleData}
              name="tv_quantity"
              placeholder="Quantidade de TVs *"
              type="number"
              required
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-auto">
              <Label htmlFor="category">Categoria *</Label>
              <Select id="category" name="category" onChange={handleData} required>
                <option value="">Escolha uma opção</option>
                <option>Solteiro</option>
                <option>Duplo solteiro</option>
                <option>Quarto casal</option>
                <option>Dormitório</option>
                <option>Apartamentos</option>
              </Select>
            </div>
            <div className="flex-auto">
              <Label htmlFor="classification">Classificação *</Label>
              <Select
                id="classification"
                name="classification"
                onChange={handleData}
                required
              >
                <option value="">Escolha uma opção</option>
                <option>Standard</option>
                <option>Master</option>
                <option>Deluxe</option>
              </Select>
            </div>
          </div>
          <div className="my-4">
            <h1 className="flex items-center gap-2">
              <HiOutlineInformationCircle /> Privilégios
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Checkbox id="free_wifi" name="free_wifi" onChange={handleData} />
                {console.log(bedroom)}
                <Label htmlFor="free_wifi">Wifi gratuito</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="air_conditioner"
                  name="air_conditioner"
                  onChange={handleData}
                />
                <Label htmlFor="air_conditioner">Ar-condicionado</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="frigobar" name="frigobar" onChange={handleData} />
                <Label htmlFor="frigobar">Frigobar</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="breakfast" name="breakfast" onChange={handleData} />
                <Label htmlFor="breakfast">Café da manhã</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="bedroom_bathroom"
                  name="bedroom_bathroom"
                  onChange={handleData}
                />
                <Label htmlFor="bedroom_bathroom">Banheiro no quarto</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="fan" name="fan" onChange={handleData} />
                <Label htmlFor="fan">Ventilador</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="garage" name="garage" onChange={handleData} />
                <Label htmlFor="garage">Vaga de estacionamento</Label>
              </div>
            </div>
          </div>
          <div>
            <Label htmlFor="short_description">Descrição breve *</Label>
            <Textarea
              id="short_description"
              onChange={handleData}
              name="short_description"
              rows={4}
              maxLength={250}
              required
            />
          </div>
          <div>
            <Label htmlFor="status">Status *</Label>
            <Select id="status" name="status" onChange={handleData} required>
              <option value="">Escolha uma opção</option>
              <option>Livre</option>
              <option>Ocupado</option>
              <option>Manutenção</option>
            </Select>
          </div>
          <div>
            <Label className="text-lg" htmlFor="dropzone-file">
              Foto do quarto
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
                      <span className="font-semibold">Selecione uma imagem</span>
                    </span>
                  )}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG ou JPG (MAX. 800x400px)
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
          <div className="flex items-center gap-4 justify-end">
            <Button color="light">
              <Link href="/bedrooms">Cancelar</Link>
            </Button>
            <Button type="submit">Salvar</Button>
          </div>
        </form>
      </Card>
    </section>
  );
}