import logo from './logo.svg';
import './App.css';
import { randomizer, randomArray } from './auxFunctions';
import {Dummy1} from './components/DummyCard.js';
import {Dummy2} from './components/Dummy2.js';
import {Dummy3} from './components/Dummy3.js';
import {Dummy4} from './components/Dummy4.js';
import {Dummy5} from './components/Dummy5.js';
import React, { useState, useEffect } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [dummy1, setDummy1] = useState(false);
  const [eleArray, setArr] = useState("")
  const [data, setData] = useState("")

  const childToParent = () => {

  }

  
  var eleArr = 
  [
      <div id="a" className="dummy1" onClick={() => setScore(score + 1) }><Dummy1 childToParent={childToParent}/></div>,
       <div id="b" className="dummy1" onClick={() => setScore(score + 1) }><Dummy1 childToParent={childToParent}/></div>,
       <div id="c" className="dummy1" onClick={() => setScore(score + 1) }><Dummy1 childToParent={childToParent}/></div>,
       <div id="d" className="dummy1" onClick={() => setScore(score + 1) }><Dummy1 childToParent={childToParent}/></div>,
       <div id="e" className="dummy1" onClick={() => setScore(score + 1) }><Dummy1 childToParent={childToParent}/></div>
  ]


  // useEffect(() => {
  //   document.addEventListener("click", () => setArr(randomizer(eleArr2)))
    
  //   return () => {
  //     document.removeEventListener("click", randomizer(eleArr));
  //   };
  
  // },[])

  let eleArr2 = []
  let random = randomArray()
      for(let i = 0; i < eleArr.length; i++) {
  eleArr2.push(eleArr[random[i]])
      }

  return (
    <div className="App">

    {console.log("app rendering")}

      <div className="appHeader">
        <h3>Warhammer AI Memory Card Game</h3>
      <div className="scoreBoard">{score}</div>
      </div>
      <div className="mainContainer" id="main">
      
      {eleArr2}

      </div>
    </div>
  );
} 

export default App;
//what have I learned notes:
// how to pass values from Parent to Child and from Child back to Parent(creating a callback function in the parent and sending it as a prop to the child and then sending it back to the parent through return)
// that is really easy to create infinite loops in react.
// you can't fix a value to a components state and change the component location inside the parent, the state value stays in the same original place it was originally set.
