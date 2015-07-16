var path="img-selecciona/";
var listado =
  [{
  	"figura": "figura07.png",
  	"area": "(fh)/2",
  	"expresion": "(12fh)/2",
  	"sumatoria": "12"
  },
  {
  	"figura": "figura08.png",
  	"area": "(6fh)/2",
  	"expresion": "(12fh)/2",
  	"sumatoria": "12"
  },
  {
  	"figura": "figura09.png",
  	"area": "(5fh)/2",
  	"expresion": "(12fh)/2",
  	"sumatoria": "12"
  },
  {
  	"figura": "figura10.png",
  	"area": "(fh)/2,",
  	"expresion": "f^2+(3fh)/2",
  	"sumatoria": "4"
  },
  {
  	"figura": "figura11.png",
  	"area": "f^2",
  	"expresion": "f^2+(3fh)/2",
  	"sumatoria": "4"
  },
  {
  	"figura": "figura12.png",
  	"area": "fh",
  	"expresion": "f^2+(3fh)/2",
  	"sumatoria": "4"
  },
  {
  	"figura": "figura13.png",
  	"area": "(pi)h^2",
  	"expresion": "(pi)h^2+4f^2+2fh",
  	"sumatoria": "4(pi)+8"
  }];


          var expresiones = listado.slice(0,3);
        //  for(var i = 0 ; i <= 2; i++){
        //      var numero = Math.floor(Math.random()*listado.length);
             // console.log(numero);
      //       var expr1 = listado[numero];
        //     expresiones.push(expr1);

      //  }



    $.each(expresiones,function(index, valor){

        var identificador = "figura" + index;
    //    var objeto = " <div id=\"" + identificador + "\"  class=\"square\">" +
    //           "<p> Area </p>" + '$$' + math.parse(valor.area).toTex() + '$$' +
    //            "<p> Perimetro </p>" + '$$' + math.parse(valor.expresion).toTex() + '$$'+ "</div>";
  //      console.log(valor);

  //     $("#objeto").after(""+objeto);

       var imagen = "" + path + valor.figura;

      // console.log(imagen);

    var  imagen = "<div id=\"grafica"+ index  + "\" class=\"squaredotted\">" + "<img src=\"" + imagen + " \"  style=\"width: 80px\"/>" +"" +  "</div>";

        $("#figuras").append("" + imagen);

     //  eval(identificador).innerHTML = variable;

      // var figura =+
     //           " <div id=\"" + identificador + "\">;
     //   eval(identificador).innerHTML = variable;
    });




          // initialize with an example expression




$(function () {

                $(".square").draggable();
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
