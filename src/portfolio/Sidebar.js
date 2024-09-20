import "./Sidebar.css";
import Button from "./Button";

function Sidebar(){
    return(
    <div className="Sidebar">
        <div className="pic">
        <img src="https://jrdev-port.netlify.app/assets/images/people/man.jpg"></img></div>
    <h1> James mabe</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores veritatis laboriosam obcaecati est minima pariatur dicta facilis, consequatur quod, hic nostrum qui voluptatibus laborum dolorum. Voluptates animi accusantium quos consequuntur!</p>
        <Button/>
        <p>News letter</p>
        <form>
            <div classname="form-group">
                <input type="joe@gmail.com" class="form-control" id="joe@gmail.com" placeholder="joe@gmail.com"></input>
            </div>
        </form>
        </div>
        )
};
export default Sidebar;-