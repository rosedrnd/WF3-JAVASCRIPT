var color = ["red", "blue", "white", "black", "orange", "tomato", "yellow"];

// @ToDo => parcourir le tableau de couleur et l'afficher dans la console
// avec une boucle for
//with the length function
for (i=0; i< color.length; i++) {
    console.log('Color:', color[i]); 
}
//using "var of" to display the items in  the table

table = ["hello", "bye", "goodbye"];
for (var i of table) {
    console.log('Items in table are:', i); 
}
// using 'var in" to display the items in an object 
var fruits = {
    pomme: 4,
    poire: 0,
    banane: 10,
    tomate: 6
}
 for (var element in fruits) {
     console.log('Key :', element, 'value: ', fruits[element]); 
 }
 //selecting a value of an array inside an object
var backPack = {
    equipment: ["map", "flashlight", "tent"], 
    food: ["bananas", "apple", "orange"]
}
for (var element of backPack.equipment && backPack.food) {
    console.log ('We need the following: ', element); 
}