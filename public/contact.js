
const fname=document.querySelector('#fnameInput') 
const lname=document.querySelector('#lnameInput')
const email=document.querySelector('#emailInput')
const contactForm=document.querySelector('#contactForm')
let baseURL="http://localhost:4007"

const sendContact =(evt)=>{
    evt.preventDefault()

    let userObj= {
        fname:fname.value,
        lname:lname.value,
        email:email.value
    }
    console.log(userObj)

axios.post(`${baseURL}/contact`,userObj)
.then(() => {
    console.log('Obj sent to DB')
    fname.value=''
    lname.value=''
    email.value=''
})
.catch(err=>console.log(err))
}



contactForm.addEventListener('submit',sendContact)


