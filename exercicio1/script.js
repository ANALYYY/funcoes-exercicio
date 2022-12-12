function meuNome (nome) {
    return `Olá, ${nome}`;
}
console.log(meuNome("Analice"));

//FUNÇÃO COMUM
function numero (num) {
    console.log(
    ` TABUADA DO NÚMERO 5
    número ${num} x 0 = ${num * 0} 
    número ${num} x 1 = ${num * 1}
    número ${num} x 2 = ${num * 2}
    número ${num} x 3 = ${num * 3}
    número ${num} x 4 = ${num * 4}
    número ${num} x 5 = ${num * 5}
    número ${num} x 6 = ${num * 6}
    número ${num} x 7 = ${num * 7}
    número ${num} x 8 = ${num * 8}
    número ${num} x 9 = ${num * 9}
    `) 
}
console.log(numero(5));

//FUNÇÃO ARROW
const numero1 = (num) => {
    return ` TABUADA DO NÚMERO 5
 número ${num} x 0 = ${num * 0} 
 número ${num} x 1 = ${num * 1}
 número ${num} x 2 = ${num * 2}
 número ${num} x 3 = ${num * 3}
 número ${num} x 4 = ${num * 4}
 número ${num} x 5 = ${num * 5}
 número ${num} x 6 = ${num * 6}
 número ${num} x 7 = ${num * 7}
 número ${num} x 8 = ${num * 8}
 número ${num} x 9 = ${num * 9}
     `
}
console.log(numero1(10));


    





