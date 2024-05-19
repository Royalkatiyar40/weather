// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'bc9d37abe2mshd114a5421cdc537p1719a3jsn5a0e1d5ddd54',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	{console.log(result)
// 		temp.innerHTML = response.temp
// cloud_pct = response.cloud_pct
// feels_like  = response.feels_like
// humidity  = response.hummidity
// min_temp  = response.min_temp
// max_temp  = response.max_temp
// wind_speed = response.wind_speed
// wind_degrees  = response.wind_degree
// sunrise = response.sunrise
// sunset = response.sunset
// 	};
// } catch (error) {
// 	console.error(error);
// }

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bc9d37abe2mshd114a5421cdc537p1719a3jsn5a0e1d5ddd54',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			cloud_pct.innerHTML = response.cloud_pct
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			// wind_degrees.innerHTML  = response.wind_degree
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=?kanpur' , options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			tempknp.innerHTML = response.temp
			cloud_pctknp.innerHTML = response.cloud_pct
			feels_likeknp.innerHTML = response.feels_like
			humidityknp.innerHTML = response.humidity
			// humidity2.innerHTML = response.humidity
			min_tempknp.innerHTML = response.min_temp
			max_temp.knpinnerHTML = response.max_temp
			wind_speedknp.innerHTML = response.wind_speed
			// wind_speed2knp.innerHTML = response.wind_speed
			wind_degreesknp.innerHTML  = response.wind_degree
			sunriseknp.innerHTML = response.sunrise
			sunsetknp.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
