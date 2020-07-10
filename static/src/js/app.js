let controller;
let slideScene;
let pageScene;
let detailScene;

function animateSlides() {
  controller = new ScrollMagic.Controller();

  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");

  sliders.forEach((slide, index, slides) => {
    const revealImg = slide.querySelector(".reveal-img");
    const img = slide.querySelector("img");
    const revealText = slide.querySelector(".reveal-text");

    const slideTl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    slideTl.fromTo(revealImg, { x: "0%" }, { x: "100%" });
    slideTl.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
    slideTl.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.75");

    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.25,
      reverse: false,
    })
      .setTween(slideTl)
      .addTo(controller);

    const pageTl = gsap.timeline();
    let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
    pageTl.fromTo(nextSlide, { y: "0%" }, { y: "50%" });
    pageTl.fromTo(slide, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.5 });
    pageTl.fromTo(nextSlide, { y: "50%" }, { y: "0%" }, "-=0.5");

    pageScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: "100%",
      triggerHook: 0,
    })
      .setPin(slide, { pushFollowers: false })
      .setTween(pageTl)
      .addTo(controller);
  });
}
const mouse = document.querySelector(".cursor");
const mouseTxt = mouse.querySelector("span");
const burger = document.querySelector(".burger");
function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}
function activeCursor(e) {
  const item = e.target;
  if (
    item.id === "logo" ||
    item.classList.contains("burger") ||
    item.classList.contains("btn-main")
  ) {
    mouse.classList.add("nav-active");
  } else {
    mouse.classList.remove("nav-active");
  }
}

function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line1", 0.5, { rotate: "45", y: 5, background: "#f3f2f1" });
    gsap.to(".line2", 0.5, { rotate: "-45", y: -5, background: "#f3f2f1" });
    gsap.to("#logo", 1, { color: "#f3f2f1" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "#284135" });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "#284135" });
    gsap.to("#logo", 1, { color: "#284135" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" });
    document.body.classList.remove("hide");
  }
}

burger.addEventListener("click", navToggle);
animateSlides();

let controller3;
let servicesScene;

function animateServices() {
  controller3 = new ScrollMagic.Controller();

  const block = document.querySelectorAll(".services-block");

  block.forEach((service) => {
    const left = service.querySelector(".services-block--left");
    const right = service.querySelector(".services-block--right");

    const servicesTl = gsap.timeline({
      defaults: { duration: 2, ease: "power2.inOut" },
    });

    servicesTl.fromTo(left, { x: "-150%" }, { x: "0%" });
    servicesTl.fromTo(right, { x: "150%" }, { x: "0%" }, "-=2");

    servicesScene = new ScrollMagic.Scene({
      triggerElement: block,
      triggerHook: 0.75,
      reverse: false,
    })
      .setTween(servicesTl)
      .addTo(controller3);
  });
}

animateServices();

let controller2 = new ScrollMagic.Controller();
let triggerE = document.querySelector(".about-info");
const aboutTl = gsap.timeline({
  defaults: { duration: 1.5, ease: "power2.inOut" },
});

aboutTl.fromTo(".about-info--title", { x: "-150%" }, { x: "0%" });
aboutTl.fromTo(".about-info--desc", { x: "-150%" }, { x: "0%" }, "-=.9");
aboutTl.fromTo(".portfolio", { opacity: 0 }, { opacity: 1 }, "-=1.3");
aboutTl.fromTo(".sample-board", { opacity: 0 }, { opacity: 1 }, "-=.8");

slideScene2 = new ScrollMagic.Scene({
  triggerElement: triggerE,
  triggerHook: 1,
  reverse: false,
})
  .setTween(aboutTl)
  .addTo(controller2);
//EventListeners

window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);
