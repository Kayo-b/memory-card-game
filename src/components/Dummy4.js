import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React,  { useState, useEffect } from 'react';


export const Dummy4 = ({props}) => {
    const [dum, setDum] = useState("not clicked")
    // const [click, setClick] = useState(false);
    // const [score, setScore] = useState(0);
    
    // useEffect(() => {
    //     const clickDummy = () => {
    //         if(click === false) {
    //             setClick(true);
    //             setScore(1);
               
    //         }     
    //     };

    //     let dummy4 = document.querySelector(".dummy4")
    //     dummy4.addEventListener("click", clickDummy)
    //     console.log(click)
    //     console.log(score)

    //     return() => {
    //         dummy4.removeEventListener("click", clickDummy)
    //     }

    // }, [click])

    const changeProps = () => {
        setDum("Clicked")
    }
    return  <div className="dummySquare" onClick={changeProps}>{props}<br></br>{dum}</div>
    
    
}
