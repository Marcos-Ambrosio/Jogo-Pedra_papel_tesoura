import {gameOn} from './script.js'

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

export {play}