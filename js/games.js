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
  
  
  


  
  const sliders = document.querySelectorAll(".slide-in");
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: 0,
    
  };
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  sliders.forEach((slider) => {
    appearOnScroll.observe(slider);
  });
  const appearOnScroll2 = new IntersectionObserver(function (
    entries,
    appearOnScroll2
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear2");
        appearOnScroll2.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach((fader) => {
    appearOnScroll2.observe(fader);
  });
  
  // scroller
  let el = document.querySelector('.scroller');
  let hight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  window.addEventListener("scroll", () =>{
    let scroll_Top = document.documentElement.scrollTop
    el.style.width = `${(scroll_Top / hight)* 100}% `;
  })
  

  