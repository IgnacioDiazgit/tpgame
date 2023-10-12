


                                                 /*  BlackJack   */

                                                 
const A = 1;
const J = 10;
const Q = 11;
const K = 12;
const baraja =[A,2,3,4,5,6,7,8,9,J,Q,K];
let primeras2 =[];

function cartasinicialesplayer(){
    for (let i = 1; i<= 2; i++){
        let randomcard = Math.floor(Math.random()* baraja.length);
    
    primeras2.push(baraja[randomcard]);
}
 return primeras2;
}



function pedircarta(){
    let randomcard = Math.floor(Math.random()* baraja.length);
    primeras2.push(baraja[randomcard]);

}
 
cartasinicialesplayer();
pedircarta();

console.log(primeras2);



