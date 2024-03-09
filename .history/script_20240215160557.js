// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
//       'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
//   };
// const getWeather = (city) => {
//   cityName.innerHTML = city
//   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
//     .then(response => response.json())
//     .then((response) => {
//       console.log(response) 
//       cloud_pct.innerHTML = response.cloud_pct
//       temp.innerHTML = response.temp
//       temp2.innerHTML = response.temp
//       feels_like.innerHTML = response.feels_like
//       humidity.innerHTML = response.humidity
//       humidity2.innerHTML = response.humidity
//       min_temp.innerHTML = response.min_temp
//       max_temp.innerHTML = response.max_temp
//       wind_speed.innerHTML = response.wind_speed
//       wind_speed2.innerHTML = response.wind_speed
//       wind_degrees.innerHTML = response.wind_degrees

//       const sunriseTime = new Date(response.sunrise * 1000); // Multiplying by 1000 to convert seconds to milliseconds
//       const sunsetTime = new Date(response.sunset * 1000);

//       // Formatting the time
//       const options = { hour: 'numeric', minute: 'numeric', hour12: true };
//       const formattedSunrise = sunriseTime.toLocaleTimeString('en-US', options);
//       const formattedSunset = sunsetTime.toLocaleTimeString('en-US', options);

//       sunrise.innerHTML = formattedSunrise;
//       sunset.innerHTML = formattedSunset;
//     })
//     .catch(error => console.error(error));
// }

// submit.addEventListener("click", (e)=>{
//   e.preventDefault()
//   getWeather(city.value)
// })

// getWeather("Hyderabad");

// // Function to handle the selection of a city from the dropdown menu
// document.querySelectorAll('.dropdown-item').forEach(item => {
//   item.addEventListener('click', function(event) {
//     event.preventDefault();
//     const selectedCity = this.textContent.trim();
//     getWeather(selectedCity);
//   });
// });

// // Function to fetch weather data for multiple cities
// async function fetchWeatherData(city) {
//   try {
//     const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching weather data:', error);
//     return {}; // Returning empty object in case of error
//   }
// }

// // Function to dynamically populate the table with actual data
// async function populateTable() {
//   const tableBody = document.querySelector('table tbody');
//   tableBody.innerHTML = ''; // Clearing existing rows
  
//   const cities = ['Hyderabad', 'Bangalore','Chennai', 'Delhi', 'Mumbai']; 
//   for (const city of cities) {
//     const cityData = await fetchWeatherData(city);
//     const row = `
//       <tr>
//         <th scope="row">${city}</th>
//         <td>${cityData.cloud_pct}</td>
//         <td>${cityData.feels_like}</td>
//         <td>${cityData.humidity}</td>
//         <td>${cityData.max_temp}</td>
//         <td>${cityData.min_temp}</td>
//         <td>${cityData.sunrise}</td>
//         <td>${cityData.sunset}</td>
//         <td>${cityData.temp}</td>
//         <td>${cityData.wind_degrees}</td>
//         <td>${cityData.wind_speed}</td>
//       </tr>
//     `;
//     tableBody.innerHTML += row;
//   }
// }

// populateTable();

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

let weatherData = {}; // Object to store weather data for all cities

// Function to fetch weather data for a specific city and store it in weatherData object
async function fetchWeatherData(city) {
  try {
    const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
    const data = await response.json();
    weatherData[city] = data; // Store weather data for the city
  } catch (error) {
    console.error('Error fetching weather data for', city, ':', error);
    weatherData[city] = {}; // Store empty object in case of error
  }
}

// Function to populate the table with weather data from the weatherData object
function populateTable() {
  const tableBody = document.querySelector('table tbody');
  tableBody.innerHTML = ''; // Clear existing rows
  
  const cities = ['Hyderabad', 'Bangalore', 'Chennai', 'Delhi', 'Mumbai'];
  for (const city of cities) {
    const cityData = weatherData[city] || {}; // Retrieve weather data from weatherData object
    const row = `
      <tr>
        <th scope="row">${city}</th>
        <td>${cityData.cloud_pct || ''}</td>
        <td>${cityData.feels_like || ''}</td>
        <td>${cityData.humidity || ''}</td>
        <td>${cityData.max_temp || ''}</td>
        <td>${cityData.min_temp || ''}</td>
        <td>${cityData.sunrise || ''}</td>
        <td>${cityData.sunset || ''}</td>
        <td>${cityData.temp || ''}</td>
        <td>${cityData.wind_degrees || ''}</td>
        <td>${cityData.wind_speed || ''}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  }
}

// Fetch weather data for all cities
async function fetchWeatherForAllCities() {
  const cities = ['Hyderabad', 'Bangalore', 'Chennai', 'Delhi', 'Mumbai'];
  for (const city of cities) {
    await fetchWeatherData(city);
  }
}

// Call the function to fetch weather data for all cities and populate the table when the page loads
fetchWeatherForAllCities().then(populateTable);
