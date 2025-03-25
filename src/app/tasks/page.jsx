import { Card } from "flowbite-react";
import Header from "../component/header";
import Link from "next/link";

export default function Tasks() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-2xl font-bold">Selecione um quarto</h1>
        <div className="grid grid-cols-4 gap-8 mt-8">
          <Link href={"/tasks/1"}>
            <Card className="w-[14rem] h-[12rem] hover:scale-105 cursor-pointer transition-all">
              <h1 className="text-2xl font-bold text-center">{202}</h1>
            </Card>
          </Link>
          <Link href={"/tasks/1"}>
            <Card className="w-[14rem] h-[12rem] hover:scale-105 cursor-pointer transition-all">
              <h1 className="text-2xl font-bold text-center">{202}</h1>
            </Card>
          </Link><Link href={"/tasks/1"}>
            <Card className="w-[14rem] h-[12rem] hover:scale-105 cursor-pointer transition-all">
              <h1 className="text-2xl font-bold text-center">{202}</h1>
            </Card>
          </Link><Link href={"/tasks/1"}>
            <Card className="w-[14rem] h-[12rem] hover:scale-105 cursor-pointer transition-all">
              <h1 className="text-2xl font-bold text-center">{202}</h1>
            </Card>
          </Link><Link href={"/tasks/1"}>
            <Card className="w-[14rem] h-[12rem] hover:scale-105 cursor-pointer transition-all">
              <h1 className="text-2xl font-bold text-center">{202}</h1>
            </Card>
          </Link><Link href={"/tasks/1"}>
            <Card className="w-[14rem] h-[12rem] hover:scale-105 cursor-pointer transition-all">
              <h1 className="text-2xl font-bold text-center">{202}</h1>
            </Card>
          </Link><Link href={"/tasks/1"}>
            <Card className="w-[14rem] h-[12rem] hover:scale-105 cursor-pointer transition-all">
              <h1 className="text-2xl font-bold text-center">{202}</h1>
            </Card>
          </Link><Link href={"/tasks/1"}>
            <Card className="w-[14rem] h-[12rem] hover:scale-105 cursor-pointer transition-all">
              <h1 className="text-2xl font-bold text-center">{202}</h1>
            </Card>
          </Link><Link href={"/tasks/1"}>
            <Card className="w-[14rem] h-[12rem] hover:scale-105 cursor-pointer transition-all">
              <h1 className="text-2xl font-bold text-center">{202}</h1>
            </Card>
          </Link>
        </div>
      </section>
    </>
  );
}
