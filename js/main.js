console.log("hello")

$( document ).ready(function(){
  console.log('ready')
  $('#logo').transition({y: 300}, {duration: 1, complete: function(){
      $(this).transition({y: 0, opacity: 1}, 300)
    }})

  $('#em').transition({y: 300}, {duration: 1, complete: function(){
      $(this).transition({y: 0, opacity: 1}, 400)
    }})
  $('#dd').transition({y: 300}, {duration: 1, complete: function(){
      $(this).transition({y: 0, opacity: 1}, 500)
    }})
   $('#motivated').transition({y: 300}, {duration: 1, complete: function(){
      $(this).transition({y: 0, opacity: 1}, 600)
    }})
   $('.menu').transition({y: 300}, {duration: 1, complete: function(){
      $(this).transition({y: 0, opacity: 1}, 700)
    }})
})
