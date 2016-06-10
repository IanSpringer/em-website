console.log("hello")

$( document ).ready(function(){
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 1100) {
        $('.main-menu').css('position', 'fixed').css('top', '0px');
        console.log('whoa')
    } else {
        console.log('hmm')
    }
    $('main-menu').css('position', 'absolute')
});
  console.log('ready')
  $('#logo').transition({y: 100}, {duration: 1, complete: function(){
      $(this).transition({y: 0, opacity: 1}, 700)
    }})

  $('#em').transition({y: 100}, {duration: 1, complete: function(){
      $(this).transition({y: 0, opacity: 1}, 800)
    }})
  $('#dd').transition({y: 100}, {duration: 1, complete: function(){
      $(this).transition({y: 0, opacity: 1}, 900)
    }})
   $('#motivated').transition({y: 100}, {duration: 1, complete: function(){
      $(this).transition({y: 0, opacity: 1}, 1000)
    }})
   $('.menu').transition({y: 100}, {duration: 1, complete: function(){
      $(this).transition({y: 0, opacity: 1}, 1100)
    }})
   $('.menu-item a').on('mouseenter', function(){
       console.log('mouseover')
      $(this).stop().transition({"color": "#f6b544"}, 300)
    })
   $('.menu-item a').on('mouseleave', function(){
      console.log('mouseleave')
      $(this).stop().transition({"color": "#cfc0ca"}, 300)
   })
   $('#about-button').on('click', function(){
      console.log('about clicked')
      $('html,body').animate({scrollTop: $('.about-us').offset().top
    }, 500)
  })
})





