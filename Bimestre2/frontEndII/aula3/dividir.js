function dividir(){
    if (operação=="/" && numB!=0){
        return numA*numB
    }else{
        return "Impossivel dividir por 0"
    }
}


module.exports = dividir;