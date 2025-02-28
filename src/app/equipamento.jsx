'use client'

import { useState } from "react";
import { Alert, Button } from "flowbite-react"

export default function Equipamento({title, min, max, isOn}) {
    const [volume, setVolume] = useState(min);
    const [disabled, setDisabled] = useState(isOn);

    function handleIncreaseVolume() {
        if (volume == max || disabled) return;

        setVolume(volume + 1);
    }

    function handleDecreaseVolume() {
        if (volume < min || disabled) return;

        setVolume(volume - 1);
    }
    return (
        <div className={`flex flex-col space-x-2 space-y-4 items-center border-2 rounded-lg px-2 py-8 shadow w-96 dark:border-zinc-500 dark:shadow-zinc-800`}>
            <h1 className="font-bold text-2xl">{title}</h1>
            <div className="flex gap-4 items-center">
                <Button color={(!isOn || disabled) ? 'light' : 'blue'} onClick={handleDecreaseVolume}>-1</Button>
                <Button color={(!isOn || disabled) ? 'light' : 'blue'} onClick={() => {setDisabled(!disabled);}}>{disabled ? 'Desligar' : 'Ligar'}</Button>
                <Button color={(!isOn || disabled) ? 'light' : 'blue'} onClick={handleIncreaseVolume}>+1</Button>
            </div>

            <span className="text-gray-400 font-medium text-lg">{(volume < min) ? <Alert color="failure">O volume está abaixo do mínimo.</Alert> : volume}</span>
            {(volume == max && !disabled) && <span className="text-emerald-500">Volume máximo</span>}
        </div>
    )
}