AOS.init(
    {
        useClassNames: false,
        debounceDelay: 50,
        throttleDelay: 99,
        once: true
    }
);


$(document).ready(function(){

    $("a").on('click', function(event) {
  
      
      if (this.hash !== "") {
     
        event.preventDefault();
  
        var hash = this.hash;
  
      
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1500, function(){
     
         
          window.location.hash = hash;
        });
      } 
    });

    $( ".i4ewOd-pzNkMb-nK2kYb" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );

  });



$(window).load(function(){
  $(".i4ewOd-pzNkMb-nK2kYb").css("display", "none");
});