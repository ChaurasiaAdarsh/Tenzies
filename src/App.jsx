import { useState } from "react"
import { nanoid } from "nanoid"
import Die from "../Component/Die"
import Confetti from "react-confetti"
export default function App(){
    const [dice,setDice]=useState(()=>GenrateRandom())
    const gameWon=dice.every(die => die.isHeld) && dice.every(die=> die.value=== dice[0].value)
    
    function GenrateRandom(){
        return new Array(10)
        .fill(0)
        .map(() =>({
            value:Math.floor(Math.random()*6+1),
            isHeld:false,
            id: nanoid()
        }))
    }
    function rollDice() {
        if(!gameWon){setDice(prevDice=>prevDice.map(die=>
            die.isHeld? die:
            {...die,value:Math.floor(Math.random()*6+1)}
        ))}
        else{
            setDice(GenrateRandom())
        }
    }
    function hold(id){
      setDice(prevDice=>{
        return prevDice.map(die =>{
            return die.id===id?
            {...die, isHeld:!die.isHeld}:die
        })
      })
    }
    const diceElement=dice.map(diceObj => <Die 
        key={ diceObj.id} 
        value={diceObj.value} 
        isHeld={diceObj.isHeld}
        hold={()=> hold(diceObj.id)}
        />)
    return (
        <main>
            {gameWon && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
           <div className="dice-container">
            {diceElement}
           </div> 
            <button className="roll-dice" onClick={rollDice}>{gameWon ? "New Game":"Roll"}</button>
        </main>)
}