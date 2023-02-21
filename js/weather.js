const API_KEY = '98755c25d6340e5329fa8ba4f105c933'
const temperature  = findElement('#temp');

fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${'uzbekistan'}&units=metric&appid=98755c25d6340e5329fa8ba4f105c933`
)
    .then((res) => res.json())
    .then((temp) => {
        console.log(temp);
    });