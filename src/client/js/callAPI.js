const weatherForZip = async () => {
  const OpenWeatherAPIKey = '745af18b0ea3615649040c19beaba79f'; // Personal API Key for OpenWeatherMap API
  const openWeatherBaseURL = 'http://api.openweathermap.org/data/2.5/weather';
  const userZip = '75019';
  let url = `${openWeatherBaseURL}?zip=${userZip},&appid=${OpenWeatherAPIKey}&units=imperial`;

  console.log(`Requesting Weather URL = ${url}`);
  const response = await fetch(url);
  // console.log('response', response);
  try {
    let weatherData = await response.json();
    console.log('Returned Weather Data obj = ', weatherData);
    return weatherData.main.temp;
  }
  catch(error) {
    console.log('ERROR weatherForZip(): ', error);
    // Log and carry on
  };
};


export { weatherForZip }
