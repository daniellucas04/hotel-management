import Header from "@/app/component/header";
import { Card } from "flowbite-react";

export default function GuestDetails() {
  let guest = {
    name: "Fernando",
    fullName: "Fernando Pereira",
    birthday: "1999-01-01",
    address: "Rua josé gomes, n118 - Barretos - SP",
    document: "123.123.123-90",
    photo_url: "https://placehold.co/80x80",
    email: "fernando@email.com",
    socials: [
      { name: "Instagram", link: "https://instagram.com" },
      { name: "Facebook", link: "https://facebook.com" },
    ],
    hosting: {
      plan: "Básico",
      bedroom: {
        number: 123,
        toilet: 1,
        bed: 2,
        tv: 1,
      },
    },
  };

  return (
    <>
      <Header />
      <section className="h-full m-10">
        <Card className="p-4">
          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-lg font-medium">Detalhes</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={guest.photo_url}
              className="max-w-20 max-h-2max-w-20 rounded-full"
            />
            <span className="text-lg font-medium">{guest.name}</span>
          </div>
          <div className="flex justify-between">
            <div>
              <p>
                <span className="font-bold">Nome completo:</span>{" "}
                {guest.fullName}
              </p>
              <p>
                <span className="font-bold">Data de nascimento:</span>{" "}
                {guest.birthday}
              </p>
              <p>
                <span className="font-bold">Endereço:</span> {guest.address}
              </p>
              <p>
                <span className="font-bold">Documento:</span> {guest.document}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Email: </span> {guest.email}
              </p>
              <p className="flex flex-col gap-4">
                {guest.socials.map((social) => (
                  <span key={social.name} className="font-bold">
                    <a className="underline" href={social.link}>
                      {social.name}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4 mt-12">
          <div className="flex items-center justify-between">
            <div></div>
            <div>
              <h1 className="text-lg font-medium">Informações da hospedagem</h1>
            </div>
            <div></div>
          </div>
          <div className="flex justify-evenly m-8">
            <p>
              <span className="font-bold">Quarto:</span>{" "}
              {guest.hosting.bedroom.number}
            </p>
            <p>
              <span className="font-bold">Banheiros:</span>{" "}
              {guest.hosting.bedroom.toilet}
            </p>
            <p>
              <span className="font-bold">Camas:</span>{" "}
              {guest.hosting.bedroom.bed}
            </p>
            <p>
              <span className="font-bold">TV:</span> {guest.hosting.bedroom.tv}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-lg font-bold">Plano do hóspede</h1>
            <span className="text-xl mt-8 border border-violet-100 shadow bg-violet-800 text-white p-12 rounded-md font-semibold hover:scale-105 hover:cursor-default transition-all">
              {guest.hosting.plan}
            </span>
          </div>
        </Card>
      </section>
    </>
  );
}
