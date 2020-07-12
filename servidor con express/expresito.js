var  express= require ("express");
var aplicacion = express();
aplicacion.get("/",Inicio);
aplicacion.get("/Cursos",Cursos);
function Inicio (peticion, resultado)
{
  resultado.send("Este es el <strong>Home</strong>");
}
function Cursos (peticion, resultado)
{
  resultado.send("Estos son los <strong>Cursos</strong>");
}
aplicacion .listen (8989);
