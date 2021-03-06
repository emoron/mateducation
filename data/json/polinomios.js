/*   */

var polinomios =[
  {
    "exp1": "(5x^3+x^2 y-7xy^2)",
    "signo": "-",
    "exp2": "(6x^3-9xy^2+8x-10)",
    "resultado": "-x^3+x^2 y+2xy^2-8x+10",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(z^4-8z^3+2)",
    "signo": "+",
    "exp2": "(3z^4+8z^3-5z^2+z)",
    "resultado": "4z^4-5z^2+z+2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(15y^6-8y^5+2y^3 )",
    "signo": "-",
    "exp2": "(13y^6+4y^5-5y^3 )",
    "resultado": "2y^6-12y^5+7y^3",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(4x^4+x^3 y-8x^2 y^2+3xy^5 )",
    "signo": "+",
    "exp2": "(5x^5-4x^4+6x^3 y-2x^2 y^2+1)",
    "resultado": "5x^5+7x^3 y-10x^2 y^2+3xy^5+1",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(a^2+2ab+b^2 )",
    "signo": "-",
    "exp2": "(a^2-2ab+b^2 )",
    "resultado": "4ab",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(4m^5+7m^4 n-9m^3 n^2 )",
    "signo": "+",
    "exp2": "(-2m^3 n^2-m^2 n^3+10m^4 n+8n^5 )",
    "resultado": "4m^5+17m^4 n-11m^3 n^2-m^2 n^3+8n^5",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(a^6-6a^5+4a^3+10)",
    "signo": "-",
    "exp2": "(3a^6+5a^4-7a^3+a^2-2)",
    "resultado": "-2a^6-6a^5-5a^4+11a^3-a^2+12",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(-2d^6+d^2-1)",
    "signo": "+",
    "exp2": "(d^6-6d^5+4d^3+3)",
    "resultado": "-d^6-6d^5+4d^3+d^2+2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(8a-4b-7)",
    "signo": "-",
    "exp2": "(9a+4b-6)",
    "resultado": "-a-8b-1",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(a^2-2ab+b^2 )",
    "signo": "+",
    "exp2": "(a^2+b^2 )",
    "resultado": "2a^2-2ab+2b^2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(3a+2b-c)",
    "signo": "-",
    "exp2": "(2a+3b+c)",
    "resultado": "a-b-2c",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(9x-3y+5)",
    "signo": "+",
    "exp2": "(-x-y+4)",
    "resultado": "8x-4y+9",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(2a+2b-2c)",
    "signo": "-",
    "exp2": "(-3a-b+3c)",
    "resultado": "5a+3b-5c",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(-2p-6q+3r)",
    "signo": "+",
    "exp2": "(p+5q-8r)",
    "resultado": "-p-q-5r",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(10x-20y-8z)",
    "signo": "-",
    "exp2": "(-7x-4y+6z)",
    "resultado": "17x-16y-14z",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(5ab-3bc+4cd)",
    "signo": "+",
    "exp2": "(2bc+2cd-3de)",
    "resultado": "5ab-bc+6cd-3de",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(2x^3-4xy^2-5y^3 )",
    "signo": "-",
    "exp2": "(-x^3+xy^2+y^3 )",
    "resultado": "3x^3-5xy^2-6y^3",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(x^2-3xy+y^2 )",
    "signo": "+",
    "exp2": "(-2y^2+3yx-x^2 )",
    "resultado": "-y^2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(-5ab+a^2-b^2 )",
    "signo": "-",
    "exp2": "(8ab-b^2-2a^2 )",
    "resultado": "3a^2-13ab",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(8x-9+4x^2 )",
    "signo": "+",
    "exp2": "(-7x+14-x^2 )",
    "resultado": "3x^2+x+5",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(a^2-7a+4)",
    "signo": "-",
    "exp2": "(a^3-2a^2+6)",
    "resultado": "-a^3+3a^2-7a-2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(a^3+14ax^2-x^3 )",
    "signo": "+",
    "exp2": "(3a^3-5a^2 x-x^3 )",
    "resultado": "4a^3-5a^2 x+14ax^2-2x^3",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(x^5-x^3 y^2-xy^4 )",
    "signo": "-",
    "exp2": "(2x^3 y^2+3xy^4-y^5 )",
    "resultado": "x^5-3x^3 y^2-4xy^4-y^5",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(a^4+a^3+6)",
    "signo": "+",
    "exp2": "(3a^3+5a-8)",
    "resultado": "a^4+4a^3+5a-2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(m^3-n^3+6m^2 n)",
    "signo": "-",
    "exp2": "(m^3-n^3+6mn^2 )",
    "resultado": "0",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(1/2 x^2+1/3 xy)",
    "signo": "+",
    "exp2": "(1/2 xy+1/4 y^2 )",
    "resultado": "1/2 x^2+5/6 xy+1/4 y^2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(-1/4 ab+1/2 b^2 )",
    "signo": "-",
    "exp2": "(-1/4 ab-1/5 b^2 )",
    "resultado": "7/10 b^2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(-1/6 xy+y^2 )",
    "signo": "+",
    "exp2": "(-5/6 xy+2/3 y^2 )",
    "resultado": "5/3 y^2-xy",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(-2/5 xy+1/6 y^2 )",
    "signo": "-",
    "exp2": "(1/10 xy+1/3 y^2 )",
    "resultado": "-1/2 xy-1/6 y^2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(5/6 a^2-1/10 ab+1/6 b^2 )",
    "signo": "+",
    "exp2": "(-1/12 a^2+1/20 ab-1/3 b^2 )",
    "resultado": "3/4 a^2-1/20 ab-1/6 b^2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(-1/2 xy-1/6 x^2+1/8 y^2 )",
    "signo": "-",
    "exp2": "(5/6 xy-1/3 x^2+1/4 y^2 )",
    "resultado": "1/6 x^2-4/3 xy-1/8 y^2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(5/6 a^2 b-3/8 ab^2-2b^3 )",
    "signo": "+",
    "exp2": "(1/4 a^3-1/2 a^2 b-3/5 b^3 )",
    "resultado": "1/4 a^3+1/3 a^2 b-3/8 ab^2-13/5 b^3",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(2/3 x^4-3/8 x^2-3)",
    "signo": "-",
    "exp2": "(-3/5 x^4+5/6 x^3-3/4 x^2 )",
    "resultado": "19/15 x^4-5/6 x^3+3/8 x^2-3",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(12x^2-18x+7)",
    "signo": "+",
    "exp2": "(6x^3-9x^2-5x-19)",
    "resultado": "6x^3+3x^2-23x-12",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(4a^3 b-7ab^2 )",
    "signo": "-",
    "exp2": "(6a^3 b+ab^2-b^2 )",
    "resultado": "b^2-8ab^2-2a^3 b",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(7+5z^6+10z^7+14z^9 )",
    "signo": "+",
    "exp2": "(9+12z^7+8z^9 )",
    "resultado": "22z^9+22z^7+5z^6+16",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(7z^3-3wz^2-4w^2 z+w^3 )",
    "signo": "-",
    "exp2": "(-5z^3-11wz^2-12w^2 z+9w^3-8)",
    "resultado": "-8w^3+8w^2 z+8wz^2+12z^3+8",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(a^2+2ab+b^2 )",
    "signo": "+",
    "exp2": "(a^2-b^2 )",
    "resultado": "2a^2+2ab",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(4m^5+7m^4 n-9m^3 n^2 )",
    "signo": "-",
    "exp2": "(-3m^5+5m^2 n^3-6mn^4-8n^5 )",
    "resultado": "7m^5+7m^4 n-4m^3 n^2-5m^2 n^3+6mn^4+8n^5",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(9b^5-4b^4-2b^3-6b^2-8b-12)",
    "signo": "+",
    "exp2": "(-2b^6+b^2-1)",
    "resultado": "-2b^6+9b^5-4b^4-2b^3-5b^2-8b-13",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(3e^6+5e^4-7d^3+d^2-5)",
    "signo": "-",
    "exp2": "(9d^5-4d^4-2d^3-6d^2-8d-4)",
    "resultado": "-9d^5+4d^4-5d^3+7d^2+8d+3e^6+5e^4-1",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(4c-9d+e)",
    "signo": "+",
    "exp2": "(2c+d-3e)",
    "resultado": "6c-8d-2e",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(7x^3-4y^3+5z^3 )",
    "signo": "-",
    "exp2": "(6x^3+9y^3-7z^2 )",
    "resultado": "x^3+13y^3+5z^3+7z^2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(7a-4b+5c)",
    "signo": "+",
    "exp2": "(-7a+4b-6c)",
    "resultado": "-c",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(a+b-c)",
    "signo": "-",
    "exp2": "(2a+2b-2c)",
    "resultado": "-a-b+c",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(p+q+r)",
    "signo": "+",
    "exp2": "(-2p-6q+3r)",
    "resultado": "-p-5q+4r",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(-7x-4y+6z)",
    "signo": "-",
    "exp2": "(10x-20y-8z)",
    "resultado": "-17x+16y+14z",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(5a^x-3a^m-7a^n )",
    "signo": "+",
    "exp2": "(-8a^x+5a^m-9a^n )",
    "resultado": "2a^m-16a^n-3a^x",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(-5xy+6x^2-3y^2 )",
    "signo": "-",
    "exp2": "(-6y^2-8xy-9x^2 )",
    "resultado": "15x^2+3xy+3y^2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(-7m^2 n+4n^3 )",
    "signo": "+",
    "exp2": "(m^3+6mn^2-n^3 )",
    "resultado": "m^3-7m^2 n+6mn^2+3n^3",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(a^2-3ab+b^2 )",
    "signo": "_",
    "exp2": "(-5ab+a^2-b^2 )",
    "resultado": "2b^2+2ab",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(-7x^2+5x-6)",
    "signo": "+",
    "exp2": "(8x-9+4x^2 )",
    "resultado": "-3x^2+13x-15",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(a^3-4a+5)",
    "signo": "-",
    "exp2": "(a^3-2a^2+6)",
    "resultado": "2a^2-4a-1",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(a^(x+2)-a^x+a^(x+1) )",
    "signo": "+",
    "exp2": "(-3a^(x+3)-a^(x+1)+a^(x+2) )",
    "resultado": "-3a^(x+3)+2a^(x+2)-a^x",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(-8a^2 m+6am^2-m^3 )",
    "signo": "-",
    "exp2": "(a^3-5am^2+m^3 )",
    "resultado": "-a^3-8a^2 m+11am^2-2m^3",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(3x^3 y^2-4xy^4-y^5 )",
    "signo": "+",
    "exp2": "(x^5+5xy^4+2y^5 )",
    "resultado": "x^5+3x^3 y^2+xy^4+y^5",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(a^4-b^4 )",
    "signo": "-",
    "exp2": "(3a^4+5a^3 b-4a^2 b^2 )",
    "resultado": "-2a^4-5a^3 b+4a^2 b^2-b^4",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(-4m^2 n+5mn^2+n^3 )",
    "signo": "+",
    "exp2": "(-2m^3-2m^2 n+n^3 )",
    "resultado": "-2m^3-6m^2 n+5mn^2+2n^3",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(a^2+1/2 ab)",
    "signo": "-",
    "exp2": "(-1/4 ab+1/2 b^2 )",
    "resultado": "a^2+3/4 ab-1/2 b^2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(x^2+2/3 xy)",
    "signo": "+",
    "exp2": "(-1/6 xy+y^2 )",
    "resultado": "x^2+1/2 xy+y^2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(3/4 x^2-1/2 y^2 )",
    "signo": "-",
    "exp2": "(-2/5 xy+1/6 y^2 )",
    "resultado": "3/4 x^2+2/5 xy-2/3 y^2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(2/3 a^2+1/5 ab)",
    "signo": "+",
    "exp2": "(5/6 a^2-1/10 ab+1/6 b^2 )",
    "resultado": "3/2 a^2+1/10 ab+1/6 b^2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(5/6 x^2-2/3 y^2+3/4 xy)",
    "signo": "+",
    "exp2": "(-1/2 xy-1/6 x^2+1/8 y^2 )",
    "resultado": "x^2+5/4 xy-19/24 y^2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(a^3-1/2 ab^2+b^3 )",
    "signo": "+",
    "exp2": "(5/6 a^2 b-3/8 ab^2-2b^3 )",
    "resultado": "a^3+5/6 a^2 b-7/8 ab^2-b^3",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(x^4-x^2+5)",
    "signo": "+",
    "exp2": "(2/3 x^4-3/8 x^2-3)",
    "resultado": "1/3 x^4-5/8 x^2+8",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(x^5-2/3 x^3+4/5 x)",
    "signo": "+",
    "exp2": "(-3x^5+3/8 x^2-1/10 x)",
    "resultado": "-2x^5-2/3 x^3+3/8 x^2+7/10 x",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(8w^2-5wy+y^3-4)",
    "signo": "-",
    "exp2": "(7w^2-10wy-8y^3 )",
    "resultado": "w^2+5wy+9y^3-4",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(c^4 d+3c^2 d^2-2cd^3 )",
    "signo": "+",
    "exp2": "(5c^4 d-c^2 d^2-2c)",
    "resultado": "-2c+6c^4 d+2c^2 d^2-2cd^3",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(16c^8+23c-19)",
    "signo": "-",
    "exp2": "(27c^8-2c^6-3c^3 )",
    "resultado": "-11c^8+2c^6+3c^3+23c-19",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(5x^7-42x^3+x^2-16)",
    "signo": "+",
    "exp2": "(25x^6+43x^4-2x)",
    "resultado": "5x^7+25x^6+43x^4-42x^3+x^2-2x-16",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(a^2-2ab+b^2 )",
    "signo": "-",
    "exp2": "(a^2-b^2 )",
    "resultado": "-2ab+2b^2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(-2m^3 n^2-m^2 n^3+10m^4 n+8n^5 )",
    "signo": "+",
    "exp2": "(-3m^5+5m^2 n^3-6mn^4-8n^5 )",
    "resultado": "-3m^5+10m^4 n-2m^3 n^2+4m^2 n^3-6mn^4-8n^5",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(c^6 -6c^5+4c^3+10)",
    "signo": "-",
    "exp2": "(9c^5-4c^4-2c^3-6c^2-8c-2)",
    "resultado": "c^6-15c^5+4c^4+6c^3+6c^2+8c+12",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(-2f^6+f^2-5)",
    "signo": "+",
    "exp2": "(3f^6+6f^4-2f^3+f^2-8)",
    "resultado": "f^6+6f^4-2f^3+2f^2-13",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(r^3-s^2 )",
    "signo": "-",
    "exp2": "(-3rs-s^2 )",
    "resultado": "r^3+3rs",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(8a^3-2x-4)",
    "signo": "+",
    "exp2": "(6a^3-5x+3)",
    "resultado": "14a^3-7x-1",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(m+n-p)",
    "signo": "-",
    "exp2": "(-m-n+p)",
    "resultado": "2m+2n-2p",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(-3a-b+3c)",
    "signo": "+",
    "exp2": "(a+b-c)",
    "resultado": "-2a+2c",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(p+5q-8r)",
    "signo": "-",
    "exp2": "(p+q+r)",
    "resultado": "4q-9r",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(-5x+24y+2z)",
    "signo": "+",
    "exp2": "(-7x-4y+6z)",
    "resultado": "-12x+20y+8z",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(6m^(a+1)-7m^(a+2)-5m^(a+3) )",
    "signo": "-",
    "exp2": "(4m^(a+1)-7m^(a+2)-m^(a+3) )",
    "resultado": "-4m^(a+3)+2m^(a+1)",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(x^3+xy^2+y^3 )",
    "signo": "+",
    "exp2": "(-5x^2 y+x^3-y^3 )",
    "resultado": "2x^3-5x^2 y+xy^2",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(-m^3+7m^2 n+5n^3 )",
    "signo": "-",
    "exp2": "(-7m^2 n+4n^3 )",
    "resultado": "-m^3+14m^2 n-n^3",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(8ab-b^2-2a^2 )",
    "signo": "+",
    "exp2": "(a^2-3ab+b^2 )",
    "resultado": "-(a)^2 + 5ab",
    "operacion": "suma y resta de polinomios"
  },
  {
    "exp1": "(-7x+14-x^2 )",
    "signo": "-",
    "exp2": "(-7x^2+5x-6)",
    "resultado": "6x^2-12x+20",
    "operacion": "suma y resta de polinomios"
  },
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
  },
  {
    "exp1": "(-a-2)",
    "signo": "*",
    "exp2": "(-a-3)",
    "resultado": "a^2+5a+6",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(5a-7b)",
    "signo": "*",
    "exp2": "(a+3b)",
    "resultado": "5a^2+8ab-21b^2",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(a^2+2ab-b^2 )",
    "signo": "*",
    "exp2": "(a+b)",
    "resultado": "a^3+3a^2 b+ab^2-b^3",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(x^3-2x^2+3x-1)",
    "signo": "*",
    "exp2": "(2x+3)",
    "resultado": "2x^4-x^3+7x-3",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(3a^2-5ab+2b^2 )",
    "signo": "*",
    "exp2": "(4a-5b)",
    "resultado": "12a^3-35a^2 b+33ab^2-10b^3",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(x^3+2x^2-x)",
    "signo": "*",
    "exp2": "(x^2-2x+5)",
    "resultado": "x^3+3x^2-3x+5",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(2-3x^2+x^4 )",
    "signo": "*",
    "exp2": "(x^2-2x+3)",
    "resultado": "x^6-2x^5+6x^3-7x^2-4x+6",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(x^2-2xy+y^2 )",
    "signo": "*",
    "exp2": "(xy-x^2+3y^2 )",
    "resultado": "-x^4+3x^3 y-5xy^3+3y^4",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(8x^3-9y^3+6xy^2 )",
    "signo": "*",
    "exp2": "(2x+3y)",
    "resultado": "16x^4+24x^3 y+12x^2 y^2-27y^4",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(x^4-3x^3 y+2x^2 y^2+xy^3 )",
    "signo": "*",
    "exp2": "(-y^2-xy-x^2 )",
    "resultado": "-x^6+2x^5 y-3x^2 y^4-xy^5",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(a^4-3a^2 b^2+a^3 b-ab^3+b^4 )",
    "signo": "*",
    "exp2": "(a^2-2ab+b^2 )",
    "resultado": "a^6-a^5 b-4a^4 b^2+6a^3 b^3-3ab^5+b^6",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(m^4-3m^2+4)",
    "signo": "*",
    "exp2": "(3m^3-2m+1)",
    "resultado": "3m^7-11m^5+m^4+18m^3-3m^2-8m+4",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(5a^4-3a+2a^2-4a^3-1)",
    "signo": "*",
    "exp2": "(a^4-2a^2+2)",
    "resultado": "6a^4-4a^3-3a+1",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(5y^4-3y^3+4y^2+2y)",
    "signo": "*",
    "exp2": "(y^4-3y^2-1)",
    "resultado": "5y^8-3y^7-11y^6+11y^5-17y^4-3y^3-4y^2-2y",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(3a^5-6a^3+2a^2-3a+2)",
    "signo": "*",
    "exp2": "(a^4-3a^2+4a-5)",
    "resultado": "3a^9-15a^7+14a^6-28a^4+47a^3-28a^2+23a-10",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(2x-3y+5z)",
    "signo": "*",
    "exp2": "(y+2z-x)",
    "resultado": "-2x^2+5xy-xz-3y^2-yz+10z^2",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(3/8 x^2+1/4 x-2/5)",
    "signo": "*",
    "exp2": "(2x^3-1/3 x+2)",
    "resultado": "3/4 x^5+1/2 x^4-37/40 x^3+2/3 x^2+19/30 x-4/5",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(1/2+1/3 x^2-1/4 x+1/4 x^3 )",
    "signo": "*",
    "exp2": "(3/2 x^2-1/5+1/10 x)",
    "resultado": "3/8 x^5+21/40 x^4-47/120 x^3+79/120 x^2+1/10 x-1/10",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(x^4+3x^3-5x^2+8)",
    "signo": "*",
    "exp2": "(x^3-2x^2-7)",
    "resultado": "x^7+x^6-11x^5+3x^4-13x^3+19x^2-56",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(x^4-8x^2+3)",
    "signo": "*",
    "exp2": "(x^4+6x^2-5)",
    "resultado": "x^8-2x^6-50x^4+58x^2-15",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(m^12-7m^8+9m^4-15)",
    "signo": "*",
    "exp2": "(m^16-5m^12+9m^8-4m^4+3)",
    "resultado": "m^28-12m^24+53m^20-127m^16+187m^12-192m^8+87m^4-45",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(m^(a-1)+m^(a+1)+m^(a+2)-m^a )",
    "signo": "*",
    "exp2": "(m^2-2m+3)",
    "resultado": "m^(a+4)-m^(a+3)+6m^(a+1)+3m^(a-1)-5m^as",
    "operacion": "multiplicacion de polinomios"
  },
  {
    "exp1": "(3x^3-6x^2+4x-1)",
    "signo": "/",
    "exp2": "(-3x)",
    "resultado": "-x^2+2x+1/3x-4/3",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(6x^2-5x+5)",
    "signo": "/",
    "exp2": "(2x+3)",
    "resultado": "26/(2x+3)+3x-7",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^2+7x+10)",
    "signo": "/",
    "exp2": "(x+5)",
    "resultado": "x+2",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(6x^2+16x+8)",
    "signo": "/",
    "exp2": "(3x+2)",
    "resultado": "2x+4",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(8x^2-26x+15)",
    "signo": "/",
    "exp2": "(4x-3)",
    "resultado": "2x+5",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(4x^2-9)",
    "signo": "/",
    "exp2": "(2x-3)",
    "resultado": "2x+3",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(10x+3x^2+6)",
    "signo": "/",
    "exp2": "(x+2)",
    "resultado": "3x+4-2/(x+2)",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^3+3x^2+5x+3)",
    "signo": "/",
    "exp2": "(x+1)",
    "resultado": "x^2+2x+3",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(9x^3-3x^2-9x+4)",
    "signo": "/",
    "exp2": "(3x+2)",
    "resultado": "3x^2-3x-1+6/(3x+2)",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^3+8)",
    "signo": "/",
    "exp2": "(x+2)",
    "resultado": "x^2-2x+4",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(28x^2-30y^2-11xy)",
    "signo": "/",
    "exp2": "(4x-5y)",
    "resultado": "7x+6y",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^2-20+x)",
    "signo": "/",
    "exp2": "(x+5)",
    "resultado": "x-4",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(6+a^2+5a)",
    "signo": "/",
    "exp2": "(a+2)",
    "resultado": "a+3",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(5a^2+8ab-21b^2)",
    "signo": "/",
    "exp2": "(a+3b)",
    "resultado": "5a-7b",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(5n^2-11mn+6m^2)",
    "signo": "/",
    "exp2": "(m-n)",
    "resultado": "6m-5n",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^3-y^3)",
    "signo": "/",
    "exp2": "(x-y)",
    "resultado": "x^2+xy+y^2",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(a^4+a)",
    "signo": "/",
    "exp2": "(a+1)",
    "resultado": "a^3-a^2+a",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(3y^5+5y^2-12y+10)",
    "signo": "/",
    "exp2": "(y^2+2)",
    "resultado": "3y^3-6y+5",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(15m^5-9m^3 n^2-5m^4 n)",
    "signo": "/",
    "exp2": "(3m-n)",
    "resultado": "-n^5/(9m-3n)+5m^4-3m^2 n^2-mn^3-n^4/3",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^12+x^6 y^6-x^8 y^4-x^2 y^10)",
    "signo": "/",
    "exp2": "(x^8+x^6 y^2-x^4 y^4-x^2 y^6 )",
    "resultado": "x^4-x^2 y^2+y^4",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^5+12x^2-5x)",
    "signo": "/",
    "exp2": "(x^2-2x+5)",
    "resultado": "x^3+2x^2-x",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^6+6x^3-2x^5-7x^2-4x+6)",
    "signo": "/",
    "exp2": "(x^4-3x^2+2)",
    "resultado": "x^2-2x+3",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(3x^3 y-5xy^3+3y^4-x^4)",
    "signo": "/",
    "exp2": "(x^2-2xy+y^2 )",
    "resultado": "-x^2+xy+3y^2",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(16x^4-27y^4-24x^2 y^2)",
    "signo": "/",
    "exp2": "(8x^3-9y^3+6xy^2-12x^2 y)",
    "resultado": "2x+3y",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(2x^5 y-x^6-3x^2 y^4-xy^5)",
    "signo": "/",
    "exp2": "(x^4-3x^3 y+2x^2 y^2+xy^3 )",
    "resultado": "-x^2-xy-y^2",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(a^6+b^6-a^5 b-4a^2 b^2+6a^3 b^3-3ab^5)",
    "signo": "/",
    "exp2": "(a^2-2ab+b^2 )",
    "resultado": "a^4+a^3 b+a^2 b^2+7ab^3+13b^4-4b^2+(16b^5)/(a-b)-(8b^3)/(a-b)+(4b^6)/(a-b)^2 -(4b^4)/(a-b)^2",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(3m^7-11m^6+m^4+18m^3)",
    "signo": "/",
    "exp2": "(m^4-3m^2+4)",
    "resultado": "3m^3-11m^2+9m-32+(33m^3)/(m^4-3m^2+4)-(52m^2)/(m^4-3m^2+4)-36m/(m^4-3m^2+4)",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(5a^5+6a^4+5a^8-4a^7-8a^6-2a^3)",
    "signo": "/",
    "exp2": "(a^4-2a^2+2)",
    "resultado": "5a^4-4a^3+2a^2-3a-(4a^2)/(a^4-2a^2+2)+6a/(a^4-2a^2+2)",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(a^2-b^2+2bc-c^2)",
    "signo": "/",
    "exp2": "(a+b-c)",
    "resultado": "a-b+c",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(16x^8-16y^8)",
    "signo": "/",
    "exp2": "(2x^2+2y^2 )",
    "resultado": "8x^6-8x^4 y^2+8x^2 y^4-8y^6",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^5-x^4+x^2-x)",
    "signo": "/",
    "exp2": "(x^3-x^2+x)",
    "resultado": "x^2-1",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(1/3 x^2+7/10 xy-1/3 y^2)",
    "signo": "/",
    "exp2": "(x-2/5 y)",
    "resultado": "1/3 x+5/6 y",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(1/3 x^3-35/36 x^2 y+2/3 xy^2-3/8 y^3)",
    "signo": "/",
    "exp2": "(2/3 x-3/2 y)",
    "resultado": "1/2 x^2-1/3 xy+1/4 y^2",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(4x^3-6x^2+8x-3)",
    "signo": "/",
    "exp2": "2x",
    "resultado": "2x^2-3x+4-3/2x",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(9x^3-x-28)",
    "signo": "/",
    "exp2": "(3x-4)",
    "resultado": "3x^2+4x+5-8/(3x-4)",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(2x^2+13x+15)",
    "signo": "/",
    "exp2": "(x+5)",
    "resultado": "2x/5+3/x+13/5",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(2x^2+13x+15)",
    "signo": "/",
    "exp2": "(2x+3)",
    "resultado": "x+5",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(2x^2+7x-18)",
    "signo": "/",
    "exp2": "(2x-3)",
    "resultado": "x+5-3/(2x-3)",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(9x^2-4)",
    "signo": "/",
    "exp2": "(3x+2)",
    "resultado": "3x-2",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(6x+8x^2-12)",
    "signo": "/",
    "exp2": "(2x+3)",
    "resultado": "4x-3-3/(2x+3)",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(4x^3+12x^2+7x-3)",
    "signo": "/",
    "exp2": "(2x+3)",
    "resultado": "2x^2+9x+17+48/(2x-3)",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(2x^3+6x-4)",
    "signo": "/",
    "exp2": "(x+4)",
    "resultado": "2x^2-8x+38-156/(x+4)",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^3-27)",
    "signo": "/",
    "exp2": "(x-3)",
    "resultado": "x^2+3x+9",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(a^2+2a-3)",
    "signo": "/",
    "exp2": "(a+3)",
    "resultado": "a-1",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(m^2-11m+30)",
    "signo": "/",
    "exp2": "(m-6)",
    "resultado": "m-5",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(6x^2-xy-2y^2)",
    "signo": "/",
    "exp2": "(y+2x)",
    "resultado": "3x-2y",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(14x^2-12+22x)",
    "signo": "/",
    "exp2": "(7x-3)",
    "resultado": "2x+4",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(32n^2-54m^4+12mn)",
    "signo": "/",
    "exp2": "(8n-9m)",
    "resultado": "6m^3+(16m^2)/3+(128mn^2)/27+(1024n^3)/243-4n/3+(8192n^4)/243(9m-8n) -(128n^2)/3(9m-8n) ",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(a^3+3ab^2-3a^2 b-b^3)",
    "signo": "/",
    "exp2": "(a-b)",
    "resultado": "a^2-2ab+b^2",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(m^6-n^6)",
    "signo": "/",
    "exp2": "(m^2-n^2 )",
    "resultado": "m^4+m^2 n^2+n^4",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(am^4-am-2a)",
    "signo": "/",
    "exp2": "(am+a)",
    "resultado": "m^3-m^2+m-2",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(2x^3-2-4x)",
    "signo": "/",
    "exp2": "(2+2x)",
    "resultado": "x^2-x-1",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(11a^3-3a^5-46a^2+32)",
    "signo": "/",
    "exp2": "(8-3a^2-6a)",
    "resultado": "a^3-2a^2+3a+4",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(m^5-5m^4 n+20m^2 n^3)",
    "signo": "/",
    "exp2": "(m^2-2mn-8n^2 )",
    "resultado": "m^3-3m^2 n+2mn^2+(16n^4)/3(m+2n) +(32n^4)/3(m-4n) ",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(m^6+m^5-4m^4-4m+m^2-1)",
    "signo": "/",
    "exp2": "(m^3+m^2-4m-1)",
    "resultado": "m^3+1",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(2n-2n^3+n^4-1)",
    "signo": "/",
    "exp2": "(n^2-2n+1)",
    "resultado": "n^2-1",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(4y^4-13y^2+4y^3-3y-20)",
    "signo": "/",
    "exp2": "(2y+5)",
    "resultado": "2y^3-3y^2+y-4",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(a^6-5a^5+31a^2-8a+21)",
    "signo": "/",
    "exp2": "(a^3-2a-7)",
    "resultado": "a^3-5a^2+2a-3",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^6-2x^4 y^2+2x^3 y^3+3xy^5-2y^6)",
    "signo": "/",
    "exp2": "(x^2-2y^2+xy)",
    "resultado": "x^4-x^3 y+x^2 y^2-xy^3+3y^4-(8y^5)/3(x+2y) +(2y^5)/3(x-y) ",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(a^6+2a^5-3a^3-2a^4+2a^2-a-1)",
    "signo": "/",
    "exp2": "(a^3+a^2-a+1)",
    "resultado": "a^3+a^2-2a-1",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^7-3x^6+6x^5+x^2-3x+6)",
    "signo": "/",
    "exp2": "(x^3-2x^2+3x+6)",
    "resultado": "x^4-x^3+x^2-x+1",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(a^5+b^5)",
    "signo": "/",
    "exp2": "(a+b)",
    "resultado": "a^4-a^3 b+a^2 b^2-ab^3+b^4",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^10-y^10)",
    "signo": "/",
    "exp2": "(x^2-y^2 )",
    "resultado": "x^8+x^6 y^2+x^4 y^4+x^2 y^6+y^8",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^8-2x^6-50x^4+58x^2-15)",
    "signo": "/",
    "exp2": "(x^4+6x^2-5)",
    "resultado": "x^4-8x^2+3",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(1/3 x^3-35/36 x^2 y+2/3 xy^2-3/8 y^3)",
    "signo": "/",
    "exp2": "(1/2 x^2-1/3 xy+1/4 y^2 )",
    "resultado": "2/3 x-3/2 y",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(a^(x+3)+a^x)",
    "signo": "/",
    "exp2": "(a+1)",
    "resultado": "a^(x+2)-a^(x+1)+a^x",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^2+6x+8)",
    "signo": "/",
    "exp2": "(x+2)",
    "resultado": "x+4",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^2+4x+3)",
    "signo": "/",
    "exp2": "(x+1)",
    "resultado": "x+3",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(2x^2+x-10)",
    "signo": "/",
    "exp2": "(x-2)",
    "resultado": "2x+5",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(2x^2+x-10)",
    "signo": "/",
    "exp2": "(2x+5)",
    "resultado": "x-2",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^2-25)",
    "signo": "/",
    "exp2": "(x-5)",
    "resultado": "x+5",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(6x+8x^2-25)",
    "signo": "/",
    "exp2": "(4x+9)",
    "resultado": "2x-3+2/(4x+9)",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(6x^2-13-11x)",
    "signo": "/",
    "exp2": "(2x-5)",
    "resultado": "3x+2-3/(2x-5)",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(2x^3-3x^2-3x+6)",
    "signo": "/",
    "exp2": "(x-1)",
    "resultado": "2x^2-x-4+2/(x-1)",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^3-8)",
    "signo": "/",
    "exp2": "(x-3)",
    "resultado": "x^2+3x+9+19/(x-3)",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^3+27)",
    "signo": "/",
    "exp2": "(x+3)",
    "resultado": "x^2-3x+9",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(a^2-2a-3)",
    "signo": "/",
    "exp2": "(a+1)",
    "resultado": "a-3",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^2+15-8x)",
    "signo": "/",
    "exp2": "(3-x)",
    "resultado": "5-x",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(-15x^2-8y^2+22xy)",
    "signo": "/",
    "exp2": "(2y-3x)",
    "resultado": "5x-4y",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(-8a^2+12ab-4b^2)",
    "signo": "/",
    "exp2": "(b-a)",
    "resultado": "8a-4b",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(-14y^2+33+71y)",
    "signo": "/",
    "exp2": "(-3-7y)",
    "resultado": "2y-11",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^4-9x^2+3+x)",
    "signo": "/",
    "exp2": "(x+3)",
    "resultado": "x^3-3x^2+1",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(2x^4-x^3-3+7x)",
    "signo": "/",
    "exp2": "(2x+3)",
    "resultado": "x^3-2x^2+3x-1",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(12a^3+33ab^2-35a^2 b-10b^3)",
    "signo": "/",
    "exp2": "(4a-5b)",
    "resultado": "3a^2-5ab+2b^2",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(3a^5+10a^3 b^2+64a^2 b^2)",
    "signo": "/",
    "exp2": "(a^3-4ab^2-5a^2 b)",
    "resultado": "3a^2+15ab+97b^2+(545ab^3)/(a^2-5ab-4b^2 )+(64ab^2)/(a^2-5ab-4b^2 )+(388b^4)/(a^2-5ab-4b^2 )",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(a^4-a^2-2a-1)",
    "signo": "/",
    "exp2": "(a^2+a+1)",
    "resultado": "a^2-a-1",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^4-x^2-2x-1)",
    "signo": "/",
    "exp2": "(x^2-x-1)",
    "resultado": "x^2+x+1",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(a^5-a^4+10-27a+7a^2)",
    "signo": "/",
    "exp2": "(a^2+5-a)",
    "resultado": "a^3-5a+2",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(22a^2 b^4-5a^4 b^2+a^5 b-40ab^5)",
    "signo": "/",
    "exp2": "(a^2 b-2ab^2-10b^3 )",
    "resultado": "a^3-3a^2 b+4ab^2",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(5a^3 x^2-3x^5-11ax^4+3a^4 x-2a^5)",
    "signo": "/",
    "exp2": "(3x^3-a^3+2ax^2 )",
    "resultado": "-x^2-3ax+2a^2",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(m^6-m^5+5m^3-6m+9)",
    "signo": "/",
    "exp2": "(m^4+3-m^2+m^3 )",
    "resultado": "m^2-2m+3",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(4y^3-2y^5+y^6-y^4-4y+2)",
    "signo": "/",
    "exp2": "(y^4+2-2y^2 )",
    "resultado": "y^2-2y+1",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(24x^5-52x^4 y+38x^3 y^2-33x^2 y^3)",
    "signo": "/",
    "exp2": "(8x^3-12x^2 y-6xy^2+y^3 )",
    "resultado": "3x^2-2xy+4y^2+(17xy^3)/3(4x^2-8xy+y^2 ) -(7y^4)/6(4x^2-8xy+y^2 ) ",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(3a^6+5a^5-9a^4-10a^3+8a^2)",
    "signo": "/",
    "exp2": "(3a^3+2a^2-5a-4)",
    "resultado": "a^3+a^2-2a+1-1/(a+1)^2 ",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(21x^5-21y^5)",
    "signo": "/",
    "exp2": "(3x-3y)",
    "resultado": "7x^4+7x^3 y+7x^2 y^2+7xy^3+7y^4",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^15+y^15)",
    "signo": "/",
    "exp2": "(x^3+y^3 )",
    "resultado": "x^12-x^9 y^3+x^6 y^6-x^3 y^9+y^12",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(1/6 a^2+5/36 ab-1/6 b^2)",
    "signo": "/",
    "exp2": "(1/3 a+1/2 b)",
    "resultado": "1/2 a-1/3 b",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(1/16 a^3-5/8 a^2 b-b^3+5/3 ab^2)",
    "signo": "/",
    "exp2": "(1/4 a-3/2 b)",
    "resultado": "1/4 a^2-ab+2/3 b^2",
    "operacion": "division de polinomios"
  },
  {
    "exp1": "(x^(n+2)+3x^(n+3)+x^(n+4)-x^(n+5))",
    "signo": "/",
    "exp2": "(x^2+x)",
    "resultado": "-x^(n+3)+2x^(n+2)+x^(n+1)",
    "operacion": "division de polinomios"
  }
];
