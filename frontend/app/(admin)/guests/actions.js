const requiredCreateFields = {
	id_plan: "O plano é obrigatório",
	name: "O nome é obrigatório",
	last_name: "O sobrenome é obrigatório",
	document: "O documento é obrigatório",
	birthday: "A data de nascimento é obrigatória",
	phone1: "O telefone 1 é obrigatório",
};

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
		console.log(error);
	}
}

export async function getGuest(id) {
	try {
		const data = await fetch(`http://localhost:8000/guests/${id}`, {
			method: "get",
		});

		return await data.json();
	} catch (error) {
		console.log(error);
	}
}

export async function getAllPlans() {
	try {
		const data = await fetch("http://localhost:8000/plans", {
			method: "get",
		});

		return await data.json();
	} catch (error) {
		console.log(error);
	}
}

export async function updateGuest(id, guest) {
	try {
		const data = await fetch(`http://localhost:8000/guests/${id}`, {
			method: "put",
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

export async function createGuest(guest) {
	try {
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
		console.log(error);
	}
}

export async function deleteGuest(id) {
	try {
		const result = await fetch(`http://localhost:8000/guests/${id}`, {
			method: 'delete'
		});

		console.log(await result);
	} catch (error) {
		console.log(error);
	}
}

export function validateUpdate(guest) {
	let error = [];

	error = validate(guest, error);

	return error;
}

export function validateCreate(guest) {
	let error = [];

	Object.entries(requiredCreateFields).forEach(([field, message]) => {
		if (!guest[field]) {
			error.push(message);
		}
	});

	error = validate(guest, error);

	return error;
}

function validate(guest, error) {
	if (guest.document.length != 11) {
		error.push("- Documento inválido");
	}

	if (guest.phone1.length != 11) {
		error.push("- Telefone 1 inválido");
	}

	return error;
}