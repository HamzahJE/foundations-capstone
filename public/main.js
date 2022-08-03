
const quoteBtn= document.querySelector('#quoteBtn')
const dogPicBtn= document.querySelector('#dogPicBtn')
const fname=document.getElementById('fname')
const lname=document.getElementById('lname')
const gmail=document.getElementById('email')


let baseURL="http://localhost:4007"

const quoteContainer=document.getElementById('quoteContainer')
const dogContainer=document.getElementById('dogPictureContainer')

const displayQuote=(evt)=>{
  evt.preventDefault()
  axios.get(`${baseURL}/api/quote`)
      .then(res =>  {
        quoteContainer.innerHTML=''
        let quote=res.data
          console.log(quote)
          const quoteDiv= document.createElement('div')
           quoteDiv.innerHTML=(`<div>${quote}</div>`)
        quoteContainer.appendChild(quoteDiv)
        })
}

const displayDogPic= (evt) =>{
  evt.preventDefault()
  axios.get(`${baseURL}/api/dogPic`)
  .then(res => {
    dogContainer.innerHTML=''
    let dogPic=res.data
    const imageDiv= document.createElement('div')
    imageDiv.innerHTML=(`<div><img id="dogImg" src=${dogPic}></img></div>`)
    dogContainer.appendChild(imageDiv)
  })
}






quoteBtn.addEventListener('click',displayQuote)
dogPicBtn.addEventListener('click',displayDogPic)

fname.addEventListener('submit',console.log('hi'))
lname.addEventListener('submit',console.log('hi'))
gmail.addEventListener('submit',console.log('hi'))



