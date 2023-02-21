const elForm = findElement('#js-form');
const elInput = findElement('#countries-input');
const elTemplate = findElement('#country-template');
const elParent = findElement('#parent');
const errorPage = findElement('.d-none');

let countries = []

const renderCountry = (array, parent = elParent) => {
    parent.textContent = null;  
    const fragment = document.createDocumentFragment();

    const sortArr = array.sort((a, b) => {
        if (a.name.official < b.name.official) {
            return -1;
        }
        if (a.name.official > b.name.official) {
            return 1;
        }
    });


    array.forEach((element) => {
        const newCard = elTemplate.content.cloneNode(true);

        const flag = findElement('.card-img-top', newCard);
        const title = findElement('.card-title', newCard); 
        const population = findElement("#population", newCard);
        const region = findElement('#region', newCard);
        const capital = findElement('#capital',newCard);

        flag.src = element.flags.png
        title.textContent = element.name.official;

        population.textContent = element.population > 1000000 
        ? Math.floor(element.population / 1000000) + ' mln'
        : element.population + ' kishi';
        
        region.textContent = element.continents;
        capital.textContent = element.capital;

        fragment.appendChild(newCard);
    });
    elParent.appendChild(fragment);
};

elForm.addEventListener('submit', function(evt){
    evt.preventDefault();

    fetch('https://restcountries.com/v3.1/name/' + elInput.value.trim())
    .then((res) => res.json())
    .then((data) => {

        
        if (data.message) {
            throw new Error(data.message);
        }
        renderCountry(data)    
        errorPage.className = 'd-none';
        elParent.className = 'row gy-5 gx-5';
    })
    .catch((err) => {
        console.log(err);
        errorPage.className = 'd-block';
        elParent.className = 'row gy-5 gx-5 d-none';
    });
});




fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
        countries = data
        renderCountry(countries)

    });
