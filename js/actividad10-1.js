function RandomFunction(MaxValue, MinValue) {
		return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
	}

$(function () {

	var lista =[1,2,3,4];
	$.each(lista,function(index,value){
		$("#tabla"+value).hide();
	});
n = RandomFunction(1,4);
console.log(n);

	$("#tabla"+n).show();

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
        $("#Enu1").droppable({
                accept: "#enunciado10",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu2").droppable({
                accept: "#enunciado4",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu3").droppable({
                accept: "#enunciado6",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu4").droppable({
                accept: "#enunciado7",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu5").droppable({
                accept: "#enunciado2",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu6").droppable({
                accept: "#enunciado9",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu7").droppable({
                accept: "#enunciado8",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu8").droppable({
                accept: "#enunciado3",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu9").droppable({
                accept: "#enunciado5",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu10").droppable({
                accept: "#enunciado1",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu11").droppable({
                accept: "#enunciado14",
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
        $("#Enu31").droppable({
                accept: "#enunciado33",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu32").droppable({
                accept: "#enunciado34",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu33").droppable({
                accept: "#enunciado37",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu34").droppable({
                accept: "#enunciado40",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu35").droppable({
                accept: "#enunciado31",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu36").droppable({
                accept: "#enunciado39",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu37").droppable({
                accept: "#enunciado38",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu38").droppable({
                accept: "#enunciado36",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu39").droppable({
                accept: "#enunciado32",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });
        $("#Enu40").droppable({
                accept: "#enunciado35",
                drop: function (event, ui) {
                        $(this).css("background-color", "lightgreen")
                },
                out: function (event, ui) {
                        $(this).css("background-color", "")
                }
        });

});
