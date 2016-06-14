$(document).ready(function(){
  $(window).bind('scroll', function () {

    if ($(window).scrollTop() === $(window).height()) {
        $('.main-menu').css('position', 'fixed').css('top', '0px');
        console.log('whoa')
    } else if ($(window).scrollTop() === $(window).height() - 20) {
        console.log('hmm')
        $('.main-menu').css('bottom', '0px');
     }
  });
});
$(window).load(function() {
  // Intro animation
 $('#logo').transition({y: 100}, {duration: 1, complete: function(){
      $('#logo').transition({y: 0, opacity: 1}, {duration: 300});
  }});
  $('#em').transition({y: 100}, {duration: 1, complete: function(){
      $("#em").transition({y: 0, opacity: 1}, {duration: 400});
  }});
  $('#dd').transition({y: 100}, {duration: 1, complete: function(){
      $(this).transition({y: 0, opacity: 1}, {duration: 500});
  }});
  $('#motivated').transition({y: 100}, {duration: 1, complete: function(){
      $(this).transition({y: 0, opacity: 1}, {duration: 600});
  }});
   $('.menu').transition({y: 100}, {duration: 1, complete: function(){
      $(this).transition({y: 0, opacity: 1}, {duration: 700});
  }});
   // Event isteners
   $('.menu-item a').on('mouseenter', function() {
      console.log('mouseover');
      $(this).stop().transition({"color": "#f6b544"}, 300);
  });
   $('.menu-item a').on('mouseleave', function() {
      console.log('mouseleave')
      $(this).stop().transition({"color": "#cfc0ca"}, 300);
   });
   $('#about-button').on('click', function() {
      console.log('about clicked')
      $('html,body').animate({scrollTop: $('.about-us').offset().top
    }, 500);
  });
});






