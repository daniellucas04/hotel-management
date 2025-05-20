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
import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useParams } from "next/navigation";
import { getBedroom, savePhoto, updateBedroom } from "../../actions";

export default function EditBedroom({ params }) {
  const { id } = useParams(params);
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
    photo: "",
  });
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");


  async function fetchBedroom(id) {
    try {
      let result = await getBedroom(id);
      result = {
        ...result,
        privileges: result.privileges.split(','),
      }
      setBedroom(result);
    } catch (error) {
      console.log(error);
    }
  }

  function handleFileChange(event) {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  }

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

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const bedroomData = await updateBedroom(id, bedroom);

      if (bedroomData.message) {
        Swal.fire({
          text: bedroomData.message,
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
        text: "Quarto editado com sucesso.",
        icon: "success",
        timer: 3000,
        toast: true,
        position: "top-right",
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        text: "Erro ao editar o quarto. Tente novamente!",
        icon: "error",
        timer: 3000,
        toast: true,
        position: "top-right",
        showConfirmButton: false,
      });
    }
  }

  useEffect(() => {
    fetchBedroom(id);
  }, []);

  return (
    <>
      <section className="overflow-x-auto p-10">
        <h1 className="text-2xl mb-4">Editar quarto</h1>
        <Card>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                value={bedroom.number}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineHashtag}
                onChange={handleData}
                name="bathroom_quantity"
                placeholder="Quantidade de banheiros *"
                required
                value={bedroom.bathroom_quantity}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineHashtag}
                onChange={handleData}
                name="bed_quantity"
                placeholder="Quantidade de camas *"
                required
                value={bedroom.bed_quantity}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineHashtag}
                onChange={handleData}
                name="tv_quantity"
                placeholder="Quantidade de TVs *"
                required
                value={bedroom.tv_quantity}
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-auto">
                <Label htmlFor="category">Categoria *</Label>
                <Select id="category" name="category" onChange={handleData} value={bedroom.category}>
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
                <Select id="classification" name="classification" onChange={handleData} value={bedroom.classification}>
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
                  <Checkbox id="free_wifi" name="free_wifi" onChange={handleData} checked={bedroom.privileges.includes('free_wifi')} />
                  <Label htmlFor="free_wifi">Wifi gratuito</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="air_conditioner" name="air_conditioner" onChange={handleData} checked={bedroom.privileges.includes('air_conditioner')} />
                  <Label htmlFor="air_conditioner">Ar-condicionado</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="frigobar" name="frigobar" onChange={handleData} checked={bedroom.privileges.includes('frigobar')} />
                  <Label htmlFor="frigobar">Frigobar</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="breakfast" name="breakfast" onChange={handleData} checked={bedroom.privileges.includes('breakfast')} />
                  <Label htmlFor="breakfast">Café da manhã</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="bedroom_bathroom" name="bedroom_bathroom" onChange={handleData} checked={bedroom.privileges.includes('bedroom_bathroom')} />
                  <Label htmlFor="bedroom_bathroom">Banheiro no quarto</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="fan" name="fan" onChange={handleData} checked={bedroom.privileges.includes('fan')? true : false} />
                  <Label htmlFor="fan">Ventilador</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="garage" name="garage" onChange={handleData} checked={bedroom.privileges.includes('garage')} />
                  <Label htmlFor="garage">Vaga de estacinonamento</Label>
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="short_description">Descrição breve</Label>
              <Textarea
                id="short_description"
                rows={4}
                maxLength={250}
                onChange={handleData}
                name="short_description"
                value={bedroom.short_description}
              ></Textarea>
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              {console.log(bedroom.status)}
              <Select id="status" name="status" onChange={handleData} value={bedroom.status}>
                <option value="">Escolha uma opção</option>
                <option>Livre</option>
                <option>Ocupado</option>
                <option>Manutenção</option>
              </Select>
            </div>
            <div>
              <Label className="text-lg" htmlFor="dropzone-file">
                Foto quarto
              </Label>
              <Label
                htmlFor="dropzone-file"
                className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    {bedroom.photo ? (
                      <img
                        src={previewUrl ? previewUrl : `http://localhost:8000/uploads/${bedroom.photo}`}
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
                <FileInput id="dropzone-file" name="photo" onChange={handleFileChange} className="hidden" />
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
    </>
  );
}
