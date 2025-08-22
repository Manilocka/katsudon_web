function scrollToSlider() {
    const sliderSection = document.getElementById('slider');
    const heroHeight = document.querySelector('.hero-section').offsetHeight;
    
    window.scrollTo({
        top: heroHeight,
        behavior: 'smooth'
    });
}

$(function () {
    // const topBtn = $('#top');
    
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 600) {
    //         topBtn.fadeIn();
    //     } else {
    //         topBtn.fadeOut();
    //     }
    // });
    
    // topBtn.click(function() {
    //     $('html, body').animate({scrollTop: 0}, 200);
    //     return false;
    // });
    // const swiper = new Swiper('.swiper', {
    // // Optional parameters
    // loop: true,

    // // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    // });

    var swiperThumbs = new Swiper(".swiper-thumbs", {
        loop: true,
      freeMode: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiperGallery = new Swiper(".swiper-gallery", {
        loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiperThumbs,
      },
    });
});


document.getElementById('offcanvasNavbar').addEventListener('click', function(e) {
    const target = e.target;
    
    if (target.tagName === 'A' && 
        (!target.classList.contains('dropdown-toggle') || 
         target.classList.contains('dropdown-item'))) {
        
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(this);
        bsOffcanvas.hide();
    }
});

