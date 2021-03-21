
//CHOSE COCKTAIL BY INGREDIENT

const getByIngredient = document.getElementById("valueIngredient").addEventListener("click", function getValue(event) {
    //prevent to reload the page (form tag) 
    event.preventDefault()
    const getValue = document.getElementById("inputIngredient").value;
    //reset the input field
    document.querySelector('#inputIngredient').value = '';
    ingredientRequest(nameUrl + getValue);
});

const ingredientUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

const ingredientRequest = (url) => {
    fetch(url)
        .then((response) => ifError(response))//test for errors
        .then((data) => {
            const parsedData = (data);
            console.log(parsedData);
            for (const value of parsedData.drinks) {

                const printHTML = document.querySelector('#byIngredient');
                printHTML.innerHTML += `
                <a>
                <figure>
                    <figcaption>${value.strDrink}</figcaption>
                    <img src="${value.strDrinkThumb}" width="320" alt="placeholder">
                </figure>
            </a>`;
            }
        })
}