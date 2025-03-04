import { Flowbite } from "flowbite-react";
import Header from "./component/header";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <Flowbite>
      <main className="h-screen">
		<Dashboard />
      </main>
    </Flowbite>
  );
}