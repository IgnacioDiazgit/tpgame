
             
                       /* globales */
const boton_piedra = document.getElementById("boton_piedra");
const boton_tijera = document.getElementById("boton_tijera");
const boton_papel = document.getElementById("boton_papel");
const botonstarppt = document.getElementById("botonstarppt");
const ppt_player = document.getElementById("ppt_player");
const ppt_bot = document.getElementById("ppt_bot");
const divpiedrapapeltijera = document.getElementById("divpiedrapapeltijera");
const cerrar_juego = document.getElementById("cerrar_juego");
const resetppt = document.getElementById("resetppt");
const divgameppt= document.getElementById("divgame");
const fondoppt = document.getElementById("fondoppt");
const mensajeppt = document.getElementById("mensajeppt");

const imgppt_player = document.getElementById("imgppt_player");
const imgppt_pc = document.getElementById("imgppt_pc");










             
             
             
             
             
             
             
             /* Piedra Papel Tijera */


const ppt = ["piedra","papel","tijera"];
let ppt_pc = "";
let ppt_playerr = "";




function randompc(){
    let randompick = Math.floor(Math.random()*ppt.length);
    ppt_pc = ppt[randompick];

}
function juego_ppt(){
    randompc();
    const mensajeppt = document.getElementById("mensajeppt");


    if ( ppt_playerr === ppt_pc) {
        mensajeppt.textContent = "Ambos elejimos "+ ppt_pc+" esto es un empate. ";

    }else if (ppt_playerr === "piedra" && ppt_pc === "tijera" ){
        mensajeppt.textContent = "Sacaste  piedra y yo tijeras. Ganaste.";
    
    }else if (ppt_playerr === "piedra" && ppt_pc === "papel"){
        mensajeppt.textContent = "Sacaste piedra y yo papel. Gane.";

    }else if (ppt_playerr === "papel" && ppt_pc === "tijera"){
        mensajeppt.textContent = "Sacaste papel y yo tijeras. Gane.";

    }else if (ppt_playerr === "papel" && ppt_pc === "piedra"){
        mensajeppt.textContent = "Sacaste papel y yo piedra. Ganaste.";

    }else if (ppt_playerr === "tijera" && ppt_pc === "piedra"){
        mensajeppt.textContent = "Sacaste tijeras y yo piedra. Gane.";

    }else if (ppt_playerr === "tijera" && ppt_pc === "papel"){
        mensajeppt.textContent = "Sacaste tijeras y yo papel. Ganaste.";

    }

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
    resetppt.style.transition = "opacity 1s ease-in-out,transform 0.3s ease";
    resetppt.style.cursor = "pointer";
    resetppt.style.opacity = "1";
    fondoppt.style.transition = "opacity 1s ease-in-out,transform 0.3s ease";
    fondoppt.style.opacity ="1";

   
    animacion_inicio();


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
    resetppt.style.opacity = "0";
    resetppt.style.cursor = "default";
    fondoppt.style.opacity ="0";
    ppt_playerr = "";
    ppt_pc = "";
    mensajeppt.textContent = "";
    mensajeppt.style.opacity = "0";


})
resetppt.addEventListener("click",function(){
    ppt_playerr = "";
    ppt_pc = "";
    mensajeppt.textContent = "";
    mensajeppt.style.opacity = "0";
})

boton_papel.addEventListener("click",function(){
    ppt_playerr = "papel";
    imgvsppt.style.transition = "opacity 1s ease-in-out,transform 0.3s ease";
    imgvsppt.style.opacity = "1";
    mensajeppt.style.transition = "opacity 1s ease-in-out,transform 0.3s ease";
    mensajeppt.style.opacity = "0.8";
    juego_ppt();
})
boton_piedra.addEventListener("click",function(){
    ppt_playerr = "piedra";
    imgvsppt.style.transition = "opacity 1s ease-in-out, transform 0.3ease";
    imgvsppt.style.opacity ="1";
    mensajeppt.style.transition = "opacity 1s ease-in-out, transform 0.3ease";
    mensajeppt.style.opacity = "1";
    juego_ppt();
})
boton_tijera.addEventListener("click",function(){
    ppt_playerr = "tijera";
    imgvsppt.style.transition = "opacity 1s ease-in-out, transform 0.3ease";
    imgvsppt.style.opacity ="1";
    mensajeppt.style.transition = "opacity 1s ease-in-out, transform 0.3ease";
    mensajeppt.style.opacity = "1";
    juego_ppt();
})



                                         /* animaciones */ 

function animacion_inicio(){
    boton_piedra.style.animationName = "caida_piedra";
    boton_piedra.style.animationDuration = "2.4s";
    boton_papel.style.animationName = "caida_papel";
    boton_papel.style.animationDuration = "2.4s";
    boton_tijera.style.animationName ="caida_tijera";
    boton_tijera.style.animationDuration = "2.4s";
    resetppt.style.animationName = "caida_piedra";
    resetppt.style.animationDuration = "2.8s";
    cerrar_juego.style.animationName = "caida_piedra";
    cerrar_juego.style.animationDuration = "2.4s";

}