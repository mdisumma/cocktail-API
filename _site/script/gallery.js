url = 'https://the-cocktail-db.p.rapidapi.com/randomselection.php';

//parse data in JSON format
const createRequest = (url) => {
    fetch(url)
        .then((response) => ifError(response))//test for errors
        .then((data) => {
            const parsedData = (data);
            console.log(parsedData);
        });
};
