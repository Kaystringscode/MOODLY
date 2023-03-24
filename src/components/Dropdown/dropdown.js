
import React from "react";
import "./dropdownstyle.css"

const  Dropdown = () => {
    return (
        <div className = "h-screen" bg-grey-200 ="true" attribute = "flex" pt ="12">
            <img style = {{width: "300px", height: "300px",  }} src ={require("../Images/My project-1.jpg")} alt="a male listing with headphones"
             />
                <div className="flex flex-col">
                 <ul className = "dropDownstyle" style={{ display: "flex", flexDirection: "column"}}>
                <li>Happy</li>
                <li>Dreamy</li>
                <li>Relaxing</li>
                <li>Sad</li>
                <li>Epic</li>
                <li>Laid Back</li>
                <li>Hopeful</li>
                <li>Zen</li>
                <li>Meditation</li>
                <li>Children</li>
             </ul>
            </div>
        </div>
    )
}
export default Dropdown; 