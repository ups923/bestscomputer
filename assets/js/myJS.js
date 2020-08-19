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
    $('.vw_about').load("views/vw_about_team.html").remove();
    $('.vw_video').load("views/vw_video.html").remove();
    $('.vw_testimonio').load("views/vw_testimonio.html").remove();
    $('.vw_encuesta').load("views/vw_encuesta.html").remove();
    $('.vw_listPrecio').load("views/vw_listPrecio.html").remove();
    
});
