const apiKey = "?rapidapi-key=a0ab4d64c9mshf661ca3514922aap1f9a12jsn3c719091a462"
const Url = 'https://the-cocktail-db.p.rapidapi.com/randomselection.php';
//https://example.p.rapidapi.com/?rapidapi-key=***************************
const getData = async () => {
    let { data } = await axios.get(Url + apiKey)
    return data
}


//PARCE DATA
document.addEventListener('DOMContentLoaded', async () => {
    const results = await getData()
    console.log(results);
    for (const value of results.drinks) {

        const printHTML = document.querySelector('#cocktailSelection');
        printHTML.innerHTML += `
        <a>
        <figure>
            <figcaption>${value.strDrink}</figcaption>
            <img src="${value.strDrinkThumb}" width="320" alt="placeholder">
        </figure>
    </a>`;
    }

});