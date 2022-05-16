var $ = jQuery;

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
        if ($(window).width() < 768) {
            // show current active tab
            $(".product-tabs .tab-pane").each(function() {
            if ($(this).hasClass("show")) {
                $(this).addClass("show-content");
                $(this).find(".title").addClass("active");
            }
            });
    
            $(".tab-title-mobile").each(function() {
                $(this).click(function(e) {
                    e.preventDefault();
        
                    if ($(this).parent().hasClass("active")) {
                        $(".tab-pane").removeClass("show active show-content");
                        setTimeout(() => {
                            $(".tab-pane .title").removeClass("active");
                            $(this).parent().removeClass("active");
                            $(this).closest(".tab-pane").removeClass("show active show-content");
                        }, 100);
                    } else {
                        $(".tab-pane").removeClass("show active show-content");
                        setTimeout(() => {
                            $(this).closest(".tab-pane").addClass("show active show-content");
                            $(this).parent().addClass("active");
                        }, 100);
                    }
        
                    var tabTitleMobile = $(this).text();
                    console.log(tabTitleMobile);
        
                    $(".product-tabs .nav-item").each(function() {
                        var navTab = $(this).find("button");
                        var navTabTitle = navTab.text();
            
                        $(".product-tabs .nav-link").removeClass("active").attr("aria-selected","false");
            
                        if (navTabTitle == tabTitleMobile) {
                            setTimeout(() => {
                            navTab.addClass("active").attr("aria-selected","true");;
                            }, 100);
                        }
                    });
                });
            });
        }
    }  
}

// pop-up functions
var popUp = () => {
    if(typeof window.localStorage !== "undefined" && !localStorage.getItem('visited')) {
        // Set visited flag in local storage
        localStorage.setItem('visited', true);
        // Alert the user
        if ($("#pop_up").length) {
            $("html").addClass("pop-up-show");
            $("#pop_up").fadeIn();

            $(".pop-up-close").click(function() {
                $("html").removeClass("pop-up-show");
                $(this).closest(".pop-up").fadeOut();
            });
        }   
    }
}

// for preview purposes - stockists page
var stockists = () => {
    if ($(".page-stockists").length) {
        $(".search-form .btn-search").click(function(e) {
            e.preventDefault();
            $("section.content .search-text").addClass("d-none");
            $("section.content .search-results").removeClass("d-none");
            setTimeout(() => {
                $(this).closest("form")[0].reset();
            }, 100);
        });
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
    productTabs();
});
  
window.onload = function() {
    masonry();
    stockists();
    popUp();
}
  