// adding smooth scrolling
$(document).ready(function(){

  $(".navbar a, footer a[href='#mainPage']").on('click', function(event) {

  if (this.hash !== "") {

    event.preventDefault();

    let hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      window.location.hash = hash;
      });
    }
  });
});

//Navbar color change on scroll
$(function () {
  $(document).scroll(function () {
	  let $nav = $(".navbar-fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});


// adding parallax
  // $('.parallax-window').parallax({imageSrc: 'images/landingImage.jpg'});
