// import "./slidebar.css";
import { useState } from "react";

function Mainpage(){
    const[theme,setTheme]=useState("light");
    const[Number,setNumber]=useState(0);
    function changeTheme(){
        theme==="light"?setTheme("dark"):setTheme("light");
    }
    function add(){
        setNumber(Number+1)
    }
    function sub(){
        setNumber(Number-1)
    }
    return(
        <div className="Sidebar">
            <button onClick={changeTheme}>theme</button>
            {theme}
        <button onClick={add}>+</button>
        {Number}
        <button onClick={sub}>-</button>

        </div>
    )
}
export default Mainpage;