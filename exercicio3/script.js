/*
a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

b) Em seguida, fora das funções, receba do usuário dois números e armazene em variável.
*/

function soma (soma1, soma2) {
let resultadoSoma = soma1 + soma2;
return resultadoSoma
}

let soma1 = parseInt(prompt('Digite um número para fazermos uma soma'));
let soma2 = parseInt(prompt('Digite outro número para fazermos uma soma'));

console.log(soma(soma1, soma2));

////////////////////////////////////////////////////////////////////////////

function subtracao (subtracao1, subtracao2) {
    let resultadoSubtracao = subtracao1 - subtracao2;
    return resultadoSubtracao;
}

let subtração1 = parseInt(prompt('Digite um número para fazermos uma subtração'));
let subtração2 = parseInt(prompt('Digite outro número para fazermos uma subtração'));

console.log(subtracao(subtração1, subtração2));

////////////////////////////////////////////////////////////////////////////

function multiplicação (multiplicação1, multiplicação2) {
    let resultadoMultiplicação = multiplicação1 * multiplicação2;
    return resultadoMultiplicação;
}

let multiplicação1 = parseInt(prompt('Digite um número para fazermos uma multiplicação'));
let multiplicação2 = parseInt(prompt('Digite outro número para fazermos uma multiplicação'));

console.log(multiplicação(multiplicação1, multiplicação2));

////////////////////////////////////////////////////////////////////////////////

function divisao (divisao1, divisao2) {
   let resultadoDivisao = divisao1 / divisao2;
   return resultadoDivisao;
}

let divisao1 = parseInt(prompt('Digite um número para fazermos uma divisão'));
let divisao2 = parseInt(prompt('Digite outro número para fazermos uma divisão'));

console.log(divisao(divisao1, divisao2));





