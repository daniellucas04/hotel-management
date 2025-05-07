export async function loginEmployee(data) {
    try {
        const response = await fetch('http://localhost:8000/auth/login', {
            method: "POST",  
            headers: {
                "Content-Type": "application/json",  
            },
            body: JSON.stringify(data),  
        });

        if (!response.ok) {
            throw new Error('Erro ao tentar fazer login');
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;  
    }
}
