/*

Template: The Whizz - Personal Resume HTML Template
Author: goldenmace.in
Version: 1.0
Design and Developed by: goldenmace.in

*/


/*================================================
[  Table of contents  ]
================================================
 
==> Preloader
==> Back to top
==> Owl carousel
==> NiceScroll
==> Intro typer
==> Skill
==> Isotope
==> Popup gallery
==> PHP contact form 
==> Menu Left Header
==> Menu scroll

======================================
[ End table content ]
======================================*/

(function($){
  "use strict";
 
  $(window).on("load", function() {

/*************************
        Preloader
*************************/  
   $("#load").fadeOut();
   $('#loading').delay().fadeOut('slow');

/*************************
     Back to top
*************************/
  $("#back-to-top").hide();
  $(function() {
      $(window).scroll(function() {
          if ($(window).scrollTop() > 100) {
              $("#back-to-top").fadeIn(1500);
          } else {
              $("#back-to-top").fadeOut(500);
          }
      });
      //back to top
      $("#back-to-top").click(function() {
          $('body,html').animate({ scrollTop: 0 }, 1000);
          return false;
      });
  });

/*************************
        Owl carousel
*************************/
   $('.owl-carousel').owlCarousel({
   items: 1,
   loop: true,
   autoplay: true,
   autoplayTimeout: 2500,
   autoplayHoverPause: true,
   smartSpeed: 800,
   dots: true,
   nav: false
   });
   });

/*************************
        NiceScroll
*************************/
  $(".navbar").niceScroll({
  scrollspeed: 300,
  mousescrollstep: 38,
  cursorwidth: 5,
  cursorborder: 0,
  cursorcolor: '#2f3742',
  autohidemode: true,
  zindex: 999999999,
  horizrailenabled: false,
  cursorborderradius: 0,
});

/*************************
       Intro typer
*************************/
  var win = $(window),
    foo = $('#typer');
foo.typer(['<h1><span class="blue-text">frontend</span> developer</h1>', '<h1><span class="blue-text">Backend</span> developer</h1>', '<h1><span class="blue-text">Product</span> manager</h1>']);

/*************************
          Skill
*************************/ 
$('.skill').appear(function() {
    $(".bar").each(function() {
        var $bar = $(this),
            $pct = $bar.find(".pct"),
            data = $bar.data("bar");
        setTimeout(function() {
            $bar
                .css("background-color", data.color)
                .prop("title", data.width)
                .animate({
                    "width": $pct.html()
                }, 3000, function() {
                    $pct.css({
                        "color": data.color,
                        "opacity": 1
                    });
                });
        }, data.delay || 0);
    });
}, {
    offset: 400
});

/*************************
        Isotope
*************************/
  $(window).on("load resize", function(e) {
      var $container = $('.isotope'),
          colWidth = function() {
              var w = $container.width(),
                  columnNum = 1,
                  columnWidth = 0;
              return columnWidth;
          },
          isotope = function() {
              $container.isotope({
                  resizable: true,
                  itemSelector: '.grid-item',
                  masonry: {
                      columnWidth: colWidth(),
                      gutterWidth: 10
                  }
              });
          };
      isotope();
      var $isotopefilters = $('.isotope-filters');
      // bind filter button click
      $isotopefilters.on('click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $container.isotope({ filter: filterValue });
      });
      // change active class on buttons
      $isotopefilters.each(function(i, buttonGroup) {
          var $buttonGroup = $(buttonGroup);
          $buttonGroup.on('click', 'button', function() {
              $buttonGroup.find('.active').removeClass('active');
              $(this).addClass('active');
          });
      });
  });
 
 /*************************
      Popup gallery
*************************/
$('.popup-portfolio').magnificPopup({
    delegate: 'a.portfolio-img',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
            return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        }
    }
});

/*********************************
          Placeholder
**********************************/
$('[placeholder]').focus(function() {
    var input = $(this);
    if (input.val() === input.attr('placeholder')) {
        input.val('');
        input.removeClass('placeholder');
    }
}).blur(function() {
    var input = $(this);
    if (input.val() === '' || input.val() === input.attr('placeholder')) {
        input.addClass('placeholder');
        input.val(input.attr('placeholder'));
    }
}).blur().parents('form').submit(function() {
    $(this).find('[placeholder]').each(function() {
        var input = $(this);
        if (input.val() === input.attr('placeholder')) {
            input.val('');
        }
    })
});

/*************************
     PHP contact form 
*************************/
  $("#contactform").submit(function(e) {
      $("#ajaxloader").show();
      //$("#contactform").hide();
      $.ajax({
          url: 'php/contact-form.php',
          data: $(this).serialize(),
          type: 'post',
          success: function(response) {
              $("#ajaxloader").hide();
              $("#contactform").show();
              $("#contactform").find("input, textarea").val("");
              $("#message").html(response);
              //$("#formmessage").html(response).show().delay(2000).fadeOut('slow');
          }
      });
      e.preventDefault();
  });


/*************************
      menu left-header
*************************/
$('#menu-icon').on( "click", function(e) {   
    e.preventDefault();
    e.stopPropagation();
    if(!$(this).hasClass('active')){
          $(this).addClass('active');
          $('#left-header').animate({'margin-left':230},300);
        } else {
          $(this).removeClass('active');
          $('#left-header').animate({'margin-left':0},300);
    }
  return false;
});

  $(window).resize(function() {
if ($(window).width() > 992) {

   $("#menu-icon").removeClass('active');
   $('#left-header').animate({'margin-left':0},300);
   }  
});

/*************************
        Menu scroll
*************************/
 $('#navbar,#scroll-down').on( "click", function(e) {
     if ( $(e.target).is('a.page-scroll') ) {
       if (location.pathname.replace(/^\//,'') === e.target.pathname.replace(/^\//,'') && location.hostname === e.target.hostname) {
          var target = $(e.target.hash);
            target = target.length ? target : $('[name=' + e.target.hash.slice(1) +']');
            if (target.length) {
                var gap = 0;              
                $('html,body').animate({
                  scrollTop: target.offset().top - gap
                }, 900);
                     
             }
          }
         return false;
      }
  });
  $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

})(jQuery); 
