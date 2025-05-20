import { Button, Card, Label, Select, TextInput } from "flowbite-react";

export default function CheckIn() {
    return (
        <section className="overflow-x-auto p-10">
            <h1 className="text-2xl mb-4">Check In</h1>
            <Card>
                <form method="post" className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 justify-end">
                        <Button type="submit">Realizar Check In</Button>
                    </div>
                </form>
            </Card>
        </section>
    );
}