"use strict";

$(document).ready(function() {
  const $buttons = $(".demo__buttons");
  const $toggle = $(".demo__open-btn");
  let delay = 200;
  let steps = [];
  let open = false;
  
  let curStep = 0;

  for (let i = 0; i <= 3; i++) {
    steps[i] = "demo__step-" + i;
  }

  function setStep(index) {    
    $buttons.removeClass("step-1 step-0 step-3 step-2").addClass("step-" + curStep);   
  }
  
  let lastTimeout;

  function animate() {
    if (curStep >= 4) {
      curStep = 0;
      return;
    }

    open = true;
    setStep(curStep);    
    curStep++;
    lastTimeout = setTimeout(animate, delay);
  }

  $toggle.on("click", function() {
    if (!open) animate();
    else {
      $buttons.removeClass("step-1 step-0 step-3 step-2");
      clearTimeout(lastTimeout);
      open = false;
      curStep = 0;
    }
  });
});
var x = document.getElementById("demo");
var place = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12619.764823565032!2d-122.41542519212406!3d37.744523525071884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sparks!5e0!3m2!1sen!2sus!4v1530227861579&zoom=15"
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
  document.getElementById("map").style.display = "block";
  place="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12661.76402246347!2d" + position.coords.longitude +"!3d"  + position.coords.latitude +"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sparks!5e0!3m2!1sen!2sus!4v1530246742567"
  
    document.getElementById("map").src = place;
}



$("#mTea").click(function() {
  $("#spiltTea").fadeToggle();
})


$("#title").click(function() {
  window.location.replace("index.html");
})
