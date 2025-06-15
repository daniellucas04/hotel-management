export async function getAll(page, limit) {
	try {
		const data = await fetch(
			`http://localhost:8000/plans?page=${page}&limit=${limit}`,
			{
				method: "get",
			}
		);

		return await data.json();
	} catch (error) {
		
	}
}

export async function searchPlan(search,page,limit) {
	try {
		const data = await fetch(
			`http://localhost:8000/plans/search?data=${search}&page=${page}&limit=${limit}`,
			{
				method: "get",
			}
		);

		return await data.json();
	} catch (error) {

	}
}

export async function getPlan(id) {
	try {
		const data = await fetch(`http://localhost:8000/plans/${id}`, {
			method: "get",
		});

		return await data.json();
	} catch (error) {
		
	}
}

export async function updatePlan(id, plan) {
	try {
		const data = await fetch(`http://localhost:8000/plans/${id}`, {
			method: "put",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(plan),
		});

		return await data.json();
	} catch (error) {
		
	}
}

export async function createPlan(plan) {
	try {
		const data = await fetch(`http://localhost:8000/plans/`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(plan),
		});

		return await data.json();
	} catch (error) {
		
	}
}

export async function deletePlan(id) {
	try {
		const result = await fetch(`http://localhost:8000/plans/${id}`, {
			method: 'delete'
		});

		return await result.json();
	} catch (error) {
		
	}
}