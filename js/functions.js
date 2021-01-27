window.onload = function () {
    //create a  named function 
    function sayHello(){
        let x= "Hello World"; 
        return x; 
    }
    myResult=sayHello(); 
    console.log("Named function:", myResult); 
    //create an anonymous function, used often React framework
    var myAnonymousFunction = function (){
        return "Hello World"; 
    }
    //Launched the function
   var myResult2= myAnonymousFunction(); //we need to add the parenthesis for anonymous functions
   console.log("My anonymous function:", myResult2); 
    
   //Functions with parameters
    function crepeRecipe(egg, flour, milk) {
        console.log ("Ingredients: ", egg, flour, milk); 
    }
        //call the function
        myCrepe= crepeRecipe("1 eggs", "1 kg de farine", "1 cup of milk"); 
    
    //You can call the function with  any type of data: string, number, object, array
    //here's one with an object: 
    crepeRecipe ({
        quantity: 3
    },{
        quantity:4
    },{
        quantity:5
    }); 

    //The best type of data we can use for this function are numbers and strings. The latter can be converted to numbers using parseInt(); 

    var numberString = "2"; 
    console.log("Type", typeof numberString, "value", numberString);
    var numberInteger= parseInt(numberString, 10);//we need to specify the radix because some browsers have other default radix (2,8,16)
    console.log ("type:", typeof numberInteger, "value:", numberInteger); 

    //Convert numbers to string
    var numberToString = numberInteger.toString(); 
    console.log ("Type:", typeof numberToString, "value", numberToString); 
}