let axios=require("axios");
require('dotenv').config()
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");
const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
let randomQuote;
let dogPic;
let weatherData;
let newsData;
module.exports={

    displayQuote: async (req,res)=>{
    await axios.get('https://type.fit/api/quotes')
    .then(response => {
        const quotes=response.data
        const randomIndex = Math.floor(Math.random() * quotes.length);
        randomQuote=quotes[randomIndex].text
    }).catch(err=>console.log(err))
      res.status(200).send(randomQuote)

    }, 
    displayDogPic: async (req,res) =>{
        await axios.get('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            dogPic=response.data.message
            console.log(dogPic)
        }).catch(err=>console.log(err))
        res.status(200).send(dogPic)
    },
    getWeather: async (req,res)=>{
        const {city}=req.query
        await axios.get(` http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_TOKEN}&q=${city}`)
        .then( response => {
            console.log(city)
            weatherData=response.data
        })
        res.status(200).send(weatherData)
        console.log(city)
    },
    getNews: async (req,res)=>{
        const {city}=req.query
        console.log(city)
       await axios.get(`https://newsapi.org/v2/everything?q=${city}&apiKey=${process.env.NEWS_API_KEY}`)
        .then(response => {
            newsData=response.data
            console.log(newsData.articles[0])})
            res.status(200).send(newsData.articles[0].content)
    },
    seed: (req,res)=>{
        sequelize.query(`
        drop table if exists contactInfo;

        create table contactInfo (
            contact_id serial primary key, 
            fname varchar,
            lname varchar,
            email varchar
        );`).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))

    },
    
    addContact:(req,res)=>{
        console.log(req.body)
    //     sequelize.query( `insert into contactInfo (fname,lname,email)
    //         values (${fname},${lname},${email})`)
    //         .then((dbRes) => res.status(200).send(dbRes))
    //         .catch((err) => console.log(err));
    }
    
}