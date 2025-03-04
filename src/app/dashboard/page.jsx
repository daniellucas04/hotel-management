"use client";

import { Card } from "flowbite-react";
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

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="m-10">
        <h1 className="text-4xl font-medium mb-10">Seja bem-vindo!</h1>
        <span className="text text-gray-600">
          Essas são as últimas atividades recentes do hotel
        </span>
        <section className="flex items-center gap-8 mt-4">
          <Card className="w-1/3">
            <h1 className="text-2xl font-bold">Algum relatório breve</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              cupiditate quidem, dolor eveniet placeat maiores suscipit fuga
              delectus officia pariatur inventore ullam natus, consequuntur quo
              dolorem tempora? Voluptatum, nulla esse!
            </p>
          </Card>

          <Card className="h-48 flex-1">
            <h1 className="text-2xl font-bold">Outro relatório breve</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              sapiente ipsum architecto! Maxime tempora, eos unde earum enim
              consectetur sint ratione delectus, deserunt magni cum dignissimos
              ullam totam aliquid natus.
            </p>
          </Card>
        </section>
        <section className="flex items-center gap-10 mt-32">
          <Line
            className="border p-4 rounded max-h-[300px] max-w-[1000px]"
            options={options}
            data={data}
          />
          <Card className="h-[300px]">
            <h1 className="text-2xl font-bold">Alguma outra informação</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus dolorum ad ex magnam alias rerum beatae delectus
              consequatur vero earum? Hic voluptate doloremque eligendi esse
              beatae veniam nesciunt laborum nam?
            </p>
          </Card>
        </section>
      </div>
    </>
  );
}
