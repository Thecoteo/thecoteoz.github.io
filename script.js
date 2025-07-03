new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
    // Pagination bullets
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
    0: {
    slidesPerView: 1
    },
    768: {
    slidesPerView: 2
    },
    1024: {
    slidesPerView: 3
     }
    }
    });

window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('hide');
    setTimeout(() => loader.style.display = 'none', 400);
  }
});

tsParticles.load("particles", {
  particles: {
    number: { value: 40 },
    color: { value: "#fff" },
    size: { value: 2 },
    move: { enable: true, speed: 0.5 },
    opacity: { value: 0.5 }
  }
});
