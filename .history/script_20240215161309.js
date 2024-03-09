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

// // Function to format Unix timestamp to human-readable time
// function formatTime(timestamp) {
//   // Create a new Date object using the timestamp (in milliseconds)
//   const date = new Date(timestamp * 1000);

//   // Get the hours, minutes, and seconds from the date object
//   const hours = date.getHours();
//   const minutes = "0" + date.getMinutes(); // Adding leading zero if minutes < 10
//   const seconds = "0" + date.getSeconds(); // Adding leading zero if seconds < 10

//   // Format the time as HH:MM:SS (24-hour format)
//   const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

//   return formattedTime;
// }

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
//     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//   }
// };

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

//       // Convert sunrise and sunset timestamps to formatted time
//       const formattedSunrise = formatTime(response.sunrise);
//       const formattedSunset = formatTime(response.sunset);

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

// Store the fetched weather data globally
let weatherData = {};

// Fetch weather data for all cities and store it globally
async function fetchAllWeatherData() {
  try {
    const cities = ['Hyderabad', 'Bangalore', 'Chennai', 'Delhi', 'Mumbai'];
    for (const city of cities) {
      const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
      const data = await response.json();
      weatherData[city] = data;
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Function to update the table with weather data for all cities
function updateTable() {
  const tableBody = document.querySelector('table tbody');
  tableBody.innerHTML = ''; // Clear existing rows
  
  for (const city in weatherData) {
    if (weatherData.hasOwnProperty(city)) {
      const data = weatherData[city];
      const row = `
        <tr>
          <th scope="row">${city}</th>
          <td>${data.cloud_pct}</td>
          <td>${data.feels_like}</td>
          <td>${data.humidity}</td>
          <td>${data.max_temp}</td>
          <td>${data.min_temp}</td>
          <td>${data.sunrise}</td>
          <td>${data.sunset}</td>
          <td>${data.temp}</td>
          <td>${data.wind_degrees}</td>
          <td>${data.wind_speed}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    }
  }
}

// Function to handle the selection of a city from the dropdown menu
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    const selectedCity = this.textContent.trim();
    updateCityData(selectedCity);
  });
});

// Update weather data for a specific city when selected from dropdown
function updateCityData(city) {
  const cityData = weatherData[city];
  cityName.innerHTML = city;
  cloud_pct.innerHTML = cityData.cloud_pct;
  temp.innerHTML = cityData.temp;
  temp2.innerHTML = cityData.temp;
  feels_like.innerHTML = cityData.feels_like;
  humidity.innerHTML = cityData.humidity;
  humidity2.innerHTML = cityData.humidity;
  min_temp.innerHTML = cityData.min_temp;
  max_temp.innerHTML = cityData.max_temp;
  wind_speed.innerHTML = cityData.wind_speed;
  wind_speed2.innerHTML = cityData.wind_speed;
  wind_degrees.innerHTML = cityData.wind_degrees;
  const sunriseTime = new Date(cityData.sunrise * 1000); // Multiplying by 1000 to convert seconds to milliseconds
  const sunsetTime = new Date(cityData.sunset * 1000);
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  const formattedSunrise = sunriseTime.toLocaleTimeString('en-US', options);
  const formattedSunset = sunsetTime.toLocaleTimeString('en-US', options);
  sunrise.innerHTML = formattedSunrise;
  sunset.innerHTML = formattedSunset;
}

// Fetch weather data for all cities once when the page loads
window.onload = async function() {
  await fetchAllWeatherData();
  updateTable();
  // Default city to display when the page loads
  const defaultCity = 'Hyderabad';
  updateCityData(defaultCity);
};