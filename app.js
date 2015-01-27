$(document).ready(function() {
    $('.get-price').on('click', function() {
        var col = $(this).closest('.col')
        var amount = col.data('price');
        var price = $('<p class="price">From $'+amount+'</p>');
        col.append(price);
        $(this).remove(); 
    });
    $('#filters').on('click', '.onsale-filter', function() {
    $('.col').filter('.expiring').removeClass('highlighted'); 
    $('.col').filter('.onsale').toggleClass('highlighted');
    });
    $('#filters').on('click', '.expiring-filter', function() {
        $('.col').filter('.onsale').removeClass('highlighted'); 
        $('.col').filter('.expiring').toggleClass('highlighted');
    });
    
//    $('.onsale-filter', '.expiring-filter').on('click', function() {
//        $(this).toggleClass('highlighted');
//    });
});

/*
window.addEventListener('load', function() {
    var prices = document.querySelectorAll('.get-price');
    prices = [].forEach.call( prices, function(e) {
        e.addEventListener('click', function() {
            var col = this.parentNode;
            var p = document.createElement('p');
            p.className = 'price';
            p.innerHTML = 'From $' + col.getAttribute('data-price');
            col.appendChild(p);
            this.remove();
        });
    });
});
*/


//    $('.get-price').on('click', function() {
//        var col = $(this).closest('.col')
//        var amount = col.data('price');
//        var price = $('<p class="price">From $'+amount+'</p>');
//        col.append(price);
//        $(this).remove(); 
//    });
//    document.getElementById('#filters').on('click', '.onsale-filter', function() {
//    $('.col').filter('.expiring').removeClass('highlighted'); 
//    $('.col').filter('.onsale').toggleClass('highlighted');
//    });
//    $('#filters').on('click', '.expiring-filter', function() {
//        $('.col').filter('.onsale').removeClass('highlighted'); 
//        $('.col').filter('.expiring').toggleClass('highlighted');
//    });


