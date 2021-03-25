// event
const getByName = document.getElementById("srcName").addEventListener("click",
    function getValue(event) {
        const nameResult = document.querySelector('#byName')
        const getValue = document.getElementById("inputForName").value;
        if (getValue === '') {
            console.log('enter a  drink')
            nameResult.outerHTML = ' <div id="byName"><spam class="helpText">please, enter a valid cocktail name</spam></div>'
        } else {
            nameResult.outerHTML = ' <div id="byName"></div>'
            nameRequest(nameUrl + getValue);
            //reset the input field
            document.querySelector('#inputForName').value = '';
        }
    });

// define api url
const nameUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

//parse data in JSON format
const nameRequest = (url) => {
    fetch(url)
        .then((response) => ifError(response))//test for errors
        .then((data) => {
            const parsedData = (data);
            //test for data
            console.log(parsedData);

            //cocktail name
            const drinkName = parsedData.drinks[0].strDrink
            //cocktail image
            const imageUrl = parsedData.drinks[0].strDrinkThumb
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

            //Instructions
            const drinkInstructions = parsedData.drinks[0].strInstructions
            const drinkInstructionsItalian = parsedData.drinks[0].strInstructionsIT

            //target node
            const printHtml = document.querySelector('#byName');
            //create element
            const header = document.createElement('h3');
            const image = document.createElement('img');
            const ingredientList = document.createElement('ul');
            const process = document.createElement('p');
            //set srch attribute
            const srcImage = image.setAttribute('src', imageUrl)

            //assing name
            header.innerHTML = drinkName
            //assing ingredient list
            ingredientList.innerHTML = `
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
             <li>${measure15}: ${add15}</li>`

            //assing process instraction
            process.innerHTML = drinkInstructions

            //append card elements
            printHtml.append(header)
            printHtml.append(image)
            printHtml.append(ingredientList)
            printHtml.append(process)

        }).then(() => {
            //assing hiden class for null items
            const liElement = document.querySelectorAll('#byName ul li')
            for (let i = 0; i < liElement.length; i++) {
                let givesValue = liElement[i].innerHTML;
                let givesClass = liElement[i].classList;
                if (givesValue === "null: null") {
                    givesClass.add('hide')
                }
            }
        })
}






