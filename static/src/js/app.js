var tlFirstScroll = new TimelineMax()

tlFirstScroll
.to('#productos', 3, {scale:2.2, y:"-50%"})
.to('#productos', 3 ,{scale: 1, y:"0%"})

var controller = new ScrollMagic.Controller();

//Escena1