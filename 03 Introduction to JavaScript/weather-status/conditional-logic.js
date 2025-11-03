let weatherStatus = "unknown";

const weatherInput = document.getElementById("weatherInput");
console.log(weatherInput);
weatherInput.value = weatherStatus;

function checkWeather() {
  weatherStatus = weatherInput.value;
  console.log("check!");
  let wind = 40;

  let h2 = document.getElementById("weather");s

  if (weatherStatus == "raining") {
    h2.innerHTML = "It's raining! Best not put out any washing.";
  } else if (weatherStatus == "snowing") {
    h2.innerHTML = "It's snowing! Can't dry washing today.";
  } else if (wind > 30) {
    h2.innerHTML = "It's really windy! Our washing might blow away.";
  } else if (weatherStatus == "sunny" && wind > 10) {
    h2.innerHTML = "It's perfect for washing today!";
  } else {
    h2.innerHTML = "It's dry outside. We can put out washing.";
  }
}

weatherInput.addEventListener("change", checkWeather);
