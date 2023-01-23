export default function Sounds(){
    const rain = new Audio("https://github.com/ElaineLeandro/explorer/blob/master/focusTimer/audios/Cafeteria.wav?raw=true")
    const coffee = new Audio("https://github.com/ElaineLeandro/explorer/blob/master/focusTimer/audios/Chuva.wav?raw=true")
    const forest = new Audio("https://github.com/ElaineLeandro/explorer/blob/master/focusTimer/audios/Floresta.wav?raw=true")
    const fireplace = new Audio("https://github.com/ElaineLeandro/explorer/blob/master/focusTimer/audios/Lareira.wav?raw=true")
  
   coffee.loop = true
   rain.loop = true
   forest.loop = true
   fireplace.loop = true

   function buttonCoffeePlay(){
    coffee.play()
   }
   
   function buttonCoffeeStop(){
    coffee.pause()
   }

   function buttonRainPlay(){
    rain.play()
   }

   function buttonRainStop(){
    rain.pause()
   }

   function buttonForestPlay(){
     forest.play()
   }

   function buttonForestStop(){
    forest.pause()
   }

   function buttonFireplacePlay(){
    fireplace.play()
   }

   function buttonFireplaceStop(){
    fireplace.pause()
   }

   return {
    buttonCoffeePlay,
    buttonCoffeeStop,
    buttonRainPlay,
    buttonRainStop,
    buttonForestPlay,
    buttonForestStop,
    buttonFireplacePlay,
    buttonFireplaceStop
   }
  
   

   
}