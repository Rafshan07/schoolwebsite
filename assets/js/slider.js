var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5, // Always 5 images visible
  spaceBetween: 20, // Gap between slides
  loop: true, // Enable infinite looping
  autoplay: {
    delay: 2500, // Auto slide every 2.5 seconds
    disableOnInteraction: false, // Continue autoplay after user interaction
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1400: { slidesPerView: 5 },
    1200: { slidesPerView: 4 },
    992: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    576: { slidesPerView: 1 },
  },
});

















