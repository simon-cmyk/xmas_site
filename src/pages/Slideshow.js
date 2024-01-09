import React, { useState, useEffect } from 'react';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
import img9 from '../images/9.jpg';
import img10 from '../images/10.jpg';
import img11 from '../images/11.jpg';
import img12 from '../images/12.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const Slideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Set up a timer to change the image every 2 seconds
    const intervalId = setInterval(() => {
      // Increment the current image index (looping back to 0 after 11)
      setCurrentImage((prevImage) => (prevImage + 1) % 12);
    }, 2000);

    // Clear the interval when the component is unmounted or updated
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slideshow">
      <img
        src={images[currentImage]}
        alt={`Slide ${currentImage + 1}`}
        style={{ maxWidth: '100%', maxHeight: '500px' }}
      />
    </div>
  );
};

export default Slideshow;