
             
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
const una_jugada = document.getElementById("una_jugada");
const mejor_de_tres = document.getElementById("mejor_de_tres");
const mejor_de_cinco = document.getElementById ("mejor_de_cinco");
const imgppt_player = document.getElementById("imgppt_player");
const imgppt_compu = document.getElementById("imgppt_compu");
const piedra_img = document.getElementById("piedra_img");
const tijera_img = document.getElementById("tijeras_img");
const papel_img = document.getElementById("papel_img");
const piedra_img_pc = document.getElementById("piedra_img_pc");
const papel_img_pc = document.getElementById("papel_img_pc");
const tijeras_img_pc = document.getElementById("tijeras_img_pc");
const score_pc_total = document.getElementById("score_pc_total");
const score_player_total = document.getElementById("score_player_total");
const score_player = document.getElementById("score_player");
const score_pc = document.getElementById("score_pc");
const numero_rondas = document.getElementById("numero_rondas");
const rondas = document.getElementById("rondas");


   
             /* Piedra Papel Tijera */


const ppt = ["piedra","papel","tijera"];
let ppt_pc = "";
let ppt_playerr = "";
let puntaje_ppt_player = 0;
let puntaje_ppt_pc = 0;
let rondas_ppt = 0;
let modo_ppt = "";
boton_tijera.disabled = true;
boton_papel.disabled = true;
boton_piedra.disabled = true;
resetppt.disabled = true;
una_jugada.disabled = true;
mejor_de_cinco.disabled = true;
mejor_de_tres.disabled = true;



function randompc(){
    let randompick = Math.floor(Math.random()*ppt.length);
    ppt_pc = ppt[randompick];

}
function juego_ppt(){
    randompc();
    const mensajeppt = document.getElementById("mensajeppt");
    piedra_img_pc.style.opacity = "0";
    tijeras_img_pc.style.opacity ="0";
    papel_img_pc.style.opacity ="0";
    score_player_total.textContent = "  :   "+ puntaje_ppt_player;
    score_pc_total.textContent = "  :   "+ puntaje_ppt_pc;
    numero_rondas.textContent = " :  "+ rondas_ppt;
    if (rondas_ppt === 9999999999){
        borrar_todo_gameover();
    }


    if ( ppt_playerr === ppt_pc) {
        mensajeppt.textContent = "Ambos elejimos "+ ppt_pc+" esto es un empate. ";
        

    }else if (ppt_playerr === "piedra" && ppt_pc === "tijera" ){
        mensajeppt.textContent = "Sacaste  piedra y yo tijeras. Ganaste.";
        puntaje_ppt_player +=1;
        score_player_total.textContent = "  :   "+ puntaje_ppt_player;
    
    }else if (ppt_playerr === "piedra" && ppt_pc === "papel"){
        mensajeppt.textContent = "Sacaste piedra y yo papel. Gane.";
        puntaje_ppt_pc += 1;
        score_pc_total.textContent = "  :   "+ puntaje_ppt_pc;

    }else if (ppt_playerr === "papel" && ppt_pc === "tijera"){
        mensajeppt.textContent = "Sacaste papel y yo tijeras. Gane.";
        puntaje_ppt_pc += 1;
        score_pc_total.textContent = " :   "+ puntaje_ppt_pc;

    }else if (ppt_playerr === "papel" && ppt_pc === "piedra"){
        mensajeppt.textContent = "Sacaste papel y yo piedra. Ganaste.";
        puntaje_ppt_player +=1;
        score_player_total.textContent = "  :  "+ puntaje_ppt_player;

    }else if (ppt_playerr === "tijera" && ppt_pc === "piedra"){
        mensajeppt.textContent = "Sacaste tijeras y yo piedra. Gane.";
        puntaje_ppt_pc += 1;
        score_pc_total.textContent = "  :   "+ puntaje_ppt_pc;

    }else if (ppt_playerr === "tijera" && ppt_pc === "papel"){
        mensajeppt.textContent = "Sacaste tijeras y yo papel. Ganaste.";
        puntaje_ppt_player +=1;
        score_player_total.textContent = "  :   "+ puntaje_ppt_player;

    }

    if (ppt_pc === "piedra"){
        piedra_img_pc.style.opacity = "1";
    }else if (ppt_pc === "tijera"){
        tijeras_img_pc.style.opacity ="1";
    }else if (ppt_pc === "papel"){
        papel_img_pc.style.opacity ="1";
    }

}

                            /* mejor de 3 */
function juegoppt_mejor3(){
    randompc();
    const mensajeppt = document.getElementById("mensajeppt");
    piedra_img_pc.style.opacity = "0";
    tijeras_img_pc.style.opacity ="0";
    papel_img_pc.style.opacity ="0";
    score_player_total.textContent = "  :   "+ puntaje_ppt_player;
    score_pc_total.textContent = "  :   "+ puntaje_ppt_pc;
    
    numero_rondas.textContent = " : " + rondas_ppt;

    if (rondas_ppt === 3 && puntaje_ppt_player < puntaje_ppt_pc){
        mensajeppt.textContent = "Game Over... Yo  Gano!!!";
        borrar_todo_gameover();

    }
    else if ( rondas_ppt === 3 && puntaje_ppt_player > puntaje_ppt_pc){
        mensajeppt.textContent = "Esta vez tu ganas....";
        borrar_todo_gameover();
        
    }else if (rondas_ppt === 3 && puntaje_ppt_player === puntaje_ppt_pc){
        mensajeppt.textContent = "Empatamos... ";
        borrar_todo_gameover();
    }
    
    

    if ( ppt_playerr === ppt_pc) {
        mensajeppt.textContent = "Los dos elegimos "+ ppt_pc+" esto es un empate.... ";
        

    }else if (ppt_playerr === "piedra" && ppt_pc === "tijera" ){
        mensajeppt.textContent = "Tu ganas este punto...";
        puntaje_ppt_player += 1;
        score_player_total.textContent = "  :   "+ puntaje_ppt_player;
        
    
    }else if (ppt_playerr === "piedra" && ppt_pc === "papel"){
        mensajeppt.textContent = "Yo gano este punto!";
        puntaje_ppt_pc += 1;
        score_pc_total.textContent = "  :   "+ puntaje_ppt_pc;
        

    }else if (ppt_playerr === "papel" && ppt_pc === "tijera"){
        mensajeppt.textContent = "Yo gano este punto!";
        puntaje_ppt_pc += 1;
        score_pc_total.textContent = "  :   "+ puntaje_ppt_pc;
        

    }else if (ppt_playerr === "papel" && ppt_pc === "piedra"){
        mensajeppt.textContent = "Tu ganas este punto...";
        puntaje_ppt_player += 1;
        score_player_total.textContent = "  :   "+ puntaje_ppt_player;
        

    }else if (ppt_playerr === "tijera" && ppt_pc === "piedra"){
        mensajeppt.textContent = "Yo gano este punto!";
        puntaje_ppt_pc += 1;
        score_pc_total.textContent = "  :   "+ puntaje_ppt_pc;
        

    }else if (ppt_playerr === "tijera" && ppt_pc === "papel"){
        mensajeppt.textContent = "Tu ganas este punto...";
        puntaje_ppt_player += 1;
        score_player_total.textContent = "  :   "+ puntaje_ppt_player;
        

    }

    if (ppt_pc === "piedra"){
        piedra_img_pc.style.opacity = "1";
    }else if (ppt_pc === "tijera"){
        tijeras_img_pc.style.opacity ="1";
    }else if (ppt_pc === "papel"){
        papel_img_pc.style.opacity ="1";
    }
    

}function juegoppt_mejor5(){
    randompc();
    piedra_img_pc.style.opacity = "0";
    tijeras_img_pc.style.opacity ="0";
    papel_img_pc.style.opacity ="0";
    score_player_total.textContent = "  :   "+ puntaje_ppt_player;
    score_pc_total.textContent = "  :   "+ puntaje_ppt_pc;
    numero_rondas.textContent = " : " + rondas_ppt;

    if (rondas_ppt === 5 && puntaje_ppt_player < puntaje_ppt_pc){
        mensajeppt.textContent = "Game Over... Yo  Gano!!!";
        borrar_todo_gameover();

    }
    else if ( rondas_ppt === 5 && puntaje_ppt_player > puntaje_ppt_pc){
        mensajeppt.textContent = "Esta vez tu ganas....";
        borrar_todo_gameover();
        
    }else if (rondas_ppt === 5 && puntaje_ppt_player === puntaje_ppt_pc){
        mensajeppt.textContent = "Empatamos... ";
        borrar_todo_gameover();
    }

    if ( ppt_playerr === ppt_pc) {
        mensajeppt.textContent = "Los dos elegimos "+ ppt_pc+" esto es un empate.... ";
      

    }else if (ppt_playerr === "piedra" && ppt_pc === "tijera" ){
        mensajeppt.textContent = "Tu ganas este punto...";
        puntaje_ppt_player += 1;
        score_player_total.textContent = "  :   "+ puntaje_ppt_player;
    
    }else if (ppt_playerr === "piedra" && ppt_pc === "papel"){
        mensajeppt.textContent = "Yo gano este punto!";
        puntaje_ppt_pc += 1; 
        score_pc_total.textContent = "  :   "+ puntaje_ppt_pc;

    }else if (ppt_playerr === "papel" && ppt_pc === "tijera"){
        mensajeppt.textContent = "Yo gano este punto!";
        puntaje_ppt_pc += 1;
        score_pc_total.textContent = "  :   "+ puntaje_ppt_pc;

    }else if (ppt_playerr === "papel" && ppt_pc === "piedra"){
        mensajeppt.textContent = "Tu ganas este punto...";
        puntaje_ppt_player += 1;
        score_player_total.textContent = "  :   "+ puntaje_ppt_player;

    }else if (ppt_playerr === "tijera" && ppt_pc === "piedra"){
        mensajeppt.textContent = "Yo gano este punto!";
        puntaje_ppt_pc += 1;
        score_pc_total.textContent = "  :   "+ puntaje_ppt_pc;

    }else if (ppt_playerr === "tijera" && ppt_pc === "papel"){
        mensajeppt.textContent = "Tu ganas este punto...";
        puntaje_ppt_player += 1;
        score_player_total.textContent = "  :   "+ puntaje_ppt_player;

    }

    if (ppt_pc === "piedra"){
        piedra_img_pc.style.opacity = "1";
    }else if (ppt_pc === "tijera"){
        tijeras_img_pc.style.opacity ="1";
    }else if (ppt_pc === "papel"){
        papel_img_pc.style.opacity ="1";
    }

}



                /* modos de juego */
function modo_de_juego(){
    if ( modo_ppt === "mejor_de_tres"){
        boton_piedra.removeEventListener("click", juego_ppt);
        boton_piedra.addEventListener("click", juegoppt_mejor3);
        boton_piedra.removeEventListener("click",juegoppt_mejor5)

        boton_papel.removeEventListener("click", juego_ppt);
        boton_papel.addEventListener("click", juegoppt_mejor3);
        boton_papel.removeEventListener("click",juegoppt_mejor5)

        boton_tijera.removeEventListener("click", juego_ppt);
        boton_tijera.addEventListener("click", juegoppt_mejor3);
        boton_tijera.removeEventListener("click",juegoppt_mejor5);
    }else if ( modo_ppt === "libre"){
        boton_piedra.removeEventListener("click", juegoppt_mejor3);
        boton_piedra.addEventListener("click", juego_ppt);
        boton_papel.removeEventListener("click",juegoppt_mejor5)

        boton_papel.removeEventListener("click", juegoppt_mejor3);
        boton_papel.addEventListener("click", juego_ppt);
        boton_papel.removeEventListener("click",juegoppt_mejor5)

        boton_tijera.removeEventListener("click", juegoppt_mejor3);
        boton_tijera.addEventListener("click", juego_ppt);
        boton_tijera.removeEventListener("click",juegoppt_mejor5);

    }else if (modo_ppt === "mejor_de_cinco"){
        boton_piedra.removeEventListener("click", juegoppt_mejor3);
        boton_piedra.removeEventListener("click", juego_ppt);
        boton_piedra.addEventListener("click",juegoppt_mejor5)

        boton_papel.removeEventListener("click", juegoppt_mejor3);
        boton_papel.removeEventListener("click", juego_ppt);
        boton_papel.addEventListener("click",juegoppt_mejor5)

        boton_tijera.removeEventListener("click", juegoppt_mejor3);
        boton_tijera.removeEventListener("click", juego_ppt);
        boton_tijera.addEventListener("click",juegoppt_mejor5);

    }
}
   
           /* botonera */

botonstarppt.addEventListener("click",function(){
    mostrar_botones_jugadas()
    botonstarppt.style.opacity = "0";
    botonstarppt.style.cursor = "default";
    divpiedrapapeltijera.style.transition = "opacity 1s ease-in-out,transform 0.3s ease";
    divpiedrapapeltijera.style.opacity = "0";
    fondoppt.style.transition = "opacity 1s ease-in-out,transform 0.3s ease";
    fondoppt.style.opacity ="1";

}) 
cerrar_juego.addEventListener("click",function(){
    botonstarppt.style.opacity = "1";
    botonstarppt.style.cursor = "pointer";
    borrar_botones_ppt();
    divpiedrapapeltijera.style.opacity = "1";
    cerrar_juego.style.opacity = "0";
    cerrar_juego.style.cursor = "default";
    resetppt.style.opacity = "0";
    resetppt.style.cursor = "default";
    fondoppt.style.opacity ="0";
    mensajeppt.textContent = "";
    mensajeppt.style.opacity = "0";
    imgvsppt.style.opacity = "0";
    imgvsppt.style.zIndex = "0";
    imgppt_compu.style.opacity= "0";
    imgppt_player.style.opacity= "0";
    borrar_botones_jugadas();
    ppt_playerr = "";
    ppt_pc = "";
    reset_score();
    modo_ppt = "";
    borrar_score();
    score_player_total.textContent = "  :   "+ puntaje_ppt_player;
    score_pc_total.textContent = "  :   "+ puntaje_ppt_pc;
    boton_jugadas_off();
   

})
resetppt.addEventListener("click",function(){
    ppt_playerr = "";
    ppt_pc = "";
    modo_ppt = "";
    reset_score();
    score_player_total.textContent = "  :   "+ puntaje_ppt_player;
    score_pc_total.textContent = "  :   "+ puntaje_ppt_pc;
    numero_rondas.textContent = " : "+ rondas_ppt;
    mensajeppt.textContent = "";
    mensajeppt.style.opacity = "0";
    imgvsppt.style.opacity = "0";
    imgvsppt.style.zIndex = "0";
    imgppt_compu.style.opacity= "0";
    imgppt_player.style.opacity= "0";
    mostrar_botones_jugadas();
    resetppt.style.opacity = "0";
    borrar_botones_ppt();
    borrar_score();
    boton_ppt_off();
})

boton_papel.addEventListener("click",function(){
    ppt_playerr = "papel";
    reset_jugada_visual();
    papel_img.transition = "opacity 1s ease-in-out, transform 0.3s ease";
    papel_img.style.opacity ="1";
    rondas_ppt += 1;

    

})
boton_piedra.addEventListener("click",function(){
    ppt_playerr = "piedra";
    reset_jugada_visual();
    piedra_img.transition = "opacity 1s ease-in-out, transform 0.3s ease";
    piedra_img.style.opacity ="1";
    rondas_ppt += 1;


})
boton_tijera.addEventListener("click",function(){
    ppt_playerr = "tijera";
    reset_jugada_visual();
    tijera_img.transition = "opacity 1s ease-in-out, transform 0.3s ease";
    tijera_img.style.opacity ="1";
    rondas_ppt += 1;

})





una_jugada.addEventListener("click", function(){
    modo_ppt = "libre";
    reset_score();
    borrar_botones_jugadas();
    mostrar_botones_ppt();
    modo_de_juego()
    animacion_inicio();
    mostrar_score();
    boton_ppt_on();
    boton_jugadas_off();
})
    mejor_de_cinco.addEventListener("click", function(){
    modo_ppt = "mejor_de_cinco";
    reset_score();
    borrar_botones_jugadas();
    mostrar_botones_ppt();
    modo_de_juego();
    animacion_inicio();
    mostrar_score();
    boton_ppt_on();
    boton_jugadas_off();
})
    mejor_de_tres.addEventListener("click", function(){
    modo_ppt = "mejor_de_tres";
    reset_score();
    borrar_botones_jugadas();
    mostrar_botones_ppt();
    modo_de_juego();
    animacion_inicio();
    mostrar_score();
    boton_ppt_on();
    boton_jugadas_off();
})

function mostrar_botones_ppt(){
    boton_piedra.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    boton_piedra.style.opacity = "1";
    boton_piedra.style.cursor = "pointer";
    boton_papel.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    boton_papel.style.cursor = "pointer";
    boton_papel.style.opacity = "1";
    boton_tijera.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    boton_tijera.style.opacity = "1";
    boton_tijera.style.cursor = "pointer";

    cerrar_juego.style.transition = "opacity 1s ease-in-out,transform 0.3s ease";
    cerrar_juego.style.opacity = "1";
    cerrar_juego.style.cursor = "pointer";

    resetppt.style.transition = "opacity 1s ease-in-out,transform 0.3s ease";
    resetppt.style.cursor = "pointer";
    resetppt.style.opacity = "1";
   
}
function borrar_botones_ppt(){
    boton_piedra.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    boton_piedra.style.opacity = "0";
    boton_piedra.style.cursor = "default";
    boton_papel.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    boton_papel.style.cursor = "default";
    boton_papel.style.opacity = "0";
    boton_tijera.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    boton_tijera.style.opacity = "0";
    boton_tijera.style.cursor = "default";
    boton_tijera.disabled = false;
    boton_papel.disabled = false;
    boton_piedra.disabled = false;

}
function borrar_botones_jugadas(){
    una_jugada.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    una_jugada.style.opacity = "0";
    una_jugada.style.cursor = "default";
    una_jugada.style.zIndex = "0";

    mejor_de_tres.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    mejor_de_tres.style.opacity = "0";
    mejor_de_tres.style.cursor = "default";
    mejor_de_tres.style.zIndex = "0";

    mejor_de_cinco.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    mejor_de_cinco.style.opacity = "0";
    mejor_de_cinco.style.cursor = "default";
    mejor_de_cinco.style.zIndex = "0";
}
function mostrar_botones_jugadas(){
    una_jugada.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    una_jugada.style.opacity = "1";
    una_jugada.style.cursor = "pointer";
    una_jugada.style.zIndex = "11";

    mejor_de_tres.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    mejor_de_tres.style.opacity = "1";
    mejor_de_tres.style.cursor = "pointer";
    mejor_de_tres.style.zIndex = "11";

    mejor_de_cinco.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    mejor_de_cinco.style.opacity = "1";
    mejor_de_cinco.style.cursor = "pointer";
    mejor_de_cinco.style.zIndex = "11";
}
function reset_jugada_visual(){
    piedra_img.style.opacity ="0";
    tijera_img.style.opacity ="0";
    papel_img.style.opacity ="0";
    mensajeppt.style.transition = "opacity 1s ease-in-out, transform 0.3ease";
    mensajeppt.style.opacity = "1";
    imgvsppt.style.transition = "opacity 1s ease-in-out, transform 0.3s ease";
    imgvsppt.style.opacity = "1";
    imgvsppt.style.zIndex = "3";
    imgppt_player.style.transition = "opacity 1s ease-in-out, transform 0.3s ease";
    imgppt_player.style.opacity = "1";
    imgppt_compu.style.transition = "opacity 1s ease-in-out, transform 0.3s ease";
    imgppt_compu.style.opacity = "1"

}



function borrar_score(){
    score_pc.style.transition = "opacity 1s ease-in-out, transform 0.3s ease";
    score_pc.style.opacity = "0";
    score_player.style.transition = "opacity 1s ease-in-out, transform 0.3s ease";
    score_player.style.opacity = "0";
    rondas.style.transition = "opacity 1s ease-in-out, transform 0.3s ease";
    rondas.style.opacity= "0" 


}
function mostrar_score(){
    score_pc.style.transition = "opacity 1s ease-in-out, transform 0.3s ease";
    score_pc.style.opacity = "1";
    score_player.style.transition = "opacity 1s ease-in-out, transform 0.3s ease";
    score_player.style.opacity = "1"; 
    rondas.style.transition = "opacity 1s ease-in-out, transform 0.3s ease";
    rondas.style.opacity= "1";

}

function borrar_todo_gameover(){
        boton_piedra.style.opacity = "0";
        boton_piedra.style.cursor = "default";
        boton_piedra.disabled = true;
        boton_papel.style.cursor = "default";
        boton_papel.style.opacity = "0";
        boton_papel.disabled = true;
        boton_tijera.style.opacity = "0";
        boton_tijera.style.cursor = "default";
        boton_tijera.disabled = true;
    }
function boton_ppt_off(){
    boton_tijera.disabled = true;
boton_papel.disabled = true;
boton_piedra.disabled = true;
resetppt.disabled = true;
}
function boton_ppt_on(){
    boton_tijera.disabled = false;
    boton_papel.disabled = false;
    boton_piedra.disabled = false;
    resetppt.disabled = false;
    
}

function boton_jugadas_on(){
    una_jugada.disabled = false;
    mejor_de_cinco.disabled = false;
    mejor_de_tres.disabled = false;
}
function boton_jugadas_off(){
    una_jugada.disabled = true;
    mejor_de_cinco.disabled = true;
    mejor_de_tres.disabled = true;
}

function reset_score(){
    puntaje_ppt_player = 0;
    puntaje_ppt_pc = 0;
    rondas_ppt = 0;
}




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
    













