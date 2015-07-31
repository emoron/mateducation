var BoxOpened = "";
var ImgOpened = "";
var Counter = 0;
var ImgFound = 0;

var Source = "#boxcard";

function OpenCard() {
  console.log(this);
//  if(numcard)
  var numTarjeta = $(this).data('index');
  var id = $(this).attr("id");
    console.log(id);

      $("#" + id).css("background", "#c4c91e");

      $( Source + " div").unbind("click", OpenCard);




    if (BoxOpened == "") {
      BoxOpened = id;
      ImgOpened = numTarjeta;

    setTimeout(function() {
      $(Source + " div").bind("click", OpenCard);
    }, 300);
    }
    else { //Abriendo la primera tarjeta

      //Obteniendo el identificador de la tarjeta
      var	CurrentOpened = id;
      //  console.log(CurrentOpened + "usando else");

      if (ImgOpened != numTarjeta) {

          $("#"+BoxOpened).css("background","#B1B1B1");
          $("#"+id).css("background","#B1B1B1");
          BoxOpened = "";
          ImgOpened = "";
          id="";
          console.log("borrarEstilo por que no son iguales");
          setTimeout(function() {
    				$(Source + " div" ).bind("click", OpenCard);
          console.log(Source + " div");
        }, 100);

      } else {
        //console.log(ImgSource,numTarjeta)

        $("#" + BoxOpened).css("background", "rgb(130, 134, 10)");
        //ImgFound++;
        BoxOpened = "";
        $("#" + CurrentOpened).css("background", "rgb(130, 134, 10)");
        ImgOpened = "";
        id ="";
        setTimeout(function() {
          $(Source + " div").bind("click", OpenCard);
        }, 300);

        return true;
      }
      return true;
    }

  }

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

function constructor(){

  var expresiones=[];

  for(var i = 0 ; i <= 4; i++){
      var numero = Math.floor(Math.random()*listado.length);
      //Console.log(numero);
      var expr1 = listado[numero];
      expresiones.push(expr1);
  }
return expresiones;

}




function ShuffleImages() {
  var ImgAll = $(Source).children();
  var ImgThis = $(Source + " div:first-child");
  var ImgArr = new Array();

  for (var i = 0; i < ImgAll.length; i++) {
    ImgArr[i] = $("#" + ImgThis.attr("id")).html();
    ImgThis = ImgThis.next();
  }

    ImgThis = $(Source + " div:first-child");

  for (var z = 0; z < ImgAll.length; z++) {
  var RandomNumber = RandomFunction(0, ImgArr.length - 1);

    $("#" + ImgThis.attr("id")).html(ImgArr[RandomNumber]);
    ImgArr.splice(RandomNumber, 1);
    ImgThis = ImgThis.next();
  }
}


function RandomFunction(MaxValue, MinValue) {
		return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
	}






  	//}


var ImgSource = constructor();


$(function() {

for (var y = 1; y < 3 ; y++) {
  if(y == 1){
	$.each(ImgSource, function(i, val) {
    //$("TEST").insertBefore("#objecto")
    var ecuacion = '$$' + math.parse(val.expresion).toTex() + '$$';

  	//Reemplazando las expresiones
  	//	$("#"+identificador).html(""+variable);
		$(Source).append('<div id="card'+ y+i + '" data-index="'+i+ '" >'+ ecuacion + '</div>');

    //  $("#card"+y+i).html(""+ecuacion);

    	});
  }else
  {
    $.each(ImgSource, function(i, val) {
      var ecuacion2 = '$$' + math.parse(val.resultado).toTex() + '$$';
      var cadena = "coeficiente: " + val.coeficiente + ", " + "grado: " + val.grado;
  		$(Source).append("<div id=card" + y + i + ' data-index="'+i+ '">' +'<p class="limpio">' +ecuacion2 + "</p></div>");
    });
  }

}

$( "#newActivity" ).click(function() {
  var seleccion =  $(':radio:checked')[0].value;
  localStorage.setItem("opcion", seleccion);
  console.log(seleccion);
//  sessionStorage[window.location + this.id] = $(this).hasClass('selected'); return false;
  location.reload();
});

	$(Source + " div").click(OpenCard);
	//ShuffleImages();
});
