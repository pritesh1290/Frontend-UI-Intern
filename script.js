// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Get the prev and next buttons
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Function to toggle buttons based on the slider section visibility
function toggleButtonsVisibility() {
  const sliderSection = document.querySelector('.emotions');
  if (isInViewport(sliderSection)) {
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';
  } else {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  }
}

// Add a scroll event listener to toggle buttons visibility
window.addEventListener('scroll', toggleButtonsVisibility);

// Initial check when the page loads
window.addEventListener('load', toggleButtonsVisibility);

// Emotions Slider

let slideNumber = 0;
const slides = document.querySelectorAll('.slides');

const showSlide = (index) => {
  slides.forEach((slide) => {
    slide.classList.remove('current');
  });

  slides[index].classList.add('current');
};

const prevSlide = () => {
  slideNumber = (slideNumber - 1 + slides.length) % slides.length;
  showSlide(slideNumber);
};

const nextSlide = () => {
  slideNumber = (slideNumber + 1) % slides.length;
  showSlide(slideNumber);
};

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Initial slide display
showSlide(slideNumber);

// Automatically advance the slider every 5 seconds (5000 milliseconds)
const autoAdvanceInterval = 5000;

setInterval(nextSlide, autoAdvanceInterval);

// Timeline Animation
(function () {
  "use strict";

  var items = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // Listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

// Owl Carousel Initialization
(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();

(function() {
  
  var slideContainer = $('.slide-container');
  
  slideContainer.slick();
  
  $('.clash-card__image img').hide();
  $('.slick-active').find('.clash-card img').fadeIn(200);
  
  // On before slide change
  slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.slick-active').find('.clash-card img').fadeOut(1000);
  });
  
  // On after slide change
  slideContainer.on('afterChange', function(event, slick, currentSlide) {
    $('.slick-active').find('.clash-card img').fadeIn(200);
  });
  
})();