import React, { useState, useEffect } from 'react';
import img1 from '../images/Lillemor.png';
import img2 from '../images/Bynesveien_a_forside.jpg';
import img3 from '../images/ribbe.png';
import img4 from '../images/final_draft.jpg';
import img5 from '../images/Fra Tornardos.png';
import img6 from '../images/Bagler.jpg';
import img7 from '../images/Friggs.jpg';
import img8 from '../images/nye.jpg';
import img9 from '../images/gjengen.jpg';
import img10 from '../images/ny-koselig.jpeg';
import img11 from '../images/berg.jpeg';
import img12 from '../images/God.jpg';
import img13 from '../images/obs.png';
import img14 from '../images/blomster.png';
import img15 from '../images/blomsterbarna.jpg';
import img16 from '../images/julebokk.jpg';
import img17 from '../images/olejohn.jpg';
import img18 from '../images/svingen.jpg';
import img19 from '../images/Julekort_Silas_v3.png';
import img20 from '../images/osten.jpeg';
import img21 from '../images/Bynesveien_b_bakside.png';
import img22 from '../images/simonen.jpg';
import img23 from '../images/andysurf.jpg';
import img24 from '../images/båt.jpeg';
import img25 from '../images/ab.jpg';
import img26 from '../images/trd.jpg';
import img27 from '../images/arild.png';
import img28 from '../images/KORTendelig.png';
import img29 from '../images/Julekort2023.jpg';
import img30 from '../images/inbound.jpg';
import img31 from '../images/j23.png';
import img32 from '../images/skog.png';
import img33 from '../images/ferd.png';
import img34 from '../images/sha.JPG';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34];

const Slideshow2 = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Set up a timer to change the image every 2 seconds
    const intervalId = setInterval(() => {
      // Increment the current image index (looping back to 0 after 11)
      setCurrentImage((prevImage) => (prevImage + 1) % 34);
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

export default Slideshow2;