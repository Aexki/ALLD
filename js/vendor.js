function Setbg() {
  $(".setbg").each(function () {
    var theBg = $(this).find(".bg-img").attr("src");
    $(this).css("background-image", "url(" + theBg + ")");
    $(this).find(".bg-img").hide();
    //alert("HI");
  });
}

$(document).ready( function() {
  var swiper = new Swiper('.swiper-container-new', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {      
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  });  

  var swiper = new Swiper('.client-logo', {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {      
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });  

});


$(window).on("load", function () {
  Setbg();
  try {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }
  catch(err){

  }

  try {
    var herosslider = new Swiper("#hero-slider", {
      navigation: {
        nextEl: "#hero-slider .swiper-button-next",
        prevEl: "#hero-slider .swiper-button-prev",
      },
      loop: true,
      speed: 100,
      autoplay: false,
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false,
      // },
      on: {
        slideChangeTransitionStart: function () {
          $(".hero-content").hide(0);
          $(".hero-content").removeClass("aos-init").removeClass("aos-animate");
        },
        slideChangeTransitionEnd: function () {
          $(".hero-content").show(0);
          AOS.init();
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
    });
  } catch (err) {}

  $(".mega-dropdown").on("show.bs.dropdown", function () {
    $("header").addClass("open-menu");
  });
  $(".mega-dropdown").on("hide.bs.dropdown", function () {
    $("header").removeClass("open-menu");
  });

  /////

  $(document).on("click", ".dropdown-menu", function (e) {
    e.stopPropagation();
  });

  $(document).on("click", ".light-btn", function () {
    $(".scene .overlay").toggle();
  });
  $(document).on("click", ".tv-btn", function () {
    $(".scene .tv").toggle();
  });

  $(window).on("load", function () {   
    try {
      var swiper = new Swiper('.swiper-container-new', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });  
    }
    catch(err){
    }
  });

$(window).on("load resize scroll", function (e) {
  var headerHeight = $("header").outerHeight();
  var wh = $(window).outerHeight();

  if ($(window).width() < 767) {
    //console.log('hi');
  } else {
    // $(".hero").css("height", wh - headerHeight);
    // $(".slider .swiper-container").css("height", wh - headerHeight);
    //console.log('hello');
  }
});




var wind = $(window);
// navbar scrolling background
wind.on("scroll", function () {
  var bodyScroll = wind.scrollTop(),
    header = $("header");
  if (bodyScroll > 400) {
    header.css("z-index", "999999");
    header.addClass('stickyheadernew')
  } else {
    header.css("z-index", "999");
    header.removeClass('stickyheadernew')
  }
});

 



});