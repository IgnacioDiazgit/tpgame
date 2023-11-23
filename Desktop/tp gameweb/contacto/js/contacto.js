const contenedor_formulario = document.getElementById("contenedor_formulario");
const enviar_mensaje = document.getElementById("enviar_mensaje");
const mensaje_recibido = document.getElementById("mensaje_recibido");
const volver_mensaje = document.getElementById("volver_mensaje");


enviar_mensaje.addEventListener("click",function(){
    contenedor_formulario.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    contenedor_formulario.style.opacity = "0";
    mensaje_recibido.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    mensaje_recibido.style.opacity = "1";
    enviar_mensaje.style.cursor = "default";
   
})
volver_mensaje.addEventListener("click", function(){
    contenedor_formulario.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    contenedor_formulario.style.opacity = "1";
    mensaje_recibido.style.transition = "opacity 1.5s ease-in-out,transform 0.3s ease";
    mensaje_recibido.style.opacity = "0";
    enviar_mensaje.style.cursor = "pointer";
})