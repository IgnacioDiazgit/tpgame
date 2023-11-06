const boton_convertir = document.getElementById("boton_convertir");
const resultado = document.getElementById("resultado");
const boton_reset = document.getElementById("boton_reset");
const primer_valor = document.getElementById("primer_valor");








boton_convertir.addEventListener("click",function(){
  resultado.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
  resultado.style.opacity = "1";
  boton_reset.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
  boton_reset.style.opacity ="1";


})

boton_reset.addEventListener("click",function(){
  resultado.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
  resultado.style.opacity = "0";
  boton_reset.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
  boton_reset.style.opacity ="0";
  document.getElementById("primer_valor").value = "";
  primer_valor = "";
})