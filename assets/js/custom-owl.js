$(document).ready(function () {

  $('.owl-carousel').owlCarousel({
    
    loop: true, /* Vong lap*/
    margin: 24, /* K/C giua item*/
    nav: true, /* Thanh dieu huong */
    navText: ['<span class=""><img src="./assets/images/arrow-left.png" alt=""></span>', '  <span class=""><img src="./assets/images/arrow-right.png" alt=""></span>'],    dots: false,
    autoplay: false, /* Trang tu chay slider*/
    autoplayTimeout: 4000, /* Thoi gian chuyen slider (ms)*/
    responsive: {
      // quy dinh so luong bao nhieu item tren khoang man hinh
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  })

});