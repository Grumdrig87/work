jQuery(document).ready(function($){


    //mainpage tabs
    // $('[data-tab]').on('click', function() {
    //     $(this).addClass('active').siblings().removeClass('active')
    //       .closest('div.main__right').find('div.main__form').removeClass('active').eq($(this).index()).addClass('active');
    // });


     
  
     // accordeon

    //  $('[data-expopen]').click(function(){
    //   $(this).closest('div.explore__table-wrap').toggleClass('active');
    //   $(this).toggleClass('opened');
    //   $(this).closest('div.explore__table-wrap').find('.explore__info').slideToggle(400);
    //   $(this).closest('div.explore__table-wrap').prev().toggleClass('bord')
    // })

    // $('[data-faq]').click(function(){
    //   $(this).toggleClass('active');
    //   $(this).find('.explore__open').toggleClass('opened');
    //   $(this).find('.explore__info').slideToggle(400);
    //   $(this).prev().toggleClass('bord');
    // })

    //header menu 
    $('.menu-item-has-children').click(function(){
      $(this).find('.sub-menu').addClass('opened');
      $('header').addClass('opened');
      $('body').addClass('opened');
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