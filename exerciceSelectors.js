//The function onload allows as to load the HTML file first before the the script file is executed. The function needs to be placed in the "main.js" folder. 
window.onload = function(){
    //old way 
    var divByClassName = document.getElementsByClassName('card');  
    var divByTagName = document.getElementsByTagName('div'); //selects multiples divs
    var divById = document.getElementById('card');    
    //new way
    var divBySelectorClass = document.querySelector ('.card'); 
    var divBySelectorElement = document.querySelector('div'); //only selects the first element
    var divBySelectorId = document.querySelector('#card'); 
   
    //selecting multiple elements using "querySelectorALL" 
    var pSelectAll=document.querySelectorAll('p');  
    //display the variable using console.log 
    console.log("Select Id:", divById);
    console.log("Select by class:", divBySelectorId); 
    console.log("Select by tag:", pSelectAll); 
};
//------------------------------------------------//

