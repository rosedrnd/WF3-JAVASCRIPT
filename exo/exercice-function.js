window.onload = function () {
    function createTags(balise1, repeat) {
        for (let i = 1; i <= repeat; i++) {
            var elementHtml = document.createElement(balise1);
            elementHtml.setAttribute('class', `${'color' + i} square`);
            elementHtml.setAttribute('id', 'div' + i);
            var body = document.querySelector('body');
            body.appendChild(elementHtml);
        }
        // console.log(newArray)
    }

    function createChildParagraphe(array){
        var pTagNameHtml = 'p'
        for (var i = 1; i <= array.length; i++) {
            // Incrémentation de la div pour récupérer l'id de chaque div
            divClassNameHtml = 'div' + i;
            divElementHtml =  document.querySelector(`#${divClassNameHtml}`) 
            // Création de l'élément paragraphe html
            pElementHtml = document.createElement(pTagNameHtml);
            // On commnence la boucle a 1 il faut faire -1 pour qu'on arrive à récupérer tous le tableau
            pElementHtml.innerText = array[i-1]; 
            pElementHtml.setAttribute('class', 'paragraph' + i);

            divElementHtml.appendChild(pElementHtml);
        }
    }
    array = ["Helene", "Cathy", "Charlene"];
    createTags('div', 3)
    createChildParagraphe(array)
}

