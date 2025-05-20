import { Button, Card, Select, TextInput } from "flowbite-react";

export default function CheckOut() {
    return (
        <section className="overflow-x-auto p-10">
            <h1 className="text-2xl mb-4">Check Out</h1>
            <Card>
                <form method="post" className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <TextInput 
                            className="flex-auto"
                            id="document"
                            placeholder="Documento *"
                            required
                            name="document"
                        />
                        <Select className="flex-auto">
                            <option value="">Escolha um plano</option>
                            {/* Opções da tabela plano */}
                        </Select>
                    </div>
                    <div className="flex items-center gap-4 justify-end">
                        <Button type="submit">Realizar Check Out</Button>
                    </div>
                </form>
            </Card>
        </section>
    );
}