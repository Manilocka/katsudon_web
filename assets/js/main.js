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



function copySku(element) {
    // Создаем временный textarea
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = element.textContent;
    document.body.appendChild(tempTextArea);
    
    // Выделяем и копируем текст
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // Для мобильных устройств
    
    try {
        document.execCommand('copy');
        // Показываем уведомление
        showCopyNotification('Артикул скопирован!');
    } catch (err) {
        console.error('Ошибка при копировании:', err);
        showCopyNotification('Не удалось скопировать', false);
    }
    
    // Убираем временный элемент
    document.body.removeChild(tempTextArea);
}

function showCopyNotification(message, isSuccess = true) {
    // Создаем уведомление
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        background: ${isSuccess ? '#4CAF50' : '#f44336'};
        color: white;
        border-radius: 5px;s
        z-index: 10000;
        font-size: 14px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        animation: fadeInOut 2s ease-in-out;
    `;
    
    document.body.appendChild(notification);
    
    // Удаляем уведомление через 2 секунды
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 2000);
}

// Добавляем стили для анимации
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateY(-20px); }
        10% { opacity: 1; transform: translateY(0); }
        90% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-20px); }
    }
    
    .product-sku {
        cursor: pointer;
        padding: 4px 8px;
        border-radius: 3px;

        transition: all 0.3s ease;
    }
    
    .product-sku:hover {
        background: #fafafa;
    }
    
    .product-sku:active {
        background: #fafafa;
    }
`;
document.head.appendChild(style);
