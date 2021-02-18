exports.mod = () => {
    logger.logInfo("[Mod]ForceWeather")
    let settings = require("../settings.json");
    let gameplay = fileIO.readParsed(db.user.configs.gameplay);
    let file = fileIO.readParsed(db.user.cache.weather);
    file.data = [
        {
            "weather": {
                "timestamp": 1577890800,
                "cloud": settings.cloud,
                "wind_speed": settings.wind_speed,
                "wind_direction": settings.wind_direction,
                "wind_gustiness": settings.wind_gustiness,
                "rain": settings.rain,
                "rain_intensity": settings.rain_intensity,
                "fog": settings.fog,
                "temp": 6,
                "pressure": 767,
                "date": "2020-01-01",
                "time": "16:00:00"

            },
            "date": "2020-01-01",
            "time": "16:00:00",
            "acceleration": 7
        }
    ]
    gameplay.location = {
        "realTimeEnabled": true,
        "forceWeatherEnabled": true,
        "forceWeatherId": 0
    }
    fileIO.write(db.user.configs.gameplay, gameplay);
    fileIO.write(db.user.cache.weather, file);
    logger.logSuccess("[Mod] Weather has been applied correctly!")
}