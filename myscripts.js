//scroll reveal
 //header
 ScrollReveal().reveal('.logo', { delay: 500, origin: 'left' });
 ScrollReveal().reveal('.navbar', { delay: 600, origin: 'bottom' });
 ScrollReveal().reveal('.cta', { delay: 700, origin: "right" });
 

 //hero banner
 ScrollReveal().reveal('chibbi', { easing: "ease-in" });
 ScrollReveal().reveal('.name', { easing: "ease-in" });
 ScrollReveal().reveal('.intro', { easing: "ease-in" });
 ScrollReveal().reveal('#button1', { easing: "ease-in" });
 ScrollReveal().reveal('#button2', { easing: "ease-in" });

 //Gradient text
 ScrollReveal().reveal('.grad1', { easing: "ease-in" });
 ScrollReveal().reveal('#wrapper-text', { easing: "ease-in" });
 ScrollReveal().reveal('#wrapper', { easing: "ease-in" });

 //recent work
 ScrollReveal().reveal('.recentwork', { easing: "ease-in" });
 ScrollReveal().reveal('.para1', { easing: "ease-in" });
 ScrollReveal().reveal('.para2', { easing: "ease-in" });
 
 
 // Preloader
setTimeout (function(){
    $('.loader_bg').fadeToggle();
 }, 1500);


// Scroll back to top
 let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");

    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

   let scrollValue = Math.round ((pos * 100) / calcHeight);
   if (pos>100){
       scrollProgress.style.display = "grid";
   } else {
       scrollProgress.style.display = "none";
   }
   scrollProgress.addEventListener("click", () => {
       document.documentElement.scrollTop = 0;
   });
  
  scrollProgress.style.background = 'conic-gradient (#981724 ${scrollValue}%, #F4EAE9 ${scrollValue}%)';

};
    
 window.onscroll = calcScrollValue;
 window.onload = calcScrollValue;


 

