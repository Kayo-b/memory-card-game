import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React,  { useState, useEffect } from 'react';


export const Dummy3 = ({props}) => {

    const [click, setClick] = useState(false);
    const [score, setScore] = useState(0);
    
    useEffect(() => {
        const clickDummy = () => {
            if(click === false) {
                setClick(true);
                setScore(1);
               
            }     
        };

        let dummy3 = document.querySelector(".dummy3")
        dummy3.addEventListener("click", clickDummy)
        console.log(click)
        console.log(score)

        return() => {
            dummy3.removeEventListener("click", clickDummy)
        }

    }, [click])

    if(click === true) {
      
        return <div>Was Clicked</div> 
    }
    return <div>B</div> 
    
}
