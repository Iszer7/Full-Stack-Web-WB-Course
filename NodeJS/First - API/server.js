var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var ingredients = [
  {
    id: "232kAk",
    text: "Eggs",
  },
  {
    id: "dkP345",
    text: "Milk",
  },
  {
    id: "dkcuu7",
    text: "Bacon",
  },
  {
    id: "73hdy",
    text: "Frong Legs",
  },
];

app.get("/ingredients", function (request, response) {
  response.send(ingredients);
});

app.post("/ingredients", function (request, response) {
  var ingredient = request.body;
  if (!ingredient || ingredient.text === "") {
    response
      .status(500)
      .send({ error: "Tus ingredientes deberian tener texto" });
  } else {
    ingredients.push(ingredient);
    response.status(200).send(ingredients);
  }
});

app.put("/ingredients/:ingredientId", function (request, response) {
  
  var newText = request.body.text;

  if (!newText || newText === "") {
    response
      .status(500)
      .send({ error: "Tenes que proveer un ingredient text" });
  } else {
    var objectFound = false;

    for (var i = 0; i < ingredients.length; i++) {
      var ing = ingredients[i];

      if (ing.id === request.params.ingredientId) {
        ingredients[i].text = newText;
        break;
      }
    }

    if(!objectFound) {
      response.status(500).send({error:'No se encontro ID del ingrediente'});
    } else {
      response.send(ingredients);
    }

    response.send(ingredients);
  }
});

/*app.delete('ingredients/:ingredientId', function(request, response) {             //Falla, revisar que esta mal.
  
  var ingredienteID = request.body.id;

  if(!ingredienteID || ingredienteID === ''){
    response.status(500).send({ error: 'Debe tener un ID a eliminar'});
  } else {
    var objectFound = false;

    for (var i=0; i < ingredients.length; i++){
      var ing = ingredients[i];

      if (ing.id === request.params.ingredientId){
        ing.delete;
        break;
      }
    }

    if(!objectFound) {
      response.status(500).send({error:'No se encontro ID del ingrediente'});
    } else {
      response.send(ingredients);
    }

    response.send(ingredients);
  }
});
*/

app.listen(3000, function () {
  console.log("First API corriendo en el port 3000");
});
