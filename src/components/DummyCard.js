import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React,  { useState, useEffect } from 'react';
import "../Dummy.css"

export const Dummy1 = ({childToParent}) => {

    const [click, setClick] = useState(false);
    const [score, setScore] = useState(0);
    const [dum, setDum] = useState("not clicked")

    
    // useEffect(() => {
    //     const clickDummy = () => {
    //         if(click === false) {
    //             setClick(true);
               
    //         }     
    //     };

    //     let dummy1 = document.querySelector(".dummy1")
    //     dummy1.addEventListener("click", clickDummy)
    //     console.log(click)
    //     return() => {
    //         dummy1.removeEventListener("click", clickDummy)
    //     }

    // }, [click])

    // if(props === true) {
      
    //     return <div className="dummySquare" >Was Clicked</div>

    // }
    // let x
    // if(click === false) {
    //     x = "not clicked"
    // } else x = "clicked"


    const changeProps = () => {
        setDum("Clicked")
   }
    return  <div className="dummySquare" onClick={childToParent}><br></br>{dum}</div>
    

    
}
