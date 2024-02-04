import React from "react";
import Marquee from "react-fast-marquee";
import image1 from "../../assets/IMG_1462.jpg";
import image2 from "../../assets/IMG_0865.jpg";
import image3 from "../../assets/IMG_1347.jpg";
import image4 from "../../assets/IMG_1623.jpg";
import image5 from "../../assets/IMG_1354.jpg";
import image6 from "../../assets/IMG_1353.jpg";
import image7 from "../../assets/IMG_1369.jpg";
import image8 from "../../assets/IMG_1626.jpg";
import image9 from "../../assets/IMG_1381.jpg";
import image11 from "../../assets/IMG_1394.jpg";
import image12 from "../../assets/IMG_1408.jpg";
import image13 from "../../assets/IMG_1427.jpg";
import image14 from "../../assets/IMG_1428.jpg";
import image15 from "../../assets/IMG_1435.jpg";
import image16 from "../../assets/IMG_1455.jpg";
import image17 from "../../assets/IMG_1417.jpg";
import image18 from "../../assets/IMG_1417.jpg";
import image19 from "../../assets/IMG_1360.jpg";
import image20 from "../../assets/IMG_1358.jpg";
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
            <div className='image_container flex flex-row'>
              <div className='imgs w-44'>
                <img src={image1} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image2} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image3} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image4} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image5} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image6} alt='image1' />
              </div>{" "}
              <div className='imgs w-44'>
                <img src={image7} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image8} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image9} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image11} alt='image1' />
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
            <div className='image_container flex flex-row'>
              <div className='imgs w-44'>
                <img src={image12} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image13} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image15} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image16} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image20} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image18} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image1} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image15} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image13} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image9} alt='image1' />
              </div>
              <div className='imgs w-44'>
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
            <div className='image_container flex flex-row'>
              <div className='imgs w-44'>
                <img src={image16} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image17} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image6} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image18} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image4} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image4} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image20} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image19} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image5} alt='image1' />
              </div>
              <div className='imgs w-44'>
                <img src={image7} alt='image1' />
              </div>
            </div>
          </Marquee>
        </motion.div>
        <motion.div
          animate={{ y: [1000, 3], opacity: [0, 1] }}
          transition={{ stiffness: 100, delay: 2, duration: 5 }}
          className='button mt-5 w-full px-6 flex items-center justify-center'
        >
          <Button
            variant='outlined'
            sx={{
              color: "#fff",
              borderRadius: "6px",
              width: "55%",
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
