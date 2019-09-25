  $(".btn-reinicio").click(function(){
    // carga de tablero
    $("#juegofin").hide();
    $(".btn-reinicio").replaceWith("<button class='btn-reinicio'>Reiniciar</button>");
    colortitulo();
      cargardatos();
      mover();
  });
  function colortitulo(){
       $(".main-titulo").css({'color':'blue'});
       var control = setTimeout(function(){colortitulo1()},1000);
   }
   function colortitulo1(){
        $(".main-titulo").css({'color':'white'});
        var control = setTimeout(function(){colortitulo()},1000);
    }
  function cargardatos(){
    var columnas = $(".panel-tablero div");
      for (var i = 0; i < columnas.length; i++) {
        for (var j = 0; j <6; j++) {
          var num=Math.round(Math.random() * (4 - 1) + 1);
          $(columnas[i]).append('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">');
        }
      }
      activarcomprobacion();
    //  rellenar();
  }

window.onload = updateClock;
  var totalTime = 120;
  function updateClock() {
    document.getElementById('timer').innerHTML = totalTime;
    if(totalTime==0){
      $(".panel-tablero").hide();
      $("#juegofin").show();
      $(".panel-score").width(1500).height(800);
      $(".btn-reinicio").hide();
      $(".time").hide();
      $(".main-titulo").css({'font-size':'4em'});
    }else{

      totalTime-=1;
      setTimeout("updateClock()",1000);
    }
  }
  function activarcomprobacion(){
       //se activa el método alert luego de 2 segundos
       var control = setTimeout(function(){comprobarverticales()},2000);
   }
   function activarcomprobacion1(){
        //se activa el método alert luego de 2 segundos
        var control = setTimeout(function(){comprobarhorizontales()},2000);
    }
   function activarrelleno(){
        //se activa el método alert luego de 2 segundos
        var control = setTimeout(function(){rellenar()},2000);
    }
  function comprobarverticales(){
    var columnasllenas = $(".panel-tablero div").children();
      for (var i = 0; i < 30; i++) {
        if (columnasllenas[i].id == columnasllenas[i+6].id && columnasllenas[i].id == columnasllenas[i+12].id && columnasllenas[i+6].id == columnasllenas[i+12].id) {
          console.log("posición "+i+"-----"+columnasllenas[i].id +" --- "+columnasllenas[i+6].id +" --- "+columnasllenas[i+12].id +" --- ");
          var marcador=$('#score-text').text();
          var marca=parseInt(marcador);
          marca=marca+10;
          $('#score-text').text(marca);
          $(columnasllenas[i+12]).effect( "pulsate",2000);
          $(columnasllenas[i+6]).effect( "pulsate",2000);
          $(columnasllenas[i]).effect( "pulsate",2000,function(){
            eliminarverticales();
          } );
        }else {
          comprobarhorizontales();
        }
      }

    }

    function comprobarhorizontales(){
      var marcador=$('#score-text').text();
      var marca=parseInt(marcador);
    for (var j = 0; j <7; j++) {
      var valores=$('.col-'+j+'').children();

    for (var i = 2; i < valores.length; i++) {
      if (valores[i-2].id == valores[i-1].id && valores[i-2].id == valores[i].id && valores[i-2].id == valores[i].id) {
        marca=marca+10;
        console.log(marcador);
        $(valores[i-2]).effect( "pulsate",2000);
        $(valores[i-1]).effect( "pulsate",2000);
        $(valores[i]).effect( "pulsate",2000,function(){
          eliminarhorizontales();
        } );
      }
    }
    }
    $('#score-text').text(marca);
    marca=0;
    }
    function eliminarverticales(){
      var columnasllenas = $(".panel-tablero div").children();
        for (var i = 0; i < 30; i++) {
          if (columnasllenas[i].id == columnasllenas[i+6].id && columnasllenas[i].id == columnasllenas[i+12].id && columnasllenas[i+6].id == columnasllenas[i+12].id) {
              columnasllenas[i].remove();
              columnasllenas[i+6].remove();
              columnasllenas[i+12].remove();
            }
          }activarrelleno();
        }
  function eliminarhorizontales(){
    for (var j = 0; j <7; j++) {
      var valores=$('.col-'+j+'').children();

    for (var i = 2; i < valores.length; i++) {
      if (valores[i-2].id == valores[i-1].id && valores[i-2].id == valores[i].id && valores[i-2].id == valores[i].id) {
        valores[i-2].remove();
        valores[i-1].remove();
        valores[i].remove();
      }
    }
  }activarrelleno();
}
    function rellenar(){
    for (var i = 1; i <8; i++) {
      var columnasllenas = $(".col-"+i+"").children();
      var n= columnasllenas.length;
      console.log("numero -----------------"+n);
        if (n<6) {
          for (var j = 0; j < 6 - n; j++) {
            var num=Math.round(Math.random() * (4 - 1) + 1);
            $(".col-"+i+"").prepend('<img class="soltar" id="'+num+'" src="image/'+num+'.png" alt="">').slideDown("slow");
          }
        }
      }
        activarcomprobacion();
      activarcomprobacion1();
  }

function mover(){



      //  $(".soltar" ).draggable();
        //  $(".col-2").droppable();
        $( '.soltar' ).draggable({
    helper: 'clone'
  });
  $( '.col-7' ).droppable({
    accept: '.soltar',
    drop: function( ev, ui ) {
      ui.draggable.detach();
      $( this ).append( ui.draggable );
      var marcador=$('#movimientos-text').text();
      var marca=parseInt(marcador);
      marca=marca+1;
      opera();
      $('#movimientos-text').text(marca);
    }
  });
  $( '.col-6' ).droppable({
    accept: '.soltar',
    drop: function( ev, ui ) {
      ui.draggable.detach();
      $( this ).append( ui.draggable );
      var marcador=$('#movimientos-text').text();
      var marca=parseInt(marcador);
      marca=marca+1;
      opera();
      $('#movimientos-text').text(marca);
    }
  });
  $( '.col-5' ).droppable({
    accept: '.soltar',
    hoverClass: 'hovering',
    drop: function( ev, ui ) {
      ui.draggable.detach();
      $( this ).append( ui.draggable );
      var marcador=$('#movimientos-text').text();
      var marca=parseInt(marcador);
      marca=marca+1;
      $('#movimientos-text').text(marca);
      opera();
    }
  });
  $( '.col-4' ).droppable({
    accept: '.soltar',
    drop: function( ev, ui ) {
      ui.draggable.detach();
      $( this ).append( ui.draggable );
      var marcador=$('#movimientos-text').text();
      var marca=parseInt(marcador);
      marca=marca+1;
      $('#movimientos-text').text(marca);
      opera();
    }
  });
  $( '.col-3' ).droppable({
    accept: '.soltar',
    hoverClass: 'hovering',
    drop: function( ev, ui ) {
      ui.draggable.detach();
      $( this ).append( ui.draggable );
      var marcador=$('#movimientos-text').text();
      var marca=parseInt(marcador);
      marca=marca+1;
      $('#movimientos-text').text(marca);
      opera();
    }
  });
  $( '.col-2' ).droppable({
    accept: '.soltar',
    drop: function( ev, ui ) {
      ui.draggable.detach();
      $( this ).append( ui.draggable );
      var marcador=$('#movimientos-text').text();
      var marca=parseInt(marcador);
      marca=marca+1;
      $('#movimientos-text').text(marca);
      opera();
    }
  });
  $( '.col-1' ).droppable({
    accept: '.soltar',
    hoverClass: 'hovering',
    drop: function( ev, ui ) {
      ui.draggable.detach();
      $( this ).append( ui.draggable );
      var marcador=$('#movimientos-text').text();
      var marca=parseInt(marcador);
      marca=marca+1;
      $('#movimientos-text').text(marca);
      opera();
    }
  });
}
