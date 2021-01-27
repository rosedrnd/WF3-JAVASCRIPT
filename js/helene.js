function makeMulti(balise,repeat)
{
    let newArray = [];
    for(let i = 0;i <=repeat ;i++){
        newArray[i]= document.createElement(balise);

        newArray[i].innerText = "I create a " + balise + " "+ i;

        //CALL PARENT HTML 
        let divMain = document.querySelector(".main");

        //PUT CHILD FOR PARENT
        divMain.appendChild(newArray[i]);
    }
   
}


//mon code orig

function createMultiple(tag, quantity) {
    let createBalise = []; 
    for (let i=0; i<quantity; i++) {
        createBalise[i] = document.createElement(tag); 
    }
    return createBalise; 
}
console.log(createMultiple('p', 4)); 