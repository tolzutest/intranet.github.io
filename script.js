// Write on keyup event of keyword input element
$(document).ready(function() {
  var web = $(document);
  var logo = $(".logo");
  var anclas = $('a[href*="#"]');
  var website = $('html, body');  
  var buscador = $('.buscador');
  var menu_phone = $('.menu_btn');
  
  menu_phone.on('click', function(){
    var menu_phone = $('.menu-principal_container .menu_container');
    menu_phone.toggleClass('active');
  });
  
  //Activar el buscador
  buscador.keyup(function() {    
    
    $(".lista").addClass("open");
    $("#expandir-todo").prop('checked', true);
    
    _this = this;
    // grupo de cosas que se ocultaran
    $.each($("#grupo-busqueda .seccion li, #grupo-busqueda .seccion, #grupo-busqueda .subseccion"), function() {
      if (
        $(this)
        .text()
        .toLowerCase()
        .indexOf(
          $(_this)
          .val()
          .toLowerCase()
        ) === -1
      ){
        $(this).hide();
      }
      else {
        $(this).show();
      }
    });
    
  });

// prevenir el salto de pagina en enlaces trigger
  function ancla_scroll() {
    anclas.on("click", scroll_A);  
  };

  function scroll_A (){
    event.preventDefault();
    var where = $(this).attr('href');
    website.animate({ 
      scrollTop : $( where ).offset().top-80 }, 'slow');
  };

  ancla_scroll();  
  
  /*SLIDER*/
  $('.slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000
  });
  
  var btn_pbx = $('[href="#pbx_box"]')
  var close_popup = $('.close_popup');
  var pbx_pop = $('#pbx_box');
  var popup = $('.popup');
  var containers = $('.containers');
  var ocultos = $('.seccion_oculta');
  
  btn_pbx.on('click', function(){
    containers.addClass('blur');
    ocultos.removeClass('hide').addClass('active');
    close_popup.removeClass('ocultar').addClass('show');
    pbx_pop.removeClass('bye_popup').addClass('active');
  });
  
  close_popup.on('click',function(){
    containers.removeClass('blur');
    pbx_pop.removeClass('active').addClass('bye_popup');
    close_popup.removeClass('show').addClass('ocultar');
    ocultos.removeClass('active').addClass('hide');
  });  
  
  function removerClaseCuando(target,clase,seconds){
    setTimeout(function() {
       target.removeClass(clase);
   }, seconds);  
  }  
  function agregarClaseCuando(target,clase,seconds){
    setTimeout(function() {
       target.removeClass(clase);
   }, seconds);  
  }
});