var listado = [
  {
    "Perimetro": "4x",
    "figura": "fig_cuadrado.jpg",
    "area": "x^2"
  },
  {
    "Perimetro": "3f",
    "figura": "fig_triangulo.jpg",
    "area": "(fh)/2"
  },
  {
    "Perimetro": "2a+2b",
    "figura": "fig_rectangulo.jpg",
    "area": "ab"
  },
  {
    "Perimetro": "2r*pi",
    "figura": "fig_circulo.jpg",
    "area": "pi*r^2"
  },
  {
    "Perimetro": "j+2k+l",
    "figura": "fig_trapecio.jpg",
    "area": "(j+l)i/2"
  },
  {
    "Perimetro": "6k",
    "figura": "fig_hexagono.jpg",
    "area": "6kc/2"
  },
  {
    "Perimetro": "4e",
    "figura": "fig_cuadrado2.jpg",
    "area": "e^2"
  },
  {
    "Perimetro": "2g+2r",
    "figura": "fig_rectangulo2.jpg",
    "area": "gr"
  },
  {
    "Perimetro": "5t",
    "figura": "fig_pentagono.png",
    "area": "5tq/2"
  },
  {
    "Perimetro": "2x*pi",
    "figura": "circulo2.png",
    "area": "pi*x^2"
  },
  {
    "Perimetro": "d+2w+z",
    "figura": "fig_trapecio2.jpg",
    "area": "(d+z)p/2"
  },
  {
    "Perimetro": "3l",
    "figura": "fig_triangulo2.jpg",
    "area": "lb/2"
  },
  {
    "Perimetro": "5u",
    "figura": "fig_pentagono2.jpg",
    "area": "5uv/2"
  },
  {
    "Perimetro": "4f",
    "figura": "fig_cuadrado3.jpg",
    "area": "f^2"
  },
  {
    "Perimetro": "6s",
    "figura": "fig_hexagono2.jpg",
    "area": "6so/2"
  },
  {
    "Perimetro": "m+2i+k",
    "figura": "fig_trapecio3.jpg",
    "area": "(m+k)p/2"
  },
  {
    "Perimetro": "a+b+c",
    "figura": "fig_triangulo3.jpg",
    "area": "bc/2"
  },
  {
    "Perimetro": "2h+2n",
    "figura": "fig_cuadrado2.jpg",
    "area": "hn"
  }
];

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

    var  imagen = "<div id=\"grafica"+ index  + "\" class=\"squaredotted\">" + "<img src=\"img/" + imagen + " \"  style=\"width: 180px\"/>" +"" +  "</div>";

        $("#objeto2").after("" + imagen); 
        
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
