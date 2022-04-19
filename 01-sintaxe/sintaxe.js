// comentario de uma linha - atalho crtl ;

/* bloco de
comentario - atalho SHIFT ALT A */

// comando de saida para o console

console.log("Olá mundo!");

/* variaveis e constantes
// palavras-chave: var, let e const

var -> variavel de escopo global
let -> variavel de escopo de bloco
const -> const de escopo de bloco */

const nome = "Bruno"; //constante - valor nao varia
let ano = 2022; // variavel de escopo local
var curso = "Técnico em Informática para Internet"; // variavel global

ano = 2025

// recuperando os valores
console.log(nome);
console.log(ano);
console.log(curso);

// concatenação
// Eu sou o(a) XXXX, e em ANO estou estudando no CURSO.
console.log("Eu sou o " +nome+ ".");
console.log("Eu sou o " +nome+", e em " +ano+ " estou estudano no " +curso+ ".");

// template string 
console.log(`Atualmente, estamos fazendo o curso de ${curso}`);
console.log(`Eu sou o ${nome}, e em ${ano} estou estudano no ${curso}.`);

/* operadores matematicos:
+ adição
- subtração
/ divisão
* multiplicação */

let produto = "TV Led";
let preco = 6500;
let quantidade = 3;
let total = preco * quantidade;

/*exercício: usando console.log mostre a seguinte mensagem
Temos atualmente no estoque o produto TV Led na quantidade de 3 unidades, ao custo de 6500 (cada) e valor total de XXXX. */

console.log(`Temos atualmente no estoque o produto ${produto} na quantidade de ${quantidade}, ao custo de ${preco} (cada) e valor total de ${total}.`)