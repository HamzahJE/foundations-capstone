const quoteBtn= document.querySelector('#quoteBtn')
const dogPicBtn= document.querySelector('#dogPicBtn')

const timerTime=document.querySelector('#timerTime')
const timerBtn=document.querySelector('#startTimer')

const quoteContainer=document.getElementById('quoteContainer')
const dogContainer=document.getElementById('dogPictureContainer')
const countContainer = document.querySelectorAll(".count-digit");
const startAction = document.getElementById("start-timer");
const stopAction = document.getElementById("stop-timer");
const resetAction = document.getElementById("reset-timer");

const displayQuote=(evt)=>{
  evt.preventDefault()
  axios.get(`/api/quote`)
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
  axios.get(`/api/dogPic`)
  .then(res => {
    dogContainer.innerHTML=''
    let dogPic=res.data
    const imageDiv= document.createElement('div')
    imageDiv.innerHTML=(`<div><img id="dogImg" src=${dogPic}></img></div>`)
    dogContainer.appendChild(imageDiv)
  })
}


const defaultValue = 25 * 60;
var countDownTime = defaultValue;
var timerID;
var isStopped = true;
const findTimeString = () => {
  var minutes = String(Math.trunc(countDownTime / 60));
  var seconds = String(countDownTime % 60);
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }
  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }
  return minutes + seconds;
};

const startTimer = () => {
  if (isStopped) {
    isStopped = false;
    timerID = setInterval(runCountDown, 1000);
  }
};

const stopTimer = () => {
  isStopped = true;
  if (timerID) {
    clearInterval(timerID);
  }
};

const resetTimer = () => {
  stopTimer();
  countDownTime = defaultValue;
  renderTime();
};


startAction.onclick = startTimer;
resetAction.onclick = resetTimer;
stopAction.onclick = stopTimer;

const renderTime = () => {
  const time = findTimeString();
  countContainer.forEach((count, index) => {
    count.innerHTML = time.charAt(index);
  });
};

const runCountDown = () => {
  countDownTime -= 1;
  renderTime();
  if (countDownTime === 0) {
    stopTimer();
    countDownTime = defaultValue;
  }
};


quoteBtn.addEventListener('click',displayQuote)
dogPicBtn.addEventListener('click',displayDogPic)

