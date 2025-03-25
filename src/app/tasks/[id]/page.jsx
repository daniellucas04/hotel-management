import Header from "@/app/component/header";
import { Button, Card, Label, Select, Textarea } from "flowbite-react";
import { HiOutlineBookmark, HiOutlineExclamationCircle, HiOutlineUser } from "react-icons/hi";

export default function ProductsDetails() {
  return (
    <>
      <Header />
      <section className="h-full m-10">
        <Card className="p-4">
          <div className="flex justify-center text-lg font-medium">
            <h1>Quarto (Número/Identificação)</h1>
          </div>
          <div>
            <form className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="flex-auto">
                  <Label htmlFor="type">Tipo</Label>
                  <Select id="type" icon={HiOutlineBookmark}>
                    <option value="">Produto</option>
                    <option value="">Serviço</option>
                  </Select>
                </div>

                <div className="flex-auto">
                  <Label htmlFor="responsible">Responsável</Label>
                  <Select id="responsible" icon={HiOutlineUser}>
                    <option value="">Funcionário 1</option>
                    <option value="">Funcionário 2</option>
                    <option value="">Funcionário 3</option>
                  </Select>
                </div>
              </div>
              <div>
                <div>
                  <Label htmlFor="priority">Prioridade</Label>
                  <Select id="priority" icon={HiOutlineExclamationCircle}>
                    <option>Baixa</option>
                    <option>Normal</option>
                    <option>Alta</option>
                    <option>Urgente</option>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
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
