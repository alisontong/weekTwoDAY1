$(document).ready(function() {
    $('.listItemInput').focus();

    $(document)

    // Add to list
    .on('click', '.addToList', function() {
        //trim() get rid of the space
        var itemToAdd = $('input[name="listItemInput"]').val().trim();
         //added to the div
        if ( itemToAdd ) {
            $('.listItems').append('<div class="input"><input type="checkbox" name="item" class="item" value="' + itemToAdd + '" /> '+ itemToAdd +'</div>');
        }
        //val {''} set the value to empty
        $('.listItemInput').val('').focus();
    })
    
    // Remove from list
    .on('change', '.item', function() {
        if( $(this).is(':checked') ){
            console.log($(this))
            var parentElem = $(this).parent();
            parentElem.effect('puff', 500, function() {
                parentElem.remove();
            });
        }
    });
    
    $('.addToListForm').submit( function(e) {
        e.preventDefault();
        
        return false;
    });
    
    // Make the list sortable
    $('.listItems').sortable();

    
    
});