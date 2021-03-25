const ifError = (response) => {
    if (!response.ok) {
        throw (`${respose.status}:${respose.statusText}`);
    }
    return response.json();
}
//CHOSE COCKTAIL BY INGREDIENT

const getByIngredient = document.getElementById("srcIngredient").addEventListener("click", function getValue(event) {
    //prevent to reload the page (form tag) 
    event.preventDefault()
    const ingredientResult = document.querySelector('#byIngredient')
    const getIngredientValue = document.getElementById("inputForIngredient").value;
    console.log(getIngredientValue);
    if (getIngredientValue === '') {
        ingredientResult.innerHTML = '<span class="helpText">please, enter a valid cocktail ingredient</span>';
    } else {
        ingredientResult.innerHTML = '';
        ingredientRequest(ingredientUrl + getIngredientValue);
        //reset the input field
        document.querySelector('#inputForIngredient').value = '';
    };

});

const ingredientUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

const ingredientRequest = (url) => {
    fetch(url)
        .then((response) => ifError(response))//test for errors
        .then((data) => {
            const ingredientData = (data);
            console.log(ingredientData);

            for (const value of ingredientData.drinks) {

                const printHTML = document.querySelector('#byIngredient');
                printHTML.innerHTML += `
                <a>
                <figure>
                    <figcaption>${value.strDrink}</figcaption>
                    <img src="${value.strDrinkThumb}">
                </figure>
            </a>`;
            }
        })
}