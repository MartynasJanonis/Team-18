$(document).ready(function() {
  var landingHeight = 0;

  landingHeight = $('#landing-height').height();
  historyHeight = $('#history').height();
  console.log("landingHeight = " + landingHeight);
  console.log("history height = " + historyHeight);

  $(window).scroll(function () {
    if ($(this).scrollTop() < (landingHeight-300)) {
      $('#section-text').text("");
      $('#section-text').css('color', 'white');
      $('#cover').css('background-color', 'transparent');
      $('.grid').css('border-left-color', '#CFD5DB');
    }else if($(this).scrollTop() > (landingHeight-300) && $(this).scrollTop() < (landingHeight+historyHeight-300)) {
      $('#section-text').text("History");
      $('#section-text').css('color', 'white');
      $('#cover').css('background-color', 'transparent');
      $('.grid').css('border-left-color', '#CFD5DB');
    }else if($(this).scrollTop() > (landingHeight+historyHeight-300)) {
      $('#section-text').text("Research");
      $('#section-text').css('color', 'black');
      $('#cover').css('background-color', 'rgba(0,0,0,0.90)');
      $('.grid').css('border-left-color', '#A9A9A9');
    }
  });
});
