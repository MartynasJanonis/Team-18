$(document).ready(function() {
  var landingHeight = 0;

  landingHeight = $('#landing-height').height();
  console.log("set current height on load = " + landingHeight);

  $(window).scroll(function () {
    if ($(this).scrollTop() > (landingHeight-300)) {
      $('#section-text').text("History");
    }
    if ($(this).scrollTop() < (landingHeight-300)) {
      $('#section-text').text("");
    }
  });
});
