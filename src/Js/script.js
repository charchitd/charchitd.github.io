
$(document).ready(function() {

    $(window).scroll(function() {

        if(this.scrollY>20)
        {
                $('.navbar').addChild("sticky");
                $('.footer').addChild("sticky");
        }

        else{

            $('.navbar').removeChild("sticky");
            $('.footer').removeChild("sticky");
        }
    });

    // toggle menu/navbar script

    $('.menu-btn').click(function(){    
            
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });




    



      // typing text animation script
      var typed = new Typed(".typing", {
        strings: ["Software Engineer", "ML Developer", "Pythonista", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //  // owl carousel script
    //  $('.carousel').owlCarousel({
    //     margin: 20,
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeOut: 2000,
    //     autoplayHoverPause: true,
    //     responsive: {
    //         0:{
    //             items: 1,
    //             nav: false
    //         },
    //         600:{
    //             items: 2,
    //             nav: false
    //         },
    //         1000:{
    //             items: 3,
    //             nav: false
    //         }
    //     }
    // });
});


