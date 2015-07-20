var path="img-selecciona/";
var listado =
[{
  "figura": "figura07.png",
  "area": "f*h/2",
  "expresion": "12*f*h/2",
  "sumatoria": "12"
},
{
  "figura": "figura08.png",
  "area": "6*f*h/2",
  "expresion": "12*f*h/2",
  "sumatoria": "12"
},
{
  "figura": "figura09.png",
  "area": "5*f*h/2",
  "expresion": "12*f*h/2",
  "sumatoria": "12"
},
{
  "figura": "figura10.png",
  "area": "f*h/2,",
  "expresion": "f^2+3*f*h/2",
  "sumatoria": "4"
},
{
  "figura": "figura11.png",
  "area": "f^2",
  "expresion": "f^2+3*f*h/2",
  "sumatoria": "4"
},
{
  "figura": "figura12.png",
  "area": "f*h",
  "expresion": "f^2+3*f*h/2",
  "sumatoria": "4"
},
{
  "figura": "figura13.png",
  "area": "pi*h^2",
  "expresion": "pi*h^2+4*f^2+2*f*h",
  "sumatoria": "4*pi*+8"
},
{
  "figura": "figura14.png",
  "area": "4*f^2",
  "expresion": "pi*h^2+4*f^2+2*f*h",
  "sumatoria": "4*pi*+8"
},
{
  "figura": "figura15.png",
  "area": "2*f*h",
  "expresion": "(pi)h^2+4f^2+2fh",
  "sumatoria": "4*pi*+8"
},
{
  "figura": "figura16.png",
  "area": "4*pi*f^2",
  "expresion": "4*pi*f^2+4*pi*h^2+9*h^2",
  "sumatoria": "20*pi+36"
},
{
  "figura": "figura17.png",
  "area": "9*h^2",
  "expresion": "4*pi*f^2+4*pi*h^2+9*h^2",
  "sumatoria": "20*pi+36"
},
{
  "figura": "figura18.png",
  "area": "4*pi*h^2",
  "expresion": "4*pi*f^2+4*pi*h^2+9*h^2",
  "sumatoria": "20*pi+36"
},
{
  "figura": "figura19.png",
  "area": "5*f*h/2",
  "expresion": "62*f*h/2",
  "sumatoria": "62"
},
{
  "figura": "figura20.png",
  "area": "3*f*h/2",
  "expresion": "62*f*h/2",
  "sumatoria": "62"
},
{
  "figura": "figura21.png",
  "area": "54*f*h/2",
  "expresion": "62*f*h/2",
  "sumatoria": "62"
},
{
  "figura": "figura22.png",
  "area": "3*f^2",
  "expresion": "3*f^2+4*h^2+3*f*h/2",
  "sumatoria": "22"
},
{
  "figura": "figura23.png",
  "area": "4*h^2",
  "expresion": "3*f^2+4*h^2+3*f*h/2",
  "sumatoria": "22"
},
{
  "figura": "figura24.png",
  "area": "3*f*h/2",
  "expresion": "3*f^2+4*h^2+3*f*h/2",
  "sumatoria": "22"
},
{
  "figura": "figura25.png",
  "area": "f*h",
  "expresion": "11*f*h/2",
  "sumatoria": "11"
},
{
  "figura": "figura26.png",
  "area": "3*f*h/2",
  "expresion": "11*f*h/2",
  "sumatoria": "11"
},
{
  "figura": "figura27.png",
  "area": "6*f*h/2",
  "expresion": "11*f*h/2",
  "sumatoria": "11"
},
{
  "figura": "figura28.png",
  "area": "f*h/2",
  "expresion": "30*f*h/2",
  "sumatoria": "30"
},
{
  "figura": "figura29.png",
  "area": "20*f*h/2",
  "expresion": "30*f*h/2",
  "sumatoria": "30"
},
{
  "figura": "figura30.png",
  "area": "9*f*h/2",
  "expresion": "30*f*h/2",
  "sumatoria": "30"
}];

var valores = [0,4,7,10,13,16,19,21];

          var n = Math.floor(Math.random()*valores.length);
          var numero = valores[n];
          var rango = numero + 3;
          var expresiones = listado.slice(numero,rango);
          



    $.each(expresiones,function(index, valor){

        var identificador = "figura" + index;


       var imagen = "" + path + valor.figura;

      // console.log(imagen);

    var  imagen = "<div id=\"grafica"+ index  + "\" class=\"squaredotted\">" + "<img src=\"" + imagen + " \"  style=\"width: 80px\"/>" +"" +  "</div>";

        $("#figuras").append("" + imagen);


    });



$(function () {

    $('#revisar0').click(function() {


      //Checamos las areas de las figuras
    if(  $('input[name="area1"]').val() == expresiones[0].area ){
        $('#mensaje1').html('');
        $('#mensaje1').append("<span class=\"glyphicon glyphicon-ok\"></span>");
      }
    else{
      $('#mensaje1').html('');
      $('#mensaje1').append("<span class=\"glyphicon glyphicon-remove\"></span>");
    }
    if(  $('input[name="area2"]').val() == expresiones[1].area ){
      $('#mensaje2').html('');
        $('#mensaje2').append("<span class=\"glyphicon glyphicon-ok\"></span>");
      }
    else{
      $('#mensaje2').html('');
      $('#mensaje2').append("<span class=\"glyphicon glyphicon-remove\"></span>");
    }
    if(  $('input[name="area3"]').val() == expresiones[2].area ){
      $('#mensaje3').html('');
        $('#mensaje3').append("<span class=\"glyphicon glyphicon-ok\"></span>");
      }
    else{
      $('#mensaje3').html('');
      $('#mensaje3').append("<span class=\"glyphicon glyphicon-remove\"></span>");
    }
    //Checamos la suma

    if(  $('input[name="expresionSuma"]').val() == expresiones[0].expresion ){
      $('#mensaje4').html('');
        $('#mensaje4').append("<span class=\"glyphicon glyphicon-ok\"></span>");
      }
    else{
      $('#mensaje4').html('');
      $('#mensaje4').append("<span class=\"glyphicon glyphicon-remove\"></span>");
    }

    if(  $('input[name="sumatoria"]').val() == expresiones[0].sumatoria ){
      $('#mensaje5').html('');
        $('#mensaje5').append("<span class=\"glyphicon glyphicon-ok\"></span>");
      }
    else{
      $('#mensaje5').html('');
      $('#mensaje5').append("<span class=\"glyphicon glyphicon-remove\"></span>");
    }


    });

});
