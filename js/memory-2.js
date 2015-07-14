var BoxOpened = "";
var ImgOpened = "";
var Counter = 0;
var ImgFound = 0;

var Source = "#boxcard";

var ImgSource = [
  {"expresion": "0.01*g^(-4)", "coeficiente" : "1/0.01", "grado" : 4, "variable": "g"},
  {"expresion": "-23mj", "coeficiente" : -23, "grado" : 2, "variable": "mj"},
  {"expresion": "45k^2", "coeficiente" : 45, "grado" : 2, "variable": "k"},
  {"expresion": "b^4", "coeficiente" : "1", "grado" : 4, "variable": "b"},
  {"expresion": "hi^3", "coeficiente" : "1", "grado" : 4, "variable": "hi"},
  {"expresion": "3.4a^4", "coeficiente" : "3.4", "grado" : 4, "variable": "a"},
  {"expresion": "b^3", "coeficiente" : "1", "grado" : 3, "variable": "b"},
  {"expresion": "-2/3", "coeficiente" : "-2/3", "grado" : 0, "variable": "null"},
  {"expresion": "xy^3", "coeficiente" : "1", "grado" : 4, "variable": "xy"},
  {"expresion": "5/12", "coeficiente" : "5/12", "grado" : 0, "variable": "null"}
];

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
  		$(Source).append("<div id=card" + y + i + ">"+'' +cadena + "</div>");
    });
  }

}

	$(Source + " div").click(OpenCard);
	//ShuffleImages();
});
