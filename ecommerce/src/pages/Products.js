import React, { useState } from "react";
import "../styles/products.css";

function Products() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div className="container">
      <h1>StudioPrints</h1>
      <p>
        Hello! All prints currently come in 18x24 unless custom ordered. Price
        will be adjusted as needed!
      </p>
      <section>
        <ul className="product-grid">
          <li className="product-item">
            <img src="Images/StudioGProduct1.jpeg" alt="StudioG1" />
            <h3>Susuwatari Trouble</h3>
            <p>These little dust mites are always up to something</p>
            <p className="product-price">$25.00</p>
            <button
              onClick={() => addToCart("Susuwatari Trouble")}
              className="product-button"
            >
              Add to Cart
            </button>
          </li>

          <li className="product-item">
            <img src="Images/StudioGProduct2.jpeg" alt="StudioG2" />
            <h3>Howl & Sophie</h3>
            <p>A love like no other</p>
            <p className="product-price">$50.00</p>
            <button
              onClick={() => addToCart("Howl & Sophie")}
              className="product-button"
            >
              Add to Cart
            </button>
          </li>

          <li className="product-item">
            <img src="Images/SudioGProduct3.jpeg" alt="StudioG3" />
            <h3>In the Water!</h3>
            <p>Ponyo's on an adventure at sea</p>
            <p className="product-price">$35.00</p>
            <button
              onClick={() => addToCart("In the Water!")}
              className="product-button"
            >
              Add to Cart
            </button>
          </li>

          <li className="product-item">
            <img src="Images/StudioGProduct4.jpeg" alt="StudioG4" />
            <h3>Peace in the Sky</h3>
            <p>Haku taking Chihiro for a ride</p>
            <p className="product-price">$45.00</p>
            <button
              onClick={() => addToCart("Peace in the Sky")}
              className="product-button"
            >
              Add to Cart
            </button>
          </li>

          <li className="product-item">
            <img src="Images/StudioGProduct5.jpeg" alt="StudioG5" />
            <h3>Soul Cake</h3>
            <p>Well earned after a day at the bath house</p>
            <p className="product-price">$20.00</p>
            <button
              onClick={() => addToCart("Soul Cake")}
              className="product-button"
            >
              Add to Cart
            </button>
          </li>

          <li className="product-item">
            <img src="Images/SudioGProduct6.jpeg" alt="StudioG6" />
            <h3>He Says he's Good Luck</h3>
            <p>Not all black cats are bad</p>
            <p className="product-price">$15.00</p>
            <button
              onClick={() => addToCart("He Says he's Good Luck")}
              className="product-button"
            >
              Add to Cart
            </button>
          </li>

          <li className="product-item">
            <img src="Images/StudioGProduct7.jpeg" alt="StudioG7" />
            <h3>Better Days</h3>
            <p>We hope Howl gets better soon</p>
            <p className="product-price">$30.00</p>
            <button
              onClick={() => addToCart("Better Days")}
              className="product-button"
            >
              Add to Cart
            </button>
          </li>

          <li class="product-item">
            <img src="Images/StudioGProduct8.jpeg" alt="StudioG8" />
            <h3>The Kodama</h3>
            <p>Don't worry, they're just looking out for the forest</p>
            <p class="product-price">$15.00</p>
            <button
              onClick={() => addToCart("The Kodoma")}
              className="product-button"
            >
              Add to Cart
            </button>
          </li>

          <li class="product-item">
            <img src="Images/StudioGProduct9.jpeg" alt="StudioG9" />
            <h3>Howl's Trouble</h3>
            <p>Sophie hopes for Howl's return amidst the chaos</p>
            <p class="product-price">$35.00</p>
            <button
              onClick={() => addToCart("Howl's Trouble")}
              className="product-button"
            >
              Add to Cart
            </button>
          </li>

          <li class="product-item">
            <img src="Images/StudioGProduct10.jpeg" alt="StudioG10" />
            <h3>The Light Within</h3>
            <p>Howl just needed to look within</p>
            <p class="product-price">$40.00</p>
            <button
              onClick={() => addToCart("The Light Within")}
              className="product-button"
            >
              Add to Cart
            </button>
          </li>

          <li class="product-item">
            <img src="Images/StudioGProduct11.jpeg" alt="StudioG11" />
            <h3>Safe Travels, Friend</h3>
            <p>Woah! I wonder who's in there</p>
            <p class="product-price">$45.00</p>
            <button
              onClick={() => addToCart("Safe Travels, Friend")}
              className="product-button"
            >
              Add to Cart
            </button>
          </li>

          <li class="product-item">
            <img src="Images/StudioGProduct12.jpeg" alt="StudioG12" />
            <h3>One With the Pack</h3>
            <p>A true princess</p>
            <p class="product-price">$15.00</p>
            <button
              onClick={() => addToCart("One With the Pack")}
              className="product-button"
            >
              Add to Cart
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Products;
