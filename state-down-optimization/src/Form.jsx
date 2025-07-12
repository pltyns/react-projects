import { useState } from "react";

export default function Form(){
    let [color , setColor] = useState("red");
    return (
        <>
        <input value={color} onChange={(e) => setColor(e.target.value)}/>
        <p style={{color}}>Hello, world</p>
        </>
    )
}