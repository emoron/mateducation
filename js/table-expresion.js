
       s1 = document.getElementById('expr1');
       s2 = document.getElementById('expr2');
       s3 = document.getElementById('expr3');
       s4 = document.getElementById('expr4');
       s5 = document.getElementById('expr5');
       s6 = document.getElementById('expr6');
       s7 = document.getElementById('expr7');
     
          // initialize with an example expression
          r1 = s1.innerHTML;
          r2 = s2.innerHTML;
          r3 = s3.innerHTML;
          r4 = s4.innerHTML;
          r5 = s5.innerHTML;
          r6 = s6.innerHTML;
          r7 = s7.innerHTML;
          

          expr1.innerHTML = '$$' + math.parse(r1).toTex() + '$$';
          expr2.innerHTML = '$$' + math.parse(r2).toTex() + '$$';
          expr3.innerHTML = '$$' + math.parse(r3).toTex() + '$$';
          expr4.innerHTML = '$$' + math.parse(r4).toTex() + '$$';
          expr5.innerHTML = '$$' + math.parse(r5).toTex() + '$$';
          expr6.innerHTML = '$$' + math.parse(r6).toTex() + '$$';
          expr7.innerHTML = '$$' + math.parse(r7).toTex() + '$$';


          $(function () {
                $(".square").draggable();
                $("#Monomios").droppable({
                        accept: "#monomio",
                        drop: function (event, ui) {
                                $(this).css("background-color", "lightgreen")
                        },
                        out: function (event, ui) {
                                $(this).css("background-color", "")
                        }
                });
                $("#Polinomios").droppable({
                        accept: "#polinomio",
                        drop: function (event, ui) {
                                $(this).css("background-color", "lightgreen")
                        },
                        out: function (event, ui) {
                                $(this).css("background-color", "")
                        }
                });
        });
