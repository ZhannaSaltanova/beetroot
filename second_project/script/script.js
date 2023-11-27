// header ----------------->

let burger = document.querySelector('.burger');
let mob = document.querySelector('.nav');
burger.addEventListener('click', function(){
    mob.classList.toggle('active');
});

$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    let target = this.hash;
    $('html, body').animate({
      scrollTop: $(target).offset().top - 120
    }, 3000, function(){
      window.location.hash = target;
    });
  });
});


let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav ul a');
window.addEventListener('scroll', function(){
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
      if(top > offset && top < offset + height){
      navLink.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
        });
      } 
  });
});


let header = document.querySelector('.navigator');
window.addEventListener('scroll', function(){
  if(this.window.scrollY > 53){
    header.classList.add('header_sticky');
  } else {
    header.classList.remove('header_sticky');
  }
});

// intro ----------------->

const intro_swiper = new Swiper('.intro-slider', {
  direction: 'vertical',
  loop: true,
  speed: 400,
  pagination: {
    el: '.intro-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoplay: {
    delay: 4000,
  },
});

$(document).ready(function() {
  $('.arrow').on('click', function(event) {
    event.preventDefault();
    let target = this.hash;
    $('html, body').animate({
      scrollTop: $(target).offset().top - 150
    }, 800, function(){
      window.location.hash = target;
    });
  });
});

// news ------------------------->

const swiper = new Swiper('.news-slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.news-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        769: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 30
        }
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    
  });

  // gallery -------------->

  Fancybox.bind('[data-fancybox="galery"]',{
    
  });

  $('.gallery-wrapper').readmore({
    speed: 300,
    moreLink: '<a href="#">SEE MORE</a>',
    lessLink: '<a href="#">HIDE</a>',
    collapsedHeight: 438,
    
  });

  // map ------------------->

  let map;

  function initMap(){
    let myLatLng = { lat: 40.6686, lng: -73.8999 }; 
    map = new google.maps.Map(document.getElementById('googleMap'), {
          center: myLatLng,
          zoom: 13.5,
          mapId: '2f084b4895741534',
     
      });
    var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: "Monticello",
          icon: {
            url: "https://i.postimg.cc/30jd33nS/Pin.png",
            scaledSize: new google.maps.Size(100, 100),
          },
      });
  }

// form ---------------->


$(document).ready(function(){
  $('#myForm').validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      highlight: function(element) {
        $(element).addClass('error');
      },
      unhighlight: function(element) {
        $(element).removeClass('error');
        $(element).addClass('valid');
      }
    }
  });
});
