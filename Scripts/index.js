'use strict';

$(document).ready( () => {

    let mitad = $('.servicios > .container')[0].scrollWidth / 2;
    $('.servicios > .container')[0].scrollTo(mitad - 230, 0);    
    $('.beneficios > .container')[0].scrollTo(mitad -230, 0);

    $('#optInicio').click( () => {

        window.scrollTo({
            top: $('.inicio')[0].offsetTop - 96,
            behavior: "smooth"
        });

    });

    $('#optServicios').click( () => {

        window.scrollTo({
            top: $('.servicios')[0].offsetTop - 96,
            behavior: "smooth"
        });

    });

    $('#optBeneficios').click( () => {

        window.scrollTo({
            top: $('.beneficios')[0].offsetTop - 96,
            behavior: "smooth"
        });

    });

    $('#optNosotros').click( () => {

        window.scrollTo({
            top: $('.nosotros')[0].offsetTop - 96,
            behavior: "smooth"
        });

    });

    $(window).scroll( () => {
        
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        let section1 = $('.inicio')[0];
        let divTop1 = section1.offsetTop - 100;
        let divHeight1 = section1.offsetHeight;

        let section2 = $('.servicios')[0];
        let divTop2 = section2.offsetTop - 100;
        let divHeight2 = section2.offsetHeight;

        let section3 = $('.beneficios')[0];
        let divTop3 = section3.offsetTop - 100;
        let divHeight3 = section3.offsetHeight;

        let section4 = $('.nosotros')[0];
        let divTop4 = section4.offsetTop - 100;
        let divHeight4 = section4.offsetHeight;

        $('#optInicio').removeClass('optNavbarSelected');
        $('#optServicios').removeClass('optNavbarSelected');
        $('#optBeneficios').removeClass('optNavbarSelected');
        $('#optNosotros').removeClass('optNavbarSelected');

        if (scrollTop > divTop1 && scrollTop < (divTop1 + divHeight1)) {

            $('#optInicio').addClass('optNavbarSelected');

        } else if (scrollTop > divTop2 && scrollTop < (divTop2 + divHeight2)) {
            
            $('#optServicios').addClass('optNavbarSelected');
            
        } else if (scrollTop > divTop3 && scrollTop < (divTop3 + divHeight3)) {
            
            $('#optBeneficios').addClass('optNavbarSelected');
            
        } else if (scrollTop > divTop4 && scrollTop < (divTop4 + divHeight4)) {
            
            $('#optNosotros').addClass('optNavbarSelected');
            
        }

    });

    $('#btnUs').click( () => {

        goLocation.ChangeView('./Views/Nosotros/');

    });

});