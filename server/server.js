require('dotenv').config()
const express =require('express')
const path= require("path")
const cors = require('cors')
const app = express()
app.use(express.json())


app.use(cors())
app.use(express.static("public"))

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
  })


const {displayQuote, displayDogPic, getWeather, getNews, seed, addContact}=require('./controller')

app.get('/api/quote',displayQuote)

app.get('/api/dogPic',displayDogPic)

// app.get('/api/weather',getWeather)


app.get('/api/news',getNews)


app.post(`/seed`,seed)

app.post(`/contact`,addContact)




const port = process.env.PORT || 4007
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})



