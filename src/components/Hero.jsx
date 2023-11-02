import React from 'react'
import heroBanner from "../images/hero-banner.png"
export default function Hero() {
  return (
      <section className="section hero" id="home" aria-label="home">
        <div className="container">

          <div className="hero-content">

            <p className="section-subtitle">Let's Make The Best Investment</p>

            <h1 className="h1 hero-title">Read More And Make Success The Result Of Perfection.</h1>

            <p className="section-text">
               Welcome to our book reading webpage, your gateway to a world of literary adventures. Immerse yourself in captivating stories, explore diverse genres.
            </p>

          </div>

          <div className="hero-banner has-before">
            <img src={heroBanner} width="431" height="596"
              alt="things i never said, a novel by claudia wilson" className="w-100" />

          </div>

        </div>
      </section>
  )
}
