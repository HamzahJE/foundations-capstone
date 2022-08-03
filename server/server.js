require('dotenv').config()
const express =require('express')
const path= require("path")
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, "/../public")))
app.get('/', function(req,res) {
  res.sendFile(path.resolve(__dirname, '../public/index.html'))
  })


const {displayQuote, displayDogPic}=require('./controller')

app.get('/api/quote',displayQuote)

app.get('/api/dogPic',displayDogPic)

  








const port = process.env.PORT || 4007
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})



