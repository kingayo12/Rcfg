import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/dist/css/themes/splide-default.min.css"; // Import Splide styles
import "@splidejs/splide-extension-auto-scroll/dist/css/splide-extension-auto-scroll.min.css"; // Import auto-scroll extension styles
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const Autosilde = () => {
  useEffect(() => {
    // Initialize Splide with auto-scroll extension
    const splide = new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 3,
      AutoScroll: true, // Enable auto-scroll
      interval: 3000, // Set the auto-scroll interval in milliseconds (e.g., 3000 for 3 seconds)
    });

    // Mount the Splide instance
    splide.mount();

    // Return a cleanup function to destroy the Splide instance when the component unmounts
    return () => {
      splide.destroy();
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <Splide className='splide' aria-label='My Favorite Images'>
      <SplideSlide>
        <img src='image1.jpg' alt='Image 1' />
      </SplideSlide>
      <SplideSlide>
        <img src='image2.jpg' alt='Image 2' />
      </SplideSlide>
      {/* Add more slides as needed */}
    </Splide>
  );
};

export default Autosilde;
