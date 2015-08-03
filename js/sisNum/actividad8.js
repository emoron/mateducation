/* Sistemas Numericos
*/
function shuffle (v){
   for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
   return v;
};

    var expresiones = [];
    var realExp = [];
    var imagExp = [];
    for(var i = 0 ; i <= 3; i++){
        var numero = Math.floor(Math.random()*listado.length);
       //Console.log(numero);
       var expr1 = listado[numero];
       expresiones.push(expr1);
       realExp.push(expr1.real);
       imagExp.push(expr1.imaginario);
    }

    realExp  = shuffle(realExp);
    imagExp = shuffle(imagExp);

var copiaListado = [];
var Monomios = [];
var Binomios = [];
var Polinomios = [];
var Trinomios = [];


    $.each(expresiones,function(index, valor){
      var variable1 =   '$$' + math.parse(valor.real).toTex() + '$$';
      var variable2=   '$$' + math.parse(valor.imaginario).toTex() + '$$';

        var real ="<div  id=\"real\" class=\"square\">" +
                "<div id=\"" +"real"+index+ "\">"+  variable1 + "</div></div>";
        var imagina ="<div id=\"imaginario\" class=\"square\">" +
                " <div id=\"" +"imaginario"+index+ "\">"+  variable2 + "</div></div>";


        var lista = '<table id="myTable"><tbody><tr>...</tr><tr>...</tr></tbody></table>';

//$("#myTable > tbody").append("<tr><td>row content</td></tr>");

       $("#objeto").append(real);
       $("#objeto").append(imagina);

      $("#expresiones").append("<li>$$"+math.parse(valor.numero).toTex()+"$$</li>");
      $('#real'+index).html("<p>"+variable1+"</p>");
      $("#imaginario"+index).html("<p>"+variable2+"</p>");
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
      //$('#objeto').hide();
$('#nada').hide();
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
      $("#reales").droppable({
              accept: "#real",
              revert: true,
              revertDuration: 200,
              drop: function (event, ui) {
                Monomios.push(ui.draggable.data('index'));
                ui.draggable.remove();
                //resultado();
                $(this).css("background-color", "lightgreen");
                //$('#monomio').clone().appendTo('#salida div.Monomios');
                //$("").append(ui);
                $(this).css("background-color", "");
              },
              out: function (event, ui) {
                      $(this).css("background-color", "")
              }
      });
      $("#imaginarios").droppable({
              accept: "#imaginario",
              drop: function (event, ui) {
                      Binomios.push(ui.draggable.data('index'));
                      $(this).css("background-color", "lightgreen");
                      ui.draggable.remove();
                      //resultado();
                      $(this).css("background-color", "")
              },
              out: function (event, ui) {
                      $(this).css("background-color", "")

              }
      });


});
