const cartas = {
    ac: { valor: 10, imagen: "./cartas/ac.jpg" },
    ap: { valor: 10, imagen: "./cartas/ap.jpg" },
    ad: { valor: 10, imagen: "./cartas/ad.jpg" },
    at: { valor: 10, imagen: "./cartas/at.jpg" },
    qc: { valor: 10, imagen: "./cartas/qc.jpg" },
    qd: { valor: 10, imagen: "./cartas/qd.jpg" },
    qt: { valor: 10, imagen: "./cartas/qt.jpg" },
    qp: { valor: 10, imagen: "./cartas/qp.jpg" },
    jc: { valor: 10, imagen: "./cartas/jc.jpg" },
    jt: { valor: 10, imagen: "./cartas/jt.jpg" },
    jp: { valor: 10, imagen: "./cartas/jp.jpg" },
    jd: { valor: 10, imagen: "./cartas/jd.jpg" },
    kc: { valor: 10, imagen: "./cartas/kc.jpg" },
    kp: { valor: 10, imagen: "./cartas/kp.jpg" },
    kt: { valor: 10, imagen: "./cartas/kt.jpg" },
    kd: { valor: 10, imagen: "./cartas/kd.jpg" },
    c2: { valor: 2, imagen: "./cartas/2c.jpg" },
    c3: { valor: 3, imagen: "./cartas/3c.jpg" },
    c4: { valor: 4, imagen: "./cartas/4c.jpg" },
    c5: { valor: 5, imagen: "./cartas/5c.jpg" },
    c6: { valor: 6, imagen: "./cartas/6c.jpg" },
    c7: { valor: 7, imagen: "./cartas/7c.jpg" },
    c8: { valor: 8, imagen: "./cartas/8c.jpg" },
    c9: { valor: 9, imagen: "./cartas/9c.jpg" },
    c10: { valor: 10, imagen: "./cartas/10c.jpg" },
    p2: { valor: 2, imagen: "./cartas/2p.jpg" },
    p3: { valor: 3, imagen: "./cartas/3p.jpg" },
    p4: { valor: 4, imagen: "./cartas/4p.jpg" },
    p5: { valor: 5, imagen: "./cartas/5p.jpg" },
    p6: { valor: 6, imagen: "./cartas/6p.jpg" },
    p7: { valor: 7, imagen: "./cartas/7p.jpg" },
    p8: { valor: 8, imagen: "./cartas/8p.jpg" },
    p9: { valor: 9, imagen: "./cartas/9p.jpg" },
    p10: { valor: 10, imagen: "./cartas/10p.jpg" },
    t2: { valor: 2, imagen: "./cartas/2t.jpg" },
    t3: { valor: 3, imagen: "./cartas/3t.jpg" },
    t4: { valor: 4, imagen: "./cartas/4t.jpg" },
    t5: { valor: 5, imagen: "./cartas/5t.jpg" },
    t6: { valor: 6, imagen: "./cartas/6t.jpg" },
    t7: { valor: 7, imagen: "./cartas/7t.jpg" },
    t8: { valor: 8, imagen: "./cartas/8t.jpg" },
    t9: { valor: 9, imagen: "./cartas/9t.jpg" },
    t10: { valor: 10, imagen: "./cartas/10t.jpg" },
    d2: { valor: 2, imagen: "./cartas/2d.jpg" },
    d3: { valor: 3, imagen: "./cartas/3d.jpg" },
    d4: { valor: 4, imagen: "./cartas/4d.jpg" },
    d5: { valor: 5, imagen: "./cartas/5d.jpg" },
    d6: { valor: 6, imagen: "./cartas/6d.jpg" },
    d7: { valor: 7, imagen: "./cartas/7d.jpg" },
    d8: { valor: 8, imagen: "./cartas/8d.jpg" },
    d9: { valor: 9, imagen: "./cartas/9d.jpg" },
    d10: { valor: 10, imagen: "./cartas/10d.jpg" },
};

let mano_player=[];
let mano_crupier = [];
let suma_player =0;
let suma_crupier = 0;





const baraja =["ac","c2","c3","c4","c5","c6","c7","c8","c9","c10","jc","qc","kc",
               "ad","d2","d3","d4","d5","d6","d7","d8","d9","d10","jd","qd","kd",
               "ap","p2","p3","p4","p5","p6","p7","p8","p9","p10","jp","qp","kp",
               "at","t2","t3","t4","t5","t6","t7","t8","t9","t10","jt","qt","kt",];

              
const botonstarbj = document.getElementById("botonstarbj");
const mesabj = document.getElementById("mesabj");
const divbj = document.getElementById("divbj");
const botonpedircarta = document.getElementById("botonpedircarta");
const botonplantarse = document.getElementById("botonplantarse");
const cerrarjuego = document.getElementById("cerrarjuego");
const mensajesuma = document.getElementById("mensajesuma");
const contenedorcartas = document.getElementById("contenedorcartas");
const cartasmesa = document.getElementById("cartasmesa");
const mensajemesa = document.getElementById("mensajemesa");
const reset = document.getElementById("reset");



  function cartasinicialesplayer(){
      for (let i = 0; i <= 1; i++) {
      let randomIndex = Math.floor(Math.random() * baraja.length);
      let carta = baraja.splice(randomIndex, 1)[0];
      mano_player.push(carta);
      }
                
     for (let i = 0; i <= 1; i++) {
     let randomIndex = Math.floor(Math.random() * baraja.length);
     let carta = baraja.splice(randomIndex, 1)[0];
     mano_crupier.push(carta);
                }
            }
            




function cartassumadas() {
    suma_player = 0;
    for (let i = 0; i < mano_player.length; i++) {
        const cartamano = mano_player[i];
        const valorcarta = cartas[cartamano].valor;
        suma_player += valorcarta;
        }
        const mensajesumadiv = document.getElementById("mensajesuma");
        const delay = 3500;
    
    if (suma_player > 21) {
        mensajesumadiv.textContent = "Llegaste a " + suma_player.toString() + " superando 21. Gamer Over"
        reset.style.transition = "opacity 1.5s ease-in-out, transform 0.3s ease";
        reset.style.opacity = "1";
        reset.style.cursor = "pointer";
        botonpedircarta.style.cursor = "default";
        botonpedircarta.style.opacity = "0";
        botonplantarse.style.cursor = "default";
        botonplantarse.style.opacity = "0";
    ;
    } else  if( suma_player < 21){
        mensajesumadiv.textContent =  "Llegaste a " + suma_player	.toString() + " ¿Quieres otra carta? o ¿prefieres plantarte?";
    }
    else if(suma_player === 21){
        mensajesumadiv.textContent =  "Llegaste a " + suma_player.toString() + " Deberias plantarte.";
    }

}

function cartas_sumadas_crupier(){
    suma_crupier = 0;
    for (let i = 0; i < mano_crupier.length; i++) {
        const cartamano = mano_crupier[i];
        const valorcarta = cartas[cartamano].valor;
        suma_crupier += valorcarta;
        }
}

function juego(){
    const mensajemesa = document.getElementById("mensajemesa");
    const delay = 3000;
   
        mensajemesa.textContent = "Mi total es " + suma_crupier.toString() ;

        if (suma_crupier > suma_player && suma_crupier < 21 && suma_crupier >= 17) {
            setTimeout(function () {
                mensajemesa.textContent = "La casa gana.";
            }, delay);  
        }else if ( suma_crupier > 21){
            mensajemesa.textContent = "Mi total es " + suma_crupier.toString()+" ganaste." ;}
        else if ( suma_crupier <= 16){
            setTimeout(function(){
                mensajemesa.textContent = "Pido otra carta."
            }, delay
            );
            pedir_carta_crupier();
            cartas_sumadas_crupier();
            
        }else if (suma_crupier >= 17 && suma_crupier < suma_player){
            setTimeout(function(){
                mensajemesa.textContent = "Mi total es "+ suma_crupier.toString()+" ya no puedo pedir mas cartas, ganaste."
            }, delay);
        }else if (suma_crupier === suma_player && suma_crupier >= 17){
            setTimeout(function(){
                mensajemesa.textContent = "Mi total es "+suma_crupier.toString()+" empatamos."
            },delay);
        }
        
        }
        function reiniciarJuego() {
            reset.style.opacity = "0";
            reset.style.cursor = "default";
            botonpedircarta.style.opacity = "1";
            botonpedircarta.style.cursor = "pointer";
            botonplantarse.style.opacity ="1";
            botonplantarse.style.cursor = "pointer";
    
            mano_player = [];
            mano_crupier = [];
            suma_player = 0;
            suma_crupier = 0;
            
            
            baraja.length = 0;
            baraja.push(
                "ac","c2","c3","c4","c5","c6","c7","c8","c9","c10","jc","qc","kc",
                "ad","d2","d3","d4","d5","d6","d7","d8","d9","d10","jd","qd","kd",
                "ap","p2","p3","p4","p5","p6","p7","p8","p9","p10","jp","qp","kp",
                "at","t2","t3","t4","t5","t6","t7","t8","t9","t10","jt","qt","kt"
            );}
    
    
    


                       /* Pedir carta adicional */


  function pedir_carta_player(){
   let randomcard = Math.floor(Math.random()* baraja.length);
   let nuevacarta = baraja.splice(randomcard, 1)[0];
   mano_player.push(nuevacarta);
  cartassumadas();
                    
}
function pedir_carta_crupier(){
    let randomcard = Math.floor(Math.random()*baraja.length);
    let nuevacarta_crupier = baraja.splice(randomcard, 1)[0];
    mano_crupier.push(nuevacarta_crupier);
    juego();
}

function mostrarCartas(){


    
}


                                                         /* iniciar el juego */



botonstarbj.addEventListener("click", function(){
    mesabj.style.transition = "opacity 1.5s ease-in-out";
    botonpedircarta.style.transition = "opacity 1.5s ease-in-out, transform 0.3s ease";
    botonplantarse.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    cerrarjuego.style.transition = "opacity 1.5s ease-in-out, transform 0.3s ease";
    mensajesuma.style.transition = "opacity 1.5s ease-in-out, transform 0.3s ease";
    contenedorcartas.style.transition = "opacity 1.5s ease-in-out, transform 0.3s ease";  
    contenedorcartas.style.opacity = "1";
    mensajesuma.style.cursor = "default";
    mensajesuma.style.opacity = "0.9";
    mesabj.style.opacity = "1";
    botonstarbj.style.opacity = "0";
    botonstarbj.style.cursor = "default";
    botonpedircarta.style.opacity = "0.9";
    botonpedircarta.style.cursor = "pointer";
    botonplantarse.style.opacity = "0.9";
    botonplantarse.style.cursor = "pointer";
    cerrarjuego.style.opacity = "0.9";
    cerrarjuego.style.cursor = "pointer";
    cartasinicialesplayer();
    cartassumadas();
   
} );

                                                              /* Cerrar juego */

cerrarjuego.addEventListener("click", function(){
    mesabj.style.opacity = "0";
    botonstarbj.style.opacity = "1";
    botonstarbj.style.cursor = "pointer";
    botonpedircarta.style.opacity = "0";
    botonpedircarta.style.cursor = "default";
    botonplantarse.style.opacity = "0";
    botonplantarse.style.cursor = "default";
    mensajesuma.style.opacity = "0";
    cerrarjuego.style.opacity = "0";
    contenedorcartas.style.opacity = "0";
    cartasmesa.style.opacity = "0";
    cerrarjuego.style.cursor = "default";
    mensajemesa.style.opacity = "0";
    reset.style.opacity = "0";
    reset.style.cursor = "default";
    mano_player = [];
    mano_crupier = [];
    suma_player = 0;
    suma_crupier = 0;
    
    
    baraja.length = 0;
    baraja.push(
        "ac","c2","c3","c4","c5","c6","c7","c8","c9","c10","jc","qc","kc",
        "ad","d2","d3","d4","d5","d6","d7","d8","d9","d10","jd","qd","kd",
        "ap","p2","p3","p4","p5","p6","p7","p8","p9","p10","jp","qp","kp",
        "at","t2","t3","t4","t5","t6","t7","t8","t9","t10","jt","qt","kt"
    )
})
                                                           /* Jugar */ 

botonpedircarta.addEventListener("click",function(){
    pedir_carta_player();
    cartassumadas();
});

botonplantarse.addEventListener("click",function(){
    cartasmesa.style.transition = "opacity 1.5s ease-in-out, transform 0.3s ease";
    mensajemesa.style.transition ="opacity 1.5s ease-in-out, transform 0.3s ease";
    mensajemesa.style.opacity = "1";
    cartasmesa.style.opacity = "1";
    botonpedircarta.style.opacity = "0";
    botonpedircarta.style.cursor = "default";
    botonplantarse.style.cursor = "default";
    botonplantarse.style.opacity = "0";
    reset.style.opacity = "1";
    reset.style.cursor = "pointer";
    cartas_sumadas_crupier();
    juego();
    
    


})
reset.addEventListener("click", function(){
    mensajemesa.style.opacity= "0";
    cartasmesa.style.opacity = "0";
    reiniciarJuego();
    cartasinicialesplayer();
    cartassumadas();
    




})


