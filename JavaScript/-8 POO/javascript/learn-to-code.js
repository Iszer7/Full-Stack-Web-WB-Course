
//Construccion de objetos

function Estudiante(nombre,apellido,edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.saludos =  function(){
      return "Hola, soy " + this.nombre + ", y tengo " + this.edad + " anios";
    };
}

//Objetos

//var estudiante1 = {         //Atributos
//    nombre: "Diego",
//    apellido: "Kippes",
//    edad: 24,
//    
//};
//
//console.log(estudiante1.saludos());

//Creacion de objetos
//var estudiante2 = {};
//estudiante2.nombre = "Eze";
//estudiante2.apellido = "Alvarellos";
//estudiante2.edad = 23;
//
//var estudiante3 = new Object();
//estudiante3.nombre = "Raul";
//estudiante3.apellido = "Estebanes";
//estudiante3.edad = 20;

var estudiantes = [];

function Estudiante(nombre,apellido,edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.saludos =  function(){
      return "Hola, soy " + this.nombre + ", y tengo " + this.edad + " anios";
    };
}

estudiantes.push(new Estudiante("Pedro","Rod",54));
estudiantes.push(new Estudiante("Lala","Loa",34));
estudiantes.push(new Estudiante("Aho","Uha",12));

//For IN
var estudiante = estudiantes[0];        //Es para debug

for (var key in estudiante) {
    console.log(estudiante[key]);
}

//var e1 = new estudiante("Diego","Kippes",23);
//console.log(e1);
//console.log(e1.saludos());

//estudiantes.push(estudiante1);
//estudiantes.push(estudiante2);
//estudiantes.push(estudiante3);

//for (var i = 0; i < estudiantes.length; i++){
//    var estudiante = estudiantes[i];
//    console.log(estudiante.saludos());
//}