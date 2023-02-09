import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React,  { useState, useEffect } from 'react';
import "../Cards.css"

export const Cards = ({childToParent}) => {

    const [click, setClick] = useState(false);
    const [score, setScore] = useState(0);
    const [dum, setDum] = useState("not clicked");
    const [data, setData] = useState("Selected")


    const changeProps = () => {
        setDum("Clicked")
   }
    return  <div className="dummySquare" onClick={() => childToParent(data)}></div>
    

    
}
