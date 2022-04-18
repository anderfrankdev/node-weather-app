const {readInput,inquirerMenu,pausa,selectCity} = require("./helpers/inquirer")
const Searches = require("./models/searches")
const {saveDb,readDb} = require("./helpers/db")

const search = new Searches()

const main = async()=>{

	let opt;

	while(opt!=0){
		search.history = readDb()
		opt = await inquirerMenu()

		switch(opt){
			case 1:


				const place = await readInput('City: ')
				const places = await search.city(place)
				if (!places[0]){
					console.log("No matches found")
					break
				}

				const cityId = await selectCity(places)
				if (!cityId) break
				const city = await places.find(city=>city.id==cityId)
				search.lastCityName = city.name

				const temp = await search.temp(city)


				console.log(`\nCity: ${temp.name}`)
				console.log(`\nWeather:${temp.weather}`)
				console.log(`\nLat: ${city.lat}`)
				console.log(`\nLong: ${city.lng}`)
				console.log(`\nTemperture: ${temp.temp}°C`)
				console.log(`\nMin: ${temp.min}°C`)
				console.log(`\nMax: ${temp.max}°C`)
			break
			case 2:
				search.showHistory()
			break
		}
		saveDb(search.history)
		if(opt!=0) await pausa()			
	}

}

main()