import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React,  { useState, useEffect } from 'react';


export const Dummy1 = ({props}) => {

    const [click, setClick] = useState(false);
    const [score, setScore] = useState(0);
    
    useEffect(() => {
        const clickDummy = () => {
            if(click === false) {
                setClick(true);
               
            }     
        };

        let dummy1 = document.querySelector(".dummy1")
        dummy1.addEventListener("click", clickDummy)
        console.log(click)
        return() => {
            dummy1.removeEventListener("click", clickDummy)
        }

    }, [click])

    if(click === true) {
      
        return <div>Was Clicked</div> 
    }
    return <div>B</div> 
    
}
