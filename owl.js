$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,  
      margin: 0, 
      nav: true,   
      dots: false, 
      autoplay: true,
      autoplayTimeout:5000,
      smartSpeed: 2000,        
      autoplaySpeed: 2000, 
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1, 
        },
        600: {
          items: 3, 
        },
        1000: {
          items: 9, 
        },
      },
    });
  });
  