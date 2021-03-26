
const getCard = document.querySelector('#listByPopular').addEventListener('click', function (e) {
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

                })
        }
        targetRequest(nameUrl + targetcaption)
    }
})
