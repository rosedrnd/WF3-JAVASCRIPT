window.onload = function () {

var fruitLegumes = ["apple", "orange", "strawberry", "cabbage", "okra", "pineapple", "banana", "cucumber", "pumpkin", "courgette", "eggplant", "kangkong", "pechay"]; 
var panier= []; 


while (fruitLegumes.length > 0) {
    i = fruitLegumes.length; 
    i--;
    panier.unshift(fruitLegumes[i]); 
    fruitLegumes.pop (); 
}

/*
//the for loop gives me an empty value
for (i=fruitLegumes.length; i>0; i--) {  
    fruitLegumes.pop ();   
    panier.push(fruitLegumes[i]); 
}*/

console.log ("Panier:", panier);
console.log ("Fruit Legumes", fruitLegumes); 
}