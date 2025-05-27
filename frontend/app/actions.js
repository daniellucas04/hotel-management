'use server';

export async function loginEmployee(data) {
    const response = await fetch('http://localhost:8000/auth/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao fazer login');
    }

    const result = await response.json();
    return result;  // 🔥 Somente retorna os dados
}
