
export function formatValidationErrors(parsed) {
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
  
      // Crie um objeto apenas com os campos que possuem erros
      const filteredErrors = Object.keys(errors).reduce((acc, key) => {
        const errorMessages = errors[key];
  
        if (errorMessages && errorMessages.length > 0) {
          acc.push(errorMessages.join(', ')); // Une múltiplos erros em uma string
        }
  
        return acc;
      }, []);

      return {
        status: 400,
        errors: filteredErrors,
        message: "Por favor, verifique os dados enviados.",
      };
    }
  
    return null; // Retorna null se não houver erro
}