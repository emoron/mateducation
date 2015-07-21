//Actividad 9
//Tomar un elemento de la lista
//Tomar 4 Elementos aleatorios
//Hacer que sean Click y Droppable
var listado = [
  {
  	"exp1": "(5x^3+x^2 y-7xy^2 )",
  	"signo": "-",
  	"exp2": "(6x^3-9xy^2+8x-10)",
  	"resultado": "-x^3+x^2 y+2xy^2-8x+10",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(z^4-8z^3+2)",
  	"signo": "+",
  	"exp2": "(3z^4+8z^3-5z^2+z)",
  	"resultado": "4z^4-5z^2+z+2",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(15y^6-8y^5+2y^3 )",
  	"signo": "-",
  	"exp2": "(13y^6+4y^5-5y^3 )",
  	"resultado": "2y^6-12y^5+7y^3",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(4x^4+x^3 y-8x^2 y^2+3xy^5 )",
  	"signo": "+",
  	"exp2": "(5x^5-4x^4+6x^3 y-2x^2 y^2+1)",
  	"resultado": "5x^5+7x^3 y-10x^2 y^2+3xy^5+1",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(a^2+2ab+b^2 )",
  	"signo": "-",
  	"exp2": "(a^2-2ab+b^2 )",
  	"resultado": "4ab",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(4m^5+7m^4 n-9m^3 n^2 )",
  	"signo": "+",
  	"exp2": "(-2m^3 n^2-m^2 n^3+10m^4 n+8n^5 )",
  	"resultado": "4m^5+17m^4 n-11m^3 n^2-m^2 n^3+8n^5",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(a^6-6a^5+4a^3+10)",
  	"signo": "-",
  	"exp2": "(3a^6+5a^4-7a^3+a^2-2)",
  	"resultado": "-2a^6-6a^5-5a^4+11a^3-a^2+12",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(-2d^6+d^2-1)",
  	"signo": "+",
  	"exp2": "(d^6-6d^5+4d^3+3)",
  	"resultado": "-d^6-6d^5+4d^3+d^2+2",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(8a-4b-7)",
  	"signo": "-",
  	"exp2": "(9a+4b-6)",
  	"resultado": "-a-8b-1",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(a^2-2ab+b^2 )",
  	"signo": "+",
  	"exp2": "(a^2+b^2 )",
  	"resultado": "2a^2-2ab+2b^2",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(3a+2b-c)",
  	"signo": "-",
  	"exp2": "(2a+3b+c)",
  	"resultado": "a-b-2c",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(9x-3y+5)",
  	"signo": "+",
  	"exp2": "(-x-y+4)",
  	"resultado": "8x-4y+9",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(2a+2b-2c)",
  	"signo": "-",
  	"exp2": "(-3a-b+3c)",
  	"resultado": "5a+3b-5c",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(-2p-6q+3r)",
  	"signo": "+",
  	"exp2": "(p+5q-8r)",
  	"resultado": "-p-q-5r",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(10x-20y-8z)",
  	"signo": "-",
  	"exp2": "(-7x-4y+6z)",
  	"resultado": "17x-16y-14z",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(5ab-3bc+4cd)",
  	"signo": "+",
  	"exp2": "(2bc+2cd-3de)",
  	"resultado": "5ab-bc+6cd-3de",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(2x^3-4xy^2-5y^3 )",
  	"signo": "-",
  	"exp2": "(-x^3+xy^2+y^3 )",
  	"resultado": "3x^3-5xy^2-6y^3",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(x^2-3xy+y^2 )",
  	"signo": "+",
  	"exp2": "(-2y^2+3yx-x^2 )",
  	"resultado": "-y^2",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(-5ab+a^2-b^2 )",
  	"signo": "-",
  	"exp2": "(8ab-b^2-2a^2 )",
  	"resultado": "3a^2-13ab",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(8x-9+4x^2 )",
  	"signo": "+",
  	"exp2": "(-7x+14-x^2 )",
  	"resultado": "3x^2+x+5",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(a^2-7a+4)",
  	"signo": "-",
  	"exp2": "(a^3-2a^2+6)",
  	"resultado": "-a^3+3a^2-7a-2",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(a^3+14ax^2-x^3 )",
  	"signo": "+",
  	"exp2": "(3a^3-5a^2 x-x^3 )",
  	"resultado": "4a^3-5a^2 x+14ax^2-2x^3",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(x^5-x^3 y^2-xy^4 )",
  	"signo": "-",
  	"exp2": "(2x^3 y^2+3xy^4-y^5 )",
  	"resultado": "x^5-3x^3 y^2-4xy^4-y^5",
  	"operacion": "suma y resta de polinomios"
  }];

var caja = "#sandbox";

var inicial = Math.floor(Math.random()*listado.length);

var objeto1 = listado[inicial];
var expresiones=[];
expresiones.push(objeto1);

for(var i = 0 ; i <= 4; i++){
		var numero = Math.floor(Math.random()*listado.length);
	//Console.log(numero);
	var expr1 = listado[numero];
	expresiones.push(expr1);
}

$.each(expresiones,function(index,val){
  var newDiv = $("<div />",{
    "class":"square"
  });

  var respuesta="$$"+math.parse(val.resultado).toTex()+"$$";


    if(val.resultado == objeto1.resultado){

      $("<div />",{
        "text":respuesta,
        "id" : "correcto",
        "class":"sandbox"+index
      }).appendTo(newDiv);

    }else{

      $("<div />",{
        "text":respuesta,
        "class":"sandbox"+index
      }).appendTo(newDiv);
    }

  $('#ecuaciones').append(newDiv);

});


$("#plato1").html("$$"+math.parse(objeto1.exp1).toTex()+"$$");
$("#plato2").html("$$"+math.parse(objeto1.exp2).toTex()+"$$");
$("#operacion").html("<strong />"+objeto1.signo);






function drag(el){
  return (el.attr("id")=== "#correcto") ? true : false;
}

$(function(){
  console.log("Ejecutando");
$(".square").draggable();
$("#correcto").on("draggable",function(event){
  console.log(event);
});
$(".cajas").droppable({
  accept: "#correcto",
  drop: function (event, ui) {
          $(this).css("background-color", "lightgreen");
       ui.draggable.remove();
          $(this).css("background-color", "")
  },
  out: function (event, ui) {
          $(this).css("background-color", "")
  }

});

});



/*var node = math.parse(objeto1.exp1);
node.forEach(function (node, path, parent) {
  switch (node.type) {
    case 'OperatorNode': console.log(node.type, node.op);    break;
    case 'ConstantNode': console.log(node.type, node.value); break;
    case 'SymbolNode':   console.log(node.type, node.name);  break;
    default:             console.log(node.type);
  }
});

var node = math.parse('x^2 + x/4 + 3*y');
var filtered = node.filter(function (node) {
  return node.type == 'SymbolNode' && node.name == 'x';
});
// returns an array with two entries: two SymbolNodes 'x'

//$(""+caja).append("$$"+math.parse(objeto1.exp1).toTex()+"$$");

*/
