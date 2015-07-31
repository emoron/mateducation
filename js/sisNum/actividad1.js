/* Sistemas Numericos
*/


    var expresiones = [];
    for(var i = 0 ; i <= 5; i++){
        var numero = Math.floor(Math.random()*listado.length);
       //Console.log(numero);
       var expr1 = listado[numero];
       expresiones.push(expr1);
    }


var copiaListado = [];
var Monomios = [];
var Binomios = [];
var Polinomios = [];
var Trinomios = [];


    $.each(expresiones,function(index, valor){

        var identificador = valor.clase + index;
        var objeto ="<div data-index=\""+index+"\" id=\"" + valor.clase + "\" class=\"square\">" +
                " <div id=\"" + identificador + "\"></div></div></div>";

        var objeto2 = objeto;
       $(".cajas").after(""+objeto);
      //$("TEST").insertBefore("#objecto")
        var variable =   '$$' + math.parse(valor.expresion).toTex() + '$$';

         eval(identificador).innerHTML = variable;

       copiaListado.push('<li id="eq'+index +'" >'+valor.expresion+'</li>');
    });

function resultado() {

  $('#nada').hide();
  var resultados1 = "";
  $.each(Monomios,function(index,value){
      resultados1 += "" + copiaListado[value];
  });
  $('#target').html(resultados1);
  var resultados2 = "";
  $.each(Binomios,function(index,value){
      resultados2 += "" + copiaListado[value];

  });
    $('#target2').html(resultados2);
  var resultados3 = "";
  $.each(Trinomios,function(index,value){
      resultados3 += copiaListado[value];
  });
  $('#target3').html(resultados3);

  var resultados4 = "";
  $.each(Polinomios,function(index,value){
      resultados4 += copiaListado[value];
  });
  $('#target4').html(resultados4);

  //$('#objeto').show();
  var math = $("#target");

  //Reload  las ecuaciones
  //MathJax.Hub.Queue(["Typeset",MathJax.Hub,math]);
//ver http://stackoverflow.com/questions/18490026/refresh-reload-the-content-in-div-using-jquery-ajax
  }

  $( "#newActivity" ).click(function() {
           location.reload();
  });

    $(function () {
      $('#objeto').hide();

        $(".square").draggable(
          {
          revert:  function(event) {
  					console.log(event);
             var dropped = event && dropped[0].id == "droppable";
             if(!dropped) //alert("I'm reverting!");
             return !dropped;
          }
  			}).each(function() {
          var top = $(this).position().top;
          var left = $(this).position().left;
          //$(this).data('orgTop', top);
          //$(this).data('orgLeft', left);
      });
      $("#racionales").droppable({
              accept: "#Racional",
              revert: true,
              revertDuration: 200,
              drop: function (event, ui) {
                Monomios.push(ui.draggable.data('index'));
                ui.draggable.remove();
                resultado();
                $(this).css("background-color", "lightgreen");
                //$('#monomio').clone().appendTo('#salida div.Monomios');
                //$("").append(ui);
                $(this).css("background-color", "");
              },
              out: function (event, ui) {
                      $(this).css("background-color", "")
              }
      });
      $("#irracionales").droppable({
              accept: "#Irracional",
              drop: function (event, ui) {
                      Binomios.push(ui.draggable.data('index'));
                      $(this).css("background-color", "lightgreen");
                      ui.draggable.remove();
                      resultado();
                      $(this).css("background-color", "")
              },
              out: function (event, ui) {
                      $(this).css("background-color", "")

              }
      });


});
