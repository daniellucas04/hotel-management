const requiredCreateFields = {
	id_employee: "O funcionário é obrigatório",
	id_reservation: "A reserva é obrigatória",
	priority: "A prioridade é obrigatória",
	price: "O preço é obrigatório",
    description: 'A descrição é obrigatória',
};

export async function getAll(page, limit) {
	try {
		const data = await fetch(
			`http://localhost:8000/tasks?page=${page}&limit=${limit}`, {
				method: "get",
			}
		);

		return await data.json();
	} catch (error) {
		
	}
}

export async function getTask(id) {
	try {
		const data = await fetch(
			`http://localhost:8000/tasks/${id}`, {
				method: "get",
			}
		);

		return await data.json();
	} catch (error) {
		
	}
}

export async function getAllReservations() {
	try {
		const data = await fetch(`http://localhost:8000/reservations`, {
			method: "get",
		});

		return await data.json();
	} catch (error) {
		
	}
}


export async function getAllEmployees() {
	try {
		const data = await fetch(`http://localhost:8000/employees`, {
			method: "get",
		});

		return await data.json();
	} catch (error) {
		
	}
}

export async function createTask(task) {
	try {
		const data = await fetch(`http://localhost:8000/tasks/`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(task),
		});

		return await data.json();
	} catch (error) {
		
	}
}

export async function updateTask(id, task) {
	try {
		const data = await fetch(`http://localhost:8000/tasks/${id}`, {
			method: "put",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(task),
		});

		return await data.json();
	} catch (error) {
		
	}
}

export async function deleteTask(id) {
	try {
		const result = await fetch(`http://localhost:8000/tasks/${id}`, {
			method: 'delete'
		});

		return await result;
	} catch (error) {
		
	}
}

export function validateCreate(tasks) {
	let error = [];

	Object.entries(requiredCreateFields).forEach(([field, message]) => {
		if (!tasks[field]) {
			error.push(message);
		}
	});

	console.log(tasks);
	return error;
}
