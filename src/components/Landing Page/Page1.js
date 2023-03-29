import react from "react"
<<<<<<< HEAD
import image from "../Images/MOODLY main.jpg"
import gif from "../Images/My project-2.jpg"
import css from "./Page1.module.css"
=======
import image from "../Images/MOODLY-2 (5).jpg"
import "./Page1.css"
>>>>>>> main
import { motion } from "framer-motion"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { fontFamily } from "@mui/system";
<<<<<<< HEAD
import { spring } from "motion";
import SearchBar from "../search/SearchBar";
=======
>>>>>>> main




<<<<<<< HEAD
=======
    // const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
>>>>>>> main



const  Page1 =() => {

<<<<<<< HEAD

=======
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
>>>>>>> main


    return (
        
       <div>
<<<<<<< HEAD

          {/* <div >
            <img src={image}  />
          </div> */}
            <motion.div
            initial = {{y:-250}}
            animate = {{y:10, x:10}}
            transition ={{delay: 0.5, type: "spring", stiffness: 120}}

            >
                <img src={gif}/>
               
            </motion.div>

        
=======
            <motion.div>
                
                <h1 style={{fontFamily:"cursive",  fontSize: 60, fontWeight: 600, padding: '5px'  }}>
                    MOODLY
                </h1>
            </motion.div>

            

             <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', fontFamily: "cursive" }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }} 
        >
          <ImageSrc style={{ backgroundImage: `url(${"../Images/MOODLY-2 (1).png"})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 1,
                pb: (theme) => `calc(${theme.spacing(2)} + 14px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
              
>>>>>>> main

       </div>
    ); 
};

export default Page1