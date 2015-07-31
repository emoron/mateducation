
function rebanaArreglo(opcion) {
    var arreglo = [];
    switch (opcion) {
    case 1: arreglo = factor.slice(1,98); break;
    case 2: arreglo = factor.slice(99,198); break;
    case 3: arreglo = factor.slice(199,295); break;
    case 4: arreglo = factor.slice(296,396); break;
    case 5: arreglo = factor.slice(495,593); break;
    default: arreglo = factor;
  }
  return arreglo;
}

function formulario(objeto) {
// bod
var division= objeto.div;

$("#"+division).append('<form class="form">');
 $("#"+division+" form").append('<div class="form-group">');
 $("#"+division+" form").append('<label ><h4>'+ '$$' + math.parse(objeto.expresion.expresion).toTex() + '$$'+'</h4></label><br/>');
 $("#"+division+" form").append('<label class="radio-inline"><input type="radio" name="'+division+'"  value="opcion1" >'+ '$$'+math.parse(objeto.opciones[0].resultado).toTex()+'$$'+'</label>');
 $("#"+division+" form").append('<label class="radio-inline"><input type="radio" name="'+division+'"  value="opcion2" >'+ '$$'+math.parse(objeto.opciones[1].resultado).toTex()+'$$'+'</label>');
 $("#"+division+" form").append('<label class="radio-inline"><input type="radio" name="'+division+'"  value="opcion3" >'+ '$$'+math.parse(objeto.opciones[2].resultado).toTex()+'$$'+'</label>');
 $("#"+division+" form").append('<div id="'+division+'"></div></div>');
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

function objetoFormulario(div,opciones,expresion){
  this.div = div;
  this.opciones=opciones;
  this.expresion=expresion;
}

function constructor(valor){
  var inicial = Math.floor(Math.random()*listado.length);
  var objeto1 = listado[inicial];
  var expresiones=[];
  expresiones.push(objeto1);

  for(var i = 0 ; i <= 3; i++){
      var numero = Math.floor(Math.random()*listado.length);
      //Console.log(numero);
      var expr1 = listado[numero];
      expresiones.push(expr1);
  }

  var salida = new objetoFormulario(valor,expresiones,objeto1);
  console.log(salida);

  respuestas.push(inicial);
return salida;

}

var test = {
"div":"pregunta1",
"opciones": ["(6a+b)^2","36a^2+12ab+b^2","x^2+2xy+y^2","a^4 x^2+2a^2 bxy^2+b^2 y^4"],
"expresion": "(x+y)^2"
};

var opcion = 0;
if (Number(localStorage.opcion)) {
   opcion = Number(localStorage.opcion);
  console.log(opcion);
  }
  else {
          opcion = 1;
  }



var listado = rebanaArreglo(opcion);



var respuestas = [];

$(function(){

  $('#generar').click(function() {
    var seleccion =  $(':radio:checked')[0].value;
    localStorage.setItem("opcion", seleccion);
    console.log(seleccion);
  //  sessionStorage[window.location + this.id] = $(this).hasClass('selected'); return false;
    location.reload();
});

  for(var indice =1; indice <= 10; indice++){
  formulario(constructor("pregunta"+indice));
  }

$('#evaluar').click(function() {

$(':radio:checked').each(function(index,valor){
    if(valor.value == "opcion"+respuestas[index]){
      $("#pregunta"+index).html('');
      $("#pregunta"+index).append('<span class=\"glyphicon glyphicon-ok\"></span>');
      console.log("respuesta " +index +  " " + valor + "coincide");
    }else{
        $("#pregunta"+index).html('');
      $("#pregunta"+index).append('<span class=\"glyphicon glyphicon-remove\"></span>');
    }

    });

console.log("Haciendo click");
});

});
