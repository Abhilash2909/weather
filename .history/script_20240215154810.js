const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
const getWeather = (city) => {
  cityName.innerHTML = city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
      console.log(response) 
      cloud_pct.innerHTML = response.cloud_pct
      temp.innerHTML = response.temp
      temp2.innerHTML = response.temp
      feels_like.innerHTML = response.feels_like
      humidity.innerHTML = response.humidity
      humidity2.innerHTML = response.humidity
      min_temp.innerHTML = response.min_temp
      max_temp.innerHTML = response.max_temp
      wind_speed.innerHTML = response.wind_speed
      wind_speed2.innerHTML = response.wind_speed
      wind_degrees.innerHTML = response.wind_degrees

      const sunriseTime = new Date(response.sunrise * 1000); // Multiplying by 1000 to convert seconds to milliseconds
      const sunsetTime = new Date(response.sunset * 1000);

      // Formatting the time
      const options = { hour: 'numeric', minute: 'numeric', hour12: true };
      const formattedSunrise = sunriseTime.toLocaleTimeString('en-US', options);
      const formattedSunset = sunsetTime.toLocaleTimeString('en-US', options);

      sunrise.innerHTML = formattedSunrise;
      sunset.innerHTML = formattedSunset;
    })
    .catch(error => console.error(error));
}

submit.addEventListener("click", (e)=>{
  e.preventDefault()
  getWeather(city.value)
})

getWeather("Hyderabad");

// Function to handle the selection of a city from the dropdown menu
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    const selectedCity = this.textContent.trim();
    getWeather(selectedCity);
  });
});

// Function to fetch weather data for multiple cities
async function fetchWeatherData() {
  try {
    const response = await fetch('YOUR_API_ENDPOINT'); // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your weather API
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return []; // Return empty array in case of error
  }
}

// Function to dynamically populate the table with actual data
async function populateTable() {
  const tableBody = document.querySelector('table tbody');
  tableBody.innerHTML = ''; // Clear existing rows
  
  const weatherData = await fetchWeatherData();
  
  weatherData.forEach(city => {
    const row = `
      <tr>
        <th scope="row">${city.city}</th>
        <td>${city.cloudiness}</td>
        <td>${city.feelsLike}</td>
        <td>${city.humidity}</td>
        <td>${city.maxTemp}</td>
        <td>${city.minTemp}</td>
        <td>${city.sunriseTime}</td>
        <td>${city.sunsetTime}</td>
        <td>${city.temperature}</td>
        <td>${city.windDirection}</td>
        <td>${city.windSpeed}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Call the function to populate the table when the page loads
populateTable();