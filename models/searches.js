const axios = require("axios")
const colors = require("colors/safe")
const {

	MAPBOX_parameters,	
	WEATHER_KEY

} = require("../helpers/key.js")

class Searches{


	constructor(){
		this.history=[]
		this.lastCityName=''
	}

	async city(city=""){

		try{
			const api = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json`
			const res = await axios(`${api}${MAPBOX_parameters}`)

			return res.data.features.map(place=>({
				id: place.id,
				name:place.place_name,
				lng: place.center[0],
				lat: place.center[1]
			}))
		}catch(err){
			console.log(err)
		}
	}

	async temp(city={}){
		if (this.history.length>5) {
			this.history.pop()
		}
		try{
			const api = "https://api.openweathermap.org/data/2.5/weather";
			const conf = `?&lang=en&lat=${city.lat}&lon=${city.lng}&appid=`;
			const response = await axios(`${api}${conf}${WEATHER_KEY}&units=metric`);
			const result = response.data;
			this.history.unshift(
				{
					name:this.lastCityName,
					temp:`${result.main.temp}°C`
				}
			);
			return {
				name:`${result.sys.country} ${result.name}`,
				weather:result.weather[0].description,
				temp:result.main.temp,
				min:result.main.temp_min,
				max:result.main.temp_max
			}
		}catch(err){
			
		}
	}

	showHistory(){
		this.history.forEach((city,i)=>{
			const num = colors.yellow(`${i+1}.`) 
			console.log(`${num} ${city.name}: ${city.temp}`)
		})
	}
}

module.exports = Searches