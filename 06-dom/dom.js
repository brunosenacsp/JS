/* metodos/funçoes de acesso e seleção

getElementById() -> selecionar um elemento pelo ID

querySelector() -> selecionar um elemento de acordo com o seletor

querySelectorAll() -> selecionar varios elementos de acordo com um seletor*/

// selecionando pelo ID
const titulo = document.getElementById('titulo-principal');
console.log(titulo);

// selecionando oela TAG
const pagina = document.querySelector('body');
console.log(pagina);

// selecionando todas as TAGS H2
const subtitulo = document.querySelectorAll('h2');
console.log(subtitulo);

// modificando elementos
titulo.textContent = "Olá mundo!";
subtitulo[1].textContent = "Full Stack";
subtitulo[2].textContent = "Zezinho Full Stack";
const legenda = document.querySelector('figcaption');
legenda.innerHTML = "<b>Ilustração do DOM</b>";

// CSS via JS

titulo.style.textAlign = "center";
titulo.style.backgroundImage = "linear-gradient(lightyellow, lightblue)";