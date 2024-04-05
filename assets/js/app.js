
const $ = document;
let value = null;
let inputeCity = $.getElementById('inputecity');
let city = $.querySelector('.city');
let date = $.querySelector('.date');
let temp = $.querySelector('.temp');
let weather = $.querySelector('.weather');
let hiLow = $.querySelector('.hi-low');

let apidata = {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=',
    key: 'afd7bdffd088896841763bdbeb78d1e1'
}

inputeCity.addEventListener('blur', async function () {
    let cityName = inputeCity.value;
    await fetch(`${apidata.url}${cityName}&appid=${apidata.key}`)
        .then(res => res.json())
        .then(res => value = res)
    console.log(value);

    setvariable()
    return value

})
function setvariable() {
    let tempp = Math.floor(value.main.temp - 273.15)
    console.log('temp:', tempp)
    city.innerHTML = `${value.name},${value.sys.country}`;
    temp.innerHTML = `${Math.floor(value.main.temp - 273.15)}°c`;
    weather.innerHTML = `${value.weather[0].main}`;
    hiLow.innerHTML = `${Math.floor(value.main.temp_max - 273.15)}°c /${Math.floor(value.main.temp_min - 273.15)}°c `

}