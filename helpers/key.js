const MAPBOX_KEY = "pk.eyJ1IjoiYW5kZXJmcmFua2RldiIsImEiOiJjbDIzdWdhdnYwOHp6M29teG9tOHYzNmoyIn0.hKMyjDT2d2k0cJRRjSW9-w"

const MAPBOXCONFIG = "?limit=6&types=region%2Ccountry%2Cplace&language=en&fuzzyMatch=false&access_token="

const MAPBOX_parameters = `${MAPBOXCONFIG}${MAPBOX_KEY}`

const WEATHER_KEY ="395892102311b1cf2879363aac7b1488"



module.exports= {
	MAPBOX_parameters,
	WEATHER_KEY
}