import { Flowbite } from "flowbite-react";
import Header from "./view/component/header";
import Dashboard from "./view/dashboard";

export default function Home() {
	return (
		<Flowbite>
			<main className="h-screen">
				<Header />
				<Dashboard />
			</main>
		</Flowbite>
	)
}