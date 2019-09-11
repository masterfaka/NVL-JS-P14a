
/*
Tenemos una lista de películas dentro de un objeto JSON. De la siguiente forma:
Rellena dicha lista con 20-30 películas más.
Nuestro objetivo es recorrer el listado de películas y 
crear una lista html desordenada donde dependiendo del género
 pondremos el icono característico del género que estemos tratando.
*/
/*OJO!!! el script debe ir abajo por load del dom da fallo"!!!*/
/*Mi pto JSON esta mal formado por eso no puedo acceder a el*/
var pelis = [
 {
   "Nombre": "El señor de los anillos",
   "Genero": "“Acción”"
 },
{
  "Nombre": "“Regreso al Futuro”",
   "Genero": "“Acción”"
 },
{
  "Nombre": "“Los increibles 2”",
   "Genero":" “Animación”"
 }
];
console.log(pelis[2].Nombre);
 var elDiv=document.querySelector("#targetDiv");
 var tabla=document.createElement('TABLE');
 var parr=document.createElement("p");
 parr.textContent="Pto parrafo prueba";
 var fila=document.createElement("TR");
 var celda1= document.createElement("TD");
 celda1.textContent="Genero";
 var celda2= document.createElement("TD");
 celda2.textContent="Nombre";
 fila.appendChild(celda1);
 fila.appendChild(celda2);
//metemos datos antes de meter la tabla
tabla.appendChild(fila);
;

//metemos valores opcionales ena rray
for (var i = 2; i <= 20; i++) {
	var aux={
	  "Genero":" “Animación”",
	   "Nombre": "“Los increibles 2”"
	 };
	 pelis.push(aux);

}

for (var i = 0; i <= 20; i++) {
		 var fila=document.createElement("TR");
		 var celda1= document.createElement("TD");
		 celda1.textContent=pelis[i].Genero;
		 var celda2= document.createElement("TD");
		 celda2.textContent=pelis[i].Nombre;
		 fila.appendChild(celda1);
		 fila.appendChild(celda2);
		tabla.appendChild(fila);


	}
	elDiv.appendChild(tabla);
 
 //elDiv.appendChild(parr);