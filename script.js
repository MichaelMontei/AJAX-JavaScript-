/********************************* 
 * AJAX CALL API
*/

let countryList = document.querySelector('.countries');


function getCountryInfo(country){

    //1. Create an XMLHttpRequest Object
let request = new XMLHttpRequest();

//2. create the request
request.open('GET', 'https://restcountries.com/v3.1/name/'+country)

//3. Send the request
request.send();

//we wait for the page to load the data and then run our function -> convert Json string to a JS object and store the request.response in a variable data
request.addEventListener('load', function() {
    let [data] = JSON.parse(request.responseText);
    console.log(data);

    const html = `<article class ="country">
    <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row">${data.population}</p>
            <p class="country__row">${data.languages.eng}</p>
        </div>
    </div>
    </article>`;

    countryList.insertAdjacentHTML('beforeend', html);
})

//We now get an object back in JSON format in our console that we can use
}

getCountryInfo('usa');
getCountryInfo('germany');
getCountryInfo('belgium');
getCountryInfo('brazil');
