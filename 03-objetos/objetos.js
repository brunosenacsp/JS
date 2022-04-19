// exemplo de 1: objeto basico
let livro = {
    // propriedade : valor
    titulo : 'Senhor dos Anéis',
    ano : 1954,
    volumes : 3,
    autor : 'J.R.R. Tolkien'

};

console.log(livro);

// meu livro preferido é o titulo do livro;
console.log(`meu livro preferido é o ${livro.titulo}, que foi lançado em ${livro.ano}.`)

// exemplo 2: objeto contendo array e outro objeto
let pessoa = {
    // propriedades
    nome : 'Bruno',
    idade : 39,
    sexo : 'masculino',
    telefones : ['2222-3333', '5555-6666'],
    cidade : 'São paulo',
    medidas : {
        peso : 90,
        altura : 1.80
    }
};

console.log(pessoa.medidas.altura)
console.log(pessoa.telefones[0])

// Certo alguém é uma pessoa incrivel, contrate atrvés do telefone 5555-6666

console.log(`${pessoa.nome} é uma pessoa incrivel, contrate através do telefone ${pessoa.telefones[0]}`)

// exemplo 3: Array de Objeto
let livros = [
    {
        titulo : 'Senhor dos Anéis',
        autor : 'J.R.R. Tolkien'
    },
    {
        titulo : 'Ghost Rider',
        autor : 'Neil Peart'
    },
    {
        titulo : 'Game of Thrones',
        autor : 'George R. R. Martin'
    }
];

console.log(`Meu livro preferido é ${livros[2].titulo}, do autor ${livros[2].autor} .`);