import React, { useState } from "react";
import "../styles/home.css";

function Home() {
  const images = [
    "https://www.pixelstalk.net/wp-content/uploads/2016/07/Pictures-HD-Studio-Ghibli.jpg",
    "https://www.pixelstalk.net/wp-content/uploads/2016/07/Photos-Studio-Ghibli-Backgrounds.jpg",
    "https://www.pixelstalk.net/wp-content/uploads/2016/07/Download-Studio-Ghibli-HD-Wallpapers-1.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  function handleClick() {
    setCurrentImage((currentImage + 1 + images.length) % images.length);
  }

  // slideshow interval timer
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <div className="container">
      <h1>StudioPrints</h1>
      <img src={images[currentImage]} className="slideimg" alt="homemain" />
      <div className="slidebutton">
        <input
          value="JavaScript"
          type="radio"
          name="select"
          id=""
          onClick={handleClick}
        />
        <input
          value="JavaScript"
          type="radio"
          name="select"
          id=""
          onClick={handleClick}
        />
        <input
          value="JavaScript"
          type="radio"
          name="select"
          id=""
          onClick={handleClick}
        />
      </div>
      <h1>Welcome!</h1>
      <h2>
        We're so glad you've joined us today. Before you go, take a look at some
        of our prints.
      </h2>
      <h2>
        These are made by different artist all over the world. We do specialize
        in content from Studio Ghibli, but if you'd like to request a special
        order, please submit a form on our contact page and we will get back to
        you as soon as possible!
      </h2>
      <p>All prints are printed on PVC poster paper. Made to last!</p>

      <div className="grid-container">
        <div className="grid-item">
          <img
            src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Photos-Studio-Ghibli-Backgrounds.jpg"
            alt="Ghiblicontent"
            className="slideimg"
          />
          <h2>Interested?</h2>
          <h3>Take a look at the rest of our prints!</h3>

          <p>
            <a href="./Products">Shop Now</a>
          </p>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-item">
          <img
            src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Download-Studio-Ghibli-HD-Wallpapers-1.jpg"
            alt="Ghiblicontent"
            className="slideimg"
          />
          <h2>Custom Order</h2>
          <h3>Submit a custom print request!</h3>
          <p>
            <a href="./Contact">Get in Touch</a>
          </p>
          <br />
        </div>
        <br />
      </div>

      <audio controls autoPlay loop>
        <source src="audio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Home;
