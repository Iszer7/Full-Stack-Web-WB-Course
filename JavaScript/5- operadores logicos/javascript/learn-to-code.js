// || -> OR (alguno de los dos tiene que ser true)
// && -> AND (los dos tienen que ser true)
/*
if(1 === 1 && 2 === 2 ){
    console.log("Son ambos iguales");
}

if (true && true){
    console.log("son lo mismo (AND)");
}

if (true || false){
    console.log("uno de los dos paso (OR)");
}
*/

var cat1 = 5;
var cat2 = 10;
var cat3 = 1;
var gato3Lastimado = true;

if ((cat1 > cat2 && cat1 > cat3) && !gato3Lastimado){       //gato3Lastimado === false -> es lo mismo que !
    console.log("El gato 1 es el mas lindo");
} else if ((cat2 > cat1 && cat2 > cat3) && !gato3Lastimado){
    console.log("el gato 2 es el mas lindo");
} else if ((cat3 > cat1 && cat3 > cat2) || gato3Lastimado){
    console.log("el gato 3 es el mas lindo");
}