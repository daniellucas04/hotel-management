"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
import { Line } from "react-chartjs-2";
import { Card } from "flowbite-react";
import Header from "../component/header";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Demo chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function Reports() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center h-full mt-10">
        <div className="grid grid-cols-3 gap-8">
          <Card className="h-56 hover:scale-105 cursor-pointer transition-all">
            <h1 className="text-xl">Alguns dados referentes aos relatórios</h1>
            <p className="text-gray-500">mais informações...</p>
          </Card>
          <Card className="h-56 hover:scale-105 cursor-pointer transition-all">
            <h1 className="text-xl">Alguns dados referentes aos relatórios</h1>
            <p className="text-gray-500">mais informações...</p>
          </Card>
          <Card className="h-56 hover:scale-105 cursor-pointer transition-all">
            <h1 className="text-xl">Alguns dados referentes aos relatórios</h1>
            <p className="text-gray-500">mais informações...</p>
          </Card>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-10">
          <Line
            className="border p-4 rounded max-h-[300px] max-w-[500px]"
            options={options}
            data={data}
          />
          <Line
            className="border p-4 rounded max-h-[300px] max-w-[500px]"
            options={options}
            data={data}
          />
          <Line
            className="border p-4 rounded max-h-[300px] max-w-[500px]"
            options={options}
            data={data}
          />
        </div>
      </section>
    </>
  );
}
