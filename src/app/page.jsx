import { Flowbite } from "flowbite-react";
import Header from "./view/component/header";
import Dashboard from "./view/dashboard";
import Guests from "./view/guests";
import Bedrooms from "./view/bedrooms";

export default function Home() {
	return (
		<Flowbite>
			<main className="h-screen">
				<Header activePage={"bedrooms"} />
				<Bedrooms />
			</main>
		</Flowbite>
	)
}