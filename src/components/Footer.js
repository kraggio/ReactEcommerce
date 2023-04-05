import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png?20140103173026"
          alt="facebook logo"
          className="media"
        />
      </a>

      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png"
          alt="tiktok logo"
          className="media"
        />
      </a>

      <a
        href="https://www.pinterest.com/search/pins/?q=studio%20ghibli%20art&rs=typed"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png?20160129083321"
          alt="twitter logo"
          className="media"
        />
      </a>

      {/* <a href="https://twitter.com/" target="_blank" rel="noreferrer">
        <img
          src="https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Twitter-logo-transparent-PNG.png"
          alt="instagram logo"
          className="media"
        />
      </a> */}
    </footer>
  );
}

export default Footer;
