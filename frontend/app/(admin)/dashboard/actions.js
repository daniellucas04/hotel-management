export async function getGuestsRegistred() {
    try {
        const data = await fetch('http://localhost:8000/dashboard/guests/registred', {
            method: 'get',
        });

        return await data.json();
    } catch (error) {
        console.log(error)
    }
}