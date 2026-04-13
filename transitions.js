window.addEventListener("pageshow", function () {
  $("body").css("opacity", 1);
});

$(document).ready(function () {
  $("body").css("opacity", 0).animate({ opacity: 1 }, 200);

  $(document).on("click", "a[href]", function (e) {
    const href = $(this).attr("href");
    if (href.startsWith("http") || href.startsWith("#")) return;
    e.preventDefault();
    $("body").animate({ opacity: 0 }, 200, function () {
      window.location.href = href;
    });
  });
});
