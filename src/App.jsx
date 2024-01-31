import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/home/Home";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        {/* <Route path="*" element={<NotFound />}/> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
