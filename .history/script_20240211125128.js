
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
  
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
    .then(response => response.json())
    .then((response) => {
        cloud_pct = response.cloud_pct
        temp = response.temp
        feels_like = response.feels_like
        humidity = response.humidity
      mi n_temp = response.min_temp
      max_temp = response.max_temp
      wind_speed = response.wind_speed
      wind_degrees = response.wind_degrees
      sunrise = response.sunrise
      sunset = response.sunset
      
      console.log(response)
      
    })
    .catch(error => console.error(error));
  
