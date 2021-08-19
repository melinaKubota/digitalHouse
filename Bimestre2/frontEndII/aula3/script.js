let numA = parseInt(prompt("Digite o primeiro numero"));
let operacao = prompt("Digite o operador - + / ou *");
let numB = parseInt(prompt("Digite o segundo numero"));


function calcular(){

   
if(operacao=="+"){
    return numA+numB}

else if(operacao=="-"){
    return numA-numB}

else if(operacao=="*"){
        return numA*numB}

else if(operacao=="/" && numB!=0){
               return numA/numB}

else {
    return "Impossivel dividir por 0"
}

}

let retorno = alert("O resultado é: "+calcular(numA,numB,operacao))
