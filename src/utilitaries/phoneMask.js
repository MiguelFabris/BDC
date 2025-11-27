/**
 * Formata um número de telefone para o padrão (XX) XXXXX-XXXX
 * @param {string} value - Número de telefone sem formatação
 * @returns {string} - Número formatado
 */
export function formatPhoneNumber(value) {
    if (!value) return '';
    
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Limita a 11 dígitos
    if (numbers.length > 11) {
        return formatPhoneNumber(numbers.slice(0, 11));
    }
    
    // Formata enquanto digita
    if (numbers.length <= 2) {
        return numbers;
    } else if (numbers.length <= 7) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    }
}

/**
 * Remove formatação do telefone (retorna apenas números)
 * @param {string} value - Número formatado
 * @returns {string} - Apenas números
 */
export function unformatPhoneNumber(value) {
    return value.replace(/\D/g, '');
}
