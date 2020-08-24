const btn =document.querySelector('.button'),
      modalBtn=document.querySelector('.modal__button'),
      overlay=document.querySelector('.overlay'),
      body=document.querySelector('body');
const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.slider__bullets',
      bulletClass: 'slider__bullet',
      bulletActiveClass: 'slider__bullet_active',
    },
  });
  
    
    btn.addEventListener('click',()=>{
      overlay.classList.add('overlay_active');
      body.style.overflow="hidden";
    });

    modalBtn.addEventListener('click',()=>{
      overlay.classList.remove('overlay_active');
      body.style.overflow="auto";
      });
  