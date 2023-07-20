document.addEventListener("DOMContentLoaded",function(){
    window.onscroll = function() {
        const icon=document.getElementById("icon-scroll");
        const hero=document.getElementById("hero");

        const tamanoHero=hero.getBoundingClientRect();//aqui tomo el tamano del hero en relacion a la pantalla
        if(tamanoHero.top >=0 ){
            icon.style.display = "none";
        }
        else{
            icon.style.display = "block";
        }
    };
})
