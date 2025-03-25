import Header from "@/app/component/header";
import { Button, Card, Select, Textarea, TextInput } from "flowbite-react";
import { HiOutlineBookmark, HiOutlineUser } from "react-icons/hi";

export default function ProductsDetails() {
  return (
    <>
      <Header />
      <section className="h-full m-10">
        <Card className="p-4">
          <div className="text-lg font-medium flex justify-center">
            <h1>Produto / Serviços</h1>
          </div>
          <div>
            <form className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="flex-auto">
                  <Select icon={HiOutlineBookmark}>
                    <option value="">Produto</option>
                    <option value="">Serviço</option>
                  </Select>
                </div>

                <div className="flex-auto">
                  <TextInput icon={HiOutlineUser} placeholder="Responsável" />
                </div>
              </div>
              <div>
                <Textarea
                  placeholder="Mais informações do produto / serviço"
                  rows={4}
                />
              </div>
              <div className="flex justify-end gap-4">
                <Button color="light">Cancelar</Button>
                <Button color="blue">Cadastrar</Button>
              </div>
            </form>
          </div>
        </Card>
      </section>
    </>
  );
}
