//1********************
var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d');

/* c.fillRect(x, y, width, height) *///Función 

/* c.fillStyle = 'rgba(255, 0, 0, 0.5)'
c.fillRect(100, 100, 100, 100)
c.fillStyle = 'blue'
c.fillRect(400, 100, 100, 100)
c.fillRect(250, 300, 100, 100) */

console.log(canvas)


//2********************
//line
/* c.beginPath();
c.moveTo(50, 300) 
c.lineTo(300, 100)
c.lineTo(400, 300)
c.lineTo(600, 400)
c.strokeStyle = 'blue'
c.stroke() */
//es invisible hasta que llamamos a stroke();
//ahora podemos seguir añadiendo más lineas con c.lineTo()

//Arc or Circle
/* c.arc(x: Int, y: Int, r: Int, startAngle: Float, endAngle: Float, drawCounterClockWise: Bool (false)) */
/* c.beginPath()
c.arc(300, 300, 30, 0, Math.PI * 2, false)
c.strokeStyle = 'red'
c.stroke() */

/* for (let i = 0; i < 50; i++) {
    let x = Math.random() * window.innerWidth
    let y = Math.random() * window.innerHeight    
    c.beginPath()
    c.arc(x, y, 30, 0, Math.PI * 2, false)
    c.strokeStyle = 'red'
    c.stroke()
} */

//3*******************
//Animar el circulo
/* c.beginPath()
c.arc(200, 200, 30, 0, Math.PI * 2, false)
c.strokeStyle = 'red'
c.stroke()  *///Pasamos todo a la función

//para hacer que sea random
/* var x = Math.random() * innerWidth
var y = Math.random() * innerHeight */

var x = 200
var y = 200
var dx = 7
var dy = 4
var radius = 30
function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)
    c.beginPath()
    c.arc(x, y, 30, 0, Math.PI * 2, false)
    c.strokeStyle = 'red'
    c.stroke() 
    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx
        
    } 
    if ( y + radius > innerHeight ||  y - radius < 0) {
        dy = -dy
    } 

    x += dx
    y += dy
    console.log('dsgdkhg')//comprobamos que funciona
}

animate()