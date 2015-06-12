var listado = [
  {
    "Perímetro": "4x",
    "figura": "fig_cuadrado.jpg",
    "area": "x^2"
  },
  {
    "Perímetro": "3f",
    "figura": "fig_triangulo.jpg",
    "area": "(fh)/2"
  },
  {
    "Perímetro": "2a+2b",
    "figura": "fig_rectangulo.jpg",
    "area": "ab"
  },
  {
    "Perímetro": "2rpi",
    "figura": "fig_circulo.jpg",
    "area": "pir^2"
  },
  {
    "Perímetro": "j+2k+l",
    "figura": "fig_trapecio.jpg",
    "area": "(j+l)i/2"
  },
  {
    "Perímetro": "6k",
    "figura": "fig_hexagono.jpg",
    "area": "6kc/2"
  },
  {
    "Perímetro": "4e",
    "figura": "fig_cuadrado2.jpg",
    "area": "e^2"
  },
  {
    "Perímetro": "2g+2r",
    "figura": "fig_rectangulo2.jpg",
    "area": "gr"
  },
  {
    "Perímetro": "5t",
    "figura": "fig_pentagono.jpg",
    "area": "5tq/2"
  },
  {
    "Perímetro": "2xpi",
    "figura": "circulo2.png",
    "area": "pix^2"
  },
  {
    "Perímetro": "d+2w+z",
    "figura": "fig_trapecio2.jpg",
    "area": "(d+z)p/2"
  },
  {
    "Perímetro": "3l",
    "figura": "fig_triangulo2.jpg",
    "area": "lb/2"
  },
  {
    "Perímetro": "5u",
    "figura": "fig_pentagono2.jpg",
    "area": "5uv/2"
  },
  {
    "Perímetro": "4f",
    "figura": "fig_cuadrado3.jpg",
    "area": "f^2"
  },
  {
    "Perímetro": "6s",
    "figura": "fig_hexagono2.jpg",
    "area": "6so/2"
  },
  {
    "Perímetro": "m+2i+k",
    "figura": "fig_trapecio3.jpg",
    "area": "(m+k)p/2"
  },
  {
    "Perímetro": "a+b+c",
    "figura": "fig_triangulo3.jpg",
    "area": "bc/2"
  },
  {
    "Perímetro": "2h+2n",
    "figura": "fig_cuadrado2.jpg",
    "area": "hn"
  }
];

          var expresiones = [];
          for(var i = 0 ; i <= 8; i++){
              var numero = Math.floor(Math.random()*listado.length);
             //Console.log(numero);
             var expr1 = listado[numero];
             expresiones.push(expr1);

        }
    
    

    $.each(expresiones,function(index, valor){
        
        var identificador = valor.clase + index;
        var objeto ="<div id=\"monomio\" class=\"square\">" +
                " <div id=\"" + identificador + "\"></div></div></div>";

       $("#objeto").after(""+objeto);    
      $("TEST").insertBefore("#objecto")
        var variable =   '$$' + math.parse(valor.expresion).toTex() + '$$';
        
       eval(identificador).innerHTML = variable;
    
    });

    
                  
        
          // initialize with an example expression
          

          

          $(function () {
                $(".square").draggable();
                $("#Monomios").droppable({
                        accept: "#monomio",
                        drop: function (event, ui) {
                                $(this).css("background-color", "lightgreen")
                        },
                        out: function (event, ui) {
                                $(this).css("background-color", "")
                        }
                });
                $("#Polinomios").droppable({
                        accept: "#polinomio",
                        drop: function (event, ui) {
                                $(this).css("background-color", "lightgreen")
                        },
                        out: function (event, ui) {
                                $(this).css("background-color", "")
                        }
                });
        });
