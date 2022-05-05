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

// masonry function
var masonry = () => {
  if ($(".masonry .grid-item").length) {
    $('.grid').masonry({
      itemSelector: '.grid-item',
      // columnWidth: 200
    });
  }  
}

// product quantity function
var productQuantity = () => {
  if ($(".qty-input").length) {
    $('.increment-btn').click(function (e) {
      e.preventDefault();
  
      var inc_value = $(this).closest('.product-quantity').find('.qty-input').val();
      var value = parseInt(inc_value, 10);
      value = isNaN(value) ? 0 : value;
      if (value < 99) {
          value++;
          $(this).closest('.product-quantity').find('.qty-input').val(value);
      }
    });
  
    $('.decrement-btn').click(function (e) {
      e.preventDefault();
  
      var dec_value = $(this).closest('.product-quantity').find('.qty-input').val();
      var value = parseInt(dec_value, 10);
      value = isNaN(value) ? 0 : value;
      if (value > 1) {
          value--;
          $(this).closest('.product-quantity').find('.qty-input').val(value);
      }
    });
  }
}

// product tabs function
var productTabs = () => {
  if ($(".product-tabs").length) {
    console.log("product-tabs");
  }  
}

// initialize the functions
windowScrolled();

$(document).ready(function() {
  customSlider();
  parallaxMargin();
  productQuantity();
  productTabs();
});

$(window).resize(function() {
  parallaxMargin();
});

window.onload = function() {
  masonry();
}
