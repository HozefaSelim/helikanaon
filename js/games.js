$(window).on("load", function () {
  $("#perLoader").fadeOut(1000);
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



new WOW().init();
