
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '9f5fc666cemsh950495f18781500p1999a7jsna0d8657b4aba',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
// };

// async function fetchData() {
//     try {  
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchData();


// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9f5fc666cemsh950495f18781500p1999a7jsna0d8657b4aba',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }



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
      sunrise.innerHTML = response.sunrise // here time isn't displayed 
      sunset.innerHTML = response.sunset // here time isn't displayed 
    })
    .catch(error => console.error(error));
}

submit.addEventListener("click", (e)=>{
  e.preventDefault()
  getWeather(city.value)
})

getWeather("Delhi")

// let unix_timestamp = 1549312452;

// // Create a new JavaScript Date object based on the timestamp
// // multiplied by 1000 so that the argument is in milliseconds, not seconds
// var date = new Date(unix_timestamp * 1000);

// // Hours part from the timestamp
// var hours = date.getHours();

// // Minutes part from the timestamp
// var minutes = "0" + date.getMinutes();

// // Seconds part from the timestamp
// var seconds = "0" + date.getSeconds();

// // Will display time in 10:30:23 format
// var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

// console.log(formattedTime);