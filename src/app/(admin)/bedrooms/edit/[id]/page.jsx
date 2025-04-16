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

export default function EditRoom() {
  const [bedroomData, setBedroomData] = useState({
    number: 202,
    bathroom_quantity: 1,
    bed_quantity: 2,
    tv_quantity: 1,
    category: "",
    classification: "",
    privileges: "",
    short_description: "",
    status: "",
    photo: "https://placehold.co/2000x300",
  });

  function handleImageSubmit(event) {
    console.log(event.target.files[0].name);
    String().split(', ')
  }

  function handleData(event) {
    const valor = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    setBedroomData((p) => ({ ...p, [event.target.name]: valor }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(bedroomData);
  }

  return (
    <>
      
      <section className="overflow-x-auto m-10">
        <h1 className="text-2xl mb-4">Editar quarto</h1>
        <Card>
          <form className="flex flex-col gap-4">
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
                value={bedroomData.number}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineHashtag}
                onChange={handleData}
                name="bathroom_quantity"
                placeholder="Quantidade de banheiros *"
                required
                value={bedroomData.bathroom_quantity}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineHashtag}
                onChange={handleData}
                name="bed_quantity"
                placeholder="Quantidade de camas *"
                required
                value={bedroomData.bed_quantity}
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineHashtag}
                onChange={handleData}
                name="tv_quantity"
                placeholder="Quantidade de TVs *"
                required
                value={bedroomData.tv_quantity}
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-auto">
                <Label htmlFor="category">Categoria *</Label>
                <Select id="category"name="category" onChange={handleData} value={bedroomData.category}>
                  <option value="">Escolha uma opção</option>
                  <option>Solteiro</option>
                  <option>Duplo solteiro</option>
                  <option>Quarto casal</option>
                  <option>Dormitórios</option>
                  <option>Apartamentos</option>
                </Select>
              </div>

              <div className="flex-auto">
                <Label htmlFor="classification">Classificação *</Label>
                <Select id="classification" name="classification" onChange={handleData} value={bedroomData.classification}>
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
                  <Checkbox id="free_wifi" name="free_wifi" onChange={handleData} value={bedroomData.privileges} />
                  <Label htmlFor="free_wifi">Wifi gratuito</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="air_conditioner" name="air_conditioner" onChange={handleData} value={bedroomData.privileges} />
                  <Label htmlFor="air_conditioner">Ar-condicionado</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="frigobar" name="frigobar" onChange={handleData} value={bedroomData.privileges} />
                  <Label htmlFor="frigobar">Frigobar</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="breakfast" name="breakfast" onChange={handleData} value={bedroomData.privileges} />
                  <Label htmlFor="breakfast">Café da manhã</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="bedroom_bathroom" name="bedroom_bathroom" onChange={handleData} value={bedroomData.privileges} />
                  <Label htmlFor="bedroom_bathroom">Banheiro no quarto</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="fan" name="fan" onChange={handleData} value={bedroomData.privileges} />
                  <Label htmlFor="fan">Ventilador</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="garage" name="garage" onChange={handleData} value={bedroomData.privileges} />
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
                value={bedroomData.short_description}
              ></Textarea>
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <Select id="status" name="status" onChange={handleData} value={bedroomData.status}>
                <option value="">Escolha uma opção</option>
                <option value="">Livre</option>
                <option value="">Ocupado</option>
                <option value="">Em manutenção</option>
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
                <FileInput id="dropzone-file" name="photo" onChange={handleData} className="hidden" />
              </Label>
            </div>

            <HR />
            <div className="flex items-center gap-4 justify-end">
              <Button color="light">
                <a href="/bedrooms">Cancelar</a>
              </Button>
              <Button type="submit">Salvar</Button>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
}
