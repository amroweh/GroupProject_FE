const getGeoAndWeather = async (city, date)=>{
    console.log("function running...")
    const geoStuff = await getGeo(city)
    setGeo(geoStuff)
    console.log("middle function...")
    const weatherStuff = await getWeather(date, geoL.long, geoL.lat)
    setWeather(weatherStuff)
    console.log("end function...")
  }

  