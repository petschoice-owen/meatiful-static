// header function
var headerScrolled = () => {
  function checkScroll() {
    if ($(window).scrollTop() >= 50) {
      $(".header-main").addClass("header-scrolled");
    } else {
      $(".header-main").removeClass("header-scrolled");
    }
  }
  
  $(document).ready(function() {
    checkScroll();
    $(window).scroll(checkScroll);
  });
}

// slider function
var customSlider = () => {
  if ($(".custom-slider")) {
    $('.custom-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      infinite: true,
      speed: 1500,
      dots: false,
      prevArrow: false,
      nextArrow: false,
      swipe: false,
      // fade: true,
      // cssEase: 'linear'
    });
  }  
}

// home page - parallax auto margin-top
var parallaxMargin = () => {
  if ($(".page-home")) {
    var topNavHeight = $(".header-main").height();
    var heroHeight = $(".hero").outerHeight();
    var autoHeight = topNavHeight + heroHeight - 5;

    $(".page-home").css("margin-top", autoHeight+"px");
  }
}

// initialize the functions
headerScrolled();

$(document).ready(function() {
  customSlider();
  parallaxMargin();
});

$(window).resize(function() {
  parallaxMargin();
});

