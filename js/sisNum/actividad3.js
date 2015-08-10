var item = [];
var inicial = Math.floor(Math.random()*listado.length);
var expresiones = listado[inicial];

//console.log(objeto1);
var strConstante = "";
var strVariables ="";
var strOperadores ="";

$.each(expresiones.constante,function(index,valor) {
  // body...
   strConstante += '<div id ="monomio" class="square"><div>'+valor+'</div></div>';
});

$.each(expresiones.variable,function(index,valor) {
  // body...
   strVariables += '<div id ="monomio" class="square"><div>$$'+valor+'$$</div></div>';
});
$.each(expresiones.operador,function(index,valor) {
  // body...
   strOperadores += '<div id ="monomio" class="square"><div>'+valor+'</div></div>';
});
$("#ecuacion").html("Expresión:"+"$$"+math.parse(expresiones.ecuacion).toTex()+"$$");
$('#expresiones').append(strConstante,strVariables,strOperadores);



//  monomios1.innerHTML = '$$' + math.parse(item[0]).toTex() + '$$';
//    monomios2.innerHTML = '$$' + math.parse(item[1]).toTex() + '$$';
//    monomios3.innerHTML = '$$' + math.parse(item[2]).toTex() + '$$';
//    monomios4.innerHTML = '$$' + math.parse(item[3]).toTex() + '$$';

$( "#newActivity" ).click(function() {
         location.reload();
});

  $(function () {
        $(".square").draggable({
          snap: true

          });
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
