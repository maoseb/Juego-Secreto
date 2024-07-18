let numeroSecreto = 0;
let intentos = 0;
let listaDeLosnumerosSorteados =[];
let numeroMaximo = 500

//console.log(numeroSecreto);

function condicionesGenerales () {
  asignarTextoElementos("h1", "juego del numero secreto");
  asignarTextoElementos("p",`Digita un numero entre 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  
}

function asignarTextoElementos(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

asignarTextoElementos("h1", "Adivine el número");
asignarTextoElementos("p",`Digita un numero entre 1 al ${numeroMaximo}`);


/* parte para la vesion inicial para llamar a cada uno de los titulos o subtitulos 
let titulo = document.querySelector("h1");
titulo.innerHTML = ("Juego de Mariana");

let parrafo = document.querySelector("p");
parrafo.innerHTML = ("Digita un numero entre 1 al 10");
*/

function generarNumeroSecreto() {

  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
console.log(numeroGenerado);
console.log(listaDeLosnumerosSorteados);
//si el numero generado esta en la lista
if (listaDeLosnumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
}else {
  listaDeLosnumerosSorteados.push(numeroGenerado);
}
    return numeroGenerado;   
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    //el console.log(type()) es para saber que tipo son mis datos (string-number o boleano)
    //console.log(typeof(numeroSecreto))
    //console.log(numeroDeUsuario);
    if(numeroDeUsuario === numeroSecreto) {
      asignarTextoElementos("p",`Acerto el numero secreto en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
      document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
      if(numeroDeUsuario > numeroSecreto) {
        asignarTextoElementos("p","El numero secreto es menor");
      }else{
        asignarTextoElementos("p","El numero secreto es mayor");
      }

      intentos++;
      limpiarCaja();
    }
    return;
} 

function limpiarCaja() {
document.querySelector("#valorUsuario").value = ""

}



function reiniciarJuego() {
// limpiar el juego
limpiarCaja();
// intentos
//mensaje de inicio
// numero secreto
condicionesGenerales();
//desactivar boton
document.querySelector("#reiniciar").setAttribute("disabled","true");


}

condicionesGenerales();
