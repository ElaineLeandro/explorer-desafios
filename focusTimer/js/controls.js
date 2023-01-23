  import {Sounds} from './sounds.js'


  export function controls({
      
  }){

    function playTree(){
     
    }

    function playCloud(){
      buttonCloud.classList.toggle('color')
      if (buttonCloud.classList.contains('color')) {
        coffee.play()
      } else {
        coffee.pause()
      }
    }

    function playPopcorn(){
      popcorn.classList.toggle('color')
      if (popcorn.classList.contains('color')) {
        rain.play()
      } else {
        rain.pause()
      }
    }

    function playFire(){
      fire.classList.toggle('color')
      if(fire.classList.contains('color')){
        fireplace.play()
      }else{
        fireplace.pause()
      }
    }

    return{
      playTree,
      playCloud,
      playPopcorn,
      playFire
    }

  }