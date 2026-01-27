import React from "react";

const Join = (props) => {
  return (
    <section id="join" className="section">
      <div className="section__inner">
        <h3>Joining</h3>
        <p>
          Checkout our <a href="#clanRules">Clan rules</a> for your basic
          requirements and how we operate.
          <br />
          Then simply talk to a member of command on <br />
          <a
            href="https://discord.gg/sAjVrD3fS2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
          &nbsp;or&nbsp;
          <a
            href="ts3server://ts3.iron-fists.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            TeamSpeak.
          </a>
          <br />
          And we will take you through everything you need to know.
        </p>
      </div>
    </section>
  );
};

export default Join;
