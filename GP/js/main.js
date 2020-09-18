jQuery(document).ready(function($){


    //mainpage tabs
    // $('[data-tab]').on('click', function() {
    //     $(this).addClass('active').siblings().removeClass('active')
    //       .closest('div.main__right').find('div.main__form').removeClass('active').eq($(this).index()).addClass('active');
    // });


     
  
     // accordeon

    $('[data-faq]').click(function(){
      $(this).find('.faq__title').toggleClass('opened');
      $(this).find('p').slideToggle(400);
    })

    //header menu 
    $('.menu-item-has-children').click(function(){
      $(this).find('.sub-menu').addClass('opened');
      $('header').addClass('opened');
      $('body').addClass('opened');
      $('[data-blkscr]').css('top', ($('.header').height() + $('.menu-item-has-children > .sub-menu').height()))
    })

    function closeMenu () {
      $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".menu-item-has-children"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
          div.find('.sub-menu').removeClass('opened');
          $('header').removeClass("opened");
          $('body').removeClass('opened');
        }
      });
    };

    closeMenu();
    // burger

    $('[data-burger]').click(function(){
        $('html').toggleClass("open");
        $(this).toggleClass("open");
        $('[data-nav]').toggleClass("open");
      });

      // adaptive


      //black
      $(window).scroll(function() {
        if (($(window).scrollTop() + 450) >= $('[data-black]').offset().top) {
          $('body').addClass('black');
        }
        if (($(window).scrollTop() + 450) < $('[data-black]').offset().top) {
          $('body').removeClass('black');
        }
        if (($(window).scrollTop() + 350) >= ($('[data-black]').offset().top + $('[data-black]').outerHeight(true))) {
          $('body').removeClass('black');
        }
      });

      
})