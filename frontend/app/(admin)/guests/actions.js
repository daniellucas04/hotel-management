export async function getAll(page, limit) {
	try {
		const data = await fetch(
			`http://localhost:8000/guests?page=${page}&limit=${limit}`,
			{
				method: "get",
			}
		);

		return await data.json();
	} catch (error) {
		
	}
}

export async function getGuest(id) {
	try {
		const data = await fetch(`http://localhost:8000/guests/${id}`, {
			method: "get",
		});

		return await data.json();
	} catch (error) {
		
	}
}

export async function getAllPlans() {
	try {
		const data = await fetch("http://localhost:8000/plans", {
			method: "get",
		});

		return await data.json();
	} catch (error) {
		
	}
}

export async function updateGuest(id, guest) {
	try {
		guest.birthday = formatDateToDbFormat(guest.birthday);
		const data = await fetch(`http://localhost:8000/guests/${id}`, {
			method: "put",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(guest),
		});

		return await data.json();
	} catch (error) {
		
	}
}

export async function createGuest(guest) {
	try {
		guest.birthday = formatDateToDbFormat(guest.birthday);
		const data = await fetch(`http://localhost:8000/guests/`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(guest),
		});

		return await data.json();
	} catch (error) {
		console.log(error);
	}
}

export async function savePhoto(id, photo) {
	try {
		const image = new FormData();
		image.append("image", photo);

		const uploadedImage = await fetch(
			`http://localhost:8000/guests/${id}/upload`,
			{
				method: "post",
				body: image,
			}
		);

		return await uploadedImage.json();
	} catch (error) {
		
	}
}

export async function deleteGuest(id) {
	try {
		const result = await fetch(`http://localhost:8000/guests/${id}`, {
			method: 'delete'
		});

		return await result.json();
	} catch (error) {
		
	}
}

function formatDateToDbFormat(dateStr) {
	// O formato de entrada é "DD/MM/YYYY"
	const [day, month, year] = String(dateStr).split("/");

	let date = `${year}-${month}-${day}`;

	return date;
}