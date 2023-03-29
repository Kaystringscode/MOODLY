import "./Searchbar.css"
import React from 'react';
import { motion } from "framer-motion"
// import {Search} from "../Musicapi/Musicapi"


function SearchBar(props) {


  return (
  <motion.div 
            initial = {{y:-750}}
            animate = {{y:-10}}
            transition ={{delay: 0.5, type: "spring", stiffness: 150}}
            style={{borderRadius: "1px", boxShadow: "0px 10px 30px rgba(255, 117, 71, 1)"}}>
    <div id="sbq"> 
      <form onSubmit={props.handleSubmit}>
          <input type="text" value={props.query} onChange={props.handleChange} />
         <        button type="submit" >Search</button>
     </form>
     {/* function handleSubmit(event) {
              event.preventDefault();
     }
     */}
    </div>
    </motion.div>
  );
}

export default SearchBar;
