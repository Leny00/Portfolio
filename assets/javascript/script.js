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

    function ultimoscroll() {
        localStorage.setItem('scroll', window.scrollY);
    }

    window.addEventListener('scroll',ultimoscroll);

    document.addEventListener("DOMContentLoaded", function(){
        const posicionscroll = localStorage.getItem('scroll');
        if (posicionscroll != null) {
            window.scrollTo(0, posicionscroll);
        }
    });

    function loadIframe() {
        const frameContainer = document.getElementById("iframeContainer");
        if (frameContainer.childElementCount === 0) {
            const frame = document.createElement("iframe");
            frame.src = "https://koko-portfolio.netlify.app";
            frame.classList.add("lazy-frame");
            frameContainer.appendChild(frame);
        }
    }

    function removeIframe() {
        const frameContainer = document.getElementById("iframeContainer");
        while (frameContainer.firstChild) {
            frameContainer.removeChild(frameContainer.firstChild);
        }
    }
