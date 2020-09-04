function banner() {
  $('.slider-list').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    infinite: true
  })
}
function slider_about_list() {
  $('.slider-about-list').slick({
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 400000000000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1
        }
      }
    ]
  })
}

function product_top() {
  $('.product-top').slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
}

function product_featured() {
  $('.product-featured').slick({
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          dots: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          dots: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
}

function reviews() {
  $('.review-slider-list').slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
}
function project() {
  $('.project-list').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true
  })
}
function lazyload() {
  var lazyloadImages = document.querySelectorAll("img.lazy");
  var lazyloadThrottleTimeout;

  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function() {
      var scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function(img) {
        if(img.offsetTop < (window.innerHeight + scrollTop)) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      });
      if(lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }


  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
}
function order() {
  var secondarySlider = new Splide('.photo-controls', {
    rewind: true,
    fixedWidth: 100,
    fixedHeight: 64,
    isNavigation: true,
    gap: 4,
    pagination: false,
    cover: true

  }).mount()
  // Create the main slider.
  var primarySlider = new Splide('#photo-viewport', {
    type: 'fade',
    pagination: false,
    arrows: false,
    cover: false
  })
  primarySlider.sync(secondarySlider).mount()
}
$(window).scroll(function(){
  var sticky = $('body'),
    scroll = $(window).scrollTop();
  console.log(scroll);

  if (scroll >= 79) sticky.addClass('body-fixed');
  else sticky.removeClass('body-fixed');
});
