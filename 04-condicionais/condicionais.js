/* estruturas de controle condicional */

/* if/else. else if */
let nome = "Bruno";
let idade = 5;

// verificar a idade da pessoa

// condicional encadeada
let mensagem;

// if (idade > 18) {
//     mensagem = "maior";
// } else {
//     mensagem = "menor";
// }

// console.log(`Você é ${mensagem} de idade`);
// document.write(`Você é ${mensagem} de idade`);

if (idade >= 60) {
    mensagem = "é idoso(a)";
} else if (idade >= 18) {
    mensagem = "é adulto, mas não idoso(a)";
} else {
    // mensagem = "É menor de idade";

    if(idade >= 12 && idade < 18) {
        mensagem = "é adolescente";
    } else {
        mensagem = "é baby shark";
    }
}


console.log(nome+" "+mensagem);
console.log("-----------------");

let nota1 = 8;
let nota2 = 9;
let media = (nota1 + nota2) / 2;

if ( media >= 7 ) {
    mensagem = "Aprovado";
} else {
    mensagem = "Reprovado";
}

console.log("Nota: "+media+". "+mensagem);
console.log("-----------------");

let opcao = 4;
let textoOpcao;

switch(opcao) {
    case 1:
        textoOpcao = "Legal, o que deseja saber?";
        break;
    
    case 2:
        textoOpcao = "Que pena, o que aconteceu?";
        break;
    case 3:
        textoOpcao = "Certo, qual sua dúvida";
        break;
    default:
        textoOpcao = "Hum, não entendi... vou te transferir.";
        break;
}

console.log(`Você escolheu a opção ${opcao}`);
console.log(textoOpcao);
console.log("-----------------");

let a = 10;
let b = "10";

console.log(a == b);