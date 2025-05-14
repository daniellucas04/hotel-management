'use client'

import { Card } from "flowbite-react";
import { getBedroom } from "../../actions";
import { use, useEffect, useState } from "react";
import { LuBedDouble } from "react-icons/lu";

export default function BedroomsDetails({ params }) {
  const [bedroom, setBedroom] = useState({});
  const { id } = use(params);

  async function fetchBedroom(id) {
    try {
      const result = await getBedroom(id);
      setBedroom(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBedroom(id);
  }, []);

  return (
    <>
      <section className="h-full m-10">
        <Card className="p-4 mt-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center w-full h-96">
              {bedroom.photo ? (
                <img
                  className="w-max max-h-96"
                  src={`http://localhost:8000/uploads/${bedroom.photo}`}
                  alt={bedroom.number}
                />
              ) : (
                  <LuBedDouble size={100} />
              )}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 justify-items-center mt-14">
            <p>
              <span className="font-bold">Quarto:</span> {bedroom.number}
            </p>
            <p>
              <span className="font-bold">Banheiros:</span>{" "}
              {bedroom.bathroom_quantity}
            </p>
            <p>
              <span className="font-bold">Camas:</span>{" "}
              {bedroom.bed_quantity}
            </p>
            <p>
              <span className="font-bold">Categoria:</span>{" "}
              {bedroom.category ? "Sim" : "Não"}
            </p>
            <p>
              <span className="font-bold">Classificação:</span>{" "}
              {bedroom.classification ? "Sim" : "Não"}
            </p>
            <p>
              <span className="font-bold">Descrição curta:</span>{" "}
              {bedroom.short_description}
            </p>
            <p>
              <span className="font-bold">Status:</span> {bedroom.status}
            </p>
          </div>
        </Card>
      </section>
    </>
  );
}
