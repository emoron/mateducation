function RandomFunction(MaxValue, MinValue) {
		return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
	}


function fila(objeto,index) {

  var cadena1 = '<li id="Enu'+index+'"  class="squaredotted" data-index="'+ index +'">'+"$$"+math.parse(objeto.enunciado).toTex()+"$$"+
  '</li>';
return cadena1;
}

function  fila1(objeto,index){
  var cadena2 = '<li id="enunciado'+index+'"  class="square" data-index="'+index+'">'+objeto.expresion+'</li>';
  return cadena2;
}
var rebanada = listado.slice(1,11);
console.log(rebanada);
var preguntas = [];
var respuestas = [];
$.each(rebanada,function(index,valor){

    preguntas.push(fila(valor,index));
    respuestas.push(fila1(valor,index));
    //$('#tabla1 tbody').append(fila(valor));
});


 function shuffle (v){
    for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
};

preguntas = shuffle(preguntas);
respuestas = shuffle(respuestas);

$('#source').html(preguntas.join(''));
$('#target').html(respuestas.join(''));

$(function () {

				$( "#newActivity" ).on( "click", function() {
					location.reload();

				});
        $(".square").draggable({
				revert:  function(event) {
					console.log(event);
					 var dropped = event && dropped[0].id == "droppable";
					 if(!dropped) //alert("I'm reverting!");
					 return !dropped;
				}
			}).each(function() {
				var top = $(this).position().top;
				var left = $(this).position().left;
				$(this).data('orgTop', top);
				$(this).data('orgLeft', left);
		});
				$("#Enu0").droppable({
								accept: "#enunciado0",
								drop: function (event, ui) {
												$(this).css("background-color", "lightgreen");
												$(ui).remove;
								},
								out: function (event, ui) {
												$(this).css("background-color", "")
								}
				});
        $("#Enu1").droppable({
                accept: "#enunciado1",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen");
                        ui.draggable.remove();
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu2").droppable({
                accept: "#enunciado2",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen");
                        ui.draggable.remove();
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu3").droppable({
                accept: "#enunciado3",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen");
                        ui.draggable.remove();
                },
                out: function (event, ui) {
                        $(this).css("background-color", "");

                }
        });
        $("#Enu4").droppable({
                accept: "#enunciado4",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen");
                        ui.draggable.remove();
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu5").droppable({
                accept: "#enunciado5",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen");
                        ui.draggable.remove();
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu6").droppable({
                accept: "#enunciado6",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen");
                        ui.draggable.remove();
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu7").droppable({
                accept: "#enunciado7",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen");
                        ui.draggable.remove();
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu8").droppable({
                accept: "#enunciado8",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen");
                        ui.draggable.remove();
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu9").droppable({
                accept: "#enunciado9",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen");
                        ui.draggable.remove();
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });

        $("#Enu10").droppable({
                accept: "#enunciado10",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu12").droppable({
                accept: "#enunciado15",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu13").droppable({
                accept: "#enunciado17",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu14").droppable({
                accept: "#enunciado13",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu15").droppable({
                accept: "#enunciado11",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu16").droppable({
                accept: "#enunciado18",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu17").droppable({
                accept: "#enunciado19",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu18").droppable({
                accept: "#enunciado20",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu19").droppable({
                accept: "#enunciado16",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu20").droppable({
                accept: "#enunciado12",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu21").droppable({
                accept: "#enunciado23",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu22").droppable({
                accept: "#enunciado24",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu23").droppable({
                accept: "#enunciado21",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu24").droppable({
                accept: "#enunciado27",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu25").droppable({
                accept: "#enunciado28",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu26").droppable({
                accept: "#enunciado25",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu27").droppable({
                accept: "#enunciado29",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu28").droppable({
                accept: "#enunciado30",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu29").droppable({
                accept: "#enunciado22",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu30").droppable({
                accept: "#enunciado26",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });


});
