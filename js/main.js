//MENU DESKTOP

// menu fixed
	$(window).scroll(function() {    
    posicionarMenu();

	function posicionarMenu() {
    	var altura_del_header = $('#header').outerHeight(true);

    	if ($(window).scrollTop() >= altura_del_header){
        	$('#header').addClass('fixed');
    	} else {
        	$('#header').removeClass('fixed');
    	}
	}
});

//Menu movil
$('.btn').click(function() {
  $(this).toggleClass('active');
  $(this).toggleClass('not-active');
  $('.menumobile').toggleClass('active')
});

//ANIMATION SCROLL
AOS.init({
  duration: 1200,
});



//IMAGEN AI SOLUTIONS
(function() {
    
  function controls() {
    $(this).addClass('selected').siblings('button').removeClass('selected');
    $('.slideDiv').animate({
      top: -$('.container').height() * $(this).index()
    }, 450);
  }
  
  /***Event Listeners***/
  const runCode = () => {
    const button = document.querySelectorAll('.button');
    if ( button ) {
      for ( var i = 0; i < button.length; i++ ) {
        button[i].addEventListener('click', controls, false);
      }
    }
  }
  
  runCode();
  
})();


//Carrusel de empresas
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true,
            autoplay:true,
            autoplaySpeed:2000,
        animateIn: 'fadeIn'
        },
        600:{
            items:3,
            nav:true,
            loop:true,
            autoplay:true,
            autoplaySpeed:2000,
            animateIn: 'fadeIn'
        },
        1000:{
          dots:false,
            items:5,
            nav:true,
            loop:true,
            autoplay:true,
            autoplaySpeed:2000,
        animateIn: 'fadeIn'
        }
    }
})
// Navegacion slider
$(".owl-prev span").addClass('icon-arrow-prev');
$(".owl-next span").addClass('icon-arrow-next');
