const countryImg = findElement('.country-img');
const countryName = findElement('#country-name');
const countryPopulation = findElement('#country-population');
const countryRegion = findElement('#country-region');
const countrySubRegion = findElement('#country-sub-region');
const countryCapital = findElement('#country-capital');
const countryDomain = findElement('#country-domain');
const countryCurrenc = findElement('#country-currenc');
const countryLanguages = findElement('#country-languages');
const countryBorders = findElement('#country-borders');
const elCard = findElement('#parent');



elCard.addEventListener('click', (evt) => { 
        const elem = evt.target;
        
        if (elem.className.includes('link')) {
                console.log(elem)
        }
});



