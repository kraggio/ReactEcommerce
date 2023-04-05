import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <img
          src="Images/facebooklogo.png"
          alt="facebook logo"
          className="media"
        />
      </a>

      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <img
          src="Images/instagramlogo5.png"
          alt="tiktok logo"
          className="media"
        />
      </a>

      <a href="https://www.tiktok.com/en/" target="_blank" rel="noreferrer">
        <img src="Images/tiktok.png" alt="twitter logo" className="media" />
      </a>

      <a href="https://twitter.com/" target="_blank" rel="noreferrer">
        <img
          src="Images/twitterlogo2.png"
          alt="instagram logo"
          className="media"
        />
      </a>
    </footer>
  );
}

export default Footer;
