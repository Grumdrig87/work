jQuery(document).ready(function($){    
  
     // accordeon

    $('[data-faq]').click(function(){
      $(this).find('.faq__title').toggleClass('opened');
      $(this).find('p').slideToggle(400);
    })

    //header menu 
    if ($(window).width() > 993) {
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
    }
    
    // burger

    $('[data-burger]').click(function(){
        $('html').toggleClass("open");
        $(this).toggleClass("open");
        $('[data-nav]').toggleClass("open");
        $('body').toggleClass('opened');
        $("[data-nav]").find('.menu-item-has-children').removeClass('opened');
        $("[data-nav]").removeClass('adapt-opened');
      });

      // adaptive
      if ($(window).width() < 994) {
        $('.header__main-menu > .menu-item-has-children').click(function(){
          $(this).addClass('opened');
          $("[data-nav]").addClass('adapt-opened');
        })
        $('.header__main-menu > .menu-item-has-children > a').after('<span class="adaptive-sub"></span>');
        $('.header__main-menu > .menu-item-has-children > .sub-menu').appendTo('.adaptive-sub');
      }

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

      //password

      $('[data-passview]').click( function(){
        if ($(this).parent().find('#pass').attr('type') == 'password'){
            $(this).parent().find('#pass').attr('type', 'text');
        } else {
            $(this).parent().find('#pass').attr('type', 'password');
        }
        return false;
    });

      
})