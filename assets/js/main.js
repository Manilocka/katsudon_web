function scrollToSlider() {
    const sliderSection = document.getElementById('slider');
    const heroHeight = document.querySelector('.hero-section').offsetHeight;
    
    window.scrollTo({
        top: heroHeight,
        behavior: 'smooth'
    });
}

$(function () {
    const topBtn = $('#top');
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    
    topBtn.click(function() {
        $('html, body').animate({scrollTop: 0}, 200);
        return false;
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