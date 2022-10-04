"use strict"
const myHand = document.querySelectorAll(".myHand .btn")
let gameOn = false
let OP = 0
let MP = 0

myHand.forEach(btn =>{
    btn.addEventListener("click"  , function(){
        play(btn)
    })
})

function play(btn){
    const myHandBtn = btn
    let oponentHandBtn = document.querySelector(".oponentHand .btn")

    if(gameOn) return
    gameOn = true
    btn.style.background = "#238"
    const oponentChoose = ["fa fa-hand-rock" , "fa fa-hand-paper" , "fa fa-hand-scissors"]
    const numRandom = Math.round(Math.random()*2)
    const oponent = oponentChoose[numRandom]
    const me = btn.querySelector("i").className
    let finalResult

    

    if(oponent === me){
        finalResult = "Empate"
    } else if(me === "fa fa-hand-paper"){
        if(oponent === "fa fa-hand-rock") finalResult = "Eu venço"
        if(oponent === "fa fa-hand-scissors") finalResult = "Oponente vence"
    } else if(me === "fa fa-hand-rock"){
        if(oponent === "fa fa-hand-scissors") finalResult = "Eu venço"
        if(oponent === "fa fa-hand-paper") finalResult = "Oponente vence"
    } else {
        if(oponent === "fa fa-hand-paper") finalResult = "Eu venço"
        if(oponent === "fa fa-hand-rock") finalResult = "Oponente vence"
    }

    setTimeout(()=>{
        let textOponent = document.querySelector(".oponentHand h3")
        if(oponent == "fa fa-hand-rock"){
            textOponent.innerHTML = "Pedra"
        } else if(oponent == "fa fa-hand-paper"){
            textOponent.innerHTML = "Papel"
        } else {
            textOponent.innerHTML = "Tesoura"
        }
        oponentHandBtn.querySelector("i").className = oponent
        winner(finalResult , myHandBtn , oponentHandBtn)
    } , 1000)

}


function winner(results , myHandBtn , oponentHandBtn){
    
    if(results == "Empate"){
        myHandBtn.style.background = "#aa3"
        oponentHandBtn.style.background = "#aa3"
    }

    if(results == "Eu venço"){
        myHandBtn.style.background = "#393"
        oponentHandBtn.style.background = "#933"
        pointsFunction(0,1)
    }

    if(results == "Oponente vence"){
        
        myHandBtn.style.background = "#933"
        oponentHandBtn.style.background = "#393"
        pointsFunction(1,0)
    }

    setTimeout(()=>{
        resetFunction()
        
    } , 3000)
}


function resetFunction(){
    document.querySelector(".oponentHand h3").innerHTML = "?"
    myHand.forEach(btn =>{
        btn.style.background = "#333"
    })
    gameOn = false
    document.querySelector(".oponentHand .btn").style.background = "#333"
    document.querySelector(".oponentHand .btn i").className = "fa fa-question"
}


pointsFunction(0,0)
function pointsFunction(oponentPoints , myPoints){
    OP += oponentPoints
    MP += myPoints
    document.querySelector(".oponent-points p").innerHTML = OP 
    document.querySelector(".my-points p").innerHTML = MP 
}



