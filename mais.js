// Importa o módulo prompt-sync
const teclado = require('prompt-sync')({sigint: true});

// Solicita ao usuário para inserir sua idade
const idade = parseInt(teclado('Digite sua idade: '), 10);

// Verifica se o valor é um número válido
if (isNaN(idade)) {
    console.log('Por favor, insira uma idade válida.');
} else {
    // Verifica se o usuário é maior de idade
    if (idade >= 18) {
        console.log('Você é maior de idade.');
    } else {
        console.log('Você é menor de idade.');
    }
}
