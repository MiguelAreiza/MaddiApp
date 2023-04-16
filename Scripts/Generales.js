'use strict';
function Redirect() {

    this.LinkedIn = () => {
        window.open('https://www.linkedin.com/company/maddiapp/');
    }

    this.Instagram = () => {
        window.open('https://www.instagram.com/areizam11/');
    }

    this.TikTok = () => {
        window.open('https://www.tiktok.com/@maddiapp/');
    }

    this.WhatsApp = () => {
        window.open('https://api.whatsapp.com/send?phone=573245026814&text=¡Quiero cotizar un producto digital!');        
    }
    
}

function Toastr() {

    this.Info = (mesagge, title) => { 
        newMesagge(mesagge, title, 'toast-info');
    }

    this.Success = (mesagge, title) => {
        newMesagge(mesagge, title, 'toast-success');
    }

    this.Error = (mesagge, title) => {
        newMesagge(mesagge, title, 'toast-error');
    }

    this.Warning = (mesagge, title) => {
        newMesagge(mesagge, title, 'toast-warning');
    }
    
    function newMesagge(mesagge, title, type, id = newId()) {
        
        let data = $('#notifications :last-child').html() || '';

        if (!data.includes(mesagge)) {
            
            title ? title = `<b class="title">${title}</b>`: title = '';

            $('#notifications').append(`<div class="toast ${type}" id="${id}">${title}${mesagge}</div>`);
    
            $(`#${id}`).click(()=>{
                $(`#${id}`).remove();
            });
        
            setTimeout(() => {
                $(`#${id}`).remove();
            }, 7000);

        }

    }   

}

function newId() {

    let Codigo = '';

    for (let i = 0; i < 3; i++) {   

        let str1, str2, str3, str4;
        /*Generar numeros random de acuerdo al codigo ASCII y convertirlos*/
        str1 = String.fromCharCode(Math.round((Math.random() * (57 - 48)) + 48));
        str2 = String.fromCharCode(Math.round((Math.random() * (90 - 65)) + 65));
        str3 = String.fromCharCode(Math.round((Math.random() * (122 - 97)) + 97));
        str4 = String.fromCharCode(Math.round((Math.random() * (57 - 48)) + 48));    

        /*Integrarlo al codigo*/
        Codigo += `${str1}${str2}${str3}${str4}`;

        if (i != 2) {
            Codigo += `-`;
        }

    }

    return Codigo;

}

function GoLocation() {

    this.ChangeView = (urlView) => {

        history.pushState(null, "", urlView); 

        fetch('./').then(async (response) => {
            
            $('body').html(await response.text());

        }).catch(() => {

            toastr.Error('Error en la transaccion');

        });

    }

}

// function ExecSp(spName) {

//     return new Promise((resolve, reject) => {

//         if (!spName) {

//             return reject('Error en el parametro');
            
//         }
        
//         fetch('https://www.TioLucho.somee.com/api/Procedures/ExecProcedure', {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 "procedure": spName
//             }),
//             redirect: 'follow'
//         }).then(async response => {
            
//             let data = (await response.json());
//             resolve(data);    

//         }).catch( error => {

//             reject(error);   

//         });

//     });

// }

// function GetUser() {
    
//     this.Id = (sessionStorage.AppUser) ? JSON.parse(sessionStorage.AppUser).Id : '';

//     this.NameUser = (sessionStorage.AppUser) ? JSON.parse(sessionStorage.AppUser).StrName : '';

// }

var redirect = new Redirect();
var toastr = new Toastr();
var goLocation = new GoLocation();
// var getUser = new GetUser();

$('.linkedIn').click( () => {
    redirect.LinkedIn();
});

$('.instagram').click( () => {
    redirect.Instagram();
});

$('.tikTok').click( () => {
    redirect.TikTok();
});

$('.whatsApp').click( () => {
    redirect.WhatsApp();
});

$('#languageES').click( () => {
    
    let lib = new google.translate.TranslateService();
    lib.translatePage('en', 'es', function () {});
    
    toastr.Success('Traducción a español');
    
});

$('#languageEN').click( () => {
    
    let lib = new google.translate.TranslateService();
    lib.translatePage('es', 'en', function () {});
    
    toastr.Success('Translate to english');

});