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
        border: 1px solid #fff;
        border-radius: 3px;
        

        transition: all 0.3s ease;
    }
    
    .product-sku:hover {
        border-color: #B0B0B0;

    }
    
    .product-sku:active {
        border-color: #B0B0B0;
    }
`;
document.head.appendChild(style);



document.addEventListener('DOMContentLoaded', function() {
    // Ждем пока Bootstrap полностью загрузится
    if (typeof bootstrap !== 'undefined') {
        initializeCookieBanner();
    } else {
        // Если Bootstrap еще не загружен, ждем
        setTimeout(initializeCookieBanner, 100);
    }
});

function initializeCookieBanner() {
    const cookieElement = document.getElementById('offcanvasCookie');
    
    if (!cookieElement) return;
    
    // Инициализируем offcanvas
    const offcanvasCookie = new bootstrap.Offcanvas(cookieElement);
    
    // Проверяем куки
    if(!getCookie('allowCookie')) {
        setTimeout(() => {
            offcanvasCookie.show();
        }, 3000);
    }

    // Обработчик кнопки
    const allowButton = document.querySelector('#allow-cookie');
    if (allowButton) {
        allowButton.addEventListener('click', function(e) {
            e.preventDefault();
            setCookie('allowCookie', '1', {secure: true, 'max-age': 3600 * 24 * 365});
            offcanvasCookie.hide();
        });
    }
}

// Ваши функции getCookie, setCookie, deleteCookie остаются без изменений
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    });
}