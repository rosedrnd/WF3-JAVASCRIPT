window.onload = function () {
    /*
        function rand(maxLimit = 100) {
            let rand = Math.random() * maxLimit;
            return Math.floor(rand);
        }*/
        function rand(min=0, max=100) { //defining a min and max parameter with default values
            let randomNum = Math.random() * (max - min) + min; //ask prof ??
            return Math.round(randomNum);
         }
        var numberGenerator = rand(); 
        let numberClient=prompt(); 
        
        while (numberClient!=numberGenerator) {
                if (numberClient < numberGenerator) {
                    alert("C'est plus!");
                    numberClient =prompt(); 
                } else {
                    alert("C'est moins!");
                    numberClient = prompt(); 
                }
        }
        alert("Vous avez gagné un grille pain!")
        console.log(numberGenerator);
        console.log(numberClient); 
    }
    


