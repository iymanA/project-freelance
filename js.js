// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Кнопка "Заказать"
document.querySelector('.btn-order').addEventListener('click', function () {
  alert('Спасибо за интерес! Свяжитесь с нами по телефону +7 995 434-47-77 для оформления заказа.');
});

// Кнопка телефона
document.querySelector('.phone-btn').addEventListener('click', function () {
  console.log('Phone button clicked');
});

  const swiper = new Swiper('.swiper-container', {
    loop: true, // бесконечный цикл
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });