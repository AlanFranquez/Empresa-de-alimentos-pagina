var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// NAVBAR

const menu = document.querySelector('.menu');
const openMenuBtn = document.querySelector('.open-menu');
const closeMenuBtn = document.querySelector('.close-menu');

function toggleMenu() {
  menu.classList.toggle('menu_opened');
}

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);


// Scrollrevel

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 500,
  delay: 200,
  // reset:true
})

sr.reveal(`main`)
sr.reveal(`.contactanos`)
sr.reveal(`.nosotros__img`, {origin: 'right'})
sr.reveal(`.nosotros-p`, {origin: 'left'})


// Validación del formulario

const form = document.querySelector('.formulario');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.querySelector('.nombre').value;
  const apellido = document.querySelector('.apellido').value;
  const email = document.querySelector('.email').value;

  if(nombre === '' || apellido === '' || email === '') {
    const div = document.querySelector('.alerta');
    const p = document.createElement('P');
    const error1 = document.querySelector('.error1');
    
    div.classList.add('advertencia', 'error1')

    if(!error1) {

      p.textContent = 'Debe rellenar todos los campos'
  
      div.appendChild(p);
  
      setTimeout(() => {
        div.remove();
      }, 2000);
     
    }


  } else {
    const div = document.querySelector('.alerta');
    const p = document.createElement('P');
    const error2 = document.querySelector('.error2');
    div.classList.add('acierto', 'error2')
  
    if(!error2) {
  
        p.textContent = 'Gracias. Nos pondremos en contacto contigo a la brevedad'
    
        div.appendChild(p);
    
        setTimeout(() => {
          div.remove();
        }, 2000);
    }
    
  
    }
  }
  
);