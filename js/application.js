$(function() {

  $('.waypoint').waypoint(function(direction) {
    $(this.element).addClass('is-visible');
    console.log(this.element);
    // console.log(this.element.id + ' hit')
  }, {
    offset: '50%'
  });

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });

  //caches a jQuery object containing the header element
  var header = $(".whiteHome");
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 520) {
          header.removeClass('whiteHome').addClass("darkHome");
      } else {
          header.removeClass("darkHome").addClass('whiteHome');
      }
  });
});