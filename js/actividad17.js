// Respuetas actividad 12
tabla1 = ["a^4x^2+2a^2bxy^2+b^2y^4", "a^6-2a^3b^3+b^6", "x^(2a+2)-6x^(2a-1)+9x^(2a-4)", "b^2+12b+36", "(a^2b^2)/25-2/5ab^4+b^6", "9x^12y^2z^2-6x^7y^3z^4+x^2y^4z^6", "b^2-2b+1", "9a^4+48a^2b^4+64b^8", "16a^2b^4+40ab^2xy^3+25x^2y^6", "49a^2x^8+126ax^4y^5+81y^10"];
tabla2 = ["a^4-2a^3b+3a^2b^2-2ab^3+b^4", "16x^4-72x^2y^2+192x^2yz+81y^4-432y^3z+576y^2z^2", "a^4+2a^2b^2+2a^2c^2+b^4+2b^2c^2+c^4", "(25a^2)/16+5ab/2-5ac+b^2-4bc+4c^2", "r^2/4+rs/4+rt/8+s^2/16+st/16+t^2/64", "1936a^2-44ah^2-(88ah)/3+h^4/4+h^3/3+h^2/9", "f^2t^2-0.68d^(3/4)ft+(0.68d^(3/4))/t+1/t^2+0.1156d^(3/2)-2f", "(16r^2)/9-8amr/3-(8n^6pr)/3+a^2m^2+2amn^6p+n^12p^2", "a^4-4a^3+2a^2+4a+1", "l^2q^12t^2-12lq^6tx^4y-2lmn^6q^6t+36x^8y^2+12mn^6x^4y+m^2n^12" ];
tabla3 = ["a^3+3a^2b+3ab^2+b^3", "-w^6-18w^4z-108w^2z^2-216z^3", "-8w^8-72w^4-216w^2-216", "(8x^3)/27+(20x^2y)/27+(50xy^2)/81+(125y^2)/729", "-300763b^3m^3+7810.86b^3m^2n-67.6164b^3mn^2+0.195112b^3n^3", "27x^3+81x^2y+81xy^2+27y^3", "(r^3t^3)/8-(3r^2t^3)/4+(3rt^3)/2-t^3", "64x^3+240x^2+300x+125", "216x^3+1188x^2+2178x+1331", "w^3/27+w^2/15+w/25+1/125"];
tabla4 = ["x^2+ax+bx+ab", "x^2+x-2", "x^4-8x^2+7", "a^(2x+2)-11a^(x+1)+30", "x^8+3x^4-10", "b^10c^8+7b^5c^4-8", "y^2-79/30y+22/15", "u^2+u-72", "x^4-1/4 x^2-3/8", "j^2-0.099j-0.0001"];
tabla5 = ["x^2-y^2", "1-9a^2 x^2", "a^(2x+2)-4b^(2x-2)", "r^6-16", "a^(2x+2)-25", "49/36y^2-16/25", "h^6-4", "i^2-1", "16c^2-36/49", "a^2-25/9"];

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

//tabla5

$("#boton5").click(function(event){
console.log(respuestas);
for(var j=40, i = 0; j<=49, i<=9; j++,i++){
	

		if (tabla5[i]==respuestas[j].value){
			$('#pre'+5+j).html('');
			$('#pre'+5+j).append("<span class=\"glyphicon glyphicon-ok\"></span>");
		}
		else {
			$('#pre'+5+j).html('');
			$('#pre'+5+j).append("<span class=\"glyphicon glyphicon-remove\"></span>");
		}
	}


});
