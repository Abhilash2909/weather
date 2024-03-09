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

// Sample data for multiple cities (replace this with your actual data)
const cityData = [
  { city: 'Hyderabad', cloudiness: '10%', feelsLike: '25°C', humidity: '60%', maxTemp: '30°C', minTemp: '20°C', sunriseTime: '06:30 AM', sunsetTime: '06:00 PM', temperature: '28°C', windDirection: 'NE', windSpeed: '10 km/hr' },
  { city: 'Bangalore', cloudiness: '20%', feelsLike: '22°C', humidity: '70%', maxTemp: '28°C', minTemp: '18°C', sunriseTime: '06:45 AM', sunsetTime: '05:45 PM', temperature: '25°C', windDirection: 'SW', windSpeed: '8 km/hr' },
  // Add more city data as needed
];

// Function to dynamically generate the HTML for each row in the table
function populateTable() {
  const tableBody = document.querySelector('table tbody');
  tableBody.innerHTML = ''; // Clear existing rows

  cityData.forEach(city => {
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