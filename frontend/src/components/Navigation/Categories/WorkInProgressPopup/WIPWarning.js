import React from 'react';
import './WIPModal.css';

const WIPWarning = () => {

  return (
    <div id='WIPModal'>
      <h1 id='WIP-title'>W.I.P</h1>
      <h2 id='WIP-subtitle'>Please select a different category</h2>

      <p id='WIP-rant'>
        Hello! If you are reading this that means you have selected a category that has no spots!
        this is because I have just recently added the category filter to my site. Seed data takes
        quite some time to create and I would love it if you could overlook this minor defect for
        the time being. Thank you for reading my ramble. P.S. If you
        love <span id='RE'>R</span>esident <span id='RE'>E</span>vil, I just
        want to say I am currently playing through them all in order and <span id='RE'>R</span><span id='RE'>E</span>
        4 Remake is fantastic.
      </p>
    </div>
  );
};

export default WIPWarning;
