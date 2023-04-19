'use strict';

$(document).ready( () => {

    $('#btnHome').click( () => {

        goLocation.ChangeView('../../');

    });

    $('#btnSendForm').click( (e) => {
        
        e.preventDefault();

        let strFullName = e.target.form[0].value;
        let strEmail = e.target.form[1].value;
        let strPhone = e.target.form[2].value;
        let strCity = e.target.form[3].value;
        let strProyectName = e.target.form[4].value;
        let strCompanyName = e.target.form[5].value;
        let strMessage = e.target.form[6].value;

    });

    function sendMail() {

        return new Promise( (resolve, reject) => {

            fetch("https://maddiapp.somee.com/api/Mail/SendMail", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  "title": "title",
                  "email": "dannymateoh1@gmail.com",
                  "subject": "subject",
                  "body": "body"
                })
            }).then(async response => {

                let data = await response.json();
                console.log(JSON.stringify(data));
                resolve(data);

            }).catch(error => {

                reject(error);
                console.log(error)

            });
            
        });

    }

    $(window).on('load', () => {
        
        $('spinner').hide();

    });

});