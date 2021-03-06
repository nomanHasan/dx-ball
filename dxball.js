import { EventRegister } from './NCAN/events/EventRegister.js';
import {context, canvas, canvasWidth, canvasHeight} from './initializeCanvas.js'
import { Layer } from './NCAN/Layer.js';
import { Rect } from './NCAN/Rect.js';
import { NumberFactory } from './NCAN/Number.js';
import { ColorFactory } from './NCAN/Color.js';


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
    
    let width = NumberFactory.getRandomBetween(1, 200);
    
    let height = NumberFactory.getRandomBetween(1, 200);

    let rect = new Rect(x, y, width, height, context)

    rect.fill = true;
    rect.color = ColorFactory.getRandomColor()

    gameLayer.addShape(rect)
}

gameLayer.addShape(bottomBorder)

console.log(gameLayer)


gameLayer.draw()


console.log(gameLayer.shapes.map(shape => shape._zIndex))
