$(document).ready(function () {
  $('.single-item').slick({
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    dotsClass: 'dots-style',
  });
});
