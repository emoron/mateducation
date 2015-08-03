

var ruta = "../../../img-relaciona/sisNum/module2/";

          var expresiones = [];
          for(var i = 0 ; i <= 3; i++){
              var numero = Math.floor(Math.random()*listado.length);
             console.log(numero);
             var expr1 = listado[numero];
             expresiones.push(expr1);

        }




    $.each(expresiones,function(index, valor){

        var identificador = "ecuacion" + index;

        var objeto = " <div id=\"" + identificador + "\"  class=\"square\">" +
                         '$$' + math.parse(valor.expresion).toTex() + '$$'+ "</div>";
        console.log(valor);

       $("#objeto").after(""+objeto);
    });


function shuffle(v){
       for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
       return v;
};

//shuffle(expresiones);
$.each(expresiones,function(index,valor) {
  var imagen = valor.figura;

//   console.log(imagen);

var  imagen = "<div id=\"grafica"+ index  + "\" class=\"squaredotted\">" + "<img src=\""+ruta + imagen + " \"  style=\"width: 200px\"/>" +"" +  "</div>";

   $("#objeto2").after("" + imagen);
});


          // initialize with an example expression




$(function () {
            $( "#newActivity" ).click(function() {
                     location.reload();
            });

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
                $("#grafica0").droppable({
                        accept: "#ecuacion0",
                        drop: function (event, ui) {
                                $(this).css("background-color", "lightgreen")
                                 ui.draggable.remove();
                        },
                        out: function (event, ui) {
                                $(this).css("background-color", "")
                        }
                });


              $(".square").draggable();
                $("#grafica1").droppable({
                        accept: "#ecuacion1",
                        drop: function (event, ui) {
                                $(this).css("background-color", "lightgreen")
                                 ui.draggable.remove();
                        },
                        out: function (event, ui) {
                                $(this).css("background-color", "")
                        }
                });

              $(".square").draggable();
                $("#grafica2").droppable({
                        accept: "#ecuacion2",
                        drop: function (event, ui) {
                                $(this).css("background-color", "lightgreen")
                                 ui.draggable.remove();
                        },
                        out: function (event, ui) {
                                $(this).css("background-color", "")
                        }
                });

                $(".square").draggable();
                $("#grafica3").droppable({
                        accept: "#ecuacion3",
                        drop: function (event, ui) {
                                $(this).css("background-color", "lightgreen")
                                 ui.draggable.remove();
                        },
                        out: function (event, ui) {
                                $(this).css("background-color", "")
                        }
                });
        });
