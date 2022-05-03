// top-navigation function
var windowScrolled = () => {
  function checkScroll() {
    if ($(window).scrollTop() >= 50) {
      $(".top-navigation").addClass("scrolled");
    } else {
      $(".top-navigation").removeClass("scrolled");
    }
  }
  
  $(document).ready(function() {
    checkScroll();
    $(window).scroll(checkScroll);
  });
}

// slider function
var customSlider = () => {
  if ($(".custom-slider").length) {
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
  var topNavHeight = $(".top-navigation").height();

  if ($(".page-home").length) {    
    var heroHeight = $(".hero").outerHeight();
    var autoHeight = topNavHeight + heroHeight - 5;

    $(".page-home").css("margin-top", autoHeight+"px");
  }

  else {
    $("main").css("margin-top", topNavHeight+"px");
  }
}

// initialize the functions
windowScrolled();

$(document).ready(function() {
  customSlider();
  parallaxMargin();
});

$(window).resize(function() {
  parallaxMargin();
});

