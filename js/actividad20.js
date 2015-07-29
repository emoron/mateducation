// Respuetas actividad 12
tabla1 = ["a(a+b)", "b(a-c)", "-35m^2(2m-n^3)", "a(x^2-ax+a^2)", "a^2c^2(b^2-x^2+y^2)", "(a+b)(x+1)", "(n+1)(x+y-3)", "(a-b)(m+n)", "x^3(1-4x)", "(2x-n)(x^2+3y^2+z^2)"];
tabla2 = ["(a-b)^2", "(5x^2+4)^2", "(9x^6+11)^2", "(2(1+a)-(b-1))^2", "(ax^2-b^3/2)^2", "(11w^3+8x^2y)^2", "(x^10+10y^12)^2", "(x^(a+1)+y^(x-2))^2", "(x-1)^2", "(5x^3+x^2)^2"];
tabla3 = ["((x-y)(x+y)", "(5-6x^2)(5+6x^2)", "(14xy^2-15z^6)(14xy^2+15z^6)", "(x+2)(3x+2a)", "(a/6-x^3/5)(a/6+x^3/5)", "(1-3ab^2c^4d^5)(1+3ab^2c^4d^5)", "(x-2)(x+2)", "(7xb^3-15)(7xb^3+15)", "(7x+y-9)(7x+y+9)", "(x-y-c-d)(x-y+c+d)"];
tabla4 = ["(y^2-2x)(y^2+2x)", "(1+9x^2)(1-9x^2+81x^4)", "(2m+1)(4m^2-2m+1)", "(1+f+g)(f^2+2fg-f+g^2-g+1)", "(4m^2+5n^3)(16m^4-20m^2n^3+25n^6)", "(10c+1)(100c^2-10c+1)", "(x+y)(x^2-xy+y^2)", "(7x^2+8y^3)(49x^4-56x^2y^3+64y^6)", "(5t)(7t^2+3tu+3u^2)", "(7j+6n^3)(49j^2-42jn^3+36n^6)"];
tabla5 = ["(1-a)(a^2+a+1)", "(x^2-b^3)(x^4+b^3x^2+b^6)", "(2ab-3)(4a^2b^2+6ab+9)", "(a^4-5)(a^8+5a^4+25)", "(r^2-u)(r^4+r^2u+u^2)", "(8-3a^3)(64+24a^3+9a^6)", "(3-m+n)(m^2-2mn+3m+n^2-3n+9)", "(t^2-u)(t^4+t^2 u+u^2)", "(p-4)(p^2+4p+16)", "(9-8x)(81+72x+64x^2)"];
tabla6 = ["(x+2)(x+3)", "(x-1)(x+2)", "(m-45)(m+15)", "(x-5)(x-3)", "(n-6)(n-2)", "(c+9)(c+15)", "(z-10)(z+11)", "(m-12)(m+1)", "(a+1)(a+6)", "(m-25)(m-16)"];

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

//tabla6

$("#boton6").click(function(event){
console.log(respuestas);
for(var j=50, i = 0; j<=59, i<=9; j++,i++){
	

		if (tabla6[i]==respuestas[j].value){
			$('#pre'+6+j).html('');
			$('#pre'+6+j).append("<span class=\"glyphicon glyphicon-ok\"></span>");
		}
		else {
			$('#pre'+6+j).html('');
			$('#pre'+6+j).append("<span class=\"glyphicon glyphicon-remove\"></span>");
		}
	}


});
