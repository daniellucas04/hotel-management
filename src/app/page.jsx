import { Flowbite } from "flowbite-react";
import Header from "./view/component/header";
import Dashboard from "./view/dashboard";
import Guests from "./view/guests";

export default function Home() {
	return (
		<Flowbite>
			<main className="h-screen">
				<Header activePage={"guests"} />
				<Guests />
			</main>
		</Flowbite>
	)
}