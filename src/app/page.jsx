import { Flowbite } from "flowbite-react";
import Header from "./view/component/header";
import Dashboard from "./view/dashboard";

export default function Home() {
	return (
		<Flowbite>
			<main>
				<Header />
				<Dashboard />
			</main>
		</Flowbite>
	)
}