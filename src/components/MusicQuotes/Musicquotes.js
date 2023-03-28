 import React, { useEffect } from "react";
 import { motion } from "framer-motion"
 import {useState} from "react"
 import css from "./musicquotes.css"
 import axios from "axios";

  

 function Musicquotes() {

     const [quote, setQuote] = useState("")
     const [author, setAuthor] = useState("")

     const quotesAPI = async  () => {
        let quotesList = [];
        try {
            const data = await axios.get("https://api.quotable.io/random");
           quotesList = data.data
        } catch(error) {
            console.log(error); 
        }setAuthor(quotesList.author)
         setQuote(quotesList.content)

        //  console.log({quote})

    
    try {
        

    } catch (error){
          console.log(error)
    };
 }
    useEffect(() => {

    quotesAPI()

    },[]);



    



    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Container" id="musicquote" >
            <motion.div 
            initial = {{x:-750}}
            animate = {{x:-10}}
            transition ={{delay: 0.5, type: "spring", stiffness: 150}}>
            <motion.div transition={{layout: {duration: 1.5, type:"spring", }}}
            layout onClick={() => setIsOpen(!isOpen)} className="card"
            style={{borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(255, 117, 71, 1)", backgroundColor: "#E9C89E"}}
            >
             <motion.h2 layout="position" style={{fontFamily: "sans-serif",fontSize: "40px"  }}>MY MOOD MY MUSIC</motion.h2>
                 { isOpen && (
                 <motion.div 
                 initial={{opacity: 0}}
                 animate={{opacity:1}}
                 transition={{duration: 1}}
                  className="expand" id="quotes">
                    <p>{quote}</p>
                     <p>{author}</p>
                 </motion.div> )}
             </motion.div>
             </motion.div>
        </div>
    );
 }
 export default Musicquotes