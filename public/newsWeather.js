
const city= document.querySelector('#cityInput')
const cityForm=document.querySelector('#cityForm')
const weatherContainer=document.querySelector('#weatherContainer')
const newsContainer=document.querySelector('#newsContainer')
const weatherNav=document.getElementById('')
let baseURL="http://localhost:4007"

// const getWeather= (evt)=>{
//     evt.preventDefault()
//     axios.get(`/api/weather?city=${city.value}`)
//     .then(response =>{
//         weatherContainer.innerHTML=''
//         const weatherDiv=document.createElement('div')
//         weatherDiv.innerHTML=`
//         <div class=weatherCardContainer>
//         <div class="weatherCardCity">${response.data.location.name}</div>
//         <div class="weatherCardCountry">${response.data.location.country}</div>
//         <div class="weatherCardBody">
//         <div class="cardTemp">
//         <div class="cardText">${response.data.current.temp_f}F</div>
//         <div class="cardText">${response.data.current.temp_c}C</div>
//         </div>
//         <div> <img class="weatherIconImg" src=${response.data.current.condition.icon}></div>
//         <div  class="weatherIcon">${response.data.current.condition.text}</div>
//         </div>`
//         weatherContainer.appendChild(weatherDiv)

// })
// }

const getWeather= (evt)=>{
    evt.preventDefault()
        weatherContainer.innerHTML=''
        const weatherDiv=document.createElement('div')
        weatherDiv.innerHTML=`
        <div class=weatherCardContainer>
        <div class="weatherCardCity">Working on a fix</div>
        </div>`
        weatherContainer.appendChild(weatherDiv)

}


const getNews= (evt)=>{
    evt.preventDefault()
    axios.get(`/api/news?q=${city.value}`)
    .then(response =>{
        newsContainer.innerHTML=''
        const newsDiv=document.createElement('div')
        newsDiv.innerHTML=`
        <div class=newsCardContainer>
        <div class="newsCardTitle">${response.data.title}</div>
        <div class="newsCardBody">
        <div class="newsCardContent"><img class=newsCardImg src="${response.data.imgUrl}" ></div>
        </div>
        <div><a class="newsCardBtn" href=${response.data.url} target="_blank">Go to article</a></div>
        </div>

        `
        newsContainer.appendChild(newsDiv)
        city.value=''
})
}

cityForm.addEventListener('submit',getWeather)
cityForm.addEventListener('submit',getNews)

