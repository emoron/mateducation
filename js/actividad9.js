//Actividad 9
//Tomar un elemento de la lista
//Tomar 4 Elementos aleatorios
//Hacer que sean Click y Droppable
var listado = [
{
	"exp1": "3x+5x",
	"resultado": "8x",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "2x-3x",
	"resultado": "-x",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "-4x+7x",
	"resultado": "3x",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "3+2x-5",
	"resultado": "2x-2",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "-7+5x+12",
	"resultado": "5x+5",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "-x+2-x-2",
	"resultado": "-2x",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "4+x+3",
	"resultado": "x+7",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "x+4-6",
	"resultado": "x-2",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "x-2-4+2x",
	"resultado": "3x-6",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "3x-x+4-6",
	"resultado": "2x-2",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "x-6+3x-4",
	"resultado": "4x-10",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "-1/7 ab-1/14 ab-1/25 ab-ab",
	"resultado": "-439/350 ab",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "5x-11y-9+20x-1-y",
	"resultado": "25x-12y-10",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "7a-9b+6a-4b",
	"resultado": "13a-13b",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "-71a^3 b-84a^4 b^2+50a^3 b+84a^4 b^2-45a^3 b+18a^3 b",
	"resultado": "48a^3 b",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "x^4 y-x^3 y^2+x^2x 2y-8x^4 y-x^2 y-10+x^3 y^2-7x^3 y^2-9+21x^2 y-y^3+50",
	"resultado": "-7x^4 y-7x^3 y^2+2x^2x y+20x^2 y-y^3+31",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "0.3a+0.4b+0.5c-0.6a-0.7b-0.9c+3a-3b-3c",
	"resultado": "2.7a-3.3b-3.4c",
	"operacion": "suma y resta de monomios"
},
{
	"exp1": "-3/4 a^2+1/2 ab-5/6 b^2+2 1/3 a^2-3/4 ab+1/6 b^2-1/3 b^2-2ab",
	"resultado": "19/12 a^2-9/4 ab-b^2",
	"operacion": "suma y resta de monomios"
}];

var caja = "#sandbox";

var inicial = Math.floor(Math.random()*listado.length);

var objeto1 = listado[inicial];
var expresiones=[];

for(var i = 0 ; i <= 4; i++){
		var numero = Math.floor(Math.random()*listado.length);
	//Console.log(numero);
	var expr1 = listado[numero];
	expresiones.push(expr1);
}

var node = math.parse(objeto1.exp1);
node.forEach(function (node, path, parent) {
  switch (node.type) {
    case 'OperatorNode': console.log(node.type, node.op);    break;
    case 'ConstantNode': console.log(node.type, node.value); break;
    case 'SymbolNode':   console.log(node.type, node.name);  break;
    default:             console.log(node.type);
  }
});

var node = math.parse('x^2 + x/4 + 3*y');
var filtered = node.filter(function (node) {
  return node.type == 'SymbolNode' && node.name == 'x';
});
// returns an array with two entries: two SymbolNodes 'x'

$(""+caja).append("$$"+math.parse(objeto1.exp1).toTex()+"$$");
$(""+caja).draggable();
