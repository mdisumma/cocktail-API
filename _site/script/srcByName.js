// check for error
const ifError = (response) => {
    if (!response.ok) {
        throw (`${respose.status}:${respose.statusText}`);
    }
    return response.json();
}

//////CHOSE COCKTAIL BY NAME
const getByName = document.getElementById("valueName").addEventListener("click",
    function getValue(event) {
        //prevent to reload the page (form tag) 
        event.preventDefault()
        const getValue = document.getElementById("inputName").value;
        //reset the input field
        document.querySelector('#inputName').value = '';
        nameRequest(nameUrl + getValue);
    });

const nameUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
//parse data in JSON format
const nameRequest = (url) => {
    fetch(url)
        .then((response) => ifError(response))//test for errors
        .then((data) => {
            const parsedData = (data);
            console.log(parsedData)
            const getValue = parsedData.drinks[0]
            console.log(getValue)

            // for (let i = 1; i < 15; ++i) {
            //     const getIngredients = `${getValue}.strIngredient${i}`;

            //     console.log(getIngredients)
            // }
            for (let value in getValue) {
                if (value.startsWith('strIngredient')) {
                    console.log(value)
                }
            }
        })
}
