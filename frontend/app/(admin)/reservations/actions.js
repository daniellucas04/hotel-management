const requiredCreateFields = {
	id_guest: "O hóspede é obrigatório",
	id_bedroom: "O quarto é obrigatório",
	id_plan: "O plano é obrigatório",
	check_in: "A data de check-in é obrigatória",
	check_out: "A data de check-out é obrigatória",
};

export async function getAll(page, limit) {
	try {
		const data = await fetch(
			`http://localhost:8000/reservations?page=${page}&limit=${limit}`,
			{
				method: "get",
			}
		);

		return await data.json();
	} catch (error) {
		
	}
}

export async function getReservation(id) {
	try {
		const data = await fetch(
			`http://localhost:8000/reservations/${id}`,
			{
				method: "get",
			}
		);

		return await data.json();
	} catch (error) {

	}
}

export async function getAllGuests() {
	try {
		const data = await fetch(`http://localhost:8000/guests`, {
			method: "get",
		});

		return await data.json();
	} catch (error) {
		
	}
}

export async function getAllPlans() {
	try {
		const data = await fetch(`http://localhost:8000/plans`, {
			method: "get",
		});

		return await data.json();
	} catch (error) {
		
	}
}


export async function getAllBedrooms() {
	try {
		const data = await fetch(`http://localhost:8000/bedrooms`, {
			method: "get",
		});

		return await data.json();
	} catch (error) {
		
	}
}


export async function updateReservation(id, reservation) {
	try {
		const data = await fetch(`http://localhost:8000/reservations/${id}`, {
			method: "put",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(reservation),
		});

		return await data.json();
	} catch (error) {
		
	}
}

export async function createReservation(reservation) {
	try {
		const data = await fetch(`http://localhost:8000/reservations/`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(reservation),
		});

		return await data.json();
	} catch (error) {
		
	}
}

export async function deleteReservation(id) {
	try {
		const result = await fetch(`http://localhost:8000/reservations/${id}`, {
			method: 'delete'
		});

		return await result;
	} catch (error) {
		
	}
}

export function validateCreate(reservation) {
	let error = [];

	Object.entries(requiredCreateFields).forEach(([field, message]) => {
		if (!reservation[field]) {
			error.push(message);
		}
	});


	return error;
}
