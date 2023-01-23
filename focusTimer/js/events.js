import{
  buttonTree,
  buttonCloud,
  buttonPopcorn,
  buttonFire,
  buttonPlay,
  buttonStop,
  buttonSum,
  buttonSub,
}from './elements.js'


export default function Events({controls, sounds,timer}){
  
  buttonTree.addEventListener('click', () => {
    buttonTree.classList.toggle('color')
    if (buttonTree.classList.contains('color')) {
      sounds.buttonForestPlay()
    } else {
      sounds.buttonForestStop()
    }
  })
  
  buttonCloud.addEventListener('click', () => {
    buttonCloud.classList.toggle('color')
    if (buttonCloud.classList.contains('color')) {
      sounds.buttonRainPlay()
    } else {
      sounds.buttonRainStop()
    }
  })
  
  buttonPopcorn.addEventListener("click", () => {
    buttonPopcorn.classList.toggle('color')
    if(buttonPopcorn.classList.contains('color')){
      sounds.buttonCoffeePlay()
    }else{
      sounds.buttonCoffeeStop()
    }
    
  })
  
  buttonFire.addEventListener("click", () =>{
    buttonFire.classList.toggle('color')
    if(buttonFire.classList.contains('color')){
      sounds.buttonFireplacePlay()
    }else{
      sounds.buttonFireplaceStop()
    }
  })
    
  buttonPlay.addEventListener('click', (event) => {
    timer.counter()
    buttonPlay.disabled = true
  })

  buttonStop.addEventListener('click', () => {
    timer.hold()
    buttonPlay.disabled = false
  })

  buttonSum.addEventListener('click', () =>{
   timer.addTimer()
  })

  buttonSub.addEventListener('click', () =>{
    timer.addSub()
  })

}



