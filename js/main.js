console.log("hello")

$( document ).ready(function(){
  console.log('ready')
  $('#logo').transition({y: 100}, {duration: 1, complete: function(){
      $(this).transition({y: 0, opacity: 1}, 700)
    }})

  $('#em').transition({y: 100}, {duration: 1, complete: function(){
      $(this).transition({y: 0, opacity: 1}, 750)
    }})
  $('#dd').transition({y: 100}, {duration: 1, complete: function(){
      $(this).transition({y: 0, opacity: 1}, 800)
    }})
   $('#motivated').transition({y: 100}, {duration: 1, complete: function(){
      $(this).transition({y: 0, opacity: 1}, 850)
    }})
   $('.menu').transition({y: 100}, {duration: 1, complete: function(){
      $(this).transition({y: 0, opacity: 1}, 900)
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
      $('body').transition({y: -1500}, 800, 'ease')
   })
})




