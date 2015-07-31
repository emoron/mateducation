//Actividad 9
//Tomar un elemento de la lista
//Tomar 4 Elementos aleatorios
//Hacer que sean Click y Droppable
function shuffle (v){
   for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
   return v;
};

function rebanaArreglo(opcion) {
    var arreglo = [];
    switch (opcion) {
    case 1: arreglo = polinomios.slice(1,98); break;
    case 2: arreglo = polinomios.slice(99,197); break;
    case 3: arreglo = polinomios.slice(198,296); break;
    default: arreglo = polinomios;
  }
  return arreglo;
}

var opcion = 0;
if (Number(localStorage.opcion)) {
   opcion = Number(localStorage.opcion);
  console.log(opcion);
  }
  else {
          opcion = 1;
  }

  var radioSeleccionado = "boton"+opcion;
  $("#"+radioSeleccionado).prop("checked", true);

var listado = rebanaArreglo(opcion);

listado = shuffle(listado);

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

$.each(expresiones,function(index,valor){
  var newDiv = '<div class="square">';
  var cadena = "";

  var respuesta="$$"+math.parse(valor.resultado).toTex()+"$$";


  if(valor.resultado == objeto1.resultado){

    var cadena = '<div data-index="'+index+'" id="correcto" class="square">'+respuesta + '</div>';

    }else{

      var cadena = '<div data-index="'+index+'" id="incorrecto" class="square">'+respuesta + '</div>';

    }


  $('#ecuaciones').append(newDiv+cadena);

});


$("#plato1").html("$$"+math.parse(objeto1.exp1).toTex()+"$$");
$("#plato2").html("$$"+math.parse(objeto1.exp2).toTex()+"$$");
$("#operacion").html("<h1>"+objeto1.signo+"</h1>");


$(function(){


$(".square").draggable();


$("#resultado").droppable({
  accept: "#correcto",
  drop: function (event, ui) {
          $(this).css("background-color", "lightgreen")
          ui.draggable.remove();

  },
  out: function (event, ui) {
          $(this).css("background-color", "");
  }

});

$( "#newActivity" ).click(function() {
  var seleccion =  $(':radio:checked')[0].value;
  localStorage.setItem("opcion", seleccion);
  console.log(seleccion);
//  sessionStorage[window.location + this.id] = $(this).hasClass('selected'); return false;
  location.reload();
});

});
