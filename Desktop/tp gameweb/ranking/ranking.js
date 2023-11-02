const boton_ranking_ppt = document.getElementById("boton_ranking_ppt");
const boton_ranking_pr = document.getElementById("boton_ranking_pr");
const boton_ranking_bj = document.getElementById("boton_ranking_bj");
const divranking_bj = document.getElementById("divranking_bj");
const divranking_ppt = document.getElementById("divranking_ppt");
const divranking_pr = document.getElementById("divranking_pr");



boton_ranking_bj.addEventListener("click",function(){

    divranking_bj.style.transition = "opacity 1s ease-in-out, transform 0.3s ease";
    divranking_bj.style.opacity = "1";
    divranking_ppt.style.opacity = "0";
    divranking_pr.style.opacity = "0";

})
boton_ranking_ppt.addEventListener("click",function(){

    divranking_ppt.style.transition = "opacity 1s ease-in-out, transform 0.3s ease";
    divranking_ppt.style.opacity = "1";
    divranking_pr.style.opacity = "0";
    divranking_bj.style.opacity = "0";

})
boton_ranking_pr.addEventListener("click",function(){

    divranking_pr.style.transition = "opacity 1s ease-in-out, transform 0.3s ease";
    divranking_pr.style.opacity = "1";
    divranking_bj.style.opacity = "0";
    divranking_ppt.style.opacity = "0";

})