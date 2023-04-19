'use strict';

$(document).ready( () => {

    $('#btnHome').click( () => {

        goLocation.ChangeView('../../');

    });

    $('#btnStart').click( () => {

        goLocation.ChangeView('../contacto/');

    });

    $(window).on('load', () => {
        
        $('spinner').hide();

    });

});