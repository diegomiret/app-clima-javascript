const urlBase= `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = '92f18030f8e83dd6f41557e1ea9b7c19';
const diffKelvin = 273.15;

document.getElementById("searchButton").addEventListener('click', ()=>{

    const city = document.getElementById("cityInput").value;
    if(city){
        //  llamar a la API
        fetchWeather(city);
    }else{
        alert("ingrese una ciudad valida");
    }
});


function fetchWeather(city){


    fetch(`${urlBase}?q=${city}&appid=${API_KEY}`)
    .then(data => data.json())
    .then(data=> showWeatherData(data));
}


function showWeatherData(data){

    const divResponseData = document.getElementById("responseData");
    divResponseData.innerHTML = '';

    const cityName = data.name;
    const countryName = data.sys.country;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const cityInfo = document.createElement('h2');
    cityInfo.textContent = cityName + ', ' + countryName;

    const tempImpo  = document.createElement('p');
    tempImpo.textContent = 'la temperatura es: ' + Math.floor(temp-diffKelvin) + '°C';

    const humidityInfo = document.createElement('p');
    humidityInfo.textContent = 'La humedad es de : ' + humidity + '%';

    const iconInfo = document.createElement('img');
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`; 
    
    console.log(iconInfo.src);

    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = 'Descripcion: ' + description;

    divResponseData.appendChild(cityInfo);
    divResponseData.appendChild(tempImpo);
    divResponseData.appendChild(humidityInfo);
    divResponseData.appendChild(iconInfo);
    divResponseData.appendChild(descriptionInfo);


}
