var tlFirstScroll = new TimelineMax()

tlFirstScroll
.set('.products-div', {scale: 4, transformOrigin: "center top"})
.to('.products-div', 3, {scale:2.2, y:"-50%"})
.to('.products-div', 3 ,{scale: 1, y:"0%"})

var controller = new ScrollMagic.Controller();

//Escena1