import './App.css';
import { randomArray } from './auxFunctions';
import {Cards} from './components/Cards.js';
import { Dialog } from './components/Dialog.js';
import React, { useState, useEffect } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [gameover, setGameover] = useState(false);
  const [data1, setData1] = useState("")
  const [data2, setData2] = useState("")
  const [data3, setData3] = useState("")
  const [data4, setData4] = useState("")
  const [data5, setData5] = useState("")
  const [data6, setData6] = useState("")
  const [data7, setData7] = useState("")
  const [data8, setData8] = useState("")
  const [data9, setData9] = useState("")
  const [data10, setData10] = useState("")
  const [data11, setData11] = useState("")
  const [data12, setData12] = useState("")
  const [data13, setData13] = useState("")
  const [data14, setData14] = useState("")

  const childToParent1 = (childData) => {
    setData1(childData)
  }
  const childToParent2 = (childData) => {
    setData2(childData)
  }
  const childToParent3 = (childData) => {
    setData3(childData)
  }
  const childToParent4 = (childData) => {
    setData4(childData)
  }
  const childToParent5 = (childData) => {
    setData5(childData)
  }
  const childToParent6 = (childData) => {
    setData6(childData)
  }
  const childToParent7 = (childData) => {
    setData7(childData)
  }
  const childToParent8 = (childData) => {
    setData8(childData)
  }
  const childToParent9 = (childData) => {
    setData9(childData)
  }
  const childToParent10 = (childData) => {
    setData10(childData)
  }
  const childToParent11 = (childData) => {
    setData11(childData)
  }
  const childToParent12 = (childData) => {
    setData12(childData)
  }
  const childToParent13 = (childData) => {
    setData13(childData)
  }
  const childToParent14 = (childData) => {
    setData14(childData)
  }

  const onClickFunction = (e) => {
    
    if(e.target.parentNode.id !== "Selected") {
      setScore(score + 1)
      if(score === 13) {
        setDataToEmpty()
        setGameover(undefined)
      }
    } else {
      if(score > topScore) {
        setTopScore(score)
        
      }

      setGameover(rerenderDialog())
      
      setDataToEmpty()
    }
    
  };
  
  function setDataToEmpty() {
    setScore(0)
    setData1("")
    setData2("")
    setData3("")
    setData4("")
    setData5("")
    setData6("")
    setData7("")
    setData8("")
    setData9("")
    setData10("")
    setData11("")
    setData12("")
    setData13("")
    setData14("")
  }

  function rerenderDialog() {
   
    if(gameover === false) {
      return true
    } else {
      return false
    }
  }

  
  var eleArr = 
  [
     <div id="ork" className="cardName"><div id={data1} className="dummy1" onClick={(e) => onClickFunction(e) }><Cards childToParent={childToParent1}/></div><h2>Ork</h2></div>,
     <div id="spcMarine" className="cardName"><div id={data2} className="dummy2" onClick={(e) => onClickFunction(e) }><Cards childToParent={childToParent2}/></div><h2>Judiciar</h2></div>,
     <div id="chaosDeamon" className="cardName"><div id={data3} className="dummy3" onClick={(e) => onClickFunction(e) }><Cards childToParent={childToParent3}/></div><h2>Chaos Deamon</h2></div>,
     <div id="adeptusMechanicus" className="cardName"><div id={data4} className="dummy4" onClick={(e) => onClickFunction(e) }><Cards childToParent={childToParent4}/></div><h2>High Technus Zealot</h2></div>,
     <div id="ultraSkaven" className="cardName"><div id={data5} className="dummy5" onClick={(e) => onClickFunction(e) }><Cards childToParent={childToParent5}/></div><h2>Ultra Skaven</h2></div>,
     <div id="nekronmancer" className="cardName"><div id={data6} className="dummy6" onClick={(e) => onClickFunction(e) }><Cards childToParent={childToParent6}/></div><h2>Nekronmancer</h2></div>,
     <div id="caveGoblin" className="cardName"><div id={data7} className="dummy7" onClick={(e) => onClickFunction(e) }><Cards childToParent={childToParent7}/></div><h2>Cave Goblin</h2></div>,
     <div id="battleWornSpcMarine" className="cardName"><div id={data8} className="dummy8" onClick={(e) => onClickFunction(e) }><Cards childToParent={childToParent8}/></div><h2>Ultramarine</h2></div>,
     <div id="hobbgoblin" className="cardName"><div id={data9} className="dummy9" onClick={(e) => onClickFunction(e) }><Cards childToParent={childToParent9}/></div><h2>Hobbgoblin</h2></div>,
     <div id="meganecron" className="cardName"><div id={data10} className="dummy10" onClick={(e) => onClickFunction(e) }><Cards childToParent={childToParent10}/></div><h2>Meganecrus</h2></div>,
     <div id="techomarauder" className="cardName"><div id={data11} className="dummy11" onClick={(e) => onClickFunction(e) }><Cards childToParent={childToParent11}/></div><h2>Marauder</h2></div>,
     <div id="necronatror" className="cardName"><div id={data12} className="dummy12" onClick={(e) => onClickFunction(e) }><Cards childToParent={childToParent12}/></div><h2>Necronator</h2></div>,
     <div id="mouserat" className="cardName"><div id={data13} className="dummy13" onClick={(e) => onClickFunction(e) }><Cards childToParent={childToParent13}/></div><h2>Mouserat</h2></div>,
     <div id="lostknight" className="cardName"><div id={data14} className="dummy14" onClick={(e) => onClickFunction(e) }><Cards childToParent={childToParent14}/></div><h2>Lost Knight</h2></div>,
  ]
    

  let randomizedArray = []
  let random = randomArray()
      for(let i = 0; i < eleArr.length; i++) {
        randomizedArray.push(eleArr[random[i]])
      }

  return (
    <div className="App">

      <div className="appHeader">
        <div className="dialogContainer"><div className="speakingHead" ></div>{<Dialog gameover={gameover}/>}</div>
          <h3>Warhammer 40k Memory Card Game</h3>
        <div className="scoreBoard">Best Score: {topScore}<br></br>Current Score: {score}</div>
      </div>
      <div className="mainContainer">
      <div className="scoreBoardSticky">Best Score: {topScore}<br></br>Current Score: {score}</div>
      {randomizedArray}

      </div>
    </div>
  );
} 

export default App;
