const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9f5fc666cemsh950495f18781500p1999a7jsna0d8657b4aba',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}



method: 'GET',
headers: {
'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
}
7 };
8
9
I
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
10
.then(response => response.json())
11
.then(response => console.log(response))
12
.catch(err => console.error(err));|