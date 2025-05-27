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

export async function getReservationsActive() {
    try {
        const data = await fetch('http://localhost:8000/dashboard/reservations/active', {
            method: 'get',
        });

        return await data.json();
    } catch (error) {
        console.log(error)
    }
}

export async function getBedroomsOcuppied() {
    try {
        const data = await fetch('http://localhost:8000/dashboard/bedrooms/ocuppied', {
            method: 'get',
        });

        return await data.json();
    } catch (error) {
        console.log(error)
    }
}

export async function getTotalCheckins() {
    try {
        const data = await fetch('http://localhost:8000/dashboard/checkins', {
            method: 'get',
        });

        return await data.json();
    } catch (error) {
        console.log(error)
    }
}

export async function getTotalMoneyTasks() {
    try {
        const data = await fetch('http://localhost:8000/dashboard/money/tasks', {
            method: 'get',
        });

        return await data.json();
    } catch (error) {
        console.log(error)
    }
}

export async function getTotalMoneyReservations() {
    try {
        const data = await fetch('http://localhost:8000/dashboard/money/reservations', {
            method: 'get',
        });

        return await data.json();
    } catch (error) {
        console.log(error)
    }
}