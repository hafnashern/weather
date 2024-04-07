    //function 
    function searchTemp() {
        var place = document.getElementById("city-name").value;
    

    //api call

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=b41ec3be35c7dac8aabbc21ba253137a`).then(result => result.json())
        .then(outdata => displayData(outdata))
    }

    function displayData(data) {
        var placeName = data.name;
        var temperature = data.main.temp;
        var tempMin = data.main.temp_min;
        var tempMax = data.main.temp_max;
        var humidity = data.main.humidity;
        var windSpeed = data.wind.speed;


        document.getElementById("rslt").innerHTML = `
       <div class="text-white text-center">
       <img src="" id="image-icon" alt="">
       <h1 id="city">${placeName}</h1>
       <h3 >Temp: ${temperature}</h3>
     </div>
     <div class=" text-white text-center">
         <h6>Temp Min: ${tempMin}</h6>
         <h6>Temp Max: ${tempMax}</h6>
     </div>
     <div class=" text-white text-center">
         <h6>Humidity: ${humidity}</h6>
         <h6>Wind Speed: ${windSpeed} </h6>
     </div> `;
    }
