var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
var d = document .getElementById("dibujito");
var ancho = d.width
alert=("ancho")
var lienzo = d.getContext("2d");
console.log(lienzo);


function dibujoPorClick()
{
lienzo.clearRect(0, 0, d.width, d.height);
var x = parseInt(texto.value);
var lineas = x;
var l= 0
var yi , xf , xi, yf
var colorcito = "#FAA";
var colorcito2 = "black";
var esp = ancho/lineas
for (l= 0; l < lineas; l++)
{
  xi= esp * l;
  yi= esp * l;
  xf= esp * (l+1);
  yf= esp * (l+1);
  dibujarLinea(colorcito2,xi,0,300,yf);
  dibujarLinea(colorcito, 0, yi, xf, 300);
  console.log("Linea"+ l);
}
dibujarLinea(colorcito,1,1,1,300);
dibujarLinea(colorcito,1,299,299,299);
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
}
