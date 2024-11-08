import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// HEADER PARALLAX

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

// WORLDMAP

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".worldmap",
    start: "top top",
    end: "+=20000",
    markers: true,
    scrub: 1,
    pin: true,
  },
});

tl.to(".worldmap", {
  scale: 2.5,
  x: "55%",
  y: "50%",
  duration: 3,
  ease: "power1.inOut",
});

tl.to(".worldmap", {
  scale: 2,
  x: "10%",
  y: "30%",
  duration: 2.5,
  ease: "power1.inOut",
});

tl.to(".worldmap", {
  scale: 3,
  x: "-30%",
  y: "80%",
  duration: 2,
  ease: "power1.inOut",
});

tl.to(".worldmap", {
  scale: 2,
  x: "-20%",
  y: "10%",
  duration: 1,
  ease: "power1.inOut",
});

tl.to(".worldmap", {
  scale: 2.5,
  x: "-90%",
  y: "-50%",
  duration: 1,
  ease: "power1.inOut",
});
