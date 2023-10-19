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

let mano =[];
let manomesa = [];





const baraja =["ac","c2","c3","c4","c5","c6","c7","c8","c9","c10","jc","qc","kc",
               "ad","d2","d3","d4","d5","d6","d7","d8","d9","d10","jd","qd","kd",
               "ap","p2","p3","p4","p5","p6","p7","p8","p9","p10","jp","qp","kp",
               "at","t2","t3","t4","t5","t6","t7","t8","t9","t10","jt","qt","kt",];


function cartasinicialesplayer(){
    for (let i = 0; i<= 1; i++){
        let randomcard = Math.floor(Math.random()* baraja.length);
    
    mano.push(baraja[randomcard]);
}
for (let i = 0; i<= 1; i++){
    let randomcard = Math.floor(Math.random()* baraja.length);

manomesa.push(baraja[randomcard]);
}
 return mano;
}




function cartassumadas() {
    let sumatotal = 0;
    for (let i = 0; i < mano.length; i++) {
        const cartamano = mano[i];
        const valorcarta = cartas[cartamano].valor;
        sumatotal += valorcarta;
        }
        const mensajesumadiv = document.getElementById("mensajesuma");
    
    if (sumatotal > 21) {
        mensajesumadiv.textContent = "Llegaste a " + sumatotal.toString() + " superando 21. Gamer Over";
    } else  if( sumatotal < 21){
        mensajesumadiv.textContent =  "Llegaste a " + sumatotal.toString() + " ¿Quieres otra carta? o ¿prefieres plantarte?";
    }
    else if(sumatotal === 21){
        mensajesumadiv.textContent =  "Llegaste a " + sumatotal.toString() + " Deberias plantarte.";
    }
    if (sumatotal > 21){
        ac.valor = 1;
    } else if (sumatotal > 21){
        ad.valor = 1;
    }else if (sumatotal > 21){
        at.valor = 1;
    } else if (sumatotal > 21){
        ap.valor = 1;
    }
}


function juego(){
    let sumamanomesa = 0;
   
    for (let i = 0; i < manomesa.length; i++) {
        const cartamano = manomesa[i];
        const valorcarta = cartas[cartamano].valor;
        sumamanomesa += valorcarta;
        }const mensajemesa = document.getElementById("mensajemesa");

        mensajemesa.textContent = "Mi total es " + sumamanomesa.toString() ;

        while (sumamanomesa < sumatotal && sumamanomesa < 21){
        pedircarta();
        cartassumadas();
        mensajemesa.textContent = "Mi total es " + sumamanomesa.toString() + " pido otra carta.";
    }
    if (sumamanomesa > sumatotal && sumamanomesa < 21){
        mensajemesa.textContent = "Supere tus" + sumamanomesa.toString() + " yo gano. Gamer Over";
    } else if (sumamanomesa === sumatotal){
        mensajemesa.textContent = "Empatamos con " + sumamanomesa.toString() + ". Gamer Over";
        
    }

}

                       /* Pedir carta adicional */


  function pedircarta(){
   let randomcard = Math.floor(Math.random()* baraja.length);
  mano.push(baraja[randomcard]);
  cartassumadas();
                    
}

function mostrarCartas(){


    
}


                                                         /* iniciar el juego */


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
})
                                                           /* Jugar */ 

botonpedircarta.addEventListener("click",function(){
    pedircarta();
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
    juego();
    
    


})


