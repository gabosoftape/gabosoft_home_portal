// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
    duration: 100, // the scene should last for a scroll distance of 100px
    offset: 50 // start this scene after scrolling for 50px
})
    .setPin('#productos') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

new ScrollMagic.Scene({
    duration: 100, // the scene should last for a scroll distance of 100px
    offset: 150 // start this scene after scrolling for 50px
})
    .setPin('#soluciones') // pins the element for the the scene's duration
    .addTo(controller); // assign

new ScrollMagic.Scene({
    duration: 100, // the scene should last for a scroll distance of 100px
    offset: 250 // start this scene after scrolling for 50px
})
    .setPin('#productos') // pins the element for the the scene's duration
    .addTo(controller); // assign