// Respuetas actividad 12
tabla1 = ["4x", "12x", "0.23x", "75t", "15x", "30t", "300n", "0.075x", "8x", "0.05x"];
tabla2 = ["2x", "2+j", "n/12", "365-r", "p+7.5", "5z", "3/10*t", "l/5", "3t", "0.75w" ];
tabla3 = ["2(x+5)", "3h", "3(x-4)", "0.8x", "20+j", "10l", "4x", "3c", "2d", "3r"];
tabla4 = ["3j", "x/24", "40x", "p/3", "12d", "500t", "600x", "432.5b", "1000y", "0.01c"];

// tabla1
var respuestas = $('textarea');
$("#boton1").click(function(event){
console.log(respuestas);
//for(var j=1; j<=4; j++){
	
	for(var i=0; i<=9; i++){
		//var posicion = "tab"+i;
	//	var tab = "tabla"+j;
		if (tabla1[i]==respuestas[i].value){
			$('#pre'+1+i).html('');
			$('#pre'+1+i).append("<span class=\"glyphicon glyphicon-ok\"></span>");
		}
		else {
			$('#pre'+1+i).html('');
			$('#pre'+1+i).append("<span class=\"glyphicon glyphicon-remove\"></span>");
		}
	}
//}

});

//tabla2
//var respuestas = $('textarea');
$("#boton2").click(function(event){
console.log(respuestas);
for(var j=10, i = 0; j<=19, i<=9; j++,i++){
	

		if (tabla2[i]==respuestas[j].value){
			$('#pre'+2+j).html('');
			$('#pre'+2+j).append("<span class=\"glyphicon glyphicon-ok\"></span>");
		}
		else {
			$('#pre'+2+j).html('');
			$('#pre'+2+j).append("<span class=\"glyphicon glyphicon-remove\"></span>");
		}
	}


});

//tabla3

$("#boton3").click(function(event){
console.log(respuestas);
for(var j=20, i = 0; j<=29, i<=9; j++,i++){
	

		if (tabla3[i]==respuestas[j].value){
			$('#pre'+3+j).html('');
			$('#pre'+3+j).append("<span class=\"glyphicon glyphicon-ok\"></span>");
		}
		else {
			$('#pre'+3+j).html('');
			$('#pre'+3+j).append("<span class=\"glyphicon glyphicon-remove\"></span>");
		}
	}


});

//tabla4

$("#boton4").click(function(event){
console.log(respuestas);
for(var j=30, i = 0; j<=39, i<=9; j++,i++){
	

		if (tabla4[i]==respuestas[j].value){
			$('#pre'+4+j).html('');
			$('#pre'+4+j).append("<span class=\"glyphicon glyphicon-ok\"></span>");
		}
		else {
			$('#pre'+4+j).html('');
			$('#pre'+4+j).append("<span class=\"glyphicon glyphicon-remove\"></span>");
		}
	}


});

