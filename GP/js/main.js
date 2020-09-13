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

    //selects

      //header menu 
    // burger

    $('[data-burger]').click(function(){
        $('html').toggleClass("open");
        $(this).toggleClass("open");
        $('[data-nav]').toggleClass("open");
      });

      // adaptive

      
})