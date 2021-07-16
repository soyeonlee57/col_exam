console.log("common.js 로딩중")

function MySlider__init() {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        let img = "";
        
        if ( index == 0 ) {
          img = '<img src="https://source.unsplash.com/random?sig=24">';
        }
        else if ( index == 1 ) {
          img = '<img src="https://source.unsplash.com/random?sig=53">';
        }
        else if ( index == 2 ) {
          img = '<img src="https://source.unsplash.com/random?sig=52">';
        }
        else if ( index == 3 ) {
          img = '<img src="https://source.unsplash.com/random?sig=21">';
        }
        else if ( index == 4 ) {
          img = '<img src="https://source.unsplash.com/random?sig=50">';
        }
        else if ( index == 5 ) {
          img = '<img src="https://source.unsplash.com/random?sig=55">';
        }
        else if ( index == 6 ) {
          img = '<img src="https://source.unsplash.com/random?sig=57">';
        }
        
        const bullet = '<span class="' + className + '">' + img + '</span>';
        
        return bullet;
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

MySlider__init();
