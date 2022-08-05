
const city= document.querySelector('#cityInput')
const cityForm=document.querySelector('#cityForm')
const weatherContainer=document.querySelector('#weatherContainer')
const newsContainer=document.querySelector('#newsContainer')
const weatherNav=document.getElementById('')

let baseURL="http://localhost:4007"

const getWeather= (evt)=>{
    evt.preventDefault()
    console.log(city.value)
    axios.get(`${baseURL}/api/weather?city=${city.value}`)
    .then(response =>{
        weatherContainer.innerHTML=''
        const weatherDiv=document.createElement('div')
        weatherDiv.innerHTML=`
        <div>
        <div class="card-header">${response.data.location.name}</div>
        <div class="card-body">
        <h5 class="card-title">${response.data.location.country}</h5>
        <p class="card-text">${response.data.current.temp_f}</p>
       
        <span class="card-text">${response.data.current.condition.text}  <img src="${response.data.current.condition.icon}" ></span>
        </div>`
        weatherContainer.appendChild(weatherDiv)
        city.value=''

})
}

cityForm.addEventListener('submit',getWeather)