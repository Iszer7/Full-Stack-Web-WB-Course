
var cuentaBancaria = 900;
var unasBuenasZapas = 1000;
var cupon = 400;
// == equal to
// === comparison operator (strict)
// <=
// >=
// != no es igual
// !== no es igual, y tampoco el dato

if(unasBuenasZapas <= cuentaBancaria){
    cuentaBancaria -= unasBuenasZapas;
    console.log("Te compraste unas zapas de: " +unasBuenasZapas);
    console.log("\nTe quedo de saldo en la cuenta; " + cuentaBancaria);
}else if (unasBuenasZapas - cupon <= cuentaBancaria){
    cuentaBancaria -= unasBuenasZapas - cupon;
    console.log("Te compraste unas zapas de: " +unasBuenasZapas);
    console.log("\nTe quedo de saldo en la cuenta; " + cuentaBancaria);
}else{
    console.log("No man, no podes comprarlas");
}

var val1 = 23;
var val2 = "23";

if (val1 === val2) //No tiene el mismo tipo de variable, tampoco se necesita obligadamente si tenes un if, else... si tienes mas si es necesario "{ }" --> Igualmente siempre usarlos, por proligidad
    console.log("Las variables son iguales");
else
    console.log("Las variables no son iguales");
