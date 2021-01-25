window.onload = function () {
//adding an element in the table
var table1 = []; //our table is empty
console.log ("This is our table empty:",table1); 
table1[4] = "Hello"; //we don't need a "var" to declare it. We assigned the value hello and placed in the 4th place
console.log ("After we have added the new element", table1[4]);

//using the method "push" to add an element at the end of the table
table1.push("banana"); //we added another element called "banana" and it will be placed after the "Hello"
console.log ("Added an element at the end:", table1); 

//using the method unshift to add an element at the beginning of the table
table1.unshift("strawberry"); 
console.log("Added an element at the beginning:", table1);
//deletes the first element using the method "shift"
table1.shift (); //deletes "strawberry"
console.log("Deleted the first element:", table1); 
//deletes the last element using the method "pop" to 
table1.pop(); //deletes "banana"
console.log("After deleting the last element", table1); 
}

