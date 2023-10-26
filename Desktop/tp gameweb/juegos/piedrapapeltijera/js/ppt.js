
             
                       /* globales */
const boton_piedra = document.getElementById("boton_piedra");
const boton_tijera = document.getElementById("boton_tijera");
const boton_papel = document.getElementById("boton_papel");
const botonstarppt = document.getElementById("botonstarppt");
const ppt_player = document.getElementById("ppt_player");
const ppt_bot = document.getElementById("ppt_bot");
const divpiedrapapeltijera = document.getElementById("divpiedrapapeltijera");
const cerrar_juego = document.getElementById("cerrar_juego");
const reset = document.getElementById("reset");








             
             
             
             
             
             
             
             /* Piedra Papel Tijera */


const ppt = ["piedra","papel","tijera"];
const pptpc = [];



function randompc(){
    let randompick = Math.floor(Math.random()*ppt.length);
    pptpc.push(ppt[randompick]);

}

   
           /* botonera */

botonstarppt.addEventListener("click",function(){
    botonstarppt.style.opacity = "0";
    botonstarppt.style.cursor = "default";
    boton_piedra.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    boton_piedra.style.opacity = "1";
    boton_piedra.style.cursor = "pointer";
    boton_papel.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    boton_papel.style.cursor = "pointer";
    boton_papel.style.opacity = "1";
    boton_tijera.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    boton_tijera.style.opacity = "1";
    boton_tijera.style.cursor = "pointer";
    divpiedrapapeltijera.style.transition = "opacity 1s ease-in-out,transform 0.3s ease";
    divpiedrapapeltijera.style.opacity = "0";
    cerrar_juego.style.transition = "opacity 1s ease-in-out,transform 0.3s ease";
    cerrar_juego.style.opacity = "1";
    cerrar_juego.style.cursor = "pointer";
    reset.style.transition = "opacity 1s ease-in-out,transform 0.3s ease";
    reset.style.cursor = "pointer";
    reset.style.opacity = "1";


}) 
cerrar_juego.addEventListener("click",function(){
    botonstarppt.style.opacity = "1";
    botonstarppt.style.cursor = "pointer";
    boton_piedra.style.opacity = "0";
    boton_piedra.style.cursor = "default";
    boton_papel.style.cursor = "default";
    boton_papel.style.opacity = "0";
    boton_tijera.style.opacity = "0";
    divpiedrapapeltijera.style.opacity = "1";
    cerrar_juego.style.opacity = "0";
    cerrar_juego.style.cursor = "default";
    reset.style.opacity = "0";
    reset.style.cursor = "default";

})
