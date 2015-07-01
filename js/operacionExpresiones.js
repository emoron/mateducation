var listado = [

{
	"exp1": "3x+5x",
	"resultado": "8x",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "2x-3x",
	"resultado": "5x",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "-4x+7x",
	"resultado": "3x",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "3+2x-5",
	"resultado": "-2",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "-7+5x+12",
	"resultado": "5x-5",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "-x+2-x-2",
	"resultado": "0",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "4+x+3",
	"resultado": "x+7",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "x+4-6",
	"resultado": "x-2",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "x-2-4+2x",
	"resultado": "3x-6",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "3x-x+4-6",
	"resultado": "4x-2",
	"operacion": "suma y resta de monomios"
}
];

      var operacion = "suma";
var valorExpresion = [];

var numExpresion = 0;
      for(var i = 0 ; i <= 6; i++){
              var numero = Math.floor(Math.random()*listado.length);
             console.log(numero);
             var expr1 = listado[numero];
             valorExpresion.push(expr1);

      }

var numero = Math.floor(Math.random()*9);

$.each(valorExpresion,function(index, ecuacion){


    var objeto = '<div class="square">' + '$$' + math.parse(ecuacion.exp1).toTex() + '$$' +  '</div>';
        console.log(objeto);
       $("#sandbox").append(objeto);
});


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


        });
