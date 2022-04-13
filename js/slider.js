const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: { 
        480: {
            slidesPerView: 2,
            paceBetween: 25,
        },
        767: {
            slidesPerView: 3,
            paceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
  });