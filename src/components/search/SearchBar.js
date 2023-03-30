import "./Searchbar.css"
import React from 'react';
import { motion } from "framer-motion"



//search bar function that a query can be submitted with// 
function SearchBar(props) {

//stylises the search bar by adding properties such as, naming the submit button "Search" motion/animation and shadows//
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
    
    </div>
    </motion.div>
  );
}

export default SearchBar;
