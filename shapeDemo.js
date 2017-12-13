import { Arc, Arcs } from './Arc.js'
 
var canvas = document.querySelector('canvas#canvas')
var context = canvas.getContext("2d")

let arc = new Arc(context, 23, 23, 23, 0, Math.PI * 1.2, false)
arc.color = "green"
arc.draw()

let arcs = Arcs.getRandArcs(context, 800, 800, 10);
console.log(arcs)

animate()

function animate() {
    context.clearRect(0, 0, 800, 800)
    arcs.forEach(element => {
        element.draw()
        element.move()
    });
    
    requestAnimationFrame(animate)
}
console.log(context)


