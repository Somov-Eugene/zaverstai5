const sliderReviews = new Swiper('.reviews-slider', {
  loop: true,
  speed: 600,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  },
});
