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

export async function confirmCheckIn(id) {
	try {
		const result = await fetch(`http://localhost:8000/reservations/checkin/${id}`, {
			method: 'put',
		});

		return await result.json();
	} catch (error) {

	}
}

export async function confirmCheckOut(id) {
	try {
		const result = await fetch(`http://localhost:8000/reservations/checkout/${id}`, {
			method: 'put',
		});

		return await result.json();
	} catch (error) {

	}
}