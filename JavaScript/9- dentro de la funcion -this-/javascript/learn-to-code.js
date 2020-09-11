//Auto de pepe
this.car = "Honda Civir ";

var marcosGarage = {
  car: "Aston Martin",
  getCar: function() {
    return this.car;
  }
};

console.log(marcosGarage.getCar());
//Es tomado el this de afuera, y no el de marcosGarage
var storeGetCarForLater = marcosGarage.getCar;

console.log(storeGetCarForLater());
//Aca si agarra el this de adentro, y saca el auto de marcos
var theRealGetCarFunction = marcosGarage.getCar.bind(marcosGarage);
console.log(theRealGetCarFunction());