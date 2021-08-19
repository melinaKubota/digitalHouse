const body = document.querySelector('body');

let result = '';

listadeFelinos.forEach((element) => {
    result += `
    
    <div> 
        <h2>${element.title}</h2>
        <img src ="${element.imgUrl}" width="30%">
        <p> ${element.description}</p>
        <q> Criado em: ${element.createdAt}</q>
    </div>
    `
});

body.innerHTML = result;
    