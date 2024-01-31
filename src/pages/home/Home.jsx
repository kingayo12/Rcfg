import React from "react";
import Marquee from "react-fast-marquee";
import image1 from "../../assets/IMG_1462.jpg";
import image2 from "../../assets/IMG_0865.jpg";
import image3 from "../../assets/IMG_1622.jpg";
import image4 from "../../assets/IMG_1623.jpg";
import image5 from "../../assets/IMG_1354.jpg";
import image6 from "../../assets/IMG_1625.jpg";
import image7 from "../../assets/IMG_1626.jpg";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div className='flex item-center justify-center'>
      <div className='home_container flex flex-col items-center justify-center h-screen w-full overflow-hidden gap-1'>
        <motion.div
          animate={{ y: [-1000, 3], opacity: [0, 1] }}
          transition={{ stiffness: 100, delay: 2, duration: 5 }}
          className='article_container text-white text-left'
        >
          <h1 className='text-3xl md:text-4xl lg:text-7xl uppercase'>
            Capturing Moments &<br /> Creating Memories
          </h1>
          <h3 className='text-2xl'>Welcome to</h3>
          <h1 className='text-2xl uppercase after:absolute after:h-1 after:w-8 after:bg-white after:left-0 after:bottom-0 '>
            RCF Gallery
          </h1>
        </motion.div>
        <motion.div
          animate={{ y: [1000, 3], opacity: [0, 1] }}
          transition={{ stiffness: 100, delay: 1, duration: 2 }}
          className='slider_container  max-w-[90%] mt-3'
        >
          <Marquee direction='left'>
            <div className='image_container'>
              <div className='imgs max-h-24 h-[300px]  flex flex-row'>
                <img src={image1} alt='image1' />
                <img src={image2} alt='image1' />
                <img src={image3} alt='image1' />
                <img src={image4} alt='image1' />
                <img src={image5} alt='image1' />
                <img src={image6} alt='image1' />
                <img src={image5} alt='image1' />
                <img src={image6} alt='image1' />
                <img src={image7} alt='image1' />
                <img src={image7} alt='image1' />
              </div>
            </div>
          </Marquee>
        </motion.div>
        <motion.div
          animate={{ y: [1000, 3], opacity: [0, 1] }}
          transition={{ stiffness: 100, delay: 1.5, duration: 2 }}
          className='slider_container'
        >
          <Marquee direction='right'>
            <div className='image_container'>
              <div className='imgs max-h-24 h-[300px]  flex flex-row'>
                <img src={image1} alt='image1' />
                <img src={image2} alt='image1' />
                <img src={image3} alt='image1' />
                <img src={image4} alt='image1' />
                <img src={image5} alt='image1' />
                <img src={image6} alt='image1' />
                <img src={image7} alt='image1' />
                <img src={image5} alt='image1' />
                <img src={image6} alt='image1' />
                <img src={image7} alt='image1' />
                <img src={image5} alt='image1' />
                <img src={image6} alt='image1' />
                <img src={image7} alt='image1' />
              </div>
            </div>
          </Marquee>
        </motion.div>
        <motion.div
          animate={{ y: [1000, 3], opacity: [0, 1] }}
          transition={{ stiffness: 100, delay: 2, duration: 2 }}
          className='slider_container  max-w-[90%]'
        >
          <Marquee direction='left'>
            <div className='image_container'>
              <div className='imgs max-h-24 h-[300px]  flex flex-row'>
                <img src={image1} alt='image1' />
                <img src={image2} alt='image1' />
                <img src={image3} alt='image1' />
                <img src={image4} alt='image1' />
                <img src={image5} alt='image1' />
                <img src={image6} alt='image1' />
                <img src={image7} alt='image1' />
                <img src={image5} alt='image1' />
                <img src={image6} alt='image1' />
                <img src={image7} alt='image1' />
              </div>
            </div>
          </Marquee>
        </motion.div>
        <motion.div
          animate={{ y: [1000, 3], opacity: [0, 1] }}
          transition={{ stiffness: 100, delay: 2, duration: 5 }}
          className='button mt-10 w-full px-6 md:flex md:items-center md:justify-center'
        >
          <Button
            variant='outlined'
            sx={{
              color: "#fff",
              borderRadius: "6px",
              width: "90%",
              p: 1,
              border: "2px solid #fff",
            }}
          >
            Continue
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
