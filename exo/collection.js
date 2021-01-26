window.onload = function() {
    var panier = {
        banana: 2, 
        orange: 5, 
        apple: 6, 
        courgette: 1, 
        cabbage: 2, 
        cucumber:1
    }
    console.log (panier); 

    function sum() {
        for (element in panier) {
            let result =element + element; 
            return result; 
        }
    }
    
    var TotalFruitsLegumes = sum(); 
    console.log (TotalFruitsLegumes); 

}

