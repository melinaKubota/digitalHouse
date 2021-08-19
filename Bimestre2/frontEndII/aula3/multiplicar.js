function multiplicar(){
    if (operação=="*"){
        return numA*numB
    }else{
        return "Impossivel multiplicar por 0"
    }
}


module.exports = multiplicar;