import { NumberFactory } from "./Number.js";
import { EventRegister } from './events/EventRegister.js'
import { MOUSE_MOVE, MOUSE_LEAVE } from "./events/mouse-events.js";

export class Layer {

    constructor(canvas = {}, context = {}, shapes = []) {
        this.canvas = canvas;
        this._id = NumberFactory.uuidv4()
        this.context = context;
        this.shapes = shapes;

        this.initValues();

        EventRegister.events.forEach(eventName => {
            this[eventName] = (event) => {
                this.shapes.forEach(shape => {
                    // if (shape.isInside && !shape.isInside(event)) {
                        // if (shape.mouseover) {
                        //     shape.mouseover = false;
                        //     execute(shape, 'onmouseleave', event)
                        // } else {
                        //     return
                        // }
                    // } else {
                        // shape.mouseover = true;
                        // execute(shape, eventName, event)
                    // }

                    // if (shape.mouseState.down == "true" && eventName == "mousemove") {
                    //     execute(shape, eventName, event)
                    // } else {
                    //     if (shape.isInside && !shape.isInside(event)) {
                    //         if (shape.mouseover) {
                    //             shape.mouseover = false;
                    //             execute(shape, 'onmouseleave', event)
                    //         } else {
                    //             return ;
                    //         }
                    //     } else {
                    //         if(!shape.mouseover){
                    //             shape.mouseover = true;
                    //             execute(shape, 'mouseenter', event)
                    //         }else{

                    //         }

                    //         execute(shape, eventName, event)
                    //     }
                    // }


                    console.log(eventName);
                    // switch(eventName){
                    //     case MOUSE_MOVE: {
                    //         if(shape.mouseState.down){
                    //             execute(shape, eventName, event)
                    //         }else {
                    //             if(shape.isInside && !shape.isInside(event)){
                    //                 if (shape.mouseState.over) {
                    //                     shape.mouseState.over = false;
                    //                     execute(shape, MOUSE_LEAVE, event)
                    //                 } else {
                    //                     return
                    //                 }
                    //             }else{
                    //                 if(!shape.mouseState.over){
                    //                     shape.mouseState.over = true;
                    //                 }
                    //                 execute(shape, eventName, event)
                    //             }
                    //         }
                    //         break;
                    //     }
                    //     default: {
                    //         if(shape.isInside && !shape.isInside(event)){
                    //             if (shape.mouseover) {
                    //                 shape.mouseover = false;
                    //                 execute(shape, MOUSE_LEAVE, event)
                    //             } else {
                    //                 return ;
                    //             }
                    //         }else{
                    //             shape.mouseover = true;
                    //             execute(shape, eventName, event)
                    //         }                            
                    //     }
                    // }


                    execute(shape, eventName, event)
                    
                })
            }
        })


    }

    initValues() {
        this.nextZindex = 0;
    }

    addShape(shape) {
        if (shape["_id"] == undefined) {
            shape["_id"] = NumberFactory.uuidv4()
        }
        shape["_layer"] = this;
        this.assignZIndex(shape)

        this.shapes.push(shape)
    }

    assignZIndex(shape) {
        shape["_zIndex"] = this.nextZindex;
        this.nextZindex++;
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