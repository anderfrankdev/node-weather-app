const MAPBOX_KEY = "HERE PUT YOUR MAPBOX PRIVATE KEY"

const MAPBOXCONFIG = "?limit=6&types=region%2Ccountry%2Cplace&language=en&fuzzyMatch=false&access_token="

const MAPBOX_parameters = `${MAPBOXCONFIG}${MAPBOX_KEY}`

const WEATHER_KEY ="HERE PUT YOUR OPENWEATHER KEY"



module.exports= {
	MAPBOX_parameters,
	WEATHER_KEY
}
