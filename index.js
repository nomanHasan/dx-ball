function onload() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
    //   ctx.fillRect(25, 25, 100, 100);
    //   ctx.fillRect(250, 250, 1000, 1000);
    //   ctx.stroke();
    // //   ctx.clearRect(350, 350, 800, 800);
    //   ctx.clearRect(45, 45, 60, 60);
    //   ctx.strokeRect(50, 50, 50, 50);


    // ctx.beginPath();
    // ctx.moveTo(75, 50);
    // ctx.lineTo(100, 75);
    // ctx.lineTo(100, 25);
    // ctx.lineTo(1000, 250);
    // ctx.lineTo(500, 1);
    // ctx.stroke();


    // ctx.beginPath();
    // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    // ctx.moveTo(110, 75);
    // ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    // ctx.moveTo(65, 65);
    // ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    // ctx.moveTo(95, 65);
    // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    // ctx.stroke();


    // ctx.beginPath();
    // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    // ctx.moveTo(110, 75);
    // ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    // ctx.moveTo(65, 65);
    // ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    // ctx.moveTo(95, 65);
    // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    // ctx.stroke();


    // ctx.beginPath();
    // ctx.moveTo(25, 25);
    // ctx.lineTo(105, 25);
    // ctx.lineTo(25, 105);
    // ctx.fill();

    // // Stroked triangle
    // ctx.beginPath();
    // ctx.moveTo(125, 125);
    // ctx.lineTo(125, 45);
    // ctx.lineTo(45, 125);
    // ctx.closePath();
    // ctx.stroke();



    setInterval(() => {drawRandArcs(ctx)}, 100)
    
    


    }

    function drawRandArcs(ctx){
        clearRect(ctx)
        for (var i = 0; i < 40; i++) {
            for (var j = 0; j < 30; j++) {
              ctx.beginPath();
              var x = Math.random() *  ( i + 800 ); // x coordinate
              var y = Math.random() *  ( j + 800 ); // y coordinate
              var radius = 20; // Arc radius
              var startAngle = Math.random() * 10; // Starting point on circle
              var endAngle = Math.PI + (Math.PI * Math.random() * 2) / 2; // End point on circle
              var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise

              ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
              
              let cp1x = x -  100
              let cp1y = y - + 100
              let cp2x = x - + 100
              let cp2y = y -  - 100
              
              
            //   ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)


              if((Math.random() * 10) % 2 == 0){
                ctx.beginPath();
              }
              
              let color = getRandomColor();
              
              ctx.strokeStyle = color;
    
              console.log(color)
    
            //   ctx.strokeStyle="#FF0000";
    
              if (i >= 0) {
                ctx.stroke();
              } else {
                ctx.stroke();
              }
            }
          }
    }

    function clearRect(ctx){
        ctx.clearRect(0, 0, 1000, 1000)
    }

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }


}