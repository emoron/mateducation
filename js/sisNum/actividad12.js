
function shuffle (v){
   for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
   return v;
};

function formulario(objeto) {
console.log(objeto);
var division= objeto.div;
var resp = [objeto.opciones[0].enunciado,objeto.opciones[1].enunciado,objeto.opciones[2].enunciado];
//console.log(resp);
var salida = shuffle(resp);
//console.log(salida);

$("#"+division).append('<form class="form">');
 $("#"+division+" form").append('<div class="form-group">');
 $("#"+division+" form").append('<label ><h4>'+ '$$' + objeto.expresion.expresion+ '$$'+'</h4></label><br/>');
 $("#"+division+" form").append('<label class="radio-inline"><input type="radio" name="'+division+'"  value="0" >'+ '$$'+salida[0]+'$$'+'</label>');
 $("#"+division+" form").append('<label class="radio-inline"><input type="radio" name="'+division+'"  value="1" >'+ '$$'+salida[1]+'$$'+'</label>');
 $("#"+division+" form").append('<label class="radio-inline"><input type="radio" name="'+division+'"  value="2" >'+ '$$'+salida[2]+'$$'+'</label>');
 $("#"+division+" form").append('</div></form><div class="respuesta" id="respuesta'+objeto.indicador+'"></div>');

 var a = salida.indexOf(objeto.expresion.enunciado);
//   console.log(objeto.expresion.enunciado);
   respuestas.push(a);
}





function objetoFormulario(div,opciones,expresion,indicador){
  this.div = div;
  this.opciones=opciones;
  this.expresion=expresion;
  this.indicador = indicador;
}

function constructor(valor,index){
  var inicial = Math.floor(Math.random()*listado.length);
  var objeto1 = listado[inicial];
  var resp = [];

  var expresiones=[];
  expresiones.push(objeto1);
  resp.push(objeto1.enunciado);

  for(var i = 1 ; i <= 2; i++){
      var numero = Math.floor(Math.random()*listado.length);
      //Console.log(numero);
      var expr1 = listado[numero];
      expresiones.push(expr1);
      resp.push(expr1.enunciado);
  }

//shuffle(expresiones);
  //console.log(expresiones);
  var salida = new objetoFormulario(valor,expresiones,objeto1,index);
  //console.log(salida);


return salida;

}

var test = {
"div":"pregunta1",
"opciones": ["(6a+b)^2","36a^2+12ab+b^2","x^2+2xy+y^2","a^4 x^2+2a^2 bxy^2+b^2 y^4"],
"expresion": "(x+y)^2"
};




var listado = numeros.slice(1,10);
var respuestas = [];

$(function(){

  for(var indice =1; indice <= 4; indice++){
  formulario(constructor("pregunta"+indice, indice));
  }

$('#evaluar').click(function() {

$(':radio:checked').each(function(index,valor){

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

//console.log("Haciendo click");
});

});
