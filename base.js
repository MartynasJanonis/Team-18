$(document).ready(function() {
  var addConstant = 0;
  var landingHeight = 0;
  var historyHeight = 0;
  var researchHeight = 0;
  var futureHeight = 0;
  landingHeight = $('#landing-height').outerHeight();
  historyHeight = $('#history').outerHeight();
  researchHeight = $('#Research').outerHeight();
  futureHeight = $('#Future').outerHeight();
  console.log("landingHeight = " + landingHeight);
  console.log("history height = " + historyHeight);
  console.log("research height = " + researchHeight);
  console.log("future height = " + researchHeight);

  $(window).scroll(function () {
    var addConstant = 0;
    var landingHeight = 0;
    var historyHeight = 0;
    var researchHeight = 0;
    var futureHeight = 0;
    landingHeight = $('#landing-height').outerHeight();
    historyHeight = $('#history').outerHeight();
    researchHeight = $('#Research').outerHeight();
    futureHeight = $('#Future').outerHeight();
    console.log("landingHeight = " + landingHeight);
    console.log("history height = " + historyHeight);
    console.log("research height = " + researchHeight);
    console.log("future height = " + futureHeight);
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
    }else if($(this).scrollTop() > (landingHeight+historyHeight+addConstant) && $(this).scrollTop() < (landingHeight+historyHeight+researchHeight+addConstant)) {
      $('#section-text').text("Research");
      $('#section-text').css('color', 'black');
      $('#cover').css('background-color', 'rgba(0,0,0,0.9)');
      $('.grid').css('border-left-color', '#A9A9A9');
      $('.logo').attr("src","/imgs/logo2dark.png");
      $('.nav-button').css('color', 'white');
    }else if($(this).scrollTop() > (landingHeight+historyHeight+researchHeight) && $(this).scrollTop() < (landingHeight+historyHeight+researchHeight+futureHeight)) {
      $('#section-text').text("Future");
      $('#section-text').css('color', 'white');
      $('#cover').css('background-color', 'transparent');
      $('.grid').css('border-left-color', '#CFD5DB');
      $('.logo').attr("src","/imgs/logo2.png");
      $('.nav-button').css('color', 'black');
    }else{
      $('#section-text').text("Future");
      $('#section-text').css('color', 'transparent');
      $('#cover').css('background-color', 'transparent');
      $('.grid').css('border-left-color', '#CFD5DB');
      $('.logo').attr("src","/imgs/logo2.png");
      $('.nav-button').css('color', 'black');
    }
  });
});
