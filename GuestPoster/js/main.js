$(document).ready(function(){
    $('[data-passview]').click( function(){
        if ($('#pass').attr('type') == 'password'){
            $('#pass').attr('type', 'text');
        } else {
            $('#pass').attr('type', 'password');
        }
        return false;
    });
    
    $('[data-table]').footable();

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
    
    

})


// $(document).ready( function(){
  
//     // radio tabs
//     $('[data-id="donInput"]').change( function(){
//         var donatRadio = $('input[name=donatsearch__type]:checked').val();
//         console.log(donatRadio);
//         if ( donatRadio == 2 ) {
//             $('[data-id="donation-input"]').attr("placeholder", "E-mail");
//         }
//         else {
//             $('[data-id="donation-input"]').attr("placeholder", "+7 ( ______ ) _____ -____ -____");
//         }
//     })
// })