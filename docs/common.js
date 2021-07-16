console.log("common.js 로딩중")

function MySlider__init() {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

MySlider__init();
