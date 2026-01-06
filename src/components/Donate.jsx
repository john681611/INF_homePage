import React from "react";

const Donate = (props) => {
  return (
    <section id="donate" className="section">
      <div className="section__inner">
        <h2>Donate</h2>
        <p>
          We run on the generous donations of our members and other interested
          parties, without them none of this would be possible.
        </p>
        <a
          className="btn"
          href="https://iron-fists.co.uk/forums/app.php/donate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate
        </a>
      </div>
    </section>
  );
};

export default Donate;
