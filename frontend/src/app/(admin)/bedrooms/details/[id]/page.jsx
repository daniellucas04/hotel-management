import { Card } from "flowbite-react";

export default function BedroomsDetails() {
  const [bedroomData, setBedroomData] = useState({
    number: 202,
    bathroom_quantity: 1,
    bed_quantity: 2,
    tv_quantity: 1,
    category: "Solteiro",
    classification: "Standard",
    privileges: "free-wifi, firgobar",
    short_description: "Descrição pequena",
    status: "Ocupado",
    photo: "https://placehold.co/2000x300",
  });

  return (
    <>
      
      <section className="h-full m-10">
        <Card className="p-4 mt-12">
          <div className="flex items-center justify-between">
            <div>
              <img
                className="w-full"
                src={bedroomData.photo}
                alt={bedroomData.number}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 justify-items-center mt-14">
            <p>
              <span className="font-bold">Quarto:</span> {bedroomData.number}
            </p>
            <p>
              <span className="font-bold">Banheiros:</span>{" "}
              {bedroomData.bathroom_quantity}
            </p>
            <p>
              <span className="font-bold">Camas:</span>{" "}
              {bedroomData.bed_quantity}
            </p>
            <p>
              <span className="font-bold">Categoria:</span>{" "}
              {bedroomData.category ? "Sim" : "Não"}
            </p>
            <p>
              <span className="font-bold">Classificação:</span>{" "}
              {bedroomData.classification ? "Sim" : "Não"}
            </p>
            <p>
              <span className="font-bold">Descrição curta:</span>{" "}
              {bedroomData.short_description}
            </p>
            <p>
              <span className="font-bold">Status:</span> {bedroomData.status}
            </p>
          </div>
        </Card>
      </section>
    </>
  );
}
