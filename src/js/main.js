import gsap from "gsap";

var parallaxContainer = document.querySelector(".parallax-container");

parallaxContainer.addEventListener("mousemove", function (event) {
  var containerCoords = parallaxContainer.getBoundingClientRect();

  var clX = event.clientX - containerCoords.left;
  var clY = event.clientY - containerCoords.top;

  var percX = (clX / containerCoords.width) * 2 - 1;
  var percY = (clY / containerCoords.height) * 2 - 1;

  // layer 1
  var deltaX1 =
    (-(containerCoords.width * 1.1 - containerCoords.width) * percX) / 2;
  var deltaY1 =
    (-(containerCoords.height * 1.1 - containerCoords.height) * percY) / 2;

  document.querySelector(".layer-1").style.transform =
    "translate(" + deltaX1 + "px, " + deltaY1 + "px) scale(1.1)";

  // layer 2
  var deltaX2 =
    (-(containerCoords.width * 1.2 - containerCoords.width) * percX) / 2;
  var deltaY2 =
    (-(containerCoords.height * 1.2 - containerCoords.height) * percY) / 2;

  document.querySelector(".layer-2").style.transform =
    "translate(" + deltaX2 + "px, " + deltaY2 + "px) scale(1.2)";

  // layer 3
  var deltaX3 =
    (-(containerCoords.width * 1.4 - containerCoords.width) * percX) / 2;
  var deltaY3 =
    (-(containerCoords.height * 1.4 - containerCoords.height) * percY) / 2;

  document.querySelector(".layer-3").style.transform =
    "translate(" + deltaX3 + "px, " + deltaY3 + "px) scale(1.4)";

  // layer 4
  var deltaX4 =
    (-(containerCoords.width * 1.7 - containerCoords.width) * percX) / 2;
  var deltaY4 =
    (-(containerCoords.height * 1.7 - containerCoords.height) * percY) / 2;

  document.querySelector(".layer-4").style.transform =
    "translate(" + deltaX4 + "px, " + deltaY4 + "px) scale(1.7)";
});
