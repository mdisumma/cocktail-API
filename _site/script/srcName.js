
//////CHOSE COCKTAIL BY NAME
//event call (click)
const getByName = document.getElementById("valueName").addEventListener("click", getValue);
// get value of the input field
const nameValue = document.getElementById("inputName").value;
//define getValue from line 3
function getValue(event) {
    //prevent to reload the page (form tag) 
    event.preventDefault()
    const getValue = document.getElementById("inputName").value;
    //reset the input field
    document.querySelector('#inputName').value = '';
    createRequest(nameUrl + getValue);
};
//get data from cocktail DB
const nameUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

//////CHOSE COCKTAIL BY INGREDIENT
//event call (click)
const getByIngredient = document.getElementById("valueIngredient").addEventListener("click", getValue);
// get value of the input field
const IngredientValue = document.getElementById("inputIngredient").value;
//define getValue from line 3
function getValue(event) {
    //prevent to reload the page (form tag) 
    event.preventDefault()
    const getValue = document.getElementById("inputIngredient").value;
    //reset the input field
    document.querySelector("#inputIngredient").value = "";
    createRequest(ingredientUrl + getValue);
};
//get data from cocktail DB
const ingredientUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
// const imgWidth = "400";

// check for error
const ifError = (response) => {
    if (!response.ok) {
        throw (`${respose.status}:${respose.statusText}`);
    }
    return response.json();
}

//parse data in JSON format
const createRequest = (url) => {
    fetch(url)
        .then((response) => ifError(response))//test for errors
        .then((data) => {
            const parsedData = (data);
            console.log(parsedData);

            //name
            const drinkName = parsedData.drinks[0].strDrink

            //image
            const drinkImg = parsedData.drinks[0].strDrinkThumb

            //ingredients
            const add1 = parsedData.drinks[0].strIngredient1
            const add2 = parsedData.drinks[0].strIngredient2
            const add3 = parsedData.drinks[0].strIngredient3
            const add4 = parsedData.drinks[0].strIngredient4
            const add5 = parsedData.drinks[0].strIngredient5
            const add6 = parsedData.drinks[0].strIngredient6
            const add7 = parsedData.drinks[0].strIngredient7
            const add8 = parsedData.drinks[0].strIngredient8
            const add9 = parsedData.drinks[0].strIngredient9
            const add10 = parsedData.drinks[0].strIngredient10
            const add11 = parsedData.drinks[0].strIngredient11
            const add12 = parsedData.drinks[0].strIngredient12
            const add13 = parsedData.drinks[0].strIngredient13
            const add14 = parsedData.drinks[0].strIngredient15
            const add15 = parsedData.drinks[0].strIngredient15


            //mesure
            const measure1 = parsedData.drinks[0].strMeasure1
            const measure2 = parsedData.drinks[0].strMeasure2
            const measure3 = parsedData.drinks[0].strMeasure3
            const measure4 = parsedData.drinks[0].strMeasure3
            const measure5 = parsedData.drinks[0].strMeasure5
            const measure6 = parsedData.drinks[0].strMeasure6
            const measure7 = parsedData.drinks[0].strMeasure7
            const measure8 = parsedData.drinks[0].strMeasure8
            const measure9 = parsedData.drinks[0].strMeasure9
            const measure10 = parsedData.drinks[0].strMeasure10
            const measure11 = parsedData.drinks[0].strMeasure11
            const measure12 = parsedData.drinks[0].strMeasure12
            const measure13 = parsedData.drinks[0].strMeasure13
            const measure14 = parsedData.drinks[0].strMeasure14
            const measure15 = parsedData.drinks[0].strMeasure15


            //Instructions
            const drinkInstructions = parsedData.drinks[0].strInstructions
            const drinkInstructionsItalian = parsedData.drinks[0].strInstructionsIT

            //print data for validation
            console.log(`${drinkName}`);
            console.log(`${drinkImg}`);
            console.log(`${measure1}: ${add1}`);
            console.log(`${measure2}: ${add2}`);
            console.log(`${measure3}: ${add3}`);
            console.log(`${measure4}: ${add4}`);
            console.log(`${drinkInstructions}`);
            console.log(`For Italian ${drinkInstructionsItalian}`);

            //print html on index document
            const printHtml = document.querySelector('#byName');
            printHtml.innerHTML = `
        <h1>${drinkName}</h1>
        <img src="${drinkImg}">
        <ul>
        <li>${measure1}: ${add1}</li>
        <li>${measure2}: ${add2}</li>
        <li>${measure3}: ${add3}</li>
        <li>${measure4}: ${add4}</li>
        <li>${measure5}: ${add5}</li>
        <li>${measure6}: ${add6}</li>
        <li>${measure7}: ${add7}</li>
        <li>${measure8}: ${add8}</li>
        <li>${measure9}: ${add9}</li>
        <li>${measure10}: ${add10}</li>
        <li>${measure11}: ${add11}</li>
        <li>${measure12}: ${add12}</li>
        <li>${measure13}: ${add13}</li>
        <li>${measure14}: ${add14}</li>
        <li>${measure15}: ${add15}</li>
        </ul>
        <p>${drinkInstructions}</p>
            `
        })
};

