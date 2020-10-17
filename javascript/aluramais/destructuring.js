/*
Destructuring é a divisão de uma estrutura complexa em partes mais simples
Em JavaScript pode ser utilizado em Arrays e Objetos
*/
const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

// 1. Fazendo desta forma, estamos criando uma "Array de Arrays"
//const arraysNumeros = [numerosPares, numerosImpares];
//console.log(arraysNumeros);

// 2. Os spread operators são usados antes das Arrays 
//      para abri-las para que seus valores possam ser introduzidos em uma nova array.
const numeros = [...numerosPares, ...numerosImpares];

// 3. Podemos atribuir diversas variáveis na mesma linha em um array
// O JavaScript identifica cada vírgula como separação de uma variável
const [num1, num2, outrosNumeros] = [1, 2, [3, 4, 5]];

// 4. Podemos atribuir um valor padrão a uma variável dessa forma
// Isso pode ser útil caso o valor atribuído venha como uma array vazia, por exemplo
//const [nome1 = 'Ju'] = [];

// 5. O mesmo se aplica a objetos. Com o exemplo abaixo, estamos criando um novo objeto
//      adicionando uma propriedade a um objeto existente
const pessoa = {nome: 'Ju', idade: 25};
const pessoaComTelefone = {...pessoa, telefone: 123123123};

// 6. Podemos também acessar diretamente a propriedade de um objeto criando uma váriavel
//      de mesmo nome da propriedade existente neste.
// Por exemplo, para acessar um objeto, chamamos a propriedade dele com objeto.propriedade
//      const propriedade1 = objeto.propriedade1;
// Como sabemos queremos atribuir o valor a uma variável, ao invés de chamar e atribuir,
//      podemos apenas atribuir diretamente:
const {nome} = pessoa;
const {idade} = pessoa;

// 7. Podemos utilizar este mesmo tipo de atribuição em funções para retirar a propriedade
//      desejada do objeto passado junto com a função

function imprimeDados({nome, idade}){
    console.log(nome, idade)
}

imprimeDados(pessoa);