$(document).ready(function() {
  var addConstant = 0;
  var landingHeight = 0;
  var historyHeight = 0;
  landingHeight = $('#landing-height').outerHeight();
  historyHeight = $('#history').outerHeight();
  console.log("landingHeight = " + landingHeight);
  console.log("history height = " + historyHeight);

  $(window).scroll(function () {
    console.log("scroll pos = " + $(this).scrollTop());
    if ($(this).scrollTop() < (landingHeight+addConstant)) {
      $('#section-text').text("History");
      $('#section-text').css('color', 'transparent');
      $('#cover').css('background-color', 'transparent');
      $('.grid').css('border-left-color', '#CFD5DB');
      $('.logo').attr("src","/imgs/logo2.png");
      $('.nav-button').css('color', 'black');
    }else if($(this).scrollTop() > (landingHeight+addConstant) && $(this).scrollTop() < (landingHeight+historyHeight+addConstant)) {
      $('#section-text').text("History");
      $('#section-text').css('color', 'white');
      $('#cover').css('background-color', 'transparent');
      $('.grid').css('border-left-color', '#CFD5DB');
      $('.logo').attr("src","/imgs/logo2.png");
      $('.nav-button').css('color', 'black');
    }else if($(this).scrollTop() > (landingHeight+historyHeight+addConstant)) {
      $('#section-text').text("Research");
      $('#section-text').css('color', 'black');
      $('#cover').css('background-color', 'rgba(0,0,0,0.85)');
      $('.grid').css('border-left-color', '#A9A9A9');
      $('.logo').attr("src","/imgs/logo2dark.png");
      $('.nav-button').css('color', 'white');
    }
  });
});
