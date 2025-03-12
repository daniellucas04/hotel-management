import Header from "@/app/component/header";
import { Button, Card, HR } from "flowbite-react";
import {
  ArrowLeft,
  Clock3,
  Facebook,
  Instagram,
  Mail,
  Phone,
  User,
  Users,
} from "lucide-react";

export default function GuestDetails() {
  let guest = {
    name: "Fernando",
    fullName: "Fernando Pereira",
    birthday: "1999-01-01",
    address: "Rua josé gomes, n118 - Barretos - SP",
    document: "123.123.123-90",
    photo_url: "https://placehold.co/60x60",
    phone: "(17) 99991-9999",
    email: "fernando@email.com",
    escorts: 4,
    socials: {
      facebook: "@fernando",
      instagram: "@fernando",
    },
    hosting: {
      plan: "Básico",
      bedroom: {
        number: 123,
        toilet: 1,
        bed: 2,
        tv: 1,
      },
      details: [
        { service: "academia" },
        { service: "piscina" },
        { service: "almoço" },
        { service: "janta" },
        { service: "café da manhã" },
        { service: "frigobar" },
      ],
      since: "2022",
    },
  };

  return (
    <>
      <Header />
      <section className="h-full mx-52 my-14">
        <a className="flex items-center gap-2 text-gray-600 hover:text-gray-400 transition-all" href="/guests">
          <ArrowLeft size={"16px"} />
          Users
        </a>
        <div className="flex items-center justify-between gap-4 mt-4">
          <div className="flex items-center gap-4">
            <img
              src={guest.photo_url}
              className="max-w-20 max-h-2max-w-20 rounded-full"
            />
            <span className="text-3xl font-medium">{guest.name}</span>
          </div>
          <div>
            <Button color="light" size="sm">
              Editar perfil
            </Button>
          </div>
        </div>
        <HR />
        <div className="flex justify-evenly">
          <section className="flex flex-col items-start gap-4 text-gray-500">
            <div className="flex items-center gap-4">
              <span>
                <User size={"1.2rem"} />
              </span>
              <span className="text-zinc-900 font-medium">Nome completo</span>
              <span>{guest.fullName}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <Phone size={"1.2rem"} />
              </span>
              <span className="text-zinc-900 font-medium">Telefone</span>
              <span>{guest.phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <Mail size={"1.2rem"} />
              </span>
              <span className="text-zinc-900 font-medium">E-mail</span>
              <span>{guest.fullName}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <User size={"1.2rem"} />
              </span>
              <span className="text-zinc-900 font-medium">Nome completo</span>
              <span>{guest.fullName}</span>
            </div>
          </section>
          <section className="flex flex-col items-start gap-4 text-gray-500">
            <div className="flex items-center gap-4">
              <span>
                <Users size={"1.2rem"} />
              </span>
              <span className="text-zinc-900 font-medium">Acompanhantes</span>
              <span>{guest.escorts}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <Clock3 size={"1.2rem"} />
              </span>
              <span className="text-zinc-900 font-medium">Cliente desde</span>
              <span>{guest.hosting.since}</span>
            </div>
          </section>
        </div>
        <HR />
        <div className="flex flex-col items-center justify-center mt-14">
          <h1 className="text-lg font-bold">Plano do hóspede</h1>
          <div className="flex gap-8">
            <div className="text-xl mt-8 border px-12 py-8 rounded-md font-semibold scale-90 hover:scale-105 hover:cursor-default transition-all">
              <p className="text-center text-2xl">{guest.hosting.plan}</p>
              <div className="mt-4">
                Neste plano está incluso:
                {guest.hosting.details.map((value) => (
                  <span
                    key={value.service}
                    className="flex flex-col text-md text-gray-500"
                  >
                    - {value.service}
                  </span>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button color="blue">Alterar plano</Button>
              </div>
            </div>
            <div className="text-xl mt-8 border px-12 py-8 rounded-md font-semibold hover-90 hover:scale-110 hover:cursor-default transition-all">
              <p className="text-center text-2xl">Normal</p>
              <div className="mt-4">
                Neste plano está incluso:
                {guest.hosting.details.map((value) => (
                  <span
                    key={value.service}
                    className="flex flex-col text-md text-gray-500"
                  >
                    - {value.service}
                  </span>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <span className="text-sm border py-2 px-4 rounded-md text-gray-500 shadow">
                  Plano atual
                </span>
              </div>
            </div>
            <div className="text-xl mt-8 border px-12 py-8 rounded-md font-semibold scale-90 hover:scale-105 hover:cursor-default transition-all">
              <p className="text-center text-2xl">Premium</p>
              <div className="mt-4">
                Neste plano está incluso:
                {guest.hosting.details.map((value) => (
                  <span
                    key={value.service}
                    className="flex flex-col text-md text-gray-500"
                  >
                    - {value.service}
                  </span>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button color="blue">Alterar plano</Button>
              </div>
            </div>
          </div>
        </div>
        <Card className="bg-gray-100 mt-20">
          <h1 className="text-xl text-black font-bold">Redes sociais</h1>
          <small className="-mt-4 text-sm text-gray-600">
            Todas as redes sociais do hóspede
          </small>
          <Card className="text-gray-700">
            <span className="flex items-center gap-2">
              <Facebook size={"1.2rem"} />{" "}
              <span className="font-medium">Facebook</span>{" "}
              {guest.socials.facebook}
            </span>
            <span className="flex items-center gap-2">
              <Instagram size={"1.2rem"} />{" "}
              <span className="font-medium">Instagram</span>{" "}
              {guest.socials.facebook}
            </span>
          </Card>
        </Card>
      </section>
    </>
  );
}
