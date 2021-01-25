//The function onload allows as to load the HTML file first before the the script file is executed. The function needs to be placed in the "main.js" folder. 
window.onload = function(){
    //old way 
    var p = document.getElementsByTagName ('p'); //to select an HTML tag 
    var greenP = document.getElementById ('green'); //to select by ID 
    var classP1= document.getElementsByClassName('p1');//to select by class Name
    //new way
    var pWithQuerySelectorALL = document.querySelectorAll('p'); //using only single quotes
    var pWithQuerySelectorById= document.querySelector('#green'); //with "#"//with "." 
    //to select multiple elements with the querySelector we use "querySelectorALL"

    console.log(pWithQuerySelectorALL);//display the variable using console.log 
};
//------------------------------------------------//

