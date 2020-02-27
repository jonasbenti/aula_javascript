// var lista = ["morango", "banana", "laranja"];
// lista.push("uva");
// // console.log(lista.length); // mostra a quantidade de elementos do array
// // console.log(lista.reverse());// exibe o array ao contrario
// console.log(lista.toString());// transforma todo o array em uma unica string
// console.log(lista.join(" - "));// funciona como um separdor, similar ao implode do PHP
// //alert("Olá "+nome);



// var fruta = {nome: "maça", cor:"vermelha"};//array de objeto fruta
// console.info(fruta.nome);

//  var frutas = [{nome: "maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];//array de objeto fruta
//  console.info(frutas[1].nome);

//while
// var i = 0;
// while(i < 5){
//     console.info("while percorreu "+(i+1)+" vez(es)");
//     i++;
// }


//for js
// for(var i = 1; i <=6; i++){
//     console.info("passou "+i+" vezes");
// }

// var d = new Date();
// console.info(d);

// function clicou(){
//     document.getElementById("agradecimento").
//     innerHTML = "<a>obrigado por clicar</a>";
//     //console.log(agra);
//     alert("Obrigado por clicar");
// }

function redirecionar(){
    window.open("https://google.com/","_blank");
    //window.location.href = "https://google.com/";
}

function trocar(elemento){
    // document.getElementById("mousemove").innerHTML =
    // "Mouse passou aqui";
    //alert("trocar texto");
    elemento.innerHTML = "Mouse passou aqui";
}

function voltar(elemento){
    //elemento.getElementById("mousemove").innerHTML =
    //"Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";

}

function load(){
    alert("pagina carregada");

}

function funcaoChange(elemento){
    console.log(elemento.value);
}