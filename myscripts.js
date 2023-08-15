console.log ("Your index.js file is loaded correctly!");
/*Preloader*/
setTimeout (function(){
    $('.loader_bg').fadeToggle();
 }, 1500);

 let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = 
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if(pos>100){
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = 'conic-gradient (#981724 $(scrollValue)%, #F4EAE9 $(scrollValue)%)';


 };

 window.onscroll = calcScrollValue;
 window.onload = calcScrollValue;
