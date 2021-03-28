
const apiKey = "?rapidapi-key=a0ab4d64c9mshf661ca3514922aap1f9a12jsn3c719091a462"
const selectedUrl = 'https://the-cocktail-db.p.rapidapi.com/popular.php';
//https://example.p.rapidapi.com/?rapidapi-key=***************************

//get data with axiom
const getDataGallery = async () => {
    let { data } = await axios.get(selectedUrl + apiKey)
    return data
}

// parse data
document.addEventListener('DOMContentLoaded', async () => {
    const results = await getDataGallery()
    console.log(results);


    for (const value of results.drinks) {

        const printHTML = document.querySelector('#listByPopular');
        printHTML.innerHTML += `
        <figure>
            <figcaption alt="${value.strDrink}">${value.strDrink} </figcaption>
            <img src="${value.strDrinkThumb}">
        </figure>`;
    }

});