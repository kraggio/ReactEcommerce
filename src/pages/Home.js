import React, { useState } from "react";
import "../styles/home.css";

function Home() {
  const images = [
    "https://lh3.googleusercontent.com/KvHfCduhDa66hUMHGaHWnyx2tbRpBfd3h_EBHVmONJPUCyO9Ex7Svqpx_uajrbDKf6DviN6S0joiL4alyyyXXtdwa2kOVblg5Kx0Vh_K",
    "https://lh3.googleusercontent.com/zKVqbR2M5th1-0kB61I18sFCMezxV-VbqvCba4nQ2Lu_iMBUj5z7oz5YkD6j3JWFxkkjXpOazwV2ov8Q0gL1gIjp_lQ-HehJ8bATf-I",
    "https://lh3.googleusercontent.com/4iJd2PNnKYaRyA9WHjFVxGvzRqD-RW6gjLhgW4eEllS1fXrogzFaKR_XqvpTTsNu_Z98L_4tpNzCpaaAUb9gTQlgb_rKFvPYLz7mM0Bu",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  function handlePrevClick() {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  }

  function handleNextClick() {
    setCurrentImage((currentImage + 1) % images.length);
  }

  return (
    <div className="container">
      <h1>StudioPrints</h1>
      <img src={images[currentImage]} className="hero-image" alt="homemain" />
      <button className="slider-btn slider-btn-left" onClick={handlePrevClick}>
        &#8249;
      </button>
      <button className="slider-btn slider-btn-right" onClick={handleNextClick}>
        &#8250;
      </button>
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
            src="https://lh3.googleusercontent.com/zKVqbR2M5th1-0kB61I18sFCMezxV-VbqvCba4nQ2Lu_iMBUj5z7oz5YkD6j3JWFxkkjXpOazwV2ov8Q0gL1gIjp_lQ-HehJ8bATf-I"
            alt="Ghiblicontent"
          />
          <h2>Interested?</h2>
          <h3>Take a look at the rest of our prints!</h3>
          <br />
          <p>
            <a href="./Products">Shop Now</a>
          </p>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-item">
          <img
            src="https://lh3.googleusercontent.com/4iJd2PNnKYaRyA9WHjFVxGvzRqD-RW6gjLhgW4eEllS1fXrogzFaKR_XqvpTTsNu_Z98L_4tpNzCpaaAUb9gTQlgb_rKFvPYLz7mM0Bu"
            alt="Ghiblicontent"
          />
          <h2>Custom Order</h2>
          <h3>Submit a custom print request!</h3>
          <p>
            <a href="./Contact">Get in Touch</a>
          </p>
        </div>
      </div>

      <audio controls autoPlay loop>
        <source src="audio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Home;
