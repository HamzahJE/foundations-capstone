let axios=require("axios")

let randomQuote;
let dogPic;

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
    }
    
}