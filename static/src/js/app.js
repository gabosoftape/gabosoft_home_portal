var tlFirstScroll = new TimelineMax()

tlFirstScroll
.set('.product-div', {scale: 4, transformOrigin: "center top"})
.to('.product-div', 3, {scale:2.2, y:"-50%"})
.to('.product-div', 3 ,{scale: 1, y:"0%"})

var controller = new ScrollMagic.Controller();

//Escena1