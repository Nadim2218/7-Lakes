$(function(){


  // banner slider
  
  var swiper = new Swiper('.swiper', {
    slidesPerView: 1,          // Show 1 slide at a time
    loop: true,                // Enable looping of slides
    autoplay: {
      delay: 3000,             // Delay between slides (in milliseconds)
      disableOnInteraction: false, // Keep autoplay running after user interaction
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

// banner slider
var priceSlider = document.getElementById('price-slider');
    
noUiSlider.create(priceSlider, {
    start: [250, 5500],
    connect: true,
    range: {
        'min': 250,
        'max': 5500
    },
    format: {
        to: function(value) {
            return Math.round(value);
        },
        from: function(value) {
            return Number(value);
        }
    }
});

const minPriceLabel = document.getElementById('min-price-label');
const maxPriceLabel = document.getElementById('max-price-label');

// Update the labels when the slider values change
priceSlider.noUiSlider.on('update', function(values) {
    minPriceLabel.textContent = '৳' + values[0];
    maxPriceLabel.textContent = '৳' + values[1];
});


})

// image change
function changeImage(src) {
  document.getElementById('mainImage').src = src;
}


const valueElement = document.getElementById('value');
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');

let value = 1;

decreaseButton.addEventListener('click', () => {
    if (value > 0) {
        value--;
        valueElement.textContent = value;
    }
});

increaseButton.addEventListener('click', () => {
    value++;
    valueElement.textContent = value;
});


function toggleQuickTechForm(action, name = '', city = '', area = '', address = '') {
  const form = document.getElementById('quicktech-address-form');
  const nameInput = document.getElementById('quicktech-name');
  const citySelect = document.getElementById('quicktech-city');
  const areaSelect = document.getElementById('quicktech-area');
  const addressInput = document.getElementById('quicktech-address');

  if (form.style.display === 'none' || form.style.display === '') {
      form.style.display = 'flex';

      if (action === 'edit') {
          nameInput.value = name;
          citySelect.value = city;
          areaSelect.value = area;
          addressInput.value = address;
      } else {
          nameInput.value = '';
          citySelect.value = 'Select City';
          areaSelect.value = 'Select Area';
          addressInput.value = '';
      }
  } else {
      form.style.display = 'none';
  }
}


let timer = 102;
const timerElement = document.getElementById('timer');

const countdown = setInterval(() => {
    timer--;
    timerElement.textContent = `(${timer})`;

    if (timer <= 0) {
        clearInterval(countdown);
        // Enable resend button or take any action you want
    }
}, 1000);


document.querySelectorAll('.quicktecch-category').forEach(category => {
    category.addEventListener('click', function () {
      const toggleIcon = category.querySelector('.toggle-icon');
      const isCollapsed = category.getAttribute('aria-expanded') === 'true';
      toggleIcon.textContent = isCollapsed ? '-' : '+';
    });
  });

//   mobile slider 

  document.addEventListener("DOMContentLoaded", function () {
    var slider2 = document.getElementById('price-slider-2');
    var minLabel2 = document.getElementById('min-price-label-2');
    var maxLabel2 = document.getElementById('max-price-label-2');
  
    noUiSlider.create(slider2, {
      start: [300, 6000],
      connect: true,
      range: {
        'min': 300,
        'max': 6000
      }
    });
  
    slider2.noUiSlider.on('update', function (values, handle) {
      if (handle === 0) {
        minLabel2.innerHTML = '৳' + Math.round(values[0]);
      } else {
        maxLabel2.innerHTML = '৳' + Math.round(values[1]);
      }
    });
  });