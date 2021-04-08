const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];

const pessoa ={
    nome: 'Carlos',
    idade: 29
}

const pessoaComTelefone = {...pessoa, telefone: 123123123}

console.log(pessoa, pessoaComTelefone);