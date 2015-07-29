var BoxOpened = "";
var ImgOpened = "";
var Counter = 0;
var ImgFound = 0;

var Source = "#boxcard";

var ImgSource = [
  {
  	"expresion": "(a+b)^2",
  	"resultado": "a^2+2ab+b^2",
  	"producto": "Binomios al cuadrado"
  },
  {
  	"expresion": "(6a+b)^2",
  	"resultado": "36a^2+12ab+b^2",
  	"producto": "Binomios al cuadrado"
  },
  {
  	"expresion": "(x+y)^2",
  	"resultado": "x^2+2xy+y^2",
  	"producto": "Binomios al cuadrado"
  },
  {
  	"expresion": "(a^2 x+by^2 )^2",
  	"resultado": "a^4 x^2+2a^2 bxy^2+b^2 y^4",
  	"producto": "Binomios al cuadrado"
  },
  {
  	"expresion": "(7a^2 b^2+5x^4 )^2",
  	"resultado": "49a^4 b^4+70a^2 b^2 x^4+25x^8",
  	"producto": "Binomios al cuadrado"
  },
  {
  	"expresion": "(x^10+10y^12 )^2",
  	"resultado": "x^20+20x^10 y^12+100y^24",
  	"producto": "Binomios al cuadrado"
  },
  {
  	"expresion": "(x^(a+1)+y^(x-2) )^2",
  	"resultado": "x^(2a+2)+2x^(a+1) y^(x-2)+y^(2x-4)",
  	"producto": "Binomios al cuadrado"
  },
  {
  	"expresion": "(9-a)^2",
  	"resultado": "a^2-18a+81",
  	"producto": "Binomios al cuadrado"
  },
  {
  	"expresion": "(a^3-b^3 )^2",
  	"resultado": "a^6-2a^3 b^3+b^6",
  	"producto": "Binomios al cuadrado"
  },
  {
  	"expresion": "(x^5-3ay^2 )^2",
  	"resultado": "x^10-6ax^5 y^2+9a^2 y^4",
  	"producto": "Binomios al cuadrado"
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
  		$(Source).append("<div id=card" + y + i + ">"+'' +val.resultado + "</div>");
    });
  }

}

$( "#newActivity" ).click(function() {
         location.reload();
});

	$(Source + " div").click(OpenCard);
	//ShuffleImages();
});
