import { useState } from "react";
import "./App.css";
// import Sidebar from './portfolio/Sidebar';
// import Mainpage from './portfolio/Mainpage';




function App(){
    const navlist=[
        {title:"About"},
        {title:"Skills"},
        {title:"Experience"},
    ];
        const[input,setInput]=useState("");
        const[data,setData]=useState(navlist);
     function onFormSubmit(e){
        e.preventDefault();
        setData([...data,{title:input}])
        console.log(input);
     }
    return( 
        <div>
            {data.map((val)=>{
                return(<button>{val.title}</button>);
            
            })}
             <form onSubmit={(e)=>{onFormSubmit(e)}}>
                <input type="text" 
                  onChange={((e)=>(setInput(e.target.value)))} value={input}/></form>
                <input type="submit"/>
        </div>
    );
}

 export default App;