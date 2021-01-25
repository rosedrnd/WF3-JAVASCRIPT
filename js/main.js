window.onload = function () {
    //Object
    var d = {
        color: "red", 
        number: 1, 
        tableau:[], 
        object: {}, 
        fonction: function (){}, 
        bool1:true, 
        bool2: false
    }
    //To access the properties of the object
    console.log("Property color:", d.color);  
    console.log("Property number:", d.number); 
    console.log("Property tableau:", d.tableau); 
    //to recover the type we use the method "typeof"
    console.log("The type of:", typeof d.color);
    console.log("The type of:", typeof d.object); 
    console.log("The type of:", typeof d.fonction); 
    console.log("The type of:", typeof d.bool1); 
}