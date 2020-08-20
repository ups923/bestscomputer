// Declarando ----- Deja de ver mi codigo pedazo de sapo //
API = 'https://grado100mil.000webhostapp.com/vendor/mails/API.php';
// ===============================================================

/* ========= TROZO CODIGO ===============*/
$(document).ready(function() { 
    $('body').on('click', '#SELECTORRR', function() {
        //AQUI TODA LA LOGICA
        
    });
}); 

/* ========= onLOAD ===============*/
$(document).ready(function() {
    $('.vw_api_ws').load("views/vw_api_ws.html");
    $('.vw_header').load("views/vw_header.html");
    $('.vw_pre_footer').load("views/vw_pre_footer.html");
    $('.vw_footer').load("views/vw_footer.html");
    $('.vw_contacto').load("views/vw_contacto.html");
    $('.vw_servicios').load("views/vw_servicios.html");
    $('.vw_about').load("views/vw_about_team.html").remove();
    $('.vw_video').load("views/vw_video.html").remove();
    $('.vw_testimonio').load("views/vw_testimonio.html").remove();
    $('.vw_encuesta').load("views/vw_encuesta.html").remove();
    $('.vw_listPrecio').load("views/vw_listPrecio.html").remove();
    
});
$(function() {
        $('#WAButton').floatingWhatsApp({
          phone: '584144239765', 
          headerTitle: 'Chatea con nosotros!',
          popupMessage: 'Hola, como puedo ayudarte?', 
          showPopup: true, //PopUp activo
          buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
          //headerColor: 'crimson', //Custom header color
          //backgroundColor: 'crimson', //Custom background button color
          position: "center"    
        });
});

/* ========= Envio email website ===============*/
$(document).ready(function () {
    $('body').on('click', '#enviar_email', function () {
        $(this.id).prop('disabled',true);
        
        nombre = $('#cname').val(); email = $('#cemail').val(); msg = $('#cmessage').val();

        ////$("#contactForm").validate();
        $("#contactForm").validate({
            event: "blur", rules: {'cname': "required", 'cemail': "required email", 'cmessage': "required"},
            messages: {'cname': " Por favor indica tu nombre", 'cemail': " Por favor, indica una direcci&oacute;n de e-mail v&aacute;lida", 'cmessage': " Por favor, dime algo!"},
            debug: true, errorElement: "label",
            submitHandler: function (form) {
                //$("#alert").show();
                //$("#alert").html("<img src='images/ajax-loader.gif' style='vertical-align:middle;margin:0 10px 0 0' /><strong>Enviando mensaje...</strong>");
                //setTimeout(function () {
                //$('#alert').fadeOut('slow');
                //}, 5000);
                
                setTimeout(function () {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Tu correo ha sido enviado.',
                        showConfirmButton: false,
                        timer: 6000
                    })
                }, 3000);

                $.ajax({
                    type: 'POST',
                    url: API,
                    async: true,
                    data: {nombre: nombre, email: email, message: msg},
                    //dataType: 'jsonp',
                    //contentType: 'application/json',
                    //responseType: 'application/json',
                    success: function (data) {
                        console.log(data);
                        $(this.id).prop('disabled',false);
                        
                    },
                    error: function (error) {
                        $(this.id).prop('disabled',false);
                        console.log(error);
                    }
                });

            }
        });
    });
}); 

