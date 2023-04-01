document.addEventListener("DOMContentLoaded", function() {
    const menubtn=document.querySelector('.menu-btn');
    const navlinks=document.querySelector('.navlinks');
  
    menubtn.addEventListener('click',()=>{
        navlinks.classList.toggle('mobile-menu');
    });
  });
  