function shuffle (v){
   for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
   return v;
};

function rebanaArreglo(opcion) {
    var arreglo = [];
    switch (opcion) {
    case 1: arreglo = productosnotables.slice(1,98); break;
    case 2: arreglo = productosnotables.slice(99,197); break;
    case 3: arreglo = productosnotables.slice(198,297); break;
    case 4: arreglo = productosnotables.slice(297,395); break;
    case 5: arreglo = productosnotables.slice(396,494); break;
    default: arreglo = productosnotables;
  }
  return arreglo;
}
function formulario(objeto) {
// bod
var division= objeto.div;
var resp = [objeto.opciones[0].resultado,objeto.opciones[1].resultado,objeto.opciones[2].resultado];
var salida = shuffle(resp);

$("#"+division).append('<form class="form">');
 $("#"+division+" form").append('<div class="form-group">');
 $("#"+division+" form").append('<label ><h4>'+ '$$' + math.parse(objeto.expresion.expresion).toTex() + '$$'+'</h4></label><br/>');
 $("#"+division+" form").append('<label class="radio-inline"><input type="radio" name="'+division+'"  value="0" >'+ '$$'+salida[0]+'$$'+'</label>');
 $("#"+division+" form").append('<label class="radio-inline"><input type="radio" name="'+division+'"  value="1" >'+ '$$'+salida[1]+'$$'+'</label>');
 $("#"+division+" form").append('<label class="radio-inline"><input type="radio" name="'+division+'"  value="2" >'+ '$$'+salida[2]+'$$'+'</label>');
 $("#"+division+" form").append('</div></form><div class="respuesta" id="respuesta'+objeto.indicador +'" ></div>');

 var a = salida.indexOf(objeto.expresion.resultado);
 //   console.log(objeto.expresion.enunciado);
   respuestas.push(a);
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

  var radioSeleccionado = "boton"+opcion;
  $("#"+radioSeleccionado).prop("checked", true);

var listado = rebanaArreglo(opcion);

var respuestas = [];

function objetoFormulario(div,opciones,expresion,indicador){
this.div = div;
this.opciones=opciones;
this.expresion=expresion;
this.indicador = indicador
}

function constructor(valor,index){
  var inicial = Math.floor(Math.random()*listado.length);
  var objeto1 = listado[inicial];
  var expresiones=[];
  expresiones.push(objeto1);

  for(var i = 1 ; i <= 3; i++){
      var numero = Math.floor(Math.random()*listado.length);
      //Console.log(numero);
      var expr1 = listado[numero];
      expresiones.push(expr1);
  }
  var salida = new objetoFormulario(valor,expresiones,objeto1,index);
  console.log(salida);


return salida;

}


$(function(){

  $('#generar').click(function() {
    var seleccion =  $(':radio:checked')[0].value;
    localStorage.setItem("opcion", seleccion);
    console.log(seleccion);
  //  sessionStorage[window.location + this.id] = $(this).hasClass('selected'); return false;
    location.reload();
});

for(var indice =1; indice <= 4; indice++){
formulario(constructor("pregunta"+indice,indice));
}

$('#evaluar').click(function() {
var radios = $(':radio:checked');
//eliminar de la lista el boton de opciones
radios.slice(1,radios.length).each(function(index,valor){
  var numero = index +1;
    if(valor.value == respuestas[index]){
      $("#respuesta"+numero).html('');
      $("#respuesta"+numero).append('<span class=\"glyphicon glyphicon-ok\"></span>');
      console.log("respuesta " +index +  " " + valor + "coincide");
    }else{
        $("#respuesta"+numero).html('');
      $("#respuesta"+numero).append('<span class=\"glyphicon glyphicon-remove\"></span>');
    }

    });

console.log("Haciendo click");
});

});
