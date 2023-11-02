import React from 'react'
import benefits1 from "../images/benefits1.svg"
import benefits2 from "../images/benefits2.svg"
import benefits3 from "../images/benefits3.svg"
import benefits4 from "../images/benefits4.svg"
import benefits5 from "../images/benefits5.svg"
import benefits6 from "../images/benefits6.svg"
 function Benefits() {
  return (
      <section className="section benefits" id="benefits" aria-label="benefits">
        <div className="container">

          <div className="grid-list">

            <li className="benefits-content">
              <h2 className="h2 section-title">What you'll achieve by reading book</h2>

              <p className="section-text">Embark your transformative journey, gaining invaluable insights, skills, and knowledge that will empower you to unlock your full potential.</p>
            </li>

            <li>
              <div className="benefits-card has-before has-after">

                <div className="card-icon">
                  <img src={benefits1} width="40" height="40" loading="lazy" alt="Experience" />
                </div>

                <h3 className="h3 card-title">Experience</h3>

                <p className="card-text">
                "By reading books, you'll gain a wealth of knowledge, broaden your horizons, and immerse yourself in diverse worlds and experiences"
                </p>

                <a href="#" className="btn-link">
                  <span className="span">Read more</span>

                  <ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div className="benefits-card has-before has-after">

                <div className="card-icon">
                  <img src={benefits2} width="40" height="40" loading="lazy" alt="Motivation" />
                </div>

                <h3 className="h3 card-title">Motivation</h3>

                <p className="card-text">
                "Reading books are wellspring. Within their pages, you'll find stories of resilience, triumph over adversity, and the spirit's indomitable nature"
                </p>

                <a href="#" className="btn-link">
                  <span className="span">Read more</span>

                  <ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div className="benefits-card has-before has-after">

                <div className="card-icon">
                  <img src={benefits3} width="40" height="40" loading="lazy" alt="Goals" />
                </div>

                <h3 className="h3 card-title">Goals</h3>

                <p className="card-text">
                "Reading books can help you achieve a multitude of goals. You can enhance your knowledge and expertise in various subjects"
                </p>

                <a href="#" className="btn-link">
                  <span className="span">Read more</span>

                  <ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div className="benefits-card has-before has-after">

                <div className="card-icon">
                  <img src={benefits4} width="40" height="40" loading="lazy" alt="Vision" />
                </div>

                <h3 className="h3 card-title">Vision</h3>

                <p className="card-text">
                "Reading books can help you shape a vision of the world. It enables you to gain insights into different cultures, perspectives, and ideas"
                </p>

                <a href="#" className="btn-link">
                  <span className="span">Read more</span>

                  <ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div className="benefits-card has-before has-after">

                <div className="card-icon">
                  <img src={benefits5} width="40" height="40" loading="lazy" alt="Mission" />
                </div>

                <h3 className="h3 card-title">Mission</h3>

                <p className="card-text">
                  "Mission of reading books is to become a more informed, enlightened individual who contributes positively to the world"
                </p>

                <a href="#" className="btn-link">
                  <span className="span">Read more</span>

                  <ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div className="benefits-card has-before has-after">

                <div className="card-icon">
                  <img src={benefits6} width="40" height="40" loading="lazy" alt="Strategy" />
                </div>

                <h3 className="h3 card-title">Strategy</h3>

                <p className="card-text">
                  "Reading books is a strategic investment in personal and intellectual growth. It's a deliberate choice to acquire knowledge"
                </p>

                <a href="#" className="btn-link">
                  <span className="span">Read more</span>

                  <ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
                </a>

              </div>
            </li>

          </div>

        </div>
      </section>
  )
}

export default Benefits