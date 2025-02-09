$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,  // Infinite loop
      margin: 0,  // Adjust space between images
      nav: true,   // Navigation arrows
      dots: false, // Hide navigation dots
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1, // 1 item for mobile screens
        },
        600: {
          items: 3, // 3 items for medium screens
        },
        1000: {
          items: 9, // 5 items for larger screens
        },
      },
    });
  });
  