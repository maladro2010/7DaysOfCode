var buttonNavToggle = document.getElementById("nav--toggle");

buttonNavToggle.addEventListener("click", function(){
    var cabecalhoNav = document.getElementById("menu");

    cabecalhoNav.classList.toggle("hide");
});