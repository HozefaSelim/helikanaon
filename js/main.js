$(window).on("load",function(){
  $("#perLoader").fadeOut(1000)
})

$(function () {
  var siteSticky = function () {
    $(".js-sticky-header").sticky({ topSpacing: 0 });
  };
  siteSticky();

  var siteMenuClone = function () {
    $(".js-clone-nav").each(function () {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    });

    setTimeout(function () {
      var counter = 0;
      $(".site-mobile-menu .has-children").each(function () {
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find(".arrow-collapse").attr({
          "data-toggle": "collapse",
          "data-target": "#collapseItem" + counter,
        });

        $this.find("> ul").attr({
          class: "collapse",
          id: "collapseItem" + counter,
        });

        counter++;
      });
    }, 1000);

    $("body").on("click", ".arrow-collapse", function (e) {
      var $this = $(this);
      if ($this.closest("li").find(".collapse").hasClass("show")) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    });

    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });

    $("body").on("click", ".js-menu-toggle", function (e) {
      var $this = $(this);
      e.preventDefault();

      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });


    // click outisde offcanvas
    $(document).mouseup(function (e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
  };
  siteMenuClone();
});

// function to automatic write in type.js
(function ($) {
  var type = new Typed("span.txt-rotate", {
    strings: ["   we make hypercasual games "],
    typeSpeed: 50,
    backSpeed: 100,
    fadeOut: false,
    smartBackspace: true,
    loop: true,
  });
})($);

// Scroll Button
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 400) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

//



// 2. code for dots in the background
const container = document.querySelector(".dot-container");
const numDots = 15;

for (let i = 0; i < numDots; i++) {
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.width = Math.random() * 10 + "px";
  dot.style.height = dot.style.width;
  dot.style.backgroundColor = getRandomColor();
  dot.style.top = Math.random() * 80 + "vh";
  dot.style.left = Math.random() * 100 + "vw";
  dot.style.animationDelay = Math.random() * 7 + "s"; // Adjust the delay range
  container.appendChild(dot);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// const sliders = document.querySelectorAll(".slide-in");
// const faders = document.querySelectorAll(".fade-in");
// const appearOptions = {
//   threshold: 0,
// };
// const appearOnScroll = new IntersectionObserver(function (
//   entries,
//   appearOnScroll
// ) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("appear");
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// },
// appearOptions);

// sliders.forEach((slider) => {
//   appearOnScroll.observe(slider);
// });
// const appearOnScroll2 = new IntersectionObserver(function (
//   entries,
//   appearOnScroll2
// ) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("appear2");
//       appearOnScroll2.unobserve(entry.target);
//     }
//   });
// },
// appearOptions);

// faders.forEach((fader) => {
//   appearOnScroll2.observe(fader);
// });

// Testimonials Carousel

$(function () {
  // Testimonials Carousel
  $("#testims-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});



const swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop : true,
  coverflow: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,

    slideShadows: true,
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    640: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 2.75,
    },
    1080: {
      slidesPerView: 3.25,
    },
    1280: {
      slidesPerView: 3.75,
    },
  },
});

let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Skills Animate Width
  // if (window.scrollY >= section.offsetTop - 250) {
  //   progressSpans.forEach((span) => {
  //     span.style.width = span.dataset.width;
  //   });
  // }
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// scroller
let el = document.querySelector(".scroller");
let hight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scroll_Top = document.documentElement.scrollTop;
  el.style.width = `${(scroll_Top / hight) * 100}% `;
});

$(".popup-image").magnificPopup({
  type: "image",
  closeOnContentClick: true,
  gallery: {
    enabled: true,
    navigateByImgClick: true,
  },
});


new WOW().init();