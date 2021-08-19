//prompt() -> caixa de dialogo
//confirm() -> valor boleano
//alert() -> caixa de aviso

let maoUsuario = prompt ("Digite: 1 - Pedra, 2 - Papel e 3 - Tesoura")
let maoMaquina = parseInt(Math.random() * 3 + 1 )

if (maoUsuario=maoMaquina){
    alert ("Empate")
    }else if (maoUsuario == 1){
        switch (maoMaquina){
            case 2:
                alert ("Perdeu");
                break;
            case 3: 
                alert ("Ganhou") 
        }
    }else if (maoUsuario == 2){
        switch (maoMaquina){
            case 1:
                alert ("Perdeu")
                break;
            case 3: 
                alert ("Ganhou") 
        } 
    }else if (maoUsuario == 3){
    switch(maoMaquina){
        case 1:
            alert ("Perdeu")
            break;
        case 2: 
            alert ("Ganhou") 
    } 
}

/* 

if (maoUsuario == 2){
    console.log("Empate")
}else if (maoMaquina == 2){
    console.log ("Perdeu")
}else if (maoMaquina == 3){
    console.log("Ganhou")
}

if (maoUsuario == 3){
    console.log("Empate")
}else if (maoMaquina == 2){
    console.log ("Perdeu")
}else if (maoMaquina == 3){
    console.log("Ganhou")
} */