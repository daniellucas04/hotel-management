import Header from "@/app/component/header";
import { Card } from "flowbite-react";

export default function BedroomsDetails() {
  let bedroom = {
    number: 123,
    toilet: 1,
    bed: 2,
    tv: 1,
    wifi: false,
    pool: true,
    coverage: true,
    air_conditioning: true,
    balcony: true,
  }

  return (
    <>
      <Header />
      <section className="h-full m-10">
        <Card className="p-4 mt-12">
          <div className="flex items-center justify-between">
            <div>
              <img className="w-full" src="https://placehold.co/2000x300" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 justify-items-center mt-14">
            <p>
              <span className="font-bold">Quarto:</span>{" "}
              {bedroom.number}
            </p>
            <p>
              <span className="font-bold">Banheiros:</span>{" "}
              {bedroom.toilet}
            </p>
            <p>
              <span className="font-bold">Camas:</span>{" "}
              {bedroom.bed}
            </p>
            <p>
              <span className="font-bold">Wifi:</span>{" "}
              {bedroom.wifi ? 'Sim' : 'Não'}
            </p>
            <p>
              <span className="font-bold">Piscina:</span>{" "}
              {bedroom.pool ? 'Sim' : 'Não'}
            </p>
            <p>
              <span className="font-bold">Cobertura:</span>{" "}
              {bedroom.coverage ? 'Sim' : 'Não'}
            </p>
            <p>
              <span className="font-bold">Ar condicionado:</span>{" "}
              {bedroom.air_conditioning ? 'Sim' : 'Não'}
            </p>
            <p>
              <span className="font-bold">Varanda:</span>{" "}
              {bedroom.balcony ? 'Sim' : 'Não'}
            </p>
          </div>
        </Card>
      </section>
    </>
  );
}
