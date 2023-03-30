import react from "react";
import gif from "../Images/My project-2.jpg";
import css from "./Page1.module.css";
import Homescreen from "../Images/Homescreen.png"
import "./Page1.css";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { fontFamily } from "@mui/system";
import { spring } from "motion";


// const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

const Page1 = () => {
  function handlePagereload(){
    window.location.reload()
    localStorage.clear();
  }
  return (
    <div 
>
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 10, x: 10 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
      >
        <img src={gif} alt="logo" onClick={handlePagereload}/>
      </motion.div>


    </div>
  );
};

export default Page1;
