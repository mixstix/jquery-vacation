$(document).ready(function() {
    $('.get-price').on('click', function() {
        var col = $(this).closest('.col')
        var amount = col.data('price');
        var price = $('<p class="price">From $'+amount+'</p>');
        col.append(price);
        $(this).remove(); 
    });
    $('#filters').on('click', '.onsale-filter', function() {
        $('.highlighted').removeClass('highlighted'); 
        $('.col').filter('.onsale').addClass('highlighted');
    });
    $('#filters').on('click', '.expiring-filter', function() {
        $('.highlighted').removeClass('highlighted'); 
        $('.col').filter('.expiring').addClass('highlighted');
    });
    
    $('.onsale-filter', '.expiring-filter').on('click', function() {
        $(this).toggleClass('highlighted');
    });
});

