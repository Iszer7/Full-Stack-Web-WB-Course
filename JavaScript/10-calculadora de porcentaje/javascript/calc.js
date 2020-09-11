var numero1 = document.getElementById('numero1');
var numero2 = document.getElementById('numero2');
var campoResultado = document.getElementById('campoResultado');
var form = document.getElementById('xIsWhatPercentOfY');

form.addEventListener('submit', function(event) {
    
    if(!numero1.value || !numero2.value){
        alert("Ingrese datos por favor!");
    }else{
        var x = parseFloat(numero1.value);      //parseFloat transforma string en numero
        var y = parseFloat(numero2.value);
        
        var resultado = x / y;
        var porcentaje = resultado * 100;

        campoResultado.innerText = "Resultado: " + porcentaje + "%";
        event.preventDefault();
    }
});