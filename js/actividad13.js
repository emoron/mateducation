var BoxOpened = "";
var ImgOpened = "";
var Counter = 0;
var ImgFound = 0;

var Source = "#boxcard";

var ImgSource = [
  {
  	"exp1": "3x+5x",
  	"resultado": "8x",
  	"operacion": "suma y resta de monomios"
  },
  {
  	"exp1": "2x-3x",
  	"resultado": "-x",
  	"operacion": "suma y resta de monomios"
  },
  {
  	"exp1": "-4x+7x",
  	"resultado": "3x",
  	"operacion": "suma y resta de monomios"
  },
  {
  	"exp1": "3+2x-5",
  	"resultado": "2x-2",
  	"operacion": "suma y resta de monomios"
  },
  {
  	"exp1": "-7+5x+12",
  	"resultado": "5x+5",
  	"operacion": "suma y resta de monomios"
  },
  {
  	"exp1": "-x+2-x-2",
  	"resultado": "-2x",
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
  	"resultado": "2x-2",
  	"operacion": "suma y resta de monomios"
  }];

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
    var ecuacion = '$$' + math.parse(val.exp1).toTex() + '$$';

  	//Reemplazando las expresiones
  	//	$("#"+identificador).html(""+variable);
		$(Source).append("<div id=card" + y + i + ">"+ val.exp1 + "</div>");

    //  $("#card"+y+i).html(""+ecuacion);

    	});
  }else
  {
    $.each(ImgSource, function(i, val) {

      var cadena = "coeficiente: " + val.coeficiente + ", " + "grado: " + val.grado;
  		$(Source).append("<div id=card" + y + i + ">"+'' +val.resultado + "</div>");
    });
  }

}

	$(Source + " div").click(OpenCard);
	//ShuffleImages();
});
