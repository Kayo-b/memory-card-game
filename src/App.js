import logo from './logo.svg';
import './App.css';
import {Dummy1} from './components/DummyCard.js';
import {Dummy2} from './components/Dummy2.js';
import {Dummy3} from './components/Dummy3.js';
import {Dummy4} from './components/Dummy4.js';
import {Dummy5} from './components/Dummy5.js';
import React, { useState, useEffect } from 'react';

function App() {
  const [score, setScore] = useState(0);


  var eleArr = [      
  <div className="dummy1" onClick={(e) => setScore(score + 1)}><Dummy1/>1</div>,
  <div className="dummy2" onClick={(e) => setScore(score + 1)}><Dummy2 />2</div>,
  <div className="dummy3" onClick={(e) => setScore(score + 1)}><Dummy3 />3</div>,
  <div className="dummy4" onClick={(e) => setScore(score + 1)}><Dummy4 />4</div>,
  <div className="dummy5" onClick={(e) => setScore(score + 1)}><Dummy5 />5</div>]

  // const randomizer = () => {
  //   let newArr = []
  //   let x = eleArr.length
  //   for(let i = 0; i < x; i++) {
  //     let random = Math.floor(Math.random() * eleArr.length);
  //     // eleArr = [...eleArr, eleArr[random]];
  //     newArr.push(eleArr[random])
  //     // eleArr.splice(random, 1);

  //   }

  //   return newArr;
  // }
  let eleArr2 = []

  let teste = [11,3,7,2,8,4]

  const pushShift = () => { 
    for(let x = 0; x < teste.length; x++) {
      let random = Math.floor(Math.random() * 6);
      teste[x] = teste[random]

    }
    console.log(teste)
    
  }
  pushShift()

  eleArr.forEach(item => eleArr2.push(item))



  return (
    <div className="App">
    {console.log("app rendering")}
      <div className="appHeader">
        <h3>Warhammer AI Memory Card Game</h3>
      <div className="scoreBoard">{score}</div>
      </div>
      <div className="mainContainer">
      {/* {randomizer().map(item => {return item})} */}
      {eleArr2.map(item => {return item})}
      
      {/*eleArr2.map(item => {return item})} */}
      </div>
    </div>
  );
}

export default App;
//what have I learned notes:
// how to pass values from Parent to Child and from Child back to Parent(creating a callback function in the parent and sending it as a prop to the child and then sending it back to the parent through return)
// that is really easy to create infinite loops in react.