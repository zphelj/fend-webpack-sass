import { weatherForZip } from "./callAPI"

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })

    // add the weather!
    //let myweather = weatherForZip();
    const OpenWeatherAPIKey = '745af18b0ea3615649040c19beaba79f'; // Personal API Key for OpenWeatherMap API
    const openWeatherBaseURL = 'http://api.openweathermap.org/data/2.5/weather';
    const userZip = '75019';
    let url = `${openWeatherBaseURL}?zip=${userZip},&appid=${OpenWeatherAPIKey}&units=imperial`;

    console.log(`Requesting Weather URL = ${url}`);
    fetch(url)
    .then(res => {
        console.log('URL response = ', res);
        return res.json();
    })
    .then(function(data) {
        console.log('Returned Weather Data obj = ', data);
        console.log(`Myweather = ${data.main.temp}`);
        document.getElementById('weather').innerHTML = data.main.temp;
    });
}

export { handleSubmit }
