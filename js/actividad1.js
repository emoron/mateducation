$(function () {

  var item = [];
  var inicial = Math.floor(Math.random()*listado.length);
  var expresiones = listado[inicial];

  console.log(expresiones);
  var strConstante = "";
  var strVariables ="";
  var strOperadores ="";

  $.each(expresiones.constante,function(index,valor) {
    // body...
     strConstante += '<div id ="constante" class="square"><div>'+valor+'</div></div>';
  });
  $.each(expresiones.variable,function(index,valor) {
    // body...
     strVariables += '<div id ="variable" class="square"><div>'+valor+'</div></div>';
  });
  $.each(expresiones.operador,function(index,valor) {
    // body...
     strOperadores += '<div id ="operador" class="square"><div>'+valor+'</div></div>';
  });
  $('#expresiones').append(strConstante,strVariables,strOperadores);

  $('#ecuacion').html('<span>'+'$$'+math.parse(expresiones.ecuacion).toTex()+'$$</span>');

        $(".square").draggable({
        revert:  function(event) {
					console.log(event);
           var dropped = event && dropped[0].id == "droppable";
           if(!dropped) //alert("I'm reverting!");
           return !dropped;
        }
			}).each(function() {
        var top = $(this).position().top;
        var left = $(this).position().left;
        $(this).data('orgTop', top);
        $(this).data('orgLeft', left);
    });
        $("#Exponentes").droppable({
                accept: "#exponentes",

                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen");
                        ui.draggable.remove();
                        $(this).css("background-color", "#B1B1B1");

                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Operadores").droppable({
                accept: "#operador",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen");
                        ui.draggable.remove();
                        $(this).css("background-color", "#B1B1B1");

                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Constantes").droppable({
                accept: "#constante",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen");
                        ui.draggable.remove();
                        $(this).css("background-color", "#B1B1B1");

                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Variables").droppable({
                accept: "#variable",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen");
                        ui.draggable.remove();
                        $(this).css("background-color", "#B1B1B1");
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });

        $( "#newActivity" ).click(function() {
                 location.reload();
        });
});
