window.addEventListener('DOMContentLoaded', function () {
  // Бургер меню
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open")
  })
  // Закрыть меню при нажатии на Esc
  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      // Действие при клике
      document.querySelector(".header").classList.remove("open")
    }
  });
  // Закрыть меню при клике вне его
  document.getElementById("menu").addEventListener('click', event => {
    event._isClickWithInMenu = true;
  });
  document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
  });
  document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    // Действие при клике
    document.querySelector(".header").classList.remove("open")
  });
  // Слайдер
  let swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      draggable: true,
      clickable: true,
    },
    a11y: {
      paginationBulletMessage: 'Авторы курса {{index}}',
    },
    breakpoints: {

      320: {
        spaceBetween: 5,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        spaceBetween: 35,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1200: {
            // Отступ между слайдов
        spaceBetween: 50,
            // Слайдев в ряд
        slidesPerView: 3,
            // Групп для листания
        slidesPerGroup: 3,
      }
    },
    // Авто прокрутка каждые 10 сек
    autoplay: {
      delay: 10000,
    },
  },);
})
