window.onload = function() {
   /* var panier = [{
        nomFruit: "banane", 
        quantity: 9, 
        prixUnité: 1.20   
    },
    {
        nomFruit: "orange", 
        quantity: 9, 
        prixUnité: 2.6, 
    },
    {
        nomFruit: "choux", 
        quantity: 9, 
        prixUnité: 6.8  
    }]; 

    var TotalFruitsLegumes = []; 
    for (element in panier) {
        let result = panier[element].prixUnité * panier[element].quantity;  
        TotalFruitsLegumes.push (result);
    }
    console.log (TotalFruitsLegumes); 
    
    
    for ()

    TotalFruitsLegumes.shift */

   
      
 //houda code
 var panier = [{fruit: 'poire', prix: 5.50,quantite:3},{fruit: 'banane',prix: 3.20,quantite:2},{fruit: 'Litchi',prix: 5.20,quantite:10}];
var prixTotalsFruitsLegumes = [];

for(fruit of panier)
{
    prixTotalsFruitsLegumes.unshift(fruit.prix *fruit.quantite);
}

console.log(prixTotalsFruitsLegumes);


var prixTotal = 0;
for(var i=(prixTotalsFruitsLegumes.length-1) ;i >=0; i--){
   
   //console.log(prixTotal+prixTotalsFruitsLegumes[i]) ;
   // prixTotalsFruitsLegumes.pop();
   prixTotal+=prixTotalsFruitsLegumes[i];
   prixTotalsFruitsLegumes.pop();
}

console.log("prixtotal",prixTotal);
console.log("prixtotalfruitslegumes",prixTotalsFruitsLegumes);

}

