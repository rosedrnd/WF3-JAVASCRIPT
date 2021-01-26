window.onload = function() {
    var panier = [{
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
        console.log (TotalFruitsLegumes); 
        TotalFruitsLegumes.shift(result);  
    }
    
    console.log (TotalFruitsLegumes); 
      
 

}

