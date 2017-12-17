import { EventRegister } from './NCAN/events/EventRegister.js';
import {context, canvas, canvasWidth, canvasHeight} from './initializeCanvas.js'
import { Layer } from './NCAN/Layer.js';
import { Rect } from './NCAN/Rect.js';
import { NumberFactory } from './NCAN/Number.js';


// canvas.height = 500

let gameLayer = new Layer(canvas, context);


var crect 
setTimeout(() => {
    crect = canvas.getBoundingClientRect()
})

// console.log(crect)  



 

EventRegister.register(canvas, gameLayer)


window.onresize = event => {
    EventRegister.register(canvas, gameLayer)
}


let rect = new Rect(100, canvasHeight-25, 100, 80, context)
let bottomBorder = new Rect(0, canvasHeight - 5, canvasWidth, 5, context);

bottomBorder.fill = true;

gameLayer.addShape(rect)
gameLayer.addShape(new Rect(120, canvasHeight-25, 100, 80, context))


for(let i = 0; i< 20; i++){


    let x = NumberFactory.getRandomBetween(1, canvasWidth);
    let y = NumberFactory.getRandomBetween(1, canvasHeight);
    
    let width = NumberFactory.getRandomBetween(1, 100);
    
    let height = NumberFactory.getRandomBetween(1, 100);

    gameLayer.addShape(new Rect(x, y, width, height, context))
}


gameLayer.addShape(new Rect(140, canvasHeight-25, 100, 80, context))
gameLayer.addShape(new Rect(150, canvasHeight-25, 100, 80, context))
gameLayer.addShape(new Rect(160, canvasHeight-25, 100, 80, context))
gameLayer.addShape(new Rect(190, canvasHeight-25, 100, 80, context))

gameLayer.addShape(bottomBorder)

console.log(gameLayer)


gameLayer.draw()

