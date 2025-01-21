let numero1 = prompt('== Qual o maior número ? ==\nDigite o primeiro número:');
let numero2 = prompt('Digite o segundo número: ');
function maiorDeles(a, b){
    return a > b ? a : b;
}
let resultado = maiorDeles(numero1, numero2);
alert(`O maior número foi: ${resultado}`);
console.log(`O maior número foi: ${resultado}`);