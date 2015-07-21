// Respuestas de la actividad 11
tabla1 = ["0.3x+0.73y", "(x+3)/2", "17-x", "8x", "(x+y)^2", "18.24(x+y+z)", "x(7+x)", "x/4-yz/5", "5/7 x", "25/d"];

tabla2 = ["0.7x", "0.08x", "2(x+8)", "7+3/4 x", "2x+6", "x+0.15x", "x(x+1)", "x-4", "2x-6", "x/5-5"];

tabla3 = ["4x+1", "0.3x", "3(x+1/x)", "5x^2", "(x+3)/2", "(x-y)^2", "x+2y", "x-0.2x", "x+y+z", "2x+4"];

tabla4 = ["2(x+4)", "x^2/3", "x-7", "x/2-3", "(x+6)^3", "3x+y/4", "11-3x", "2x-8^3", "x+2(x+1)", "(2x-8)^3"];

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

