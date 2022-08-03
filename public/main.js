
const quoteBtn= document.querySelector('#quoteBtn')
const dogPicBtn= document.querySelector('#dogPicBtn')
const contactBtn = document.querySelector('#cBtn')

let baseURL="http://localhost:4007"



const displayQuote=(evt)=>{
  evt.preventDefault()
  axios.get(`${baseURL}/api/quote`)
      .then(res =>  {
        let quote=res.data
          console.log(quote)
          const quoteDiv= document.createElement('header')
          quoteDiv.innerHTML=`<div>${quote}</div>`
          document.getElementById('quote').appendChild(quoteDiv)
        })
}

const displayDogPic= (evt) =>{
  evt.preventDefault()
  axios.get(`${baseURL}/api/dogPic`)
  .then(res => {

    let dogPic=res.data
    const imageDiv= document.createElement('div')
    imageDiv.innerHTML=(`<div><img src=${dogPic}></img></div>`)
    document.getElementById('dogPicture').appendChild(imageDiv)
  })
}






quoteBtn.addEventListener('click',displayQuote)
dogPicBtn.addEventListener('click',displayDogPic)



