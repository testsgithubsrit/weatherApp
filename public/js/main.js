const cityName=document.getElementById('sea');
const submitbtn=document.getElementById('subtn');
const city_name=document.getElementById('city-name');
const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');
const datahide=document.querySelector('.middel-layer');



const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const now = new Date();
const currentDay = days[now.getDay()];  // Get current day
const currentDate = now.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});  // Get current date

// Example of adding to HTML
document.getElementById('day').innerText = currentDay;
document.getElementById('today-date').innerText = currentDate;











const  getInfo=async(event)=>{
    event.preventDefault();
    let cityval=cityName.value;
   
if(cityval===""){
city_name.innerHTML=`<p>pls write the name before search</p>`;
datahide.classList.add('data-hide');  

}
else{
    try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=2018e6d071dc1e554096e814c0bf8997`;
    const response=await fetch(url);
     //console.log(response);
    const data=  await response.json();
    //console.log(data);
const arrData=[data];
   //console.log(arrData);
   city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;
  //temp.innerText=`${arrData[0].main.temp} ,    ${arrData[0].weather[0].main}`;
    //below line is not working
   // temp_status.innerText=arrData[0].weather[0].main;
   const kelvinTemp = arrData[0].main.temp;  // Kelvin temperature from the API
const celsiusTemp = (kelvinTemp - 273.15).toFixed(2);  // Convert to Celsius
const fahrenheitTemp = ((kelvinTemp - 273.15) * 9/5 + 32).toFixed(2);  // Convert to Fahrenheit

temp.innerText = `${celsiusTemp} °C   ,    ${arrData[0].weather[0].main}`;  // Display in Celsius
// Or if you prefer Fahrenheit
// temp.innerText = `${fahrenheitTemp} °F`;
datahide.classList.remove('data-hide');

}catch{
    city_name.innerText=`pls write the name properly`;
 datahide.classList.add('data-hide');
}
}
}
submitbtn.addEventListener('click',getInfo);

   