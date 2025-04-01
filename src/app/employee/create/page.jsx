import Header from "@/app/component/header";
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
import { Button, Card, FileInput, HR, Label, TextInput } from "flowbite-react";

export default function CreateUser() {
  return (
    <>
      <Header />
      <section className="overflow-x-auto m-10">
        <h1 className="text-2xl mb-4">Criar novo funcionário</h1>
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
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineBadgeCheck}
                placeholder="Sobrenome *"
                required
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineIdentification}
                placeholder="Documento *"
                required
              />
              <TextInput
                className="flex-auto"
                icon={HiOutlineCalendar}
                placeholder="Data de nascimento *"
                required
              />
            </div>
            <div className="flex gap-4">
              <TextInput
                className="flex-1"
                icon={HiOutlinePhone}
                placeholder="Telefone 1 *"
                required
              />
              <TextInput
                className="flex-1"
                icon={HiOutlinePhone}
                placeholder="Telefone 2"
              />
            </div>
            <div className="flex gap-4">
              <TextInput
                className="flex-1"
                icon={HiLocationMarker}
                placeholder="Endereço *"
                required
              />
              <TextInput
                className="flex-1"
                icon={HiOutlineCollection}
                placeholder="Setor *"
                required
              />
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
              <HiOutlineLogin /> Informações gerais
            </h1>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <TextInput
                  className="flex-1"
                  icon={HiOutlineAtSymbol}
                  placeholder="Usuário para login *"
                  required
                />
                <TextInput
                  className="flex-1"
                  icon={HiOutlineMail}
                  placeholder="E-mail *"
                  required
                />
              </div>
              <div className="flex gap-4">
                <TextInput
                  className="flex-1"
                  icon={HiOutlineKey}
                  placeholder="Senha *"
                  required
                />
                <TextInput
                  className="flex-1"
                  icon={HiOutlineKey}
                  placeholder="Confirme a senha *"
                  required
                />
              </div>
            </div>

            <HR />
            <div className="flex items-center gap-4 justify-end">
              <Button color="light">
                <a href="/employee">Cancelar</a>
              </Button>
              <Button>Salvar</Button>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
}
