$(function () {
  $('.main_slide').slick({
    arrows: false,
    // // vertical: true 위아래 슬라이드
    // // fade : true 는 흐려짐
    autoplay: true,
    // 슬라이드 자동
    pauseOnHover: false,
    pauseOnFocus: false,
  });
  // 여기까지 슬라이드 하는 방법

  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });






})