frame.style.display = 'none'

const getCard = document.querySelector('#listByPopular').addEventListener('click', function (e) {


    console.log(e)
    e.cancelBubble = true;
    const frame = document.querySelector('#frame')

    if (frame.style.display === 'none') {
        frame.style.display = 'grid'
        if (e.target.localName === 'img') {
            let targetImg = e.path[1].children[0].innerHTML
            console.log(targetImg)
            const targetRequest = (url) => {
                fetch(url)
                    .then((response) => ifError(response))//test for errors
                    .then((data) => {
                        const parsedData = (data);
                        //test for data
                        console.log(parsedData);

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


                        const headFrame = parsedData.drinks[0].strDrink
                        const srcFrame = parsedData.drinks[0].strDrinkThumb
                        const processFrame = parsedData.drinks[0].strInstructions
                        const cocktailFrame = `
                <h3>${headFrame}</h3>
                <img src="${srcFrame}">
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
                <p>${processFrame}</p> `
                        frame.innerHTML = cocktailFrame;
                        console.log(frame)
                    }).then(() => {
                        const liItem = document.querySelectorAll('#frame ul li')
                        console.log(liItem)
                        for (let i = 0; i < liItem.length; i++) {
                            let givesValue = liItem[i].innerHTML;
                            let givesClass = liItem[i].classList;
                            if (givesValue === "null: null") {
                                givesClass.add('hide')
                            }
                        }
                    })
            }
            targetRequest(nameUrl + targetImg)

        } else {
            let targetcaption = e.target.innerHTML;
            console.log(targetcaption);
            const targetRequest = (url) => {
                fetch(url)
                    .then((response) => ifError(response))//test for errors
                    .then((data) => {
                        const parsedData = (data);
                        //test for data
                        console.log(parsedData);

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

                        const headFrame = parsedData.drinks[0].strDrink
                        const srcFrame = parsedData.drinks[0].strDrinkThumb
                        const IngredientFrame = ''
                        const processFrame = parsedData.drinks[0].strInstructions
                        const cocktailFrame = `
                    <h3>${headFrame}</h3>
                    <img src="${srcFrame}">
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
                    <p>${processFrame}</p>`

                        frame.innerHTML = cocktailFrame;
                        console.log(frame)

                    }).then(() => {
                        const liItem = document.querySelectorAll('#frame ul li')
                        console.log(liItem)
                        for (let i = 0; i < liItem.length; i++) {
                            let givesValue = liItem[i].innerHTML;
                            let givesClass = liItem[i].classList;
                            if (givesValue === "null: null") {
                                givesClass.add('hide')
                            }
                        }
                    })
            }
            targetRequest(nameUrl + targetcaption)
        }
    }
}, true)
const hideCard = window.addEventListener('click', function (e) {
    const checkframe = document.querySelector('#frame')
    if (checkframe.style.display === 'grid') {
        frame.innerHTML = ""
        console.log(frame.innerHTML)
        frame.style.display = 'none';
    }
}, false)
