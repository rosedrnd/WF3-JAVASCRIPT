
    //let's create elements using Javascript
    var createDivELement = document.createElement('div'); 
    var createP=document.createElement('p'); 
    console.log(createP);
    //Assign text to paragraph
    createP.innerText = "Hello World";  
    //create a child  element in our div
    var createChild=createDivELement.appendChild(createP); 
    console.log('Append child',createDivELement); 
    //Display the element on our HTML page
    var body =document.querySelector('body'); 
    body.appendChild(createDivELement); 
    //Assign attributes to elements (class); 
    createDivELement.setAttribute('class', 'square') //class with name square
    createP.setAttribute('class', 'color'); 
}