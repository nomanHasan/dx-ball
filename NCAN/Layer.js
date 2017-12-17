import { NumberFactory } from "./Number.js";
import { EventRegister } from './events/EventRegister.js'

export class Layer {

    constructor(canvas = {}, context = {}, shapes = []) {
        this.canvas = canvas;
        this._id = NumberFactory.uuidv4()
        this.context = context;
        this.shapes = shapes;

        EventRegister.events.forEach(eventName => {
            this[eventName] = (event) => { 
                this.shapes.forEach(shape => {
                    // if (shape.isInside && !shape.isInside(event)) { 
                    //     if (shape.mouseover) {
                    //         shape.mouseover = false;
                    //         execute(shape, 'onmouseleave', event)
                    //     } else {
                    //         return
                    //     }
                    // } else {
                    //     shape.mouseover = true;
                    //     execute(shape, eventName, event)
                    // }
                    execute(shape, eventName, event)
                })
            }
        })
    }

    addShape(shape) {
        if (shape["_id"] == undefined) {
            shape["_id"] = NumberFactory.uuidv4()
        }
        shape["_layer"] = this;

        this.shapes.push(shape)
    }

    draw() {
        this.context.clearRect(0, 0, canvas.width, canvas.height)
        this.shapes.forEach(element => {
            element.draw()
        });
    }
    update() {
        this.shapes.forEach(element => {
            element.update()
        });
    }

    // onmousemove(event){
    //     this.shapes.forEach(shape => {
    //         if (shape["onmousemove"]) {
    //             shape.onmousemove(event)
    //         }
    //     })
    // }

}


export const execute = (obj, fn, ...args) => {
    if (obj[fn]) {
        obj[fn](...args)
    }
}