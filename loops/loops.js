/* estrutura de controle de repetição 

while (enquanto)
do/while (faça enqaunto)
for (para uma determinada quantidade de vezes) */

// exmplo  1: while
// while (condição) { comandos };

let i = 1;
while (i < 10) {
    console.log(`o valor de i é: ${i}`);
    i++;
}

// exmplo  2: do/while

let j = 1;
do {
    console.log(`J é ${j}`);
    j++
} while(j < 10);


// // exmplo  3: for
// for(let k = 1; k <= 5; K++ ) {
//     console.log(`k vale: ${k}`);
// }

console.log("--------------");

// exemplo 4: loop iterando sobre os dados de array
let alunos = [
    "Chiquinha", "Chaves", "Madruga", "kiko", "Seu Barriga"
];

// cache do tamanho array
let tamanho = alunos.length;

for( let i = 0; i < tamanho; i++) {
    console.log( alunos[i]);
}




