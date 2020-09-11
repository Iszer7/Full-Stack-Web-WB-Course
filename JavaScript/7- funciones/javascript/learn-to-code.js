function area (base, altura){
    return base * altura;
}

var area1 = area(10,5);
console.log(area1);

var rectangulos = [];
rectangulos.push(area(10,10));   //Push es una funcion, lo mete al array
rectangulos.push(area(10,15));
rectangulos.push(area(10,16));
rectangulos.push(area(10,17));

console.log(rectangulos);

//---------------------------------

var banco = 500;

function transaccion(precio){
    if(precio <= banco){
        banco -= precio;
        console.log("Comprado!");
    }else{
        console.log("Sin dinero");
    }
}

console.log(banco);
transaccion(80);
console.log(banco);
transaccion(250);
console.log(banco);
transaccion(150);
console.log(banco);
transaccion(12500);
console.log(banco);

//------------------------------------

var nombre = function(nombre,apellido){
    console.log("Nombre: " + nombre + "Apellido: " + apellido);
}

var tarjetaDeCredito = Function(saldo, gasto){
    //llama algunas funciones para hacer el proceso
}

var operacionesBancarias = [];
operacionesBancarias.push(transaccion);
operacionesBancarias.push(nombre);
operacionesBancarias.push(tarjetaDeCredito);