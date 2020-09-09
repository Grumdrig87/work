$(document).ready(function(){
    $('[data-passview]').click( function(){
        if ($(this).parent().find('#pass').attr('type') == 'password'){
            $(this).parent().find('#pass').attr('type', 'text');
        } else {
            $(this).parent().find('#pass').attr('type', 'password');
        }
        return false;
    });
    
    $('[data-table]').footable();

    // подсчет выбранных полей

    var count = 0;

    $('[data-count]').click(function(){
        count = $('td input[type=checkbox]:checked').length;
    console.log(count);
    })
    
    $(function() {
        count = $('td input[type=checkbox]:checked').length;
        displayCount();  
    
        $('body').on('click', 'td input[type=checkbox]' , function(e, a) {   
             if (this.checked) {
                  count += a ? -1 : 1;
             } else {
                  count += a ? 1 : -1; 
             }
             displayCount();
             allChek();
        });
        $('[data-unselect]').click(function(e) {    
             $('[data-count]').text(0);
             $('td input[type=checkbox]').prop('checked', false);
             count = 0;
             allChek();
        });
    });
    function displayCount() {
        $('[data-count]').text(count);
    }



    $('body').on('click','[data-all]', function(){
        if ($(this).is(':checked')){
            $('td input[type=checkbox]').prop('checked', true);
        } else {
            $('td input[type=checkbox]').prop('checked', false);
        }
        count = $('td input[type=checkbox]:checked').length;
        displayCount();

    });


    function allChek () {
        $('body').find('td input[type=checkbox]').each(function() {
            if ($(this).prop('checked')==false){
                $('body [data-all]').prop('checked', false);
            } 
        });
    }
    
    //поля с перелетающими лэйблами

    $('[data-input]').on('blur', function () {
        var input = $(this).val();
        if (input.length > 0) { 
            $(this).parent().addClass('valid'); 
        } else { 
            $(this).parent().removeClass('valid');  
        }
    });

    // переключатель
    var inputBil = $('.profile__check input[type=checkbox]');

    $('.profile__month').click(function(){
        if ($(inputBil).is(':checked')) {
            $(inputBil).prop('checked', false);
        }
    })
    $('.profile__ann').click(function(){
        if ($(inputBil).is(':checked')) {
            return false;
        } else {
            $(inputBil).prop('checked', true);
        }
    })

})

