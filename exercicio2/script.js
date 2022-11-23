/*
Declare e chame as funções abaixo:

a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.
*/

function doisNumeros (num1, num2) {
    let soma = num1 + num2;
    return soma;
}
console.log(doisNumeros(15, 15))

/*
b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo.
*/

function doisNumeros2 (num3, num4) {
    return num3 >= num4;
}
console.log(doisNumeros2(9, 7));

/*
c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.
*/
 
function recebeNumero (numRecebido){
    return numRecebido % 2 === 0;
}
console.log(recebeNumero(10))

/*
d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.
*/

function valorSalario (salario) {
    return salario = salario -  (salario * 0.10) 
}
console.log(valorSalario(1212.00));

















