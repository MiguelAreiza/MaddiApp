'use strict';

$(document).ready( () => {

    setTimeout(() => {

        let mitad = $('.container')[0].scrollWidth / 2;
        $('.container')[0].scrollTo(mitad - 230, 0);    
        $('.container')[1].scrollTo(mitad -230, 0);
        
    }, 500);

    $('#btnHome').click( () => {

        goLocation.ChangeView('../../');

    });

});