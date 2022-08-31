let scoreH = document.getElementById("score-home")
let scoreG = document.getElementById("score-guest")

function addPoint(side, nbPoint){
    if(side == "h"){
        score = parseInt(scoreH.innerText)
        scoreH.innerText = score + nbPoint    
    }
    else{
        score = parseInt(scoreG.innerText)
        scoreG.innerText = score + nbPoint
    }
}