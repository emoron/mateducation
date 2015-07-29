var BoxOpened = "";
var ImgOpened = "";
var Counter = 0;
var ImgFound = 0;

var Source = "#boxcard";

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


var opcion = 0;
if (Number(localStorage.opcion)) {
   opcion = Number(localStorage.opcion);
  console.log(opcion);
  }
  else {
          opcion = 1;
  }



var listado = rebanaArreglo(opcion);

function constructor(){

  var expresiones=[];

  for(var i = 0 ; i <= 10; i++){
      var numero = Math.floor(Math.random()*listado.length);
      //Console.log(numero);
      var expr1 = listado[numero];
      expresiones.push(expr1);
  }
return expresiones;

}


var ImgSource = constructor();

function RandomFunction(MaxValue, MinValue) {
		return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
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

  function OpenCard() {
  	var id = $(this).attr("id");

  //  console.log(id);
  //	if ($("#" + id ).is(":hidden")) {
  		$(Source + " div").unbind("click", OpenCard);

  	//	$("#" + id).slideDown('fast');

  		if (ImgOpened == "") {
  			BoxOpened = id;
  			ImgOpened = $("#" + id ).attr("id");

        console.log(ImgOpened.substr(ImgOpened.length -1)+ "Primera Caja");

  			setTimeout(function() {
  				$(Source + " div").bind("click", OpenCard)
  			}, 300);
  		} else {
  			CurrentOpened = $("#" + id ).attr("id");

        var numAct = ImgOpened.substr(ImgOpened.length -1);
        var numAct2 = CurrentOpened.substr(CurrentOpened.length -1);

        console.log(numAct2+"Tarjeta2");
  			if (numAct != numAct2) {
  			//	setTimeout(function() {
  				//	$("#" + id + " img").slideUp('fast');
  				//	$("#" + BoxOpened + " img").slideUp('fast');
  					BoxOpened = "";
  					ImgOpened = "";
  			//	}, 400);
  			} else {

  				$("#" + id).css("background", "rgb(130, 134, 10)");

  				$("#" + BoxOpened).css("background", "rgb(130, 134, 10)");
  				ImgFound++;
  				BoxOpened = "";
  				ImgOpened = "";
  			}
  			setTimeout(function() {
  				$(Source + " div").bind("click", OpenCard)
  			}, 400);
  		}
  		Counter++;
  		$("#counter").html("" + Counter);

  		if (ImgFound == ImgSource.length) {
  			$("#counter").prepend('<span id="success">You Found All Pictues With </span>');
  		}
  	//}
  }



$(function() {

for (var y = 1; y < 3 ; y++) {
  if(y == 1){
	$.each(ImgSource, function(i, val) {
    //$("TEST").insertBefore("#objecto")
    var ecuacion = '$$' + math.parse(val.expresion).toTex() + '$$';

  	//Reemplazando las expresiones
  	//	$("#"+identificador).html(""+variable);
		$(Source).append("<div id=card" + y + i + ">"+ val.expresion + "</div>");

    //  $("#card"+y+i).html(""+ecuacion);

    	});
  }else
  {
    $.each(ImgSource, function(i, val) {

      var cadena = "coeficiente: " + val.coeficiente + ", " + "grado: " + val.grado;
  		$(Source).append("<div id=card" + y + i + ">"+'<p class="limpio">' +val.resultado + "</p></div>");
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
