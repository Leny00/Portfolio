document.addEventListener("DOMContentLoaded",function(){
    window.onscroll = function() {
        const icon=document.getElementById("icon-scroll");
        const hero=document.getElementById("hero");

        const tamanoHero=hero.getBoundingClientRect();
        if(tamanoHero.top >=0 ){
            icon.style.display = "none";
        }
        else{
            icon.style.display = "block";
        }
    };
})
