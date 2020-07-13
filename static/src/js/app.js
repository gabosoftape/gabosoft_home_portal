
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('#productos').fadeIn();
  } else if (y > 1000) {
    $('#productos').fadeOut();
  }
});