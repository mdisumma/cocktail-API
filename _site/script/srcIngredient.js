const ifError = (response) => {
	if (!response.ok) {
		throw `${respose.status}:${respose.statusText}`;
	}
	return response.json();
};
//CHOSE COCKTAIL BY INGREDIENT

const getByIngredient = document
	.getElementById("srcIngredient")
	.addEventListener("click", function getValue() {
		const ingredientResult = document.querySelector("#byIngredient");
		const getIngredientValue = document.getElementById("inputForIngredient")
			.value;
		console.log(getIngredientValue);
		if (getIngredientValue === "") {
			ingredientResult.innerHTML =
				'<span class="helpText">please, enter a valid ingredient name</span>';
		} else {
			ingredientResult.innerHTML = "";
			ingredientRequest(ingredientUrl + getIngredientValue);
			// console.log(getIngredientValue);
			//reset the input field
			const headValue = document.createElement("h2");
			headValue.innerText = getIngredientValue;
			const printHeadValue = document.querySelector("#byIngredient");
			printHeadValue.append(headValue);
		}
	});

const ingredientUrl =
	"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";

const ingredientRequest = (url) => {
	fetch(url)
		.then((response) => ifError(response)) //test for errors
		.then((data) => {
			const ingredientData = data;
			// console.log(ingredientData);

			for (const value of ingredientData.drinks) {
				const printHTML = document.querySelector("#byIngredient");
				printHTML.innerHTML += `
                <figure>
                    <figcaption>${value.strDrink}</figcaption>
                    <img src="${value.strDrinkThumb}">
                </figure>
          `;
			}
		});
};
