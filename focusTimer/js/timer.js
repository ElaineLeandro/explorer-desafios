export default function Timer({
  minutesDisplay,
  secondsDisplay,
}){
  let timerTimerOut;

  function counter() {
    timerTimerOut = setTimeout( function() {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

      if( seconds <= 0) {
          seconds = 59
        
        minutesDisplay.textContent =String(minutes - 1).padStart(2,'0') 
      }

      secondsDisplay.textContent = String(seconds - 1 ).padStart(2, '0')

      if(minutes <= 0){
        
        return
      }

      counter()
    }, 1000)
  }
    function hold (){
    clearTimeout(timerTimerOut)
  }

  function addTimer() {
    let minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes + 5).padStart(2, '0')
  }

  function addSub(){
    let minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes - 5).padStart(2, '0')
  }


  return{
    counter,
    hold,
    addTimer,
    addSub,
  }
}