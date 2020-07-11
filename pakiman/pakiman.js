var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion =[]
coleccion.push(new Pakiman ("Cauchin",100,80))
coleccion.push(new  Pakiman("Pokacho",200,50))
coleccion.push(new Pakiman ("Tocinauro",120,40))

coleccion[2].mostrar()

for(var pakin of coleccion)
{
    pakin.mostrar();
}
