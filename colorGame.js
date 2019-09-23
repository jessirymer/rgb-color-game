var numSquares = 6
var colors = []
var pickedColor 
var squares = document.querySelectorAll(".square")
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message")
var resetButton = document.querySelector("#reset")
var h1 = document.querySelector("h1")
var modeButtons = document.querySelectorAll(".mode")

init()

function init(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected")
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6
            reset()
        })
        
    }
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]
    
        squares[i].addEventListener("click", function(){
            //grab color of picked square
            var clickedColor = this.style.backgroundColor
            //compare color to picked color
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!"
                changeColors(clickedColor)
                resetButton.textContent = "Play Again"
                h1.style.background = pickedColor
            } else {
                this.style.background = "#232323"
                messageDisplay.textContent = "Try Again"
            }
        })
    }
    reset()
}

function reset(){
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block"
            squares[i].style.background = colors[i]
        } else{
            squares[i].style.display = "none"
        }
    }
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = ""
    h1.style.background = "steelblue"
}

resetButton.addEventListener("click", reset)

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    console.log(random)
    return colors[random]
}

function generateRandomColors(num){
    var arr = []
    for(var i = 0; i< num; i++){
        arr.push(randomColor())
    }
    return arr
}

function randomColor(){
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

