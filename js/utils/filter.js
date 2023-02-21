const elSelect = findElement('#select');


elSelect.addEventListener('change', () => {
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {

    var arr = []

        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            const region = element.region.toLowerCase();

            if (elSelect.value == region) {
                arr.push(element)
            }else if (elSelect.value == 'all') {
                arr = data
            } 
        }
        renderCountry(arr)
    });
});
