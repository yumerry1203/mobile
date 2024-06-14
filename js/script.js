  /* swiper */
    var swiper1 = new Swiper(".mySwiper1", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });

    var swiper2 = new Swiper(".mySwiper2", {
      effect: "cards",
      grabCursor: true,
    });
    /* //swiper */


    $(document).ready(function(){

      /* notice */
      function slideupTop(){
        $(".notice_list ul").stop(true,true).animate({"margin-top":"-=2rem"},800,function(){ 		
          $(".notice_list ul li:first-child").appendTo(".notice_list ul"); 	
          $(this).css({"margin-top":"0"}); 
        });
      } setInterval(slideupTop,4000);
      /* // notice */

      $(".menu_btn").click(function(){  //header-menu button
        $(".mo_menu").stop(true,true).animate({"right":0});
        $(".back").stop(true,true).fadeIn();
      });

      $(".close_btn").click(function(){  //close button
        $(".mo_menu").stop(true,true).animate({"right":"-75%"});
        $(".back").stop(true,true).fadeOut(); 
      });

      $(window).on("scroll", function () { //scroll-header style
        let scroll = $(this).scrollTop();
        if (scroll > 50) {
          $('header').addClass('scroll');
          $('header .menu_btn a img').attr({"src":"img/menuBtn_scroll.png"});
        }else{
          $('header').removeClass('scroll');
          $('header .menu_btn a img').attr({"src":"img/menuBtn.png"});
        }
      });

    });
    