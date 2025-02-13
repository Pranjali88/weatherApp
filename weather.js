        const apiKey="47c8c2774cb47bab997fadd7d9ed6439";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox  =document.querySelector(".search input");
const searchBtn  =document.querySelector(".search button");
const weatherIcon  =document.querySelector(".weatherImg");
const errors =document.querySelector(".error");


async function checkWeather(city) {
    const response =await fetch(apiUrl+city + `&appid=${apiKey}`);
    var data = await response.json();


// if(data.status=="404"){
//     errors.style.display="block";
//     weatherIcon.style.display="none";
//     // document.querySelector(".error").style.display="block"
//     // document.querySelector(".weather").style.display="none"
// }else{
//     // weatherIcon.style.display="block";
//     // document.querySelector(".weather").style.display="block"
// }

    console.log(data)
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";


    if (data.weather[0].main =="Clear"){
        weatherIcon.src="weatherImg/clear.png";
    }else if (data.weather[0].main =="Clouds"){
        weatherIcon.src="weatherImg/clouds.png";
    }else if (data.weather[0].main =="Drizzle"){
        weatherIcon.src="weatherImg/drizzle.png";
    }else if (data.weather[0].main =="Rain"){
        weatherIcon.src="weatherImg/rain.png";
    }else if (data.weather[0].main =="Mist"){
        weatherIcon.src="weatherImg/mist.png";
    }
    
    document.querySelector(".weather").style.display ="block";
    // document.querySelector(".error").style.display ="none";

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})


