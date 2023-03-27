import react from "react"
import image from "../Images/MOODLY-2 (5).jpg"
import "./Page1.css"
import { motion } from "framer-motion"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { fontFamily } from "@mui/system";
import { spring } from "motion";




    // const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;



const  Page1 =() => {

    const images = [
  {
    url: '../Images/MOODLY-2 (1).png',
    title: 'My Mood My Music',
    width: '100%',
  },]
 const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,

  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 100%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'center',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));


    return (
        
       <div>
            <motion.div
            initial = {{y:-250}}
            animate = {{y:-10}}
            transition ={{delay: 0.5, type: "spring", stiffness: 120}}

            
            
            >
                
                <h1 style={{fontFamily:"cursive",  fontSize: 60, fontWeight: 600, padding: '5px'  }}>
                    MOODLY
                </h1>
            </motion.div>

        

       </div>
    ); 
};

export default Page1