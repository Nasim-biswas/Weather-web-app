
const apiKey = "8181e3594d2ceaad004288efe31af81f";

const inputBox = document.getElementById("search-input");
const formEl = document.querySelector("form");
const city = document.getElementById("city");
const weatherIcon = document.querySelector(".images");
const inputButton = document.getElementById("search-button");

inputButton.addEventListener("click", (event) => {
    event.preventDefault();
    const cityValue = inputBox.value;
    getWeather(cityValue);
});

async function getWeather(cityValue) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".information").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".Temperature").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";
        document.querySelector(".current-state").innerHTML = data.weather[0].description;

        if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/sunny.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.jpeg";
        }
        else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/cloudy.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }
        else if (data.weather[0].main == 'Haze') {
            weatherIcon.src = "images/Haze.png";
        }
        
        document.querySelector(".information").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }


}





