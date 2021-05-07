$(document).ready(function(){
     $('.header').ripples({
     dropRadius:20,
       perturbance:0.01,
     });
    
    var typed = new Typed('.typed', {
      strings: ['Web Developer ', 'UX Designer', 'YouTuber'],
      smartBackspace: true ,
      loop:true,
      typeSpeed: 100,
    });

    $('.sidenav').sidenav();
   
    $('.slider').slider();
   
    $('.skills').carousel()  ;
    $('.tooltipped').tooltip();
   
  });
 