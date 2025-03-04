import Header from "@/app/component/header";
import { Card } from "flowbite-react";

export default function BedroomDetails() {
  return (
    <>
      <Header />
      <section className="h-full m-10">
        <Card>
          <div className="flex items-center gap-4">
            <img
              src="https://placehold.co/40x40"
              className="max-w-20 max-h-2max-w-20 rounded-full"
            />
            <span className="text-lg font-medium">202</span>
          </div>
        </Card>
      </section>
    </>
  );
}
