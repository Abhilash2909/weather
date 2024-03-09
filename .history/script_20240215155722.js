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
async function fetchWeatherData(city) {
  try {
    const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return {}; // Return empty object in case of error
  }
}

// Function to dynamically populate the table with actual data
async function populateTable() {
  const tableBody = document.querySelector('table tbody');
  tableBody.innerHTML = ''; // Clear existing rows
  
  const cities = ['Hyderabad', 'Bangalore', 'Chennai' 'Delhi']; 
  for (const city of cities) {
    const cityData = await fetchWeatherData(city);
    const row = `
      <tr>
        <th scope="row">${city}</th>
        <td>${cityData.cloud_pct}</td>
        <td>${cityData.feels_like}</td>
        <td>${cityData.humidity}</td>
        <td>${cityData.max_temp}</td>
        <td>${cityData.min_temp}</td>
        <td>${cityData.sunrise}</td>
        <td>${cityData.sunset}</td>
        <td>${cityData.temp}</td>
        <td>${cityData.wind_degrees}</td>
        <td>${cityData.wind_speed}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  }
}

populateTable();
