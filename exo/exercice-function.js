window.onload = function () {
    function createTags(balise1, balise2, repeat, array) {
        for (let i = 1; i <= repeat; i++) {
            newArray[i] = document.createElement(balise1);
            newArray[i].setAttribute('class', 'color'+i);
            newArray[i].setAttribute('id', 'div' + i);
            var body = document.querySelector('body');
            body.appendChild(newArray[i]);
       
        }
    }

}
var newArray2 = [];

for (let i = 1, k = 0; i <= repeat && k <= repeat; i++, k++) {
    newArray2[i] = document.createElement(balise2);
    newArray2[i].setAttribute('class', 'paragraph' + i);
    newArray[i].appendChild(newArray2[i]);
    newArray2[i].innerText = array[k];
    array = ["Helene", "Cathy", "Charlene"];
    console.log(createTags('div', 'p', 3, array));
}

