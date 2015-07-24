//Actividad 9
//Tomar un elemento de la lista
//Tomar 4 Elementos aleatorios
//Hacer que sean Click y Droppable
var listado = [
  {
  	"exp1": "(a^2-7a+4)",
  	"signo": "+",
  	"exp2": "(a^3-4a+5)",
  	"resultado": "a^3+a^2-11a+9",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(a^3-8ax^2+x^3 )",
  	"signo": "-",
  	"exp2": "(5a^2 x-6ax^2-x^3 )",
  	"resultado": "a^3-5a^2 x-2ax^2+2x^3",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(-4a^3+4a^2 m-3am^2 )",
  	"signo": "+",
  	"exp2": "(7a^2 m-4am^2-6)",
  	"resultado": "-4a^3+11a^2 m-7am^2-6",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(a^5+a^6+a^2 )",
  	"signo": "-",
  	"exp2": "(-a^5-4a^2-5a+6)",
  	"resultado": "a^6+2a^5+5a^2+5a-6",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(-a^3 b+a^2 b^2-ab^3 )",
  	"signo": "+",
  	"exp2": "(-4a^3 b+3a^2 b^2-3b^3 )",
  	"resultado": "-5a^3 b+4a^2 b^2-ab^3-3b^3",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(1/3 x^3+2y^3-2/5 x^2 y+3)",
  	"signo": "-",
  	"exp2": "(-1/10 x^2 y+3/4 xy^2-3/7 y^3 )",
  	"resultado": "1/3 x^3-3/10 x^2 y-3/4 xy^2+17/7 y^3+3",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(-1/4 ab-1/5 b^2 )",
  	"signo": "+",
  	"exp2": "(a^2+1/2 ab)",
  	"resultado": "a^2+1/4 ab-1/5 b^2",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(-5/6 xy+2/3 y^2 )",
  	"signo": "-",
  	"exp2": "(x^2+2/3 xy)",
  	"resultado": "-x^2-3/2 xy+2/3 y^2",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(1/10 xy+1/3 y^2 )",
  	"signo": "+",
  	"exp2": "(3/4 x^2-1/2 y^2 )",
  	"resultado": "3/4 x^2+1/10 xy-1/6 y^2",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(-1/12 a^2+1/20 ab-1/3 b^2 )",
  	"signo": "-",
  	"exp2": "(2/3 a^2+1/5 ab)",
  	"resultado": "-3/4 a^2-3/20 ab-1/3 b^2",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(5/6 xy-1/3 x^2+1/4 y^2 )",
  	"signo": "+",
  	"exp2": "(5/6 x^2-2/3 y^2+3/4 xy)",
  	"resultado": "1/2 x^2+19/12 xy-5/12 y^2",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(1/4 a^3-1/2 a^2 b-3/5 b^3 )",
  	"signo": "-",
  	"exp2": "(a^3-1/2 ab^2+b^3 )",
  	"resultado": "-3/4 a^3-1/2 a^2 b+1/2 ab^2-8/5 b^3",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(-3/5 x^4+5/6 x^3-3/4 x^2 )",
  	"signo": "+",
  	"exp2": "(x^4-x^2+5)",
  	"resultado": "2/5 x^4+5/6 x^3-7/4 x^2+5",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(-2/3 x^4+1/6 x^3-1/4 x^2 )",
  	"signo": "-",
  	"exp2": "(-1/12 x^3+3/5 x^2-4)",
  	"resultado": "-2/3 x^4+1/4 x^3-17/20 x^2+4",
  	"operacion": "suma y resta de polinomios"
  },
  {
  	"exp1": "(n+1)",
  	"signo": "*",
  	"exp2": "(n+2)",
  	"resultado": "n^2+3n+2",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(a^2 b-3b^2-4ab)",
  	"signo": "*",
  	"exp2": "(5ab-9a^2 b+8b^2 )",
  	"resultado": "-9a^4 b^2+41a^3 b^2+35a^2 b^3-20a^2 b^2-47ab^3-24b^4",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(4a+8)",
  	"signo": "*",
  	"exp2": "(7a+9)",
  	"resultado": "28a^2+92a+72",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(a+b)",
  	"signo": "*",
  	"exp2": "(2a^2-1)",
  	"resultado": "x^3-3x^2 y+3xy^2-y^3",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(x^2-2xy+y^2 )",
  	"signo": "*",
  	"exp2": "(x-y)",
  	"resultado": "x^3-3x^2 y+3xy^2-y^3",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(c^2-2c-6)",
  	"signo": "*",
  	"exp2": "(2c+5)",
  	"resultado": "2c^3+c^2-22c-30",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(y^4+4y^3+5y^2-3y-5)",
  	"signo": "*",
  	"exp2": "(y^2+1)",
  	"resultado": "y^6+4y^5+6y^4+y^3-3y-5",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(b^3+8b^2-2b-4)",
  	"signo": "*",
  	"exp2": "(9b^2-4)",
  	"resultado": "9b^5+72b^4-22b^3-68b^2+8b+16",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(6r^2 s^2+9r^3 s^8 t^5+t^8-s^9 )",
  	"signo": "*",
  	"exp2": "(3r^2 t^4-5s^3 t^2 )",
  	"resultado": "27r^5 s^8 t^9+18r^4 s^2 t^4-45r^3 s^11 t^7-3r^2 s^9 t^4-30r^2 s^5 t^2+3r^2 t^12+5s^12 t^2-5s^3 t^10",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(a^3-a^2 b+ab^2-b^3 )",
  	"signo": "*",
  	"exp2": "(a+b)",
  	"resultado": "a^4-b^4",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(a+3)",
  	"signo": "*",
  	"exp2": "(a-1)",
  	"resultado": "a^2+2a-3",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(m-6)",
  	"signo": "*",
  	"exp2": "(m-5)",
  	"resultado": "m^2-11m+30",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(3x-2y)",
  	"signo": "*",
  	"exp2": "(y+2x)",
  	"resultado": "6x^2-xy-2y^2",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(x^2+xy+y^2 )",
  	"signo": "*",
  	"exp2": "(x-y)",
  	"resultado": "x^3-y^3",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(x^3-3x^2+1)",
  	"signo": "*",
  	"exp2": "(x+3)",
  	"resultado": "x^4-9x^2+x+3",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(3y^3+5-6y)",
  	"signo": "*",
  	"exp2": "(y^2+2)",
  	"resultado": "x^4-9x^2+x+3",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(5m^4-3m^2 n^2+n^4 )",
  	"signo": "*",
  	"exp2": "(3m-n)",
  	"resultado": "15m^5-5m^4 n-9m^3 n+3m^2 n^2+3mn^4-n^5",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(m^3-3m^2 n+2mn^2 )",
  	"signo": "*",
  	"exp2": "(m^2-2mn-8n^2 )",
  	"resultado": "m^5-5m^4 n+20m^2 n^3-16mn^4",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(m^3-4m+m^2-1)",
  	"signo": "*",
  	"exp2": "(m^3+1)",
  	"resultado": "m^6+m^5-4m^4+m^2-4m-1",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(n^2-2n+1)",
  	"signo": "*",
  	"exp2": "(n^2-1)",
  	"resultado": "n^4-2n^3+2n-1",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(2y^3+y-3y^2-4)",
  	"signo": "*",
  	"exp2": "(2y+5)",
  	"resultado": "4y^4+4y^3-13y^2-3y-20",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(2a-5a^2+a^3-3)",
  	"signo": "*",
  	"exp2": "(a^3-2a-7)",
  	"resultado": "a^6-5a^5+31a^2-8a+21",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(x^4-x^3 y+x^2 y^2-xy^3+y^4 )",
  	"signo": "*",
  	"exp2": "(x^2-2y^2+xy)",
  	"resultado": "x^6-2x^4 y^2+2x^3 y^3-2x^2 y^4+3xy^5-2y^6",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(a^3-a+a^2+1)",
  	"signo": "*",
  	"exp2": "(a^2+a^3-2a-1)",
  	"resultado": "a^6+2a^5-2a^4-3a^3+2a^2-a-1",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(x^4-x^3+x^2-x+1)",
  	"signo": "*",
  	"exp2": "(x^3-2x^2+3x+6)",
  	"resultado": "x^7-3x^6+6x^5+x^2-3x+6",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(m^4-2m^3 n+3m^2 n^2-4n^4 )",
  	"signo": "*",
  	"exp2": "(n^3-5mn^2+3m^2 n-m^3 )",
  	"resultado": "-m^7+5m^6 n-14m^5 n^2+20m^4 n^3-13m^3 n^4-9m^2 n^5+20mn^6-4n^7",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(a+b-c)",
  	"signo": "*",
  	"exp2": "(a-b+c)",
  	"resultado": "a^2-b^2+2bc-c^2",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(x^2+y^2+z^2-xy-yz)",
  	"signo": "*",
  	"exp2": "(x+y+z)",
  	"resultado": "x^3+x^2 z-2xyz+xz^2+y^3+z^3",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(1/3 ax-1/2 x^2+3/2 a^2 )",
  	"signo": "*",
  	"exp2": "(3/2 x^2-ax+2/3 a^2 )",
  	"resultado": "-3/4 x^4+ax^3+19/12 a^2 x^2-23/18 a^3 x+a^4",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(3/4 m^3-1/2 m^2 n+2/5 mn^2-1/4 n^3 )",
  	"signo": "*",
  	"exp2": "(2/3 m^2+5/2 n^2-2/3 mn)",
  	"resultado": "1/2 m^5-5/6 m^4 n+99/40 m^3 n^2-101/60 m^2 n^3+7/6 mn^4-5/8 n^5",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(a^4+3a^3 b-2a^2 b^2+5ab^3-b^4 )",
  	"signo": "*",
  	"exp2": "(a^2-2ab+b^2 )",
  	"resultado": "a^6+a^5 b-7a^4 b^2+12a^3 b^3-13a^2 b^4+7ab^5-b^6",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(a^6-3a^4-6a^2+10)",
  	"signo": "*",
  	"exp2": "(a^8-4a^6+3a^4-2a^2 )",
  	"resultado": "a^14-7a^12+9a^10+23a^8-52a^6+42a^4-20a^2",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(a^x-a^(x+1)+a^(x+2) )",
  	"signo": "*",
  	"exp2": "(a+1)",
  	"resultado": "a^(x+3)+a^x",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(3x-8)",
  	"signo": "*",
  	"exp2": "(x^2+7x+2)",
  	"resultado": "3x^3+13x^2-50x-16",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(2x-1)",
  	"signo": "*",
  	"exp2": "(3x+2)",
  	"resultado": "6x^2+x-2",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(6b+5)",
  	"signo": "*",
  	"exp2": "(9b-10)",
  	"resultado": "54b^2-15b-50",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(7t/2+5/4)",
  	"signo": "*",
  	"exp2": "(2t/7+5/4)",
  	"resultado": "t^2+265/56 t+25/16",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(5a+9)",
  	"signo": "*",
  	"exp2": "(3a^2+6ab^2-b^3 )",
  	"resultado": "15a^3+30a^2 b^2+27a^2-5ab^3+54ab^2-9b^3",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(4/3 a^6 bc^2+16/9 ab^4 c^3 )",
  	"signo": "*",
  	"exp2": "(9/2 a^2 b^3 c-27abc)",
  	"resultado": "6a^8 b^4 c^3-36a^7 b^2 c^3+8a^3 b^7 c^4-48a^2 b^5 c^4",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(z^3-7z-8)",
  	"signo": "*",
  	"exp2": "(2z^3+z^2-3)",
  	"resultado": "2z^6+z^5-14z^4-26z^3-8z^z+21z+24",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(-7x^5-10x^3 y^2-5x^2 y)",
  	"signo": "*",
  	"exp2": "(4xy^3+x^2 y^2 )",
  	"resultado": "-7x^7 y^2-28x^6 y^3-10x^5 y^4-40x^4 y^5-5x^4 y^3-20x^3 y^4",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(z-1)",
  	"signo": "*",
  	"exp2": "(z^2+z+1)",
  	"resultado": "z^3-1",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(a^2-3a+6)",
  	"signo": "*",
  	"exp2": "(a^2+3a+6)",
  	"resultado": "a^4+3a^2+36",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(a-3)",
  	"signo": "*",
  	"exp2": "(a+1)",
  	"resultado": "a^2-2a-3",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(-x+3)",
  	"signo": "*",
  	"exp2": "(-x+5)",
  	"resultado": "x^2-8x+15",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(-4y+5x)",
  	"signo": "*",
  	"exp2": "(-3x+2y)",
  	"resultado": "-15x^2+22xy-8y^2",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(a^2+b^2-2ab)",
  	"signo": "*",
  	"exp2": "(a-b)",
  	"resultado": "a^3-3a^2 b+3ab^2-b^3",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(m^4+m^2 n^2+n^4 )",
  	"signo": "*",
  	"exp2": "(m^2-n^2 )",
  	"resultado": "m^6-n^6",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(m^3-m^2+m-2)",
  	"signo": "*",
  	"exp2": "(am+a)",
  	"resultado": "am^4-am-2a",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(a^2+a+1)",
  	"signo": "*",
  	"exp2": "(a^2-a-1)",
  	"resultado": "a^4-a^2-2a-1",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(x^2+1+x)",
  	"signo": "*",
  	"exp2": "(x^2-x-1)",
  	"resultado": "x^4-x^2-2x-1",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(a^3-5a+2)",
  	"signo": "*",
  	"exp2": "(a^2-a+5)",
  	"resultado": "a^5-a^4+7a^2-27a+10",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(a^3-3a^2 b+4ab^2 )",
  	"signo": "*",
  	"exp2": "(a^2 b-2ab^2-10b^3 )",
  	"resultado": "a^5 b-5a^4 b^2+22a^2 b^4-40ab^5",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(3x^3-a^3+2ax^2 )",
  	"signo": "*",
  	"exp2": "(2a^2-x^2-3ax)",
  	"resultado": "-3x^5-11ax^4+5a^3 x^2+3a^4 x-2a^5",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(m^4+3-m^2+m^3 )",
  	"signo": "*",
  	"exp2": "(m^2-2m+3)",
  	"resultado": "m^6-m^5+5m^3-6m+9",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(y^2-2y+1)",
  	"signo": "*",
  	"exp2": "(y^4-2y^2+2)",
  	"resultado": "y^6-2y^5-y^4+4y^3-4y+2",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(8x^3-12x^2 y-6xy^2+y^3 )",
  	"signo": "*",
  	"exp2": "(3x^2+4y^2-2xy)",
  	"resultado": "24x^5-52x^4 y+38x^3 y^2-33x^2 y^3-26xy^4+4y^5",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(3a^3-5a+2a^2-4)",
  	"signo": "*",
  	"exp2": "(a^2+a^3-2a+1)",
  	"resultado": "3a^6+5a^5-9a^4-10a^3+8a^2+3a-4",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(x^6-3x^4 y^2-x^2 y^4+y^6 )",
  	"signo": "*",
  	"exp2": "(x^5-2x^3 y^2+3xy^4 )",
  	"resultado": "x^11-5x^9 y^2+8x^7 y^4-6x^5 y^6-5x^3 y^8+3xy^10",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(x+2y-z)",
  	"signo": "*",
  	"exp2": "(x-y+z)",
  	"resultado": "x^2+xy-2y^2+3yz-z^2",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(2/5 m^2+1/3 mn-1/2 n^2 )",
  	"signo": "*",
  	"exp2": "(3/2 m^2+2n^2-mn)",
  	"resultado": "3/5 m^4+1/10 m^3 n-17/60 m^2 n^2+7/6 mn^3-n^4",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(2/7 x^3+1/2 xy^2-1/5 x^2 y)",
  	"signo": "*",
  	"exp2": "(1/4 x^2-2/3 xy+5/6 y^2 )",
  	"resultado": "1/14 x^5-101/420 x^4 y+139/280 x^3 y^2-1/2 x^2 y^3+5/12 xy^4",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(x^3-x^2+x)",
  	"signo": "*",
  	"exp2": "(x^2-1)",
  	"resultado": "x^5-x^4+x^2-x",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(m^3+n^3+6mn^2-5m^2 n)",
  	"signo": "*",
  	"exp2": "(m^3-4mn^2-n^3 )",
  	"resultado": "m^6-5m^5 n+2m^4 n^2+20m^3 n^3-19m^2 n^4-10mn^5-n^6",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(x^9-4x^6+3x^3-2)",
  	"signo": "*",
  	"exp2": "(3x^6-8x^3+10)",
  	"resultado": "3x^15-20x^12+51x^9-70x^6+46x^3-20",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(x^(n+1)+2x^(n+2)-x^(n+3) )",
  	"signo": "*",
  	"exp2": "(x^2+x)",
  	"resultado": "-x^(n+5)+x^(n+4)+3x^(n+3)+x^(n+2)",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(5x^3-9x+5)",
  	"signo": "*",
  	"exp2": "(4x+6)",
  	"resultado": "20x^4+30x^3-36x^2-34x+30",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(5y-3)",
  	"signo": "*",
  	"exp2": "(y-6)",
  	"resultado": "5y^2-33y+18",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(3x-9y)",
  	"signo": "*",
  	"exp2": "(2z-5w)",
  	"resultado": "-15wx+45wy+6xz-18yz",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(c^3-2d^5 )",
  	"signo": "*",
  	"exp2": "(3c^4+1/2 d^6 )",
  	"resultado": "3c^7-6c^4 d^5+1/2 c^3 d^6-d^11",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(a^3-8)",
  	"signo": "*",
  	"exp2": "(a^4+3a^2+4)",
  	"resultado": "a^7+3a^5-8a^4+4a^3-24a^2-32",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(4a^3+12a-16)",
  	"signo": "*",
  	"exp2": "(1/4-1/2 a^5 )",
  	"resultado": "-2a^8-6a^6+8a^5+a^3+3a-4",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(5x^4-2x^2-4x+1)",
  	"signo": "*",
  	"exp2": "(3x^2-6)",
  	"resultado": "15x^6-36x^4-12x^3+15x^2+24x-6",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(c^4+2c^2 d^2-d^4 )",
  	"signo": "*",
  	"exp2": "(2c-2cd+d)",
  	"resultado": "-2c^5 d+2c^5+c^4 d-4c^3 d^3+4c^3 d^2+2c^2 d^3+2cd^5-2cd^4-d^5",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(r^4-4r^3 s^2+7r^2 s^5-9s^3 )",
  	"signo": "*",
  	"exp2": "(-3r^4-5r^3 s^3 )",
  	"resultado": "-3r^8-5r^7 s^3+12r^7 s^2-r^6 s^5-35r^5 s^8+27r^4 s^3+45r^3 r^6",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(x^2+6x+18)",
  	"signo": "*",
  	"exp2": "(x^2-6x+18)",
  	"resultado": "x^4+324",
  	"operacion": "multiplicacion de polinomios"
  },
  {
  	"exp1": "(x+5)",
  	"signo": "*",
  	"exp2": "(x-4)",
  	"resultado": "x^2+x-20",
  	"operacion": "multiplicacion de polinomios"
  }];

var caja = "#sandbox";

var inicial = Math.floor(Math.random()*listado.length);

var objeto1 = listado[inicial];
var expresiones=[];
expresiones.push(objeto1);

for(var i = 0 ; i <= 4; i++){
		var numero = Math.floor(Math.random()*listado.length);
	//Console.log(numero);
	var expr1 = listado[numero];
	expresiones.push(expr1);
}

$.each(expresiones,function(index,val){
  var newDiv = $("<div />",{
    "class":"square"
  });

  var respuesta="$$"+math.parse(val.resultado).toTex()+"$$";


    if(val.resultado == objeto1.resultado){

      $("<div />",{
        "text":respuesta,
        "id" : "correcto",
        "class":"sandbox"+index
      }).appendTo(newDiv);

    }else{

      $("<div />",{
        "text":respuesta,
        "class":"sandbox"+index
      }).appendTo(newDiv);
    }

  $('#ecuaciones').append(newDiv);

});


$("#plato1").html("$$"+math.parse(objeto1.exp1).toTex()+"$$");
$("#plato2").html("$$"+math.parse(objeto1.exp2).toTex()+"$$");
$("#operacion").html("<strong />"+objeto1.signo);






function drag(el){
  return (el.attr("id")=== "#correcto") ? true : false;
}

$(function(){


$(".square").draggable();

$("#correcto").on("draggable",function(event){
  console.log(event);
});

$(".cajas").droppable({
  accept: "#correcto",
  drop: function (event, ui) {
          $(this).css("background-color", "lightgreen");
       ui.draggable.remove();
          $(this).css("background-color", "")
  },
  out: function (event, ui) {
          $(this).css("background-color", "")
  }

});

});
