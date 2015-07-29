var listado = [
  {
    "Perimetro": "4x",
    "figura": "3.png",
    "area": "x^2"
  },
  {
    "Perimetro": "3f",
    "figura": "1.png",
    "area": "(fh)/2"
  },
  {
    "Perimetro": "2a+2b",
    "figura": "2.png",
    "area": "ab"
  },
  {
    "Perimetro": "2r*pi",
    "figura": "5.png",
    "area": "pi*r^2"
  },
  {
    "Perimetro": "j+2k+l",
    "figura": "6.png",
    "area": "(j+l)i/2"
  },
  {
    "Perimetro": "6k",
    "figura": "4.png",
    "area": "6kc/2"
  },
  {
    "Perimetro": "4e",
    "figura": "8.png",
    "area": "e^2"
  },
  {
    "Perimetro": "2g+2r",
    "figura": "9.png",
    "area": "gr"
  },
  {
    "Perimetro": "5t",
    "figura": "7.png",
    "area": "5tq/2"
  },
  {
    "Perimetro": "2x*pi",
    "figura": "11.png",
    "area": "pi*x^2"
  },
  {
    "Perimetro": "d+2w+z",
    "figura": "12.png",
    "area": "(d+z)p/2"
  },
  {
    "Perimetro": "3l",
    "figura": "10.png",
    "area": "lb/2"
  },
  {
    "Perimetro": "5u",
    "figura": "15.png",
    "area": "5uv/2"
  },
  {
    "Perimetro": "4f",
    "figura": "13.png",
    "area": "f^2"
  },
  {
    "Perimetro": "6s",
    "figura": "14.png",
    "area": "6so/2"
  },
  {
    "Perimetro": "m+2i+k",
    "figura": "17.png",
    "area": "(m+k)p/2"
  },
  {
    "Perimetro": "a+b+c",
    "figura": "18.png",
    "area": "bc/2"
  },
  {
    "Perimetro": "2h+2n",
    "figura": "16.png",
    "area": "hn"
  },
  {
    "Perimetro": "20j",
    "figura": "21.png",
    "area": "40jm/2"
  },
  {
    "Perimetro": "2q(pi)",
    "figura": "19.png",
    "area": "(pi)q^2"
  },
  {
    "Perimetro": "6a",
    "figura": "20.png",
    "area": "6az/2"
  },
  {
    "Perimetro": "3q^2+3w^2+3e^2",
    "figura": "25.png",
    "area": "9q^2w^2/2"
  },
  {
    "Perimetro": "xy",
    "figura": "24.png",
    "area": "0.0625x^2y^2"
  },
  {
    "Perimetro": "1/2t^2+1/2p^2",
    "figura": "22.png",
    "area": "1/16p^2t^2"
  }
];

var ruta = "../../img-relaciona/";

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
               "<p> Area </p>" + '$$' + math.parse(valor.area).toTex() + '$$' +
                "<p> Perimetro </p>" + '$$' + math.parse(valor.Perimetro).toTex() + '$$'+ "</div>";
        console.log(valor);

       $("#objeto").after(""+objeto);

       var imagen = valor.figura;

       console.log(imagen);

    var  imagen = "<div id=\"grafica"+ index  + "\" class=\"squaredotted\">" + "<img src=\""+ruta + imagen + " \"  style=\"width: 160px\"/>" +"" +  "</div>";

        $("#objeto2").after("" + imagen);

     //  eval(identificador).innerHTML = variable;

      // var figura =+
     //           " <div id=\"" + identificador + "\">;
     //   eval(identificador).innerHTML = variable;
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
