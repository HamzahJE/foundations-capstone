
const city= document.querySelector('#cityInput')
const cityForm=document.querySelector('#cityForm')
const weatherContainer=document.querySelector('#weatherContainer')
const newsContainer=document.querySelector('#newsContainer')
const weatherNav=document.getElementById('')

const getWeather= (evt)=>{
    evt.preventDefault()
    axios.get(`/api/weather?city=${city.value}`)
    .then(response =>{
        weatherContainer.innerHTML=''
        const weatherDiv=document.createElement('div')
        weatherDiv.innerHTML=`
        <div class=weatherCardContainer>
        <div class="weatherCardCity">${response.data.city}</div>
        <div class="weatherCardCountry">${response.data.country}</div>
        <div class="weatherCardBody">
        <div class="cardTemp">
        <div class="cardText">${response.data.temp.temp}F</div>
        <div class="cardText">${Math.round(((response.data.temp.temp - 32) * 5/9)*10)/10}C</div>
        </div>
        <div  class="weatherIcon">${response.data.desc[0].main}</div>
        </div>`
        weatherContainer.appendChild(weatherDiv)

        console.log(response.data.desc)
        console.log(`temp ${response.data.temp.temp}`)
        console.log(`countries ${response.data.country}`)
        console.log(`city ${response.data.city}`)
        console.log(`desc ${response.data.desc[0].description}`)

})
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

