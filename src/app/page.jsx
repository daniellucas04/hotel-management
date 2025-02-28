'use client'

import { Button, DarkThemeToggle, Flowbite } from "flowbite-react";
import Equipamento from "./equipamento";
import { useState } from "react";

export default function Home() {
	const [isOn, setIsOn] = useState(true);

	function handleTurnTableOn(){
		setIsOn(!isOn);
	}

	return (
		<Flowbite>
			<main className="dark:bg-zinc-900 dark:text-zinc-300">
				<div className="text-end">
					<DarkThemeToggle className="border-2 m-5" />
				</div>
				<section className="flex flex-col gap-4 items-center justify-center h-screen">
					<h1 className="font-bold text-4xl">Mesa de som</h1>
						<Button onClick={handleTurnTableOn}>{isOn ? "Desligar" : "Ligar"} mesa</Button>
					<div className="grid grid-cols-3 m-8 gap-8">
						<Equipamento title={'Microfone'} min={3} max={10} isOn={isOn} />
						<Equipamento title={'Guitarra'} min={4} max={11} isOn={isOn} />
						<Equipamento title={'Bateria'} min={6} max={12} isOn={isOn} />
						<Equipamento title={'Baixo'} min={6} max={13} isOn={isOn} />
					</div>
				</section>
			</main>
		</Flowbite>
	)
}