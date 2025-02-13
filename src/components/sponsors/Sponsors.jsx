import React from 'react';
import one from '../prize_section/images/1.png';
import two from '../prize_section/images/2.png';
import three from '../prize_section/images/3.png';
import four from '../prize_section/images/4.png';
import five from '../prize_section/images/5.jpg';
import six from '../prize_section/images/6.png';
import sev from '../prize_section/images/7.png';
import eight from '../prize_section/images/8.png';
import nine from '../prize_section/images/9.png';
import ten from '../prize_section/images/10.jpg';
import elev from '../prize_section/images/11.png';
import Replit from "../prize_section/images/Replit.jpg"
import Solana from "../prize_section/images/Solana.png"
import "./sponsors.css";

// const sponsorsData = [one, two, three, four, five, six, sev, eight, nine, ten, elev];
//alt tag
const sponsorsData =  [
  { src: two, alt: "DEVFOLIO LOGO" },
  { src: four, alt: "FILECOIN LOGO" },
  { src: eight, alt: "POLYGON LOGO" },
  { src: Replit, alt: "REPLIT LOGO" },
  { src: Solana, alt: "SOLANA LOGO" },
];


const Sponsors = () => {
  return (
    <>
      <section className="sponsors">
      <div className="heading">
        <h2>
          {" "}
          <div class="container">
            <p class="glitch">
              <span aria-hidden="true">Sponsors</span>
              Sponsors
              <span aria-hidden="true">Sponsors</span>
            </p>
          </div>
        </h2>
      </div>
        {/* <p>Coming soon</p> */}
        <div className="icons-container">
          {sponsorsData.map((sponsor, index) => (
            <div
            key={index}
            className="icon"
            style={{ backgroundImage: `url(${sponsor.src})` }}
            alt={sponsor.alt}
          ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Sponsors;